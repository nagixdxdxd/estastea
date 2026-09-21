import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';
import { getBlogPosts } from '@/lib/blog';
import { pathFor, t, type Lang } from '@/lib/i18n';
import styles from './BlogPostContent.module.css';
import blogListStyles from './BlogContent.module.css';

type Props = {
  lang: Lang;
  post: BlogPost;
};

export function BlogPostContent({ lang, post }: Props) {
  const copy = t(lang);
  const loc = post[lang];
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className={styles.postPage}>
      {/* Header Banner */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <Link href={pathFor(lang, '/blog')} className={styles.backLink}>
              ← {lang === 'ru' ? 'Назад в блог' : 'Back to Blog'}
            </Link>
            <div>
              <span className={styles.categoryPill}>{loc.category}</span>
            </div>
            <h1 className={styles.title}>{loc.title}</h1>
            <div className={styles.meta}>
              <span>{loc.date}</span>
              <span className={styles.metaDot} />
              <span>{loc.readTime}</span>
              <span className={styles.metaDot} />
              <span>EstasTea Editorial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <div className={styles.mainContent}>
        <div className={styles.featuredImageWrapper}>
          <img src={post.image} alt={loc.title} className={styles.featuredImage} />
        </div>

        <div className={styles.articleBody}>
          {loc.content.map((block, idx) => {
            if (block.type === 'h2') {
              return <h2 key={idx}>{block.text}</h2>;
            }
            if (block.type === 'h3') {
              return <h3 key={idx}>{block.text}</h3>;
            }
            if (block.type === 'ul') {
              return (
                <ul key={idx}>
                  {block.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={idx} className={styles.quoteBlock}>
                  <p>{block.text}</p>
                </blockquote>
              );
            }
            return <p key={idx}>{block.text}</p>;
          })}
        </div>

        {/* B2B Partnership Banner inside article */}
        <div className={styles.postFooterCta}>
          <div className={styles.ctaText}>
            <h3>{copy.ctaTitle}</h3>
            <p>{copy.ctaText}</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={pathFor(lang, '/contact')} className="btn btn-gold">
              {copy.ctaButton}
            </Link>
            <Link href={pathFor(lang, '/catalog')} className="btn btn-outline-white">
              {copy.heroCta}
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className={styles.relatedSection}>
            <h3 className={styles.relatedTitle}>
              {lang === 'ru' ? 'Читайте также' : 'Related Articles'}
            </h3>
            <div className={blogListStyles.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {relatedPosts.map((rel) => {
                const relLoc = rel[lang];
                return (
                  <Link
                    key={rel.slug}
                    href={pathFor(lang, `/blog/${rel.slug}`)}
                    className={blogListStyles.card}
                  >
                    <div className={blogListStyles.mediaWrapper}>
                      <img
                        src={rel.image}
                        alt={relLoc.title}
                        className={blogListStyles.coverImage}
                        loading="lazy"
                      />
                      <span className={blogListStyles.categoryBadge}>{relLoc.category}</span>
                    </div>
                    <div className={blogListStyles.cardBody}>
                      <div className={blogListStyles.meta}>
                        <span>{relLoc.date}</span>
                        <span className={blogListStyles.metaDot} />
                        <span>{relLoc.readTime}</span>
                      </div>
                      <h4 className={blogListStyles.cardTitle}>{relLoc.title}</h4>
                      <p className={blogListStyles.cardExcerpt}>{relLoc.excerpt}</p>
                      <div className={blogListStyles.cardFooter}>
                        <span>{lang === 'ru' ? 'Читать' : 'Read'}</span>
                        <span className={blogListStyles.arrow}>→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
