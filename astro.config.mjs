import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Code highlighting at build: a light theme derived from tokens.css —
// amber/slate/ink on paper, no dark theme (handoff §6.4).
const shikiTheme = JSON.parse(
  readFileSync(new URL('./src/styles/shiki-theme.json', import.meta.url), 'utf8'),
);

// NOTE: working domain — final domain is a decision reserved for Aníbal.
// Update `site` here and in public/robots.txt when confirmed.
export default defineConfig({
  site: 'https://anibalrojas.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // site CSS is tiny (~13KB): inlining kills the render-blocking request
    inlineStylesheets: 'always',
  },
  markdown: {
    shikiConfig: { theme: shikiTheme },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    // i18n passed through so hreflang alternates appear in the sitemap
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
});
