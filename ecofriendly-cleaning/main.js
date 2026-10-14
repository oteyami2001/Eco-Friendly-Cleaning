// Ecofriendly Cleaning — renders data/*.json into the homepage.
// Serve over HTTP (e.g. `npx serve .`), fetch() does not work from file://.

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const load = async name => {
  try { const r = await fetch(`data/${name}.json`); return r.ok ? r.json() : []; }
  catch { return []; }
};

// Outline icons (Lucide-style, 24px, 1.75 stroke)
const svg = d => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONS = {
  home: svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>'),
  apartment: svg('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M11 21v-3h2v3"/>'),
  kitchen: svg('<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10"/><path d="M17 21V3c-2 1-3 3.5-3 7h3"/>'),
  bath: svg('<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3Z"/><path d="M6 12V5a2 2 0 0 1 3.5-1.3"/><path d="M7 20l-1 2M17 20l1 2"/>'),
  briefcase: svg('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'),
  building: svg('<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M3 21h18"/>'),
  landmark: svg('<path d="M3 21h18M4 10h16M12 3l9 5H3l9-5Z"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/>'),
  box: svg('<path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5M12 13v8"/>')
};

const serviceCard = s => `<article class="card" data-tags="${esc(s.tags.join(" "))}" data-space="${esc(s.space)}" data-text="${esc((s.title + " " + s.outcome + " " + s.tags.join(" ")).toLowerCase())}">
    <img src="${esc(s.image)}" alt="" loading="lazy" width="640" height="360">
    <div class="card__body">
      <div class="card__badges">${s.tags.map(t => `<span class="badge">${esc({ residential: "Residential", commercial: "Commercial", deep: "Deep clean" }[t] || t)}</span>`).join("")}</div>
      <h3><a href="#quote">${esc(s.title)}</a></h3>
      <p class="card__diploma">${esc(s.plans)}</p>
      <p>${esc(s.outcome)}</p>
      <p class="card__meta">${esc(s.note)}</p>
      <span class="card__more" aria-hidden="true">Get a free quote →</span>
    </div>
  </article>`;

