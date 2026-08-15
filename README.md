# anibalrojas.com

Personal professional site for **Aníbal Rojas** — AI-adoption advisory, fractional VP of Engineering, executive coaching. Astro 5, static output, EN default at `/`, ES at `/es/`.

**Source of truth:** `HANDOFF-anibalrojas-site.md` (strategy, design system, budgets, acceptance criteria). Approved design direction: `reference/homepage-mockup.html`.

## Setup

```sh
npm ci
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # serve the built site
```

## Publish a post

1. Add one `.md` file to `src/content/posts/` with frontmatter:
   `title, description, date, lang ("en"|"es"), tags[]` (+ optional `series`, `seriesOrder`, `translationOf`, `draft`, `heroImage`, `canonicalUrl`).
2. Push. That's it — schema-validated at build; `draft: true` posts never render.

## Deploy

Cloudflare (Workers static assets), auto-deploy from `main`; PRs get preview deploys.
**Live preview: https://website.anibalrojas.workers.dev/** (EN at `/`, ES at `/es/`).
Build: `npm run build`, output `dist/`.
CI (`.github/workflows/ci.yml`) runs build + Lighthouse CI assertions on every PR (100/100/100/100, LCP<1.5s, CLS=0, TBT<50ms).

## Structure

```
src/styles/tokens.css   the design system — every value traces here (handoff §3)
src/styles/fonts.css    self-hosted woff2 (Fraunces variable, Plex Sans/Mono; latin + latin-ext)
src/i18n/               UI strings (ui.ts) + locale routing helpers (utils.ts)
src/layouts/Base.astro  head/SEO/hreflang/JSON-LD + header/footer shell
src/components/         Header, Footer, HomePage (shared per-locale template)
src/pages/              routes; ES mirrors EN under /es/
src/content/            posts + testimonials collections (zod schemas in content.config.ts)
reference/              approved mockup + copy docs (never shipped)
scripts/                build-font-overrides.mjs (font metrics), shoot.mjs (design-QA screenshots → shots/)
```

## Conventions

- Vanilla CSS with tokens only — no Tailwind, no ad-hoc px values outside the scales.
- Motion vocabulary: amber underline draw-in (120ms), ≤2px card lift, CTA darken; durations only from {120, 240, 480, 900}ms; `prefers-reduced-motion` honored globally.
- Fonts are self-hosted (source: `@fontsource*` devDependencies, files copied into `public/fonts/`). Never add a Google Fonts request.
- Font loading: `font-display: optional` + metric-matched local fallbacks (`src/styles/font-overrides.css`, regenerate with `npm run fonts:overrides`) + preload of the three critical latin faces. This is what makes CLS = 0 and the LCP gate physically attainable; do not change to `swap` without re-measuring (see brain: `font-loading-strategy`).
- CSS is fully inlined into each page (`build.inlineStylesheets: 'always'`) — it stays tiny (~13KB); there is no render-blocking request.
- Lighthouse CI runs with `throttlingMethod: 'devtools'` (real throttling, observed timing) — Lantern simulation's floor on this design is ~1.5s LCP even with zero fonts/JS, so the handoff gates are only meaningful under observed timing (see brain: `lhci-devtools-throttling`).
- JS budget: ≤30KB total on the homepage, 0KB on blog posts. Islands only with explicit justification.

## Pending decisions (reserved for Aníbal — see handoff §10)

Final domain (`site` in `astro.config.mjs` + `public/robots.txt`), public repo or not, portrait, testimonials, service-page copy sign-off, Bottleneck interactive vs static, and the real contact URLs (Calendly, email, LinkedIn, Substack — currently `#` placeholders in `Footer.astro`).
