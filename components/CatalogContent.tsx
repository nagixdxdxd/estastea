'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { t, type Lang } from '@/lib/i18n';
import { categoryOrder, products, type Category } from '@/lib/products';
import styles from './CatalogContent.module.css';

type Props = { lang: Lang };

const categories: { key: Category | 'all'; count: number }[] = [
  { key: 'all', count: products.length },
  ...categoryOrder
    .map((key) => ({ key, count: products.filter((p) => p.category === key).length }))
    .filter((c) => c.count > 0),
];

export function CatalogContent({ lang }: Props) {
  const copy = t(lang);
  const searchParams = useSearchParams();
  const catParam = searchParams.get('cat');

  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (catParam && (categoryOrder as string[]).includes(catParam)) {
      setActiveCategory(catParam as Category);
    }
  }, [catParam]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const loc = product[lang];
        const matchName = loc.name.toLowerCase().includes(query);
        const matchSubtitle = loc.subtitle.toLowerCase().includes(query);
        const matchOrigin = loc.origin.toLowerCase().includes(query);
        const matchNotes = loc.notes.toLowerCase().includes(query);
        const matchStyle = loc.style.toLowerCase().includes(query);
        return matchName || matchSubtitle || matchOrigin || matchNotes || matchStyle;
      }

      return true;
    });
  }, [activeCategory, searchQuery, lang]);

  const getCategoryLabel = (cat: Category | 'all') => {
    if (cat === 'all') return copy.catalogAll;
    return copy.categories[cat];
  };

  return (
    <div className={styles.catalogWrapper}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="kicker">{copy.nav.catalog}</span>
          <h1>{copy.catalogTitle}</h1>
          <p>{copy.catalogLead}</p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className={styles.controlsSection}>
        <div className="container">
          <div className={styles.controlsBar}>
            {/* Category Filter Tabs */}
            <div className={styles.categoryTabs} role="tablist" aria-label={copy.catalogFilter}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.key}
                  className={`${styles.tabBtn} ${activeCategory === cat.key ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <span>{getCategoryLabel(cat.key)}</span>
                  <span className={styles.tabCount}>{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className={styles.searchBox}>
              <svg className={styles.searchIcon} viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="9" r="6" />
                <path d="M14 14L18 18" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={copy.searchPlaceholder}
                className={styles.searchInput}
                aria-label={copy.searchPlaceholder}
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className={styles.summaryBar}>
            <span className={styles.resultCount}>
              {copy.showingCount}: <strong>{filteredProducts.length}</strong> {lang === 'ru' ? 'из' : 'of'} {products.length}
            </span>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                className={styles.resetBtn}
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                {copy.resetFilter} ↺
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="grid-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} lang={lang} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🍵</div>
              <h3>{copy.noResults}</h3>
              <p>{lang === 'ru' ? 'Попробуйте изменить категорию или поисковый запрос' : 'Try searching for another tea name, terroir or flavor note'}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              >
                {copy.resetFilter}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
