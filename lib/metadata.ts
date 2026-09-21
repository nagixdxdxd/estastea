import type { Metadata } from 'next';
import { pathFor, type Lang } from '@/lib/i18n';
import { SITE } from '@/lib/site';

export function pageMetadata(
  lang: Lang,
  title: string,
  description: string,
  pathname: string,
): Metadata {
  const canonical = `${SITE.url}${pathFor(lang, pathname)}`;
  const altLang: Lang = lang === 'en' ? 'ru' : 'en';
  const altPath = `${SITE.url}${pathFor(altLang, pathname)}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE.url}${pathFor('en', pathname)}`,
        ru: `${SITE.url}${pathFor('ru', pathname)}`,
        'x-default': `${SITE.url}${pathFor('en', pathname)}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: lang === 'en' ? 'en_US' : 'ru_RU',
      alternateLocale: lang === 'en' ? 'ru_RU' : 'en_US',
    },
    other: {
      'link-alt': altPath,
    },
  };
}
