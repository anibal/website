---
id: signature-element-bottleneck
title: "The Bottleneck: one interactive signature element with a static fallback"
category: decision
status: active
tags: [design, homepage]
created: "2026-08-07T20:30:49"
updated: "2026-08-07T20:31:12"
---

<!-- compiled_truth -->
**Decided:** the homepage carries exactly one bold element — **The Bottleneck**, an interactive system diagram embedded in the Thesis section (both locales). Work tokens flow left→right through *ideas → code → review → integration → production*; an "AI velocity" control (slider, or 2019/2024/now presets) accelerates the code stage while amber queues pile up at review and integration — the bottleneck visibly moves right into the human/coordination stages, with a mono caption updating (`> bottleneck: code` → `> bottleneck: judgment & coordination`). Hand-rolled rAF or CSS (no physics library), ≤15KB JS, lazy island ([[astro-5-static-islands]]), fully in design-system colors and type, keyboard-operable with an `aria-live="polite"` caption.

**Alternatives:** a WebGL hero, scroll-jacking, showreel effects — rejected as anti-goals; the register is editorial craft, not effects.

**Rationale:** prize-worthiness comes from a thesis made visible — the site demonstrates systems literacy instead of claiming it. This is the one deliberate risk; everything around it stays quiet, disciplined, precise (the Chanel rule: remove one accessory before shipping).

**Escape hatch (also decided):** a beautifully drawn static SVG of the "now" state is the fallback for no-JS, reduced-motion, and the OG-image basis — and if the interactive version is not *excellent*, ship the static at high craft instead; a mediocre interactive is worse than a superb static, and this component must not delay launch. Interactive-vs-static at ship time is Aníbal's call.

**Blast radius:** sets the motion language for the whole site; its static SVG doubles as the homepage OG image; mobile ships presets-only if 60fps on a mid-range phone is not achievable.


## Timeline

- time: 2026-08-07T20:30:49
  kind: decision
  summary: "Created this page: The Bottleneck: one interactive signature element with a static fallback"
  source: HANDOFF-anibalrojas-site.md
  affects: [signature-element-bottleneck]

- time: 2026-08-07T20:31:12
  kind: decision
  summary: captured from handoff section 5
  source: HANDOFF-anibalrojas-site.md
  affects: [signature-element-bottleneck]
