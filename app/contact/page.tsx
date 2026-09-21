import type { Metadata } from 'next';
import { ContactContent } from '@/components/ContactContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'en',
  t('en').seo.contactTitle,
  t('en').seo.contactDesc,
  '/contact',
);

export default function ContactPage() {
  return (
    <SiteShell lang="en">
      <ContactContent lang="en" />
    </SiteShell>
  );
}
