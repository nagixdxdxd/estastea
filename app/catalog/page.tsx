import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CatalogContent } from '@/components/CatalogContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'en',
  t('en').seo.catalogTitle,
  t('en').seo.catalogDesc,
  '/catalog',
);

export default function CatalogPage() {
  return (
    <SiteShell lang="en">
      <Suspense>
        <CatalogContent lang="en" />
      </Suspense>
    </SiteShell>
  );
}
