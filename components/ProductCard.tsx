import Link from 'next/link';
import { pathFor, t, type Lang } from '@/lib/i18n';
import type { Product } from '@/lib/products';
import styles from './ProductCard.module.css';

type Props = {
  lang: Lang;
  product: Product;
};

export function ProductCard({ lang, product }: Props) {
  const copy = t(lang);
  const loc = product[lang];

  return (
    <article className={styles.card}>
      <Link href={pathFor(lang, `/catalog/${product.slug}`)} className={styles.cardLink}>
        {/* Media Window */}
        <div className={styles.mediaWrap}>
          <img
            src={product.image}
            alt={loc.name}
            width={600}
            height={750}
            loading="lazy"
            className={styles.image}
          />
          <div className={styles.badgesOverlay}>
            <span className={styles.catBadge}>{copy.categories[product.category]}</span>
            {loc.altitude && <span className={styles.altBadge}>{loc.altitude}</span>}
            {product.status && <span className={styles.goldBadge}>{copy.status[product.status]}</span>}
          </div>
        </div>

        {/* Content Body */}
        <div className={styles.body}>
          <div className={styles.originRow}>
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.pinIcon}>
              <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" />
              <circle cx="8" cy="6" r="1.5" />
            </svg>
            <span className={styles.originText}>{loc.origin}</span>
          </div>

          <h3 className={styles.title}>{loc.name}</h3>
          <p className={styles.subtitle}>{loc.subtitle}</p>

          <div className={styles.notesBox}>
            <span className={styles.notesLabel}>{copy.notes}:</span>
            <p className={styles.notesText}>{loc.notes}</p>
          </div>

          <div className={styles.footerRow}>
            <span className={styles.viewBtn}>
              {copy.viewProduct}
              <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
