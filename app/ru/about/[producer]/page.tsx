import type { Metadata } from 'next';
import { ProducerContent, ProducerNotFound } from '@/components/ProducerContent';
import { SiteShell } from '@/components/SiteShell';
import { pageMetadata } from '@/lib/metadata';
import { producers } from '@/lib/producers';

type Props = { params: Promise<{ producer: string }> };

export async function generateStaticParams() {
  return producers.map((p) => ({ producer: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { producer: slug } = await params;
  const producer = producers.find((p) => p.slug === slug);
  if (!producer) return { title: 'EstasTea' };
  return pageMetadata('ru', producer.ru.seoTitle, producer.ru.seoDesc, `/about/${slug}`);
}

export default async function RuProducerPage({ params }: Props) {
  const { producer: slug } = await params;
  const producer = producers.find((p) => p.slug === slug);
  if (!producer) {
    return (
      <SiteShell lang="ru">
        <ProducerNotFound lang="ru" />
      </SiteShell>
    );
  }
  return (
    <SiteShell lang="ru">
      <ProducerContent lang="ru" producer={producer} />
    </SiteShell>
  );
}
