import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
