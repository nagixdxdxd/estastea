import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostContent } from '@/components/BlogPostContent';
import { SiteShell } from '@/components/SiteShell';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Блог | EstasTea' };
  return pageMetadata('ru', post.ru.seo.title, post.ru.seo.description, `/blog/${slug}`);
}

export default async function BlogPostPageRu({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <SiteShell lang="ru">
      <BlogPostContent lang="ru" post={post} />
    </SiteShell>
  );
}
