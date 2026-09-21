import Link from 'next/link';
import { pathFor, type Lang } from '@/lib/i18n';
import { producerCopy, type Producer } from '@/lib/producers';
import { products } from '@/lib/products';
import { ProductCard } from './ProductCard';
import styles from './ProducerContent.module.css';

type Props = { lang: Lang; producer: Producer };

export function ProducerContent({ lang, producer }: Props) {
  const pc = producerCopy(producer, lang);
  const producerTeas = products.filter((product) => product.producer === producer.slug);

  return (
    <div className={styles.page}>
      <section className="page-header">
        <div className="container">
          <Link href={pathFor(lang, '/about')} className={styles.back}>
            &larr; {lang === 'ru' ? 'О нас' : 'About us'}
          </Link>
          <h1>{pc.name}</h1>
          <p className={styles.subtitle}>{pc.subtitle}</p>
          <div className={styles.meta}>
            <span>{pc.region}</span>
            <span>{pc.teas}</span>
          </div>
        </div>
      </section>

      <section className="section-spacer">
        <div className={`container ${producer.portrait || producer.photos.length > 0 ? styles.grid : styles.gridNarrow}`}>
          <div className={styles.photoColumn}>
            {producer.portrait && (
              <figure className={styles.portrait}>
                <img src={producer.portrait} alt={pc.name} />
                {pc.portraitCaption && <figcaption>{pc.portraitCaption}</figcaption>}
              </figure>
            )}
            {producer.photos.map((photo) => (
              <figure key={photo.src} className={styles.portrait}>
                <img src={photo.src} alt={lang === 'ru' ? photo.ru : photo.en} loading="lazy" />
                <figcaption>{lang === 'ru' ? photo.ru : photo.en}</figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.prose}>
            {pc.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className={styles.ctas}>
              <Link href={pathFor(lang, '/catalog')} className="btn btn-primary">
                {lang === 'ru' ? 'Посмотреть чаи' : 'Explore our teas'}
              </Link>
              <Link href={pathFor(lang, '/contact')} className="btn btn-outline">
                {lang === 'ru' ? 'Связаться с нами' : 'Contact us'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {producerTeas.length > 0 && (
        <section className="section-spacer">
          <div className="container">
            <div className={styles.teasHeading}>
              <span className="kicker">{pc.name}</span>
              <h2 className={styles.teasTitle}>
                {lang === 'ru' ? 'Чаи этого мастера в нашем ассортименте' : 'Teas from this master in our range'}
              </h2>
            </div>
            <div className="grid-3">
              {producerTeas.map((product) => (
                <ProductCard key={product.slug} lang={lang} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export function ProducerNotFound({ lang }: { lang: Lang }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{lang === 'ru' ? 'Мастер не найден' : 'Producer not found'}</h1>
        <Link href={pathFor(lang, '/about')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          {lang === 'ru' ? 'О нас' : 'About us'}
        </Link>
      </div>
    </section>
  );
}
