import { redirect } from 'next/navigation';
import { blogPosts } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function EnBlogPostRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
