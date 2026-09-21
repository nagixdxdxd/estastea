import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'en',
  t('en').seo.aboutTitle,
  t('en').seo.aboutDesc,
  '/about',
);

export default function AboutPage() {
  return (
    <SiteShell lang="en">
      <AboutContent lang="en" />
    </SiteShell>
  );
}
