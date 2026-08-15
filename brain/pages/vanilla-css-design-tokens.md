---
id: vanilla-css-design-tokens
title: "Vanilla CSS with a single design-tokens file — no Tailwind"
category: decision
status: active
tags: [design-system, css]
created: "2026-08-07T20:30:49"
updated: "2026-08-14T15:11:01"
---

<!-- compiled_truth -->
**Decided:** styling is hand-written vanilla CSS with custom properties; all design tokens live in one file mirroring the handoff's design system (color "amber phosphor on cool paper", a modular type scale from 17px at a 1.25 ratio with fluid clamp() for display, an 8px spatial base grid). No Tailwind, no CSS framework.

**Alternatives:** Tailwind / utility frameworks — explicitly rejected in the handoff.

**Rationale:** the token discipline *is* the design system, and the CSS itself should read as a design artifact — prize-level craft is part of the goal. Ad-hoc values break the system: every size and gap must trace to the scale.

**Blast radius:** contributors write real CSS using only token/scale values; tokens must stay theme-able because dark mode is deferred, not abandoned ([[no-dark-mode-v1]]).


## Timeline

- time: 2026-08-07T20:30:49
  kind: decision
  summary: "Created this page: Vanilla CSS with a single design-tokens file — no Tailwind"
  source: HANDOFF-anibalrojas-site.md
  affects: [vanilla-css-design-tokens]

- time: 2026-08-07T20:31:12
  kind: decision
  summary: captured from handoff tech spec
  source: HANDOFF-anibalrojas-site.md
  affects: [vanilla-css-design-tokens]

- time: 2026-08-14T15:11:01
  kind: decision
  summary: "Session-2 token resolutions: --text-lede minted (1.08rem, ledes only); all 14px gaps snapped to --space-2; .btn:hover #000 → color-mix(ink 88%, black); portrait gradient via color-mix(slate,paper 30%) — zero raw hex/px outside tokens.css"
  source: SESSION-2.md part A.3
  affects: [vanilla-css-design-tokens]