async function init() {
  const [services, spaces, flyers, reviews, faq] = await Promise.all(
    ["services", "spaces", "flyers", "reviews", "faq"].map(load)
  );

  // Spaces (service count computed from services.json)
  const withCount = spaces.map(d => ({ ...d, count: services.filter(s => s.space === d.id).length }));
  const countLabel = n => n ? `${n} service${n > 1 ? "s" : ""}` : "Custom quote";
  $("#spacesGrid").innerHTML = withCount.map(d => `
    <a class="domain" href="#services" data-space="${esc(d.id)}">
      <span class="domain__icon">${ICONS[d.icon] || ""}</span>
      <strong>${esc(d.label)}</strong><small>${countLabel(d.count)}</small>
    </a>`).join("");
  $("#megaSpaces").innerHTML = withCount.map(d =>
    `<a href="#services" data-space="${esc(d.id)}">${esc(d.label)}<small>${countLabel(d.count)}</small></a>`).join("");

  // Services + filters (chips, search, space tiles)
  const grid = $("#servicesGrid"), results = $("#results");
  grid.innerHTML = services.map(serviceCard).join("");
  const apply = ({ tag = "all", space = "", query = "" } = {}) => {
    const q = query.trim().toLowerCase();
    let shown = 0;
    $$(".card", grid).forEach(card => {
      const ok = (tag === "all" || card.dataset.tags.split(" ").includes(tag))
        && (!space || card.dataset.space === space)
        && (!q || q.split(/\s+/).some(w => card.dataset.text.includes(w)));
      card.hidden = !ok; if (ok) shown++;
    });
    $$(".chip--filter").forEach(b => b.setAttribute("aria-pressed", String(!space && !q && b.dataset.filter === tag)));
    results.innerHTML = space || q
      ? `${shown ? `${shown} matching service${shown > 1 ? "s" : ""}` : "No exact match — we also do custom cleaning, just ask for a quote"}. <button class="linkish" type="button" id="reset">Show all</button>`
      : "";
    $("#reset")?.addEventListener("click", () => apply());
  };
  $$(".chip--filter").forEach(btn => btn.addEventListener("click", () => apply({ tag: btn.dataset.filter })));
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-space]");
    if (a && a.tagName === "A") { apply({ space: a.dataset.space }); closeMenus(); }
  });
  const search = q => { apply({ query: q }); $("#services").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); };
  $("#search").addEventListener("submit", e => { e.preventDefault(); search($("#q").value); });
  $$(".chips .chip").forEach(c => c.addEventListener("click", () => { $("#q").value = c.textContent; search(c.dataset.q); }));

  // Reviews
  $("#reviews").innerHTML = reviews.map(t => `
    <figure class="tcard">
      <div class="tcard__who">
        <span class="avatar" aria-hidden="true">${esc(t.client.charAt(0))}</span>
        <div><strong>${esc(t.name)}</strong><p class="tcard__job">${esc(t.client)} · ${esc(t.service)}</p></div>
      </div>
      <span class="stars" aria-label="${t.rating} out of 5">${"★".repeat(t.rating)}</span>
      <blockquote><p>${esc(t.quote)}</p></blockquote>
    </figure>`).join("");

  // Flyers + lightbox
  $("#flyersGrid").innerHTML = flyers.map(f => `
    <article class="card card--flyer">
      <img src="${esc(f.thumb)}" alt="" loading="lazy" width="480" height="720">
      <div class="card__body">
        <h3><a href="${esc(f.full)}" data-full="${esc(f.full)}">${esc(f.title)}</a></h3>
        <p class="card__meta">${esc(f.meta)}</p>
      </div>
    </article>`).join("");
  const box = $("#lightbox"), boxImg = $("#lightboxImg");
  $("#flyersGrid").addEventListener("click", e => {
    const a = e.target.closest("[data-full]");
    if (!a || typeof box.showModal !== "function") return;
    e.preventDefault();
    boxImg.src = a.dataset.full; boxImg.alt = a.textContent + " flyer";
    box.showModal();
  });
  box.addEventListener("click", e => { if (e.target === box) box.close(); });

  // FAQ (one open at a time via name attribute)
  $("#faq").innerHTML = faq.map((f, i) => `
    <details name="faq"${i === 0 ? " open" : ""}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
}

// Header: scroll shadow, mobile drawer, mega-menu
const header = $("#header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

const burger = $("#burger"), nav = $("#nav");
const setDrawer = open => {
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  nav.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
};
burger.addEventListener("click", () => setDrawer(burger.getAttribute("aria-expanded") !== "true"));

const megaBtn = $(".has-menu > .nav__link"), mega = $("#mega");
const setMega = open => { megaBtn.setAttribute("aria-expanded", String(open)); mega.hidden = !open; };
const closeMenus = () => { setMega(false); setDrawer(false); };
megaBtn.addEventListener("click", () => setMega(mega.hidden));
document.addEventListener("keydown", e => { if (e.key === "Escape" && !mega.hidden) { setMega(false); megaBtn.focus(); } });
document.addEventListener("click", e => { if (!e.target.closest(".has-menu")) setMega(false); });
nav.addEventListener("click", e => { if (e.target.closest("a[href^='#']")) closeMenus(); });

// Announcement bar (dismiss remembered)
const announce = $("#announce");
try { if (localStorage.getItem("hiring-announce-dismissed")) announce.remove(); } catch {}
$(".announce__close")?.addEventListener("click", () => {
  announce.remove();
  try { localStorage.setItem("hiring-announce-dismissed", "1"); } catch {}
});

// Reveal on scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
}), { threshold: .15 });
$$(".reveal").forEach(el => io.observe(el));

$("#year").textContent = new Date().getFullYear();
init();
