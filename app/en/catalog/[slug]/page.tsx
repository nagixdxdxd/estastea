import { redirect } from 'next/navigation';
import { products } from '@/lib/products';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function EnProductRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/catalog/${slug}`);
}
