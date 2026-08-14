---
slug: roadmap
title: Roadmap
role: milestones
updated: "2026-08-08T00:56:43"
---

# Roadmap

## Status

**Session 1 (Scaffold & system) — DONE (2026-08-08).** Astro 5 static scaffold on the real design system: tokens/fonts/global CSS, self-hosted fonts with metric-matched fallbacks, Base layout (SEO/hreflang/JSON-LD Person) + Header (wordmark, locale switcher, CTA) + Footer (colophon), i18n routing with `/` + `/es/` hero+thesis, posts/testimonials zod schemas, GitHub Actions CI with Lighthouse assertions **green on both locales** (100/100/100/100, LCP 848ms, CLS 0, TBT 0 — [[font-loading-strategy]], [[lhci-devtools-throttling]]). Deploy pipeline is repo-ready (Astro preset, `dist/`) but the Cloudflare Pages project itself still needs to be connected in the dashboard by Aníbal.

**Blocker for Session 2:** `reference/homepage-copy-anibal-rojas.md` (approved bilingual copy v2) is missing from the repo — the homepage must follow it exactly.

## Milestones (suggested order)

1. ~~**Scaffold & system**~~ — done (see Status).
2. **Homepage** — both locales, full motion system, static version of the signature diagram. Needs the v2 copy doc + real portrait.
3. **Signature element** — the interactive Bottleneck as an island; honest self-critique; keep it or fall back to the static SVG ([[signature-element-bottleneck]]).
4. **Templates** — service pages ×3, blog index + post layout, RSS per locale, Principles landing. Remember: localized-slug equivalence map for the locale switcher (`/es/servicios/…`).
5. **Content & polish** — About, Contact (Calendly click-to-load), OG generation (satori), JSON-LD Article/ProfessionalService, Plausible (deferred, only third-party request), testimonials in, design QA pass (§9), launch checklist.
6. **Phase 2 (optional)** — `/now/` page; dark mode becomes possible ([[no-dark-mode-v1]]).

## Launch gates (handoff acceptance criteria)

- Lighthouse mobile/throttled **100/100/100/100** on homepage + a representative post; LCP < 1.5s, CLS = 0, TBT < 50ms ([[performance-as-design-feature]]) — enforced in CI via [[lhci-devtools-throttling]].
- WCAG 2.2 AA: keyboard nav with visible amber focus, skip-link, landmarks, verified contrast pairs, reduced-motion honored globally, signature element keyboard-operable with an `aria-live` caption.
- Design QA screenshots at 360/768/1440 in **both locales**: no Spanish overflow, hand-checked headline wraps, every gap traceable to the spacing scale, the Chanel pass documented in the PR (name the removed accessory), and the tell test against three templated AI-consultant sites.
- Content gates: real portrait, ≥3 real testimonials or the section is omitted ([[testimonials-real-or-omitted]]), all links live (Footer currently has `#` placeholders for email/LinkedIn/Substack + the Book-CTA needs the Calendly URL), Calendly working, both locales proofread by Aníbal.

## Open decisions reserved for Aníbal (ask, don't assume)

- Final domain (working name: anibalrojas.com — wired into `astro.config.mjs` + `public/robots.txt`, one-line change each).
- Whether the repo goes public (the colophon links it if so).
- Portrait choice; testimonial selection and order; service-page copy sign-off.
- Whether the Bottleneck ships interactive or static.
- Ratify two session-1 deviations: `font-display: optional` instead of `swap`, and Lighthouse CI on devtools throttling instead of Lantern simulation (both required by his own gates; evidence in [[font-loading-strategy]] / [[lhci-devtools-throttling]]).
