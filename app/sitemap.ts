import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { pathFor } from '@/lib/i18n';
import { products } from '@/lib/products';
import { SITE } from '@/lib/site';

const staticPaths = ['/', '/catalog', '/about', '/blog', '/contact'] as const;

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of ['ru', 'en'] as const) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE.url}${pathFor(lang, path)}`,
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority: path === '/' ? 1 : 0.8,
      });
    }
    for (const product of products) {
      entries.push({
        url: `${SITE.url}${pathFor(lang, `/catalog/${product.slug}`)}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
    for (const post of blogPosts) {
      entries.push({
        url: `${SITE.url}${pathFor(lang, `/blog/${post.slug}`)}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
