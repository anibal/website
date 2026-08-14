import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content model per handoff §7.
 * Publishing a post = adding one .md file with frontmatter and pushing.
 */

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'es']),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    translationOf: z.string().optional(), // slug of the same post in the other locale
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    canonicalUrl: z.string().url().optional(), // for posts republished from Substack / old site
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    lang: z.enum(['en', 'es']),
    featured: z.boolean().default(false),
    serviceRef: z.enum(['diagnostic', 'fractional', 'coaching']).optional(),
  }),
});

export const collections = { posts, testimonials };
