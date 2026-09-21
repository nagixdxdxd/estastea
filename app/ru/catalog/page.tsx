import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CatalogContent } from '@/components/CatalogContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'ru',
  t('ru').seo.catalogTitle,
  t('ru').seo.catalogDesc,
  '/catalog',
);

export default function RuCatalogPage() {
  return (
    <SiteShell lang="ru">
      <Suspense>
        <CatalogContent lang="ru" />
      </Suspense>
    </SiteShell>
  );
}
