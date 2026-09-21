import type { Metadata } from 'next';
import { ProductContent, ProductNotFound } from '@/components/ProductContent';
import { SiteShell } from '@/components/SiteShell';
import { pageMetadata } from '@/lib/metadata';
import { products } from '@/lib/products';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'EstasTea' };
  return pageMetadata('en', product.en.seoTitle, product.en.seoDesc, `/catalog/${slug}`);
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return (
      <SiteShell lang="en">
        <ProductNotFound lang="en" />
      </SiteShell>
    );
  }
  return (
    <SiteShell lang="en">
      <ProductContent lang="en" product={product} />
    </SiteShell>
  );
}
