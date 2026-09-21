import type { Metadata } from 'next';
import { BlogContent } from '@/components/BlogContent';
import { SiteShell } from '@/components/SiteShell';
import { t } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata(
  'en',
  t('en').seo.blogTitle,
  t('en').seo.blogDesc,
  '/blog',
);

export default function BlogPage() {
  return (
    <SiteShell lang="en">
      <BlogContent lang="en" />
    </SiteShell>
  );
}
