'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { categoryOrder, products } from '@/lib/products';
import { pathFor, switchLocalePath, t, type Lang } from '@/lib/i18n';
import { SITE } from '@/lib/site';
import styles from './Header.module.css';

type Props = { lang: Lang };

const catalogCategories = (lang: Lang) => [
  { href: pathFor(lang, '/catalog'), label: t(lang).dropdown.all, count: String(products.length) },
  ...categoryOrder
    .map((key) => ({
      href: pathFor(lang, `/catalog?cat=${key}`),
      label: t(lang).categories[key],
      count: String(products.filter((p) => p.category === key).length),
    }))
    .filter((c) => c.count !== '0'),
];

export function Header({ lang }: Props) {
  const copy = t(lang);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const otherLang = lang === 'ru' ? 'en' : 'ru';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentQuery(window.location.search);
    }
  }, [pathname]);

  const fullPathWithQuery = currentQuery ? `${pathname}${currentQuery}` : pathname;
  const targetSwitchHref = switchLocalePath(lang, fullPathWithQuery);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navItems = [
    { href: pathFor(lang, '/'), label: copy.nav.home },
    { href: pathFor(lang, '/catalog'), label: copy.nav.catalog, hasDropdown: true },
    { href: pathFor(lang, '/about'), label: copy.nav.about },
    { href: pathFor(lang, '/blog'), label: copy.nav.blog },
    { href: pathFor(lang, '/contact'), label: copy.nav.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top B2B Announcement Strip */}
      <div className={styles.ribbon}>
        <div className={`container ${styles.ribbonInner}`}>
          <div className={styles.ribbonBadge}>
            <span className={styles.pulseDot} />
            <span>{copy.ribbon}</span>
          </div>
          <Link href={pathFor(lang, '/contact')} className={styles.ribbonLink}>
            {copy.ribbonCta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.navbar}>
        <div className={`container ${styles.navInner}`}>
          {/* Brand Logo */}
          <Link href={pathFor(lang, '/')} className={styles.logo} aria-label={copy.brand}>
            <div className={styles.logoMark}>
              <img src="/images/brand/logo.jpg" alt="EstasTea" width={42} height={42} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>{copy.brand}</span>
              <span className={styles.logoTagline}>Formosa High Mountain</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className={styles.dropdownContainer}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${pathname.startsWith(item.href) && item.href !== '/' ? styles.navLinkActive : ''}`}
                  >
                    {item.label}
                    <svg className={styles.chevron} viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.5 4.5L6 8L9.5 4.5" />
                    </svg>
                  </Link>

                  {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      <div className={styles.dropdownHeader}>
                        <span>{copy.nav.catalog}</span>
                      </div>
                      <div className={styles.dropdownList}>
                        {catalogCategories(lang).map((cat) => (
                          <Link key={cat.href} href={cat.href} className={styles.dropdownItem}>
                            <span>{cat.label}</span>
                            <span className={styles.dropdownCount}>{cat.count}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Utility Actions */}
          <div className={styles.actions}>
            {/* Language Switcher Pill */}
            <Link
              href={targetSwitchHref}
              className={styles.langPill}
              aria-label={copy.langLabel}
              title={`Switch to ${otherLang.toUpperCase()}`}
            >
              <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
              <span className={styles.langDivider}>/</span>
              <span className={lang === 'ru' ? styles.langActive : ''}>RU</span>
            </Link>

            {/* Direct WhatsApp Action */}
            <Link
              href={SITE.whatsappHref}
              className={styles.btnWa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.whatsapp}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>{copy.whatsapp}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={open ? copy.close : copy.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`${styles.menuIconBar} ${open ? styles.openTop : ''}`} />
              <span className={`${styles.menuIconBar} ${open ? styles.openBottom : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileHeader}>
            <span className="badge-pill">{copy.brand}</span>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label={copy.close}
            >
              ✕
            </button>
          </div>

          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.mobileNavItem}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileCategories}>
            <span className={styles.mobileCatLabel}>{copy.nav.catalog}</span>
            <div className={styles.mobileCatList}>
              {catalogCategories(lang).map((cat) => (
                <Link key={cat.href} href={cat.href} className={styles.mobileCatLink}>
                  <span>{cat.label}</span>
                  <span className={styles.mobileCatBadge}>{cat.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.mobileFooter}>
            <Link href={targetSwitchHref} className={styles.mobileLangBtn}>
              {copy.langLabel}: <strong>{otherLang.toUpperCase()}</strong>
            </Link>
            <Link href={SITE.whatsappHref} className="btn btn-primary" target="_blank">
              {copy.whatsapp} Direct
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
