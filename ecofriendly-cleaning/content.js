/* ═══════════════════════════════════════════════════════════
   ECOFRIENDLY CLEANING — content.js
   Built on the « Site Immersif » template. This is the ONLY file
   to edit for text and images. The « INJECTION » block at the
   bottom of the file is the fill engine: never modify it.

   Narrative (conversion role of each block):
   1. HOOK           — hook: promise + identity in 3 seconds
   2. POSITIONING    — positioning: what we do, for whom, where
   3. APPROACH       — manifesto: why us
   4. PROOF          — proof: the spaces we clean (masonry, 8 photos)
   5. MOTTO          — motto: 3 giant keywords + captions
   6-7. PROCESS      — universes: « One visit, 3 steps. »
   8. SOCIAL PROOF   — testimonial: a client speaks
   9. OBJECTIONS     — objections: « No… Just… »
   10. CONVERSION    — contact: e-mail + phone + reassurance
   All images live in images/ (relative paths, nothing hotlinked).
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'Ecofriendly',
    title: 'Ecofriendly Cleaning — Eco-Friendly Cleaning Services in Maryland, Virginia & Washington, D.C.',
    description: 'Eco-friendly residential, commercial and government cleaning with biodegradable, organic products — serving Maryland, Frederick, Virginia and Washington, D.C. Call 801-843-0071.',
    kicker: 'ECOFRIENDLY CLEANING — MARYLAND · FREDERICK · VIRGINIA · D.C.',
    copyright: '© 2026 — 10770 COLUMBIA PIKE, SUITE 300, SILVER SPRING, MD 20901',
    signature: 'CLEAN NATURALLY. LIVE HEALTHIER.',
    socials: [
      { label: 'CALL 801-843-0071 ↗', url: 'tel:+18018430071' },
      { label: 'DIRECTIONS ↗', url: 'https://www.google.com/maps/search/?api=1&query=10770+Columbia+Pike+Suite+300+Silver+Spring+MD+20901' },
      { label: 'ECOFRIENDLY.COM ↗', url: 'https://www.ecofriendly.com' }
    ]
  },

  /* 2 header anchors + CTA — one word each, CAPS */
  nav: { proof: 'SERVICES', universes: 'PROCESS', cta: 'FREE QUOTE' },

  /* 1 · HOOK — « line1 / line2a [image grows to full screen] line2b » */
  hook: {
    line1: 'Spotless spaces,',
    line2a: 'cleaned the',
    line2b: 'natural way.',
    image: 'images/hero.jpg',
    imageAlt: 'A bright, freshly cleaned living room with plants and natural light',
    floaters: [
      'images/fl-1.jpg',   // bright living room
      'images/fl-2.jpg',   // gloved hand wiping a counter
      'images/fl-3.jpg',   // calm white living room
      'images/fl-4.jpg',   // Ecofriendly Cleaning logo
      'images/fl-5.jpg',   // white kitchen
      'images/fl-6.jpg',   // natural cleaning bottles
      'images/fl-7.jpg',   // plant care and spray bottle
      'images/fl-8.jpg',   // Ecofriendly kitchen-cleaning flyer
      'images/fl-9.jpg',   // stone sink, bathroom
      'images/fl-10.jpg'   // lemon-based cleaner
    ]
  },

  /* 2 · POSITIONING — ≤ 42 characters */
  positioning: 'Green cleaning for homes & offices — DMV.',

  /* 3 · APPROACH — [[…]] = 2-3 words circled by hand */
  manifesto: {
    text: 'We clean homes, offices, banks and government buildings with [[organic products]] only. Fewer harsh chemicals, no toxic residue — just healthier air for the people and pets who live and work there.'
  },

  /* 4 · PROOF — masonry: exactly 8 items */
  proof: {
    layout: 'masonry',
    kicker: 'WHAT WE CLEAN',
    title: 'Every space, cleaned green',
    sub: 'From family homes to bank lobbies, one eco-friendly standard everywhere we work.',
    meta: 'RESIDENTIAL — COMMERCIAL — GOVERNMENT',
    projects: [
      { img: 'images/work-homes.jpg', title: 'Homes & residences', meta: 'WEEKLY — BIWEEKLY — MONTHLY' },
      { img: 'images/work-kitchens.jpg', title: 'Kitchens', meta: 'GREASE — SURFACES — APPLIANCES' },
      { img: 'images/work-bathrooms.jpg', title: 'Bathrooms', meta: 'SOAP SCUM — DISINFECTION' },
      { img: 'images/work-apartments.jpg', title: 'Apartments & condos', meta: 'MOVE-IN — MOVE-OUT — DEEP CLEAN' },
      { img: 'images/work-products.jpg', title: 'Organic products', meta: 'BIODEGRADABLE — BIO-BASED' },
      { img: 'images/work-offices.jpg', title: 'Offices & businesses', meta: 'DAILY — WEEKLY — CONTRACT' },
      { img: 'images/work-commercial.jpg', title: 'Commercial buildings', meta: 'LOBBIES — HALLWAYS — COMMON AREAS' },
      { img: 'images/work-banks.jpg', title: 'Banks & government', meta: 'CUSTOM CONTRACT SERVICES' }
    ]
  },

  /* 5 · MOTTO — 3 words, one-line hint each */
  motto: {
    kicker: 'WHAT GUIDES EVERY CLEAN',
    words: [
      { word: 'Natural', hint: 'Biodegradable, bio-based and organic products, every visit.' },
      { word: 'Reliable', hint: 'Same trained team, on time, on the schedule you choose.' },
      { word: 'Spotless', hint: 'Attention to detail, from baseboards to high-touch surfaces.' }
    ]
  },

  /* 6-7 · PROCESS — « introA introB [visual] introC » then the steps */
  universes: {
    introA: 'One',
    introB: 'visit,',
    introC: '3 steps.',
    cta: 'Get a free quote →',
    image: 'images/process.jpg',
    items: [
      { name: 'Walkthrough', meta: 'STEP — 01', desc: 'We look at your space, its size and how often you need us, then send a clear price based on local market rates.' },
      { name: 'Green clean', meta: 'STEP — 02', desc: 'Our trained team cleans with biodegradable, organic products — one-time, weekly, biweekly, monthly or deep clean.' },
      { name: 'Final check', meta: 'STEP — 03', desc: 'We walk the space with you before we leave. If anything is missed, we make it right.' }
    ]
  },

  /* 8 · SOCIAL PROOF — PLACEHOLDER: replace with a real client review */
  testimonial: {
    kicker: 'WEEKLY HOME CLEANING — SILVER SPRING, MD',
    figure: '52',
    unit: 'wks',
    quote: 'With two kids and a dog, harsh sprays were never an option for us. The house smells clean instead of chemical, and the team has not missed a single week.',
    author: 'SARAH M. — HOMEOWNER'
  },

  /* 9 · OBJECTIONS — 3 objections + the finale (pill = circled words) */
  objections: {
    items: ['No harsh chemicals.', 'No toxic residue.', 'No surprises.'],
    finale: 'Just a space that’s',
    pill: 'truly clean.'
  },

  /* 10 · CONVERSION */
  contact: {
    kicker: 'READY FOR A CLEANER, HEALTHIER SPACE?',
    email: 'info@ecofriendly.com',
    reassurance: 'CALL 801-843-0071 — FREE QUOTE, NO COMMITMENT'
  },

  /* mouse trail (finale) — 20 small visuals */
  trail: [
    'images/trail-01.jpg', 'images/trail-02.jpg', 'images/trail-03.jpg', 'images/trail-04.jpg',
    'images/trail-17.jpg', 'images/trail-05.jpg', 'images/trail-06.jpg', 'images/trail-07.jpg',
    'images/trail-16.jpg', 'images/trail-08.jpg', 'images/trail-09.jpg', 'images/trail-18.jpg',
    'images/trail-10.jpg', 'images/trail-11.jpg', 'images/trail-12.jpg', 'images/trail-19.jpg',
    'images/trail-13.jpg', 'images/trail-14.jpg', 'images/trail-15.jpg', 'images/trail-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
