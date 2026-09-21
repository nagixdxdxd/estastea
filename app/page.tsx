import type { Metadata } from 'next';
import { HomeContent } from '@/components/HomeContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata('en', t('en').seo.homeTitle, t('en').seo.homeDesc, '/');

export default function HomePage() {
  return (
    <SiteShell lang="en">
      <HomeContent lang="en" />
    </SiteShell>
  );
}
