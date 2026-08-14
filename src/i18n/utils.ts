import { defaultLocale, locales, ui, type Locale, type UiKey } from './ui';

/** Locale of the current URL: everything under /es/ is Spanish. */
export function getLocale(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/**
 * Path of `pathname` in `targetLocale`.
 * Generic prefix swap: `/services/coaching/` ↔ `/es/services/coaching/`.
 * TODO(session-4): routes with localized slugs (/es/servicios/…, /es/sobre-mi/…)
 * need an explicit equivalence map instead of the prefix swap.
 */
export function equivalentPath(pathname: string, targetLocale: Locale): string {
  const esPrefix = '/es/';
  let base = pathname;
  if (base === '/es') base = '/';
  else if (base.startsWith(esPrefix)) base = base.slice(esPrefix.length - 1);
  if (targetLocale === defaultLocale) return base;
  return base === '/' ? '/es/' : `/es${base}`;
}

/** Locale home path: `/` for EN, `/es/` for ES. */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : '/es/';
}

/** Absolute URL helper for canonical/hreflang tags. */
export function absoluteUrl(site: URL, path: string): string {
  return new URL(path, site).href;
}
