import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { pathFor, t, type Lang } from '@/lib/i18n';
import { products, type Product } from '@/lib/products';
import { SITE } from '@/lib/site';
import styles from './ProductContent.module.css';

type Props = { lang: Lang; product: Product };

export function ProductContent({ lang, product }: Props) {
  const copy = t(lang);
  const loc = product[lang];

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  const specs = [
    { label: copy.origin, value: loc.origin },
    loc.altitude ? { label: copy.altitude, value: loc.altitude } : null,
    loc.cultivar ? { label: copy.cultivar, value: loc.cultivar } : null,
    { label: copy.style, value: loc.style },
    loc.year ? { label: copy.year, value: loc.year } : null,
    loc.storage ? { label: copy.storage, value: loc.storage } : null,
    { label: copy.notes, value: loc.notes },
  ].filter(Boolean) as { label: string; value: string }[];

  const waInquiryText =
    lang === 'ru'
      ? `Здравствуйте, EstasTea! Интересует оптовый прайс-лист на чай "${loc.name}" (${loc.subtitle}).`
      : `Hello EstasTea! I am interested in wholesale pricing for "${loc.name}" (${loc.subtitle}).`;

  const waInquiryUrl = `${SITE.whatsappHref}?text=${encodeURIComponent(waInquiryText)}`;

  return (
    <div className={styles.productPage}>
      {/* Top Breadcrumb Bar */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <Link href={pathFor(lang, '/catalog')} className={styles.backLink}>
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12" />
            </svg>
            <span>{copy.backCatalog}</span>
          </Link>
        </div>
      </div>

      {/* Main Showcase Section */}
      <section className={styles.showcaseSection}>
        <div className={`container ${styles.showcaseGrid}`}>
          {/* Left: Product Image Card */}
          <div className={styles.galleryCard}>
            {product.images ? (
              <div className={styles.carouselWrap}>
                <div className={styles.carousel}>
                  {product.images.map((src, i) => (
                    <div key={i} className={styles.carouselSlide}>
                      <img
                        src={src}
                        alt={`${loc.name} — ${i + 1}`}
                        width={800}
                        height={1000}
                        className={styles.carouselImage}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.badgesWrap}>
                  <span className="badge-pill">{copy.categories[product.category]}</span>
                  {loc.altitude && <span className="badge-pill badge-pill-accent">{loc.altitude}</span>}
                  {product.status && <span className="badge-pill badge-pill-gold">{copy.status[product.status]}</span>}
                </div>
              </div>
            ) : (
              <div className={styles.imageWrap}>
                <img
                  src={product.image}
                  alt={loc.name}
                  width={800}
                  height={1000}
                  className={styles.mainImage}
                />
                <div className={styles.badgesWrap}>
                  <span className="badge-pill">{copy.categories[product.category]}</span>
                  {loc.altitude && <span className="badge-pill badge-pill-accent">{loc.altitude}</span>}
                  {product.status && <span className="badge-pill badge-pill-gold">{copy.status[product.status]}</span>}
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Narrative & Actions */}
          <div className={styles.detailsCard}>
            <div className={styles.headerInfo}>
              <span className="kicker">{loc.origin}</span>
              <h1 className={styles.productTitle}>{loc.name}</h1>
              <p className={styles.productSubtitle}>{loc.subtitle}</p>
            </div>

            {/* Flavor & Cup Profile Highlight */}
            <div className={styles.tastingBox}>
              <span className={styles.tastingLabel}>{copy.notes}</span>
              <p className={styles.tastingNotes}>{loc.notes}</p>
            </div>

            {/* Description Text */}
            <div className={styles.descriptionProse}>
              {loc.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* B2B Action Buttons */}
            <div className={styles.actionRow}>
              <Link href={pathFor(lang, '/contact')} className="btn btn-primary">
                {copy.requestPrice}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" />
                </svg>
              </Link>
              <a
                href={waInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                {copy.whatsapp} {lang === 'ru' ? 'Запрос' : 'Inquiry'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Terroir Attributes */}
      <section className={`section-spacer-sm ${styles.specsSection}`}>
        <div className="container">
          <div className={styles.specsContainer}>
            <div className={styles.specsHeader}>
              <span className="kicker">{lang === 'ru' ? 'Терруар и обработка' : 'Terroir & Processing'}</span>
              <h2>{lang === 'ru' ? 'Характеристики лота' : 'Lot Specifications'}</h2>
            </div>

            <div className={styles.specsGrid}>
              {specs.map((spec) => (
                <div key={spec.label} className={styles.specCard}>
                  <dt className={styles.specLabel}>{spec.label}</dt>
                  <dd className={styles.specValue}>{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gongfu Brewing Guide Card */}
      {loc.brewing && (
        <section className={`section-spacer-sm ${styles.brewingSection}`}>
          <div className="container">
            <div className={styles.brewingCard}>
              <div className={styles.brewingIcon}>🫖</div>
              <div className={styles.brewingInfo}>
                <span className="kicker">{copy.brewing}</span>
                <h3 className={styles.brewingTitle}>
                  {lang === 'ru' ? 'Руководство по завариванию Гунфу Ча' : 'Gongfu Cha Master Guide'}
                </h3>
                <p className={styles.brewingText}>{loc.brewing}</p>
              </div>
              <Link href={pathFor(lang, '/blog')} className="btn btn-outline">
                {copy.nav.blog} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Teas */}
      {related.length > 0 && (
        <section className={`section-spacer ${styles.relatedSection}`}>
          <div className="container">
            <div className={styles.relatedHeader}>
              <span className="kicker">{copy.categories[product.category]}</span>
              <h2>{copy.related}</h2>
            </div>
            <div className="grid-3">
              {related.map((item) => (
                <ProductCard key={item.slug} lang={lang} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export function ProductNotFound({ lang }: { lang: Lang }) {
  const copy = t(lang);
  return (
    <div className="page-header">
      <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1>{copy.notFound}</h1>
        <p style={{ margin: '1rem auto 2rem' }}>
          {lang === 'ru' ? 'Запрошенный сорт чая не найден в каталоге.' : 'The requested tea could not be found.'}
        </p>
        <Link href={pathFor(lang, '/catalog')} className="btn btn-primary">
          {copy.backCatalog}
        </Link>
      </div>
    </div>
  );
}
