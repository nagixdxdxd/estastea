import type { Metadata } from 'next';
import { ContactContent } from '@/components/ContactContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'ru',
  t('ru').seo.contactTitle,
  t('ru').seo.contactDesc,
  '/contact',
);

export default function RuContactPage() {
  return (
    <SiteShell lang="ru">
      <ContactContent lang="ru" />
    </SiteShell>
  );
}
