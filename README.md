# Ecofriendly Cleaning — website

Responsive one-page website built with the **e-learning-site** skill (homepage blueprint,
design system and starter), adapted to a cleaning company.

- Site: `ecofriendly-cleaning/` (plain HTML/CSS/JS, no build step)
- Brand colors and fonts: `:root` tokens at the top of `ecofriendly-cleaning/styles.css`
- Repeating content lives in `ecofriendly-cleaning/data/`:
  - `services.json` — service cards (title, plans, description, image, filter tags)
  - `spaces.json` — "What we clean" tiles (service counts are computed automatically)
  - `flyers.json` — room-by-room flyers
  - `reviews.json` — customer reviews (**sample placeholders — replace before publishing**)
  - `faq.json` — questions and answers
- Images: `ecofriendly-cleaning/img/`

## Run locally

The data files are loaded with `fetch()`, so open the site over HTTP, not `file://`:

```bash
node .claude/serve-ecofriendly-cleaning.mjs   # → http://localhost:4385
```

To host it, upload the contents of `ecofriendly-cleaning/` to any static host (GitHub Pages, Netlify, Hostinger, …).

Stock photos: Unsplash (Unsplash License). Logo and flyers: Ecofriendly Cleaning.
