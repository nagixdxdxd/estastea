import type { Metadata } from 'next';
import { HomeContent } from '@/components/HomeContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('ru', t('ru').seo.homeTitle, t('ru').seo.homeDesc, '/');

export default function RuHomePage() {
  return (
    <SiteShell lang="ru">
      <HomeContent lang="ru" />
    </SiteShell>
  );
}
