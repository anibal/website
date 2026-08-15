# Brain Index

_Auto-generated. Last updated 2026-08-15T13:10:32.369Z._

- [astro-5-static-islands](pages/astro-5-static-islands.md) — category: decision | tags: [stack, performance] | **Decided:** Astro 5 with static output. Client JavaScript is an allowlist of three islands: the language-aware header (only if it proves ne
- [en-default-locale](pages/en-default-locale.md) — category: decision | tags: [i18n, content] | **Decided:** EN is the default locale at `/`; Spanish lives under `/es/`.
- [font-loading-strategy](pages/font-loading-strategy.md) — category: decision | tags: [performance, typography] | **Decided:** self-hosted woff2 subsets (latin + latin-ext via unicode-range) loaded with **`font-display: optional`** (not the handoff's `sw
- [lcp-element-motion-constraint](pages/lcp-element-motion-constraint.md) — category: decision | tags: [performance, motion] | **Decided:** whatever element is (or could become) the LCP gets transform-only motion — never an opacity fade-in. On the homepage the hero h
- [lhci-devtools-throttling](pages/lhci-devtools-throttling.md) — category: decision | tags: [performance, ci] | **Decided:** Lighthouse CI runs with `throttlingMethod: 'devtools'` (real network/CPU throttling, observed timings), mobile form factor, ass
- [no-dark-mode-v1](pages/no-dark-mode-v1.md) — category: decision | tags: [design-system] | **Decided:** dark mode is out of scope for v1 — the handoff is explicit: do not half-ship it. Design tokens must be architected so a dark th
- [old-site-archive-no-migration](pages/old-site-archive-no-migration.md) — category: decision | tags: [content] | **Decided:** `i.usedtocode.com` remains live and untouched as the public archive; the new `/ideas/` footer links to it ("archive → i.usedtoc
- [performance-as-design-feature](pages/performance-as-design-feature.md) — category: decision | tags: [performance] | **Decided:** ship gates — Lighthouse (mobile, throttled, enforced in CI) **100/100/100/100** on the homepage and a representative post; LCP
- [signature-element-bottleneck](pages/signature-element-bottleneck.md) — category: decision | status: archived | tags: [design, homepage] | **Decided:** the homepage carries exactly one bold element — **The Bottleneck**, an interactive system diagram embedded in the Thesis sectio
- [testimonials-real-or-omitted](pages/testimonials-real-or-omitted.md) — category: decision | tags: [content, homepage] | **Decided:** build the testimonials component, but if fewer than 3 real quotes (named people at named companies) exist at launch, the homepa
- [vanilla-css-design-tokens](pages/vanilla-css-design-tokens.md) — category: decision | tags: [design-system, css] | **Decided:** styling is hand-written vanilla CSS with custom properties; all design tokens live in one file mirroring the handoff's design s
