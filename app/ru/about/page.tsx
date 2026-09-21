import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'ru',
  t('ru').seo.aboutTitle,
  t('ru').seo.aboutDesc,
  '/about',
);

export default function RuAboutPage() {
  return (
    <SiteShell lang="ru">
      <AboutContent lang="ru" />
    </SiteShell>
  );
}
