import Link from 'next/link';
import { pathFor, t, type Lang } from '@/lib/i18n';
import { ProductCard } from '@/components/ProductCard';
import { producerCopy, producers } from '@/lib/producers';
import { products } from '@/lib/products';
import { SITE } from '@/lib/site';
import { copyBlocks, IMG } from './AboutContent';
import aboutStyles from './AboutContent.module.css';
import styles from './HomeContent.module.css';

const NEW_ARRIVALS_ORDER = [
  'gaba-eastern-riddle',
  'white-alishan-n23-qing-yun',
  'ruby-18-sun-moon-lake',
  'fushoushan-top-grade',
];

type Props = { lang: Lang };

export function HomeContent({ lang }: Props) {
  const copy = t(lang);
  const newArrivals = products
    .filter((p) => p.status === 'new')
    .sort((a, b) => NEW_ARRIVALS_ORDER.indexOf(a.slug) - NEW_ARRIVALS_ORDER.indexOf(b.slug))
    .slice(0, 4);
  const ac = copyBlocks[lang];

  return (
    <div className={styles.homeContainer}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackdrop}>
          <img
            src="/images/scenes/hero.jpg?v=3"
            alt="Taiwan High Mountain Tea Gardens"
            className={styles.heroBgImg}
            width={1280}
            height={720}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroLineTop}>
            <svg width="100" height="100" preserveAspectRatio="none" stroke="currentColor" aria-hidden>
              <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="4" />
            </svg>
          </div>

          <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>

          <div className={styles.heroLineBottom}>
            <svg width="100" height="100" preserveAspectRatio="none" stroke="currentColor" aria-hidden>
              <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section className={styles.statsStrip}>
        <div className={`container ${styles.statsGrid}`}>
          {copy.stats.map((item) => (
            <div key={item.label} className={styles.statItem}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Selection Bento */}
      <section className={`section-spacer ${styles.selectionSection}`}>
        <div className="container">
          <div className={styles.selectionHeading}>
            <span className="kicker">{copy.selectionKicker}</span>
            <h2 className={styles.selectionTitle}>{copy.selectionTitle}</h2>
          </div>

          <div className={styles.selectionGrid}>
            {/* Left Big Card */}
            <div className={styles.selectionCardTall}>
              <div className={styles.selectionImgWrapTall}>
                <img
                  src="/images/selection/terroirs.png"
                  loading="lazy"
                  decoding="async"
                  alt={copy.selectionTerroirsTitle}
                  className={styles.selectionImg}
                  width={768}
                  height={615}
                />
              </div>
              <div className={styles.selectionInfoBox}>
                <h3 className={styles.selectionCardTitle}>{copy.selectionTerroirsTitle}</h3>
                <p className={styles.selectionCardText}>{copy.selectionTerroirsText}</p>
              </div>
            </div>

            {/* Right 2 Stacked Cards */}
            <div className={styles.selectionRightCol}>
              <div className={styles.selectionCard}>
                <div className={styles.selectionImgWrap}>
                  <img
                    src="/images/selection/aged-puer.png"
                  loading="lazy"
                  decoding="async"
                    alt={copy.selectionAgedTitle}
                    className={styles.selectionImg}
                    width={768}
                    height={669}
                  />
                </div>
                <div className={styles.selectionInfoBox}>
                  <h3 className={styles.selectionCardTitle}>{copy.selectionAgedTitle}</h3>
                </div>
              </div>

              <div className={styles.selectionCard}>
                <div className={styles.selectionImgWrap}>
                  <img
                    src="/images/selection/cupping-tea.png"
                  loading="lazy"
                  decoding="async"
                    alt={copy.selectionCuppingTitle}
                    className={styles.selectionImg}
                    width={768}
                    height={669}
                  />
                </div>
                <div className={styles.selectionInfoBox}>
                  <h3 className={styles.selectionCardTitle}>{copy.selectionCuppingTitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. New Arrivals */}
      <section className={`section-spacer ${styles.newArrivalsSection}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{copy.newArrivalsKicker}</span>
            <h2 className={styles.sectionTitleText}>{copy.newArrivalsTitle}</h2>
            <p className={styles.sectionLeadText}>{copy.newArrivalsSubtitle}</p>
          </div>

          <div className={styles.newArrivalsGrid}>
            {newArrivals.map((product) => (
              <ProductCard key={product.slug} lang={lang} product={product} />
            ))}
          </div>

          <div className={styles.newArrivalsActions}>
            <Link href={pathFor(lang, '/catalog')} className="btn btn-primary">
              {copy.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* 3c. The Taiwan Advantage */}
      <section className="section-spacer">
        <div className={`container ${aboutStyles.splitGrid}`}>
          <figure className={`${aboutStyles.splitFigure} ${aboutStyles.figureLandscape}`}>
            <img src={IMG.gardenOwner} alt={ac.advantageCaption} loading="lazy" />
            <figcaption>{ac.advantageCaption}</figcaption>
          </figure>
          <div>
            <span className="kicker">{ac.advantageKicker}</span>
            <h2 className={aboutStyles.sectionTitle}>{ac.advantageTitle}</h2>
            {ac.advantageBody.map((p) => (
              <p key={p} className={aboutStyles.bodyPara}>
                {p}
              </p>
            ))}
            <div className={aboutStyles.ctaRow}>
              <Link href={pathFor(lang, '/catalog')} className="btn btn-primary">
                {copy.heroCta}
              </Link>
              <Link href={pathFor(lang, '/contact')} className="btn btn-outline">
                {copy.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3d. People Behind the Tea */}
      <section className={`section-spacer ${aboutStyles.tintSection}`}>
        <div className="container">
          <div className={aboutStyles.sectionHeading}>
            <span className="kicker">{ac.peopleKicker}</span>
            <h2 className={aboutStyles.sectionTitle}>{ac.peopleTitle}</h2>
            {ac.peopleLead.map((paragraph) => (
              <p key={paragraph} className={aboutStyles.sectionLead}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={aboutStyles.producerGrid}>
            {producers.map((producer) => {
              const pc = producerCopy(producer, lang);
              const cardImage = producer.portrait ?? producer.photos[0]?.src;
              return (
                <Link
                  key={producer.slug}
                  href={pathFor(lang, `/about/${producer.slug}`)}
                  className={`${aboutStyles.producerCard} ${cardImage ? '' : aboutStyles.producerCardPlain}`}
                >
                  {cardImage && (
                    <div className={aboutStyles.producerMedia}>
                      <img src={cardImage} alt={pc.name} loading="lazy" />
                    </div>
                  )}
                  <div className={aboutStyles.producerBody}>
                    <h3 className={aboutStyles.producerName}>{pc.name}</h3>
                    <div className={aboutStyles.producerRegion}>{pc.region}</div>
                    <div className={aboutStyles.producerTeas}>{pc.teas}</div>
                    <p className={aboutStyles.producerTeaser}>{pc.teaser}</p>
                    <span className={aboutStyles.producerLink}>{ac.peopleCta} &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Origin Story & Direct Sourcing */}
      <section className={`section-spacer ${styles.aboutStorySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyImagesWrap}>
            <div className={styles.storyMainImg}>
              <img src="/images/about/hero-garden.jpg" alt="Taiwanese tea farm" width={1024} height={768} loading="lazy" decoding="async" />
            </div>
            <div className={styles.storyAccentImg}>
              <img src="/images/scenes/hills.png" alt="Formosa mountain hills" width={600} height={450} loading="lazy" decoding="async" />
            </div>
            <div className={styles.storyFloatBadge}>
              <strong>10+</strong>
              <span>{lang === 'ru' ? 'лет на Тайване' : 'years in Taiwan'}</span>
            </div>
          </div>

          <div className={styles.storyContent}>
            <span className="kicker">{copy.nav.about}</span>
            <h2 className={styles.storyTitle}>{copy.aboutTitle}</h2>
            <div className={styles.storyParagraphs}>
              <p className={styles.leadParagraph}>{copy.aboutLead}</p>
              <p>{copy.aboutBody}</p>
            </div>
            <div className={styles.storyActions}>
              <Link href={pathFor(lang, '/about')} className="btn btn-primary">
                {copy.aboutCta}
              </Link>
              <Link href={pathFor(lang, '/blog')} className="btn btn-outline">
                {copy.nav.blog}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Video Experience & Cupping Testimonial */}
      <section className={`section-spacer ${styles.mediaSection}`}>
        <div className={`container ${styles.mediaGrid}`}>
          {/* Left: Video */}
          <div className={styles.videoBox}>
            <div className={styles.videoMeta}>
              <span className="kicker">{lang === 'ru' ? 'Атмосфера терруара' : 'Origin Cinema'}</span>
              <h3 className={styles.videoTitle}>{copy.videoTitle}</h3>
              <p className={styles.videoCaption}>{copy.videoCaption}</p>
            </div>
            <div className={styles.videoFrame}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${SITE.videoId}`}
                title={copy.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: Testimonial */}
          <div className={styles.testimonialBox}>
            <span className="kicker">{copy.reviewTitle}</span>
            <div className={styles.quoteMark}>“</div>
            <blockquote className={styles.quoteText}>{copy.reviewQuote}</blockquote>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorAvatar}>
                <span>ЮД</span>
              </div>
              <div>
                <strong>{copy.reviewAuthor}</strong>
                <span>{copy.reviewMeta}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mountain Terroirs Interactive Atlas */}
      <section className={`section-spacer ${styles.terroirSection}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{lang === 'ru' ? 'Горные терруары' : 'Origin Terroirs'}</span>
            <h2 className={styles.sectionTitleText}>{copy.terroirsTitle}</h2>
            <p className={styles.sectionLeadText}>{copy.terroirsSubtitle}</p>
          </div>

          <div className={styles.terroirsGrid}>
            {copy.terroirs.map((terroir, idx) => (
              <div key={terroir.name} className={styles.terroirCard}>
                <div className={styles.terroirCardTop}>
                  <span className={styles.terroirIndex}>0{idx + 1}</span>
                  <span className={styles.terroirAlt}>{terroir.alt}</span>
                </div>
                <h3 className={styles.terroirName}>{terroir.name}</h3>
                <p className={styles.terroirDesc}>{terroir.desc}</p>
                <Link href={pathFor(lang, '/catalog')} className={styles.terroirLink}>
                  {copy.viewProduct} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
