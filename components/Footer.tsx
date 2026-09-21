import Link from 'next/link';
import { pathFor, t, type Lang } from '@/lib/i18n';
import { SITE } from '@/lib/site';
import styles from './Footer.module.css';

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  const copy = t(lang);

  return (
    <footer className={styles.footer}>
      {/* Upper B2B Banner */}
      <div className={styles.b2bBar}>
        <div className={`container ${styles.b2bInner}`}>
          <div className={styles.b2bText}>
            <span className="badge-pill badge-pill-gold">B2B & Private Label</span>
            <h3>{copy.ctaTitle}</h3>
            <p>{copy.ctaText}</p>
          </div>
          <div className={styles.b2bActions}>
            <Link href={pathFor(lang, '/contact')} className="btn btn-gold">
              {copy.ctaButton}
            </Link>
            <Link href={SITE.whatsappHref} className="btn btn-outline-white" target="_blank">
              {copy.whatsapp}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
            {/* Col 1: Brand story */}
          <div className={styles.colBrand}>
            <div className={styles.brandBadge}>
              <img src="/images/brand/logo.jpg" alt="EstasTea" width={48} height={48} className={styles.logoImg} />
              <div>
                <div className={styles.brandName}>{copy.brand}</div>
                <div className={styles.brandSub}>
                  {lang === 'ru' ? 'Прямой импорт от фермеров' : 'Formosa Farmers Origin'}
                </div>
              </div>
            </div>
            <p className={styles.tagline}>{copy.footerTagline}</p>
            <div className={styles.certs}>
              <span className={styles.certPill}>{lang === 'ru' ? '100+ чайных садов' : '100+ Tea Gardens'}</span>
              <span className={styles.certPill}>{lang === 'ru' ? 'Высокогорье до 2600м' : 'High Mountain 2600m'}</span>
              <span className={styles.certPill}>{lang === 'ru' ? 'Прямой экспорт' : 'Taiwan Export'}</span>
            </div>
          </div>

          {/* Col 2: Catalog links */}
          <div className={styles.colLinks}>
            <span className={styles.heading}>{copy.nav.catalog}</span>
            <ul className={styles.linkList}>
              <li>
                <Link href={pathFor(lang, '/catalog')}>{copy.dropdown.all}</Link>
              </li>
              <li>
                <Link href={pathFor(lang, '/catalog?cat=light-oolong')}>{copy.categories['light-oolong']}</Link>
              </li>
              <li>
                <Link href={pathFor(lang, '/catalog?cat=gaba-oolong')}>{copy.categories['gaba-oolong']}</Link>
              </li>
              <li>
                <Link href={pathFor(lang, '/catalog?cat=shu-puerh')}>{copy.categories['shu-puerh']}</Link>
              </li>
              <li>
                <Link href={pathFor(lang, '/blog')}>{copy.nav.blog}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Terroirs */}
          <div className={styles.colLinks}>
            <span className={styles.heading}>{copy.footerQuality}</span>
            <p className={styles.qualityText}>{copy.footerQualityText}</p>
            <div className={styles.terroirTags}>
              <span>Lishan</span>
              <span>Alishan</span>
              <span>Shan Lin Xi</span>
              <span>Dong Ding</span>
            </div>
          </div>

          {/* Col 4: Direct Export Contacts */}
          <div className={styles.colLinks}>
            <span className={styles.heading}>{copy.footerContact}</span>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>{copy.contactEmail}:</span>
                <a href={`mailto:${SITE.email}`} className={styles.contactLink}>{SITE.email}</a>
              </li>
              <li>
                <span className={styles.contactLabel}>{copy.contactPhone}:</span>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  {SITE.whatsapp}
                </a>
              </li>
              <li>
                <Link href={pathFor(lang, '/contact')} className={styles.quoteLink}>
                  {copy.heroSecondary} →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>{copy.footerCopy}</p>
          <div className={styles.bottomLinks}>
            <span>{lang === 'ru' ? 'Прямой экспортный отдел на Тайване' : 'Direct Taiwan Export Desk'}</span>
            <span>·</span>
            <span>{lang === 'ru' ? 'Контрактные B2B поставки' : 'B2B Contract Supply'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
