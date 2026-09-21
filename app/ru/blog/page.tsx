import type { Metadata } from 'next';
import { BlogContent } from '@/components/BlogContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata(
  'ru',
  t('ru').seo.blogTitle,
  t('ru').seo.blogDesc,
  '/blog',
);

export default function BlogPageRu() {
  return (
    <SiteShell lang="ru">
      <BlogContent lang="ru" />
    </SiteShell>
  );
}
