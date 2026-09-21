'use client';

import { useEffect } from 'react';
import { type Lang, t } from '@/lib/i18n';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppFloat } from './WhatsAppFloat';

type Props = {
  lang: Lang;
  children: React.ReactNode;
};

export function SiteShell({ lang, children }: Props) {
  const copy = t(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <a href="#main" className="skip-link">{copy.skip}</a>
      <Header lang={lang} />
      <main id="main">{children}</main>
      <Footer lang={lang} />
      <WhatsAppFloat lang={lang} />
    </>
  );
}
