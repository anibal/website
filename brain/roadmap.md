---
slug: roadmap
title: Roadmap
role: milestones
updated: "2026-08-15T08:09:05"
---

# Roadmap

## Status

**Session 3 (The Bottleneck) — built, then REMOVED at Aníbal's call (2026-08-15).** Shipped interactive, passed all gates; after playing with it live, Aníbal decided not to keep it — neither interactive nor static SVG (archived: [[signature-element-bottleneck]]). The thesis section is text-only; the homepage has no signature element, and prize-worthiness now rests fully on editorial craft + performance ([[performance-as-design-feature]]). Code preserved in git history.

**Session 2 (Homepage) — DONE (2026-08-14), deployed.** Both locales complete per the approved v2 copy doc: hero, thesis, whoami (dignified portrait placeholder, fixed dims — real photo still reserved), proof ×4, services 01/02/03, testimonials OMITTED per rule (zero real quotes), ideas ×2, footer CTA. Motion system live: CSS-only load sequence (720ms ≤ 900 budget), IntersectionObserver scroll reveals (~0.7KB inline, the site's first JS, progressive enhancement). Session-1 debts paid: real footer links + JSON-LD sameAs, CTAs → mailto (Calendly TODOs left), tokens audited (no raw hex/px), head minors, sitemap hreflang. Gates green 6/6 runs: 100×4, LCP=FCP ~780–820ms, CLS 0, TBT 0. Design QA done at 360/768/1440 both locales (`node scripts/shoot.mjs` — reduced-motion emulated for deterministic captures). Chanel pass: Ideas cards ship without the v1 mockup's per-card descriptions/arrows — v2 copy carries the section quieter.

**Deploy:** push to `main` auto-deploys to https://website.anibalrojas.workers.dev/ (Cloudflare Workers static assets).

## Milestones (suggested order)

1. ~~**Scaffold & system**~~ — done.
2. ~~**Homepage**~~ — done (copy-doc blocker resolved by Aníbal; v2 used verbatim).
3. ~~**Signature element**~~ — built and removed (Aníbal's decision, see Status). Nothing carries over to session 4.
4. **Templates** — service pages ×3, blog index + post layout, RSS per locale, Principles landing. Remember: localized-slug equivalence map for the locale switcher (`/es/servicios/…`); wire the Ideas writing card + services row titles as links.
5. **Content & polish** — About, Contact (Calendly click-to-load → replaces mailto TODOs), OG generation (satori), JSON-LD Article/ProfessionalService, Plausible (deferred, only third-party request), testimonials in, launch checklist.
6. **Phase 2 (optional)** — `/now/` page; dark mode becomes possible ([[no-dark-mode-v1]]).

## Launch gates (handoff acceptance criteria)

- Lighthouse mobile/throttled **100/100/100/100** on homepage + a representative post; LCP < 1.5s, CLS = 0, TBT < 50ms ([[performance-as-design-feature]]) — enforced in CI via [[lhci-devtools-throttling]].
- WCAG 2.2 AA: keyboard nav with visible amber focus, skip-link, landmarks, verified contrast pairs, reduced-motion honored globally, signature element keyboard-operable with an `aria-live` caption.
- Design QA screenshots at 360/768/1440 in **both locales** (script: `scripts/shoot.mjs`): no Spanish overflow, hand-checked headline wraps, every gap traceable to the spacing scale, the Chanel pass documented in the PR, and the tell test against three templated AI-consultant sites.
- Content gates: real portrait, ≥3 real testimonials or the section is omitted ([[testimonials-real-or-omitted]]), all links live, Calendly working, both locales proofread by Aníbal.

## Open decisions reserved for Aníbal (ask, don't assume)

- Final domain (working name: anibalrojas.com — wired into `astro.config.mjs` + `public/robots.txt`).
- Whether the repo goes public (the colophon links it if so).
- Portrait choice; testimonial selection and order; service-page copy sign-off.
- Calendly (CTAs are mailto meanwhile). The Bottleneck decision is settled: removed.
- Ratify: `font-display: optional` ([[font-loading-strategy]]), devtools-throttled LHCI ([[lhci-devtools-throttling]]), LCP-element motion rule ([[lcp-element-motion-constraint]]).
