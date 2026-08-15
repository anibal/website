---
title: "Fixture — the post layout's proving ground"
description: "Exercises every feature of the post template in dev. Never rendered in production while draft is true."
date: 2026-08-07
lang: en
tags: [ai-development, systems]
draft: true
translationOf: plantilla-ejemplo
canonicalUrl: "https://i.usedtocode.com/"
---

This file exists so the post template can be QA'd in `astro dev` before real
posts land. Delete it when the first real post arrives. It exercises the
furniture a real post uses — headings, lists, quotes, code — nothing more.

## A second-level heading in Fraunces

Body copy at the full 66ch measure, with `inline code` in the middle of a
sentence, and a [link to somewhere](https://i.usedtocode.com) for the amber
underline. A third-level heading follows below, then a list.

### A third-level heading

- The first item of an unordered list, kept short.
- The second item runs a little longer so the wrap point and the hanging
  indent can be checked at 360px.
- A third item, because two is a coincidence.

> A blockquote — the amber left rule, same family as the thesis block on the
> homepage. It should read as a pull-quote, not as a code comment.

```ts
// A fenced code block: Shiki at build, themed to the palette.
export function bottleneck(stage: string): string {
  const velocity = ai_assisted ? 3 : 1;
  return stage === 'review' ? 'queues form here' : 'flow';
}
```

And a closing paragraph after the code block, so the spacing between a
`pre` and running text is visible in the QA pass.
