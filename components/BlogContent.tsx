import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { pathFor, t, type Lang } from '@/lib/i18n';
import styles from './BlogContent.module.css';

type Props = {
  lang: Lang;
};

export function BlogContent({ lang }: Props) {
  const copy = t(lang);
  const posts = getBlogPosts();

  const heroSubtitle =
    lang === 'ru'
      ? 'Статьи о чайной культуре Тайваня, секретах высокогорных терруаров, технологии ферментации и науке о чае.'
      : 'Articles on Taiwanese tea culture, high-mountain terroirs, fermentation mastery, and tea science.';

  return (
    <div className={styles.blogPage}>
      {/* Header Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="kicker">{lang === 'ru' ? 'База знаний EstasTea' : 'EstasTea Knowledge Base'}</span>
            <h1 className={styles.heroTitle}>{lang === 'ru' ? 'Чайный блог и статьи' : 'Tea Journal & Insights'}</h1>
            <p className={styles.heroLead}>{heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className={`section-spacer ${styles.articlesSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post) => {
              const loc = post[lang];
              const postUrl = pathFor(lang, `/blog/${post.slug}`);

              return (
                <Link key={post.slug} href={postUrl} className={styles.card}>
                  <div className={styles.mediaWrapper}>
                    <img
                      src={post.image}
                      alt={loc.title}
                      className={styles.coverImage}
                      loading="lazy"
                    />
                    <span className={styles.categoryBadge}>{loc.category}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.meta}>
                      <span>{loc.date}</span>
                      <span className={styles.metaDot} />
                      <span>{loc.readTime}</span>
                    </div>

                    <h2 className={styles.cardTitle}>{loc.title}</h2>
                    <p className={styles.cardExcerpt}>{loc.excerpt}</p>

                    <div className={styles.cardFooter}>
                      <span>{lang === 'ru' ? 'Читать статью' : 'Read Article'}</span>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
