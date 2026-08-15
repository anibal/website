---
slug: roadmap
title: Roadmap
role: milestones
updated: "2026-08-15T10:15:41"
---

# Roadmap

## Status

**Session 4 (Templates) — DONE (2026-08-15), deployed.** Service pages ×3 both locales from one template (outcome headlines, who-for/how-it-runs/what-you-get, testimonial slot rendering nothing until real quotes, ProfessionalService JSON-LD); homepage ladder + ideas card now link. `/ideas/` index + post layout (66ch, amber-rule blockquotes, [[shiki-paper-theme]], translation cross-links, canonicalUrl support, Article JSON-LD, 0KB JS) + RSS per locale (`/rss.xml`, `/es/rss.xml`). `/principles/` landing as a typeset TOC of the 5-article series, linking the i.usedtocode.com originals ([[old-site-archive-no-migration]]). Locale switcher now on an explicit route map ([[locale-switcher-route-map]]); drafts render in dev only ([[drafts-render-in-dev-only]]). Gates green 8/8 URLs (100×4, LCP 752–791ms, CLS 0, TBT 0) — **the representative-post URLs are a `TODO(first-post)` in `lighthouserc.cjs`, deferred per Aníbal** until ≥1 real post per locale exists. Chanel pass: the /ideas/ empty-state line was cut — the archive link alone does the work.

**Session 3 (The Bottleneck) — built, then REMOVED at Aníbal's call (2026-08-15).** Shipped interactive, passed all gates; after playing with it live, Aníbal decided not to keep it — neither interactive nor static SVG (archived: [[signature-element-bottleneck]]). The thesis section is text-only; the homepage has no signature element, and prize-worthiness now rests fully on editorial craft + performance ([[performance-as-design-feature]]). Code preserved in git history.

**Session 2 (Homepage) — DONE (2026-08-14), deployed.** Both locales complete per the approved v2 copy doc: hero, thesis, whoami (dignified portrait placeholder, fixed dims — real photo still reserved), proof ×4, services 01/02/03, testimonials OMITTED per rule (zero real quotes), ideas ×2, footer CTA. Motion system live: CSS-only load sequence (720ms ≤ 900 budget), IntersectionObserver scroll reveals (~0.7KB inline, the site's first JS, progressive enhancement). Session-1 debts paid: real footer links + JSON-LD sameAs, CTAs → mailto (Calendly TODOs left), tokens audited (no raw hex/px), head minors, sitemap hreflang. Gates green 6/6 runs: 100×4, LCP=FCP ~780–820ms, CLS 0, TBT 0. Design QA done at 360/768/1440 both locales (`node scripts/shoot.mjs` — reduced-motion emulated for deterministic captures). Chanel pass: Ideas cards ship without the v1 mockup's per-card descriptions/arrows — v2 copy carries the section quieter.

**Deploy:** push to `main` auto-deploys to https://website.anibalrojas.workers.dev/ (Cloudflare Workers static assets).

## Milestones (suggested order)

1. ~~**Scaffold & system**~~ — done.
2. ~~**Homepage**~~ — done (copy-doc blocker resolved by Aníbal; v2 used verbatim).
3. ~~**Signature element**~~ — built and removed (Aníbal's decision, see Status). Nothing carries over to session 4.
4. ~~**Templates**~~ — done (session 4). **Carry-over:** add the representative post to LHCI once a real post exists; delete the two fixture drafts then.
5. **Content & polish** — About, Contact (Calendly click-to-load → replaces mailto TODOs), OG generation (satori), Plausible (deferred, only third-party request), testimonials in, launch checklist. JSON-LD Article/ProfessionalService already shipped in session 4.
6. **Phase 2 (optional)** — `/now/` page; dark mode becomes possible ([[no-dark-mode-v1]]).

## Launch gates (handoff acceptance criteria)

- Lighthouse mobile/throttled **100/100/100/100** on homepage + a representative post; LCP < 1.5s, CLS = 0, TBT < 50ms ([[performance-as-design-feature]]) — enforced in CI via [[lhci-devtools-throttling]]. (Post URL pending real content; all other page types asserted since session 4.)
- WCAG 2.2 AA: keyboard nav with visible amber focus, skip-link, landmarks, verified contrast pairs, reduced-motion honored globally.
- Design QA screenshots at 360/768/1440 in **both locales** (script: `scripts/shoot.mjs`): no Spanish overflow, hand-checked headline wraps, every gap traceable to the spacing scale, the Chanel pass documented in the PR, and the tell test against three templated AI-consultant sites.
- Content gates: real portrait, ≥3 real testimonials or the section is omitted ([[testimonials-real-or-omitted]]), all links live, Calendly working, both locales proofread by Aníbal. **Session-4 copy awaiting Aníbal's sign-off: the three service-page drafts in `src/i18n/ui.ts` and the Principles summaries.**

## Open decisions reserved for Aníbal (ask, don't assume)

- Final domain (working name: anibalrojas.com — wired into `astro.config.mjs` + `public/robots.txt`).
- Whether the repo goes public (the colophon links it if so).
- Portrait choice; testimonial selection and order; service-page copy sign-off.
- Calendly (CTAs are mailto meanwhile). The Bottleneck decision is settled: removed.
- First real posts: ≥1 per locale (all existing writing is Spanish; an EN post means new writing or an approved translation).
- Ratify: `font-display: optional` ([[font-loading-strategy]]), devtools-throttled LHCI ([[lhci-devtools-throttling]]), LCP-element motion rule ([[lcp-element-motion-constraint]]).
