---
slug: stack
title: Tech stack
role: tech-stack choices
updated: "2026-08-07T20:30:31"
---

# Tech stack

## Overview

Chosen in the handoff's tech spec; nothing is implemented yet. Theme: boring, static, self-hosted — speed and craft over tooling novelty.

## Choices

| Domain | Choice | Rationale |
|---|---|---|
| Framework | Astro 5, static output, islands allowlist | Performance is a design feature; JS only where it earns its place — [[astro-5-static-islands]] |
| Styling | Vanilla CSS + custom properties, one tokens file; **no Tailwind** | The token discipline *is* the design system; CSS readable as a design artifact — [[vanilla-css-design-tokens]] |
| Typography | Fraunces (display, variable opsz/SOFT/WONK), IBM Plex Sans (body, 17px/1.65), IBM Plex Mono (utility, eyebrows, wordmark `~/anibal-rojas`) | Type is the personality carrier — "beautifully typeset engineering document" |
| Fonts delivery | Self-hosted woff2 subsets (Latin + Latin-ext), preloaded, `font-display: swap`; no Google Fonts in production | Perf budget + independence — [[performance-as-design-feature]] |
| i18n | Astro built-in i18n routing; EN default at `/`, ES at `/es/`; translations module for UI strings; per-locale content collections | Bilingual parity first-class — [[en-default-locale]] |
| Content | Astro Content Collections + zod: `posts`, `testimonials` | One-file publishing with schema safety |
| Code highlighting | Shiki, themed to the palette (amber/slate on paper) | The blog must be as considered as the homepage |
| Images | Astro `<Image>`, AVIF/WebP, explicit dimensions everywhere | Zero CLS |
| OG images | Generated per page at build (satori or equivalent), design-system styled; homepage OG = static Bottleneck SVG | Share craft; reinforces the thesis |
| SEO | Canonical URLs, hreflang, JSON-LD (Person sitewide, Article on posts, ProfessionalService on services), sitemap, robots | B2B discoverability in both locales |
| Analytics | Plausible, deferred — the *only* third-party request | Privacy-respecting, budget-safe |
| Hosting / CI | Cloudflare Pages, auto-deploy from `main`, PR preview deploys; CI = build + Lighthouse CI assertions | Preview from day one; ship gates enforced mechanically |
