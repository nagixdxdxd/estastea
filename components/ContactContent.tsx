import { t, type Lang } from '@/lib/i18n';
import { SITE } from '@/lib/site';
import styles from './ContactContent.module.css';

type Props = { lang: Lang };

export function ContactContent({ lang }: Props) {
  const copy = t(lang);

  return (
    <div className={styles.contactPage}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="kicker">{copy.nav.contact}</span>
          <h1>{copy.contactTitle}</h1>
          <p>{copy.contactLead}</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-spacer">
        <div className={`container ${styles.grid}`}>
          {/* Left: Contact Details & Channels */}
          <div className={styles.infoCol}>
            <div className={styles.directCard}>
              <span className="kicker">Direct Export Line</span>
              <h2 className={styles.directHeading}>
                {lang === 'ru' ? 'Прямой контакт с экспортом' : 'Direct Export Desk'}
              </h2>
              <p className={styles.directDesc}>
                {lang === 'ru'
                  ? 'Мы находимся на Тайване и оперативно отвечаем в мессенджерах с учётом часового пояса (GMT+8).'
                  : 'Based on Taiwan with direct access to all mountain estates. We reply promptly across all global timezones.'}
              </p>

              <div className={styles.contactChannels}>
                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>💬</div>
                  <div>
                    <span className={styles.channelLabel}>{copy.contactPhone}</span>
                    <a
                      href={SITE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.channelValue}
                    >
                      {SITE.whatsapp}
                    </a>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>✉️</div>
                  <div>
                    <span className={styles.channelLabel}>{copy.contactEmail}</span>
                    <a href={`mailto:${SITE.email}`} className={styles.channelValue}>
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>📍</div>
                  <div>
                    <span className={styles.channelLabel}>
                      {lang === 'ru' ? 'Локация' : 'Location'}
                    </span>
                    <span className={styles.channelText}>
                      Taipei / Nantou, Taiwan (ROC)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Services Box */}
            <div className={styles.b2bBox}>
              <h3>{lang === 'ru' ? 'Что мы предоставляем:' : 'B2B Wholesale Services:'}</h3>
              <ul className={styles.b2bList}>
                <li>
                  ✓ {lang === 'ru' ? 'Образцы нового сбора для титестинга' : 'Harvest fresh cupping samples'}
                </li>
                <li>
                  ✓ {lang === 'ru' ? 'Прямые поставки от 5 кг до контрактных контейнеров' : 'Flexible order lots from 5kg to container freight'}
                </li>
                <li>
                  ✓ {lang === 'ru' ? 'Вакуумная фабричная фасовка на Тайване' : 'Direct origin nitrogen-vacuum sealing'}
                </li>
                <li>
                  ✓ {lang === 'ru' ? 'Полный пакет экспортных сертификатов' : 'Complete phytosanitary & origin export certificates'}
                </li>
              </ul>
            </div>
          </div>

          {/* Right: B2B Quote Request Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <div className={styles.formHead}>
                <span className="kicker">Inquiry Form</span>
                <h2>{lang === 'ru' ? 'Запросить прайс-лист и образцы' : 'Request Price List & Samples'}</h2>
                <p>{copy.formNote}</p>
              </div>

              <form
                className={styles.form}
                action={`https://formsubmit.co/${SITE.email}`}
                method="POST"
              >
                <input type="hidden" name="_subject" value="EstasTea — New B2B Wholesale Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className={styles.formRow}>
                  <label className={styles.fieldLabel}>
                    <span>{copy.formName} *</span>
                    <input type="text" name="name" required placeholder={lang === 'ru' ? 'Иван Иванов' : 'John Doe'} />
                  </label>
                  <label className={styles.fieldLabel}>
                    <span>{copy.formCompany}</span>
                    <input type="text" name="company" placeholder={lang === 'ru' ? 'Чайный бутик / Ресторан' : 'Tea Boutique / Distributor'} />
                  </label>
                </div>

                <div className={styles.formRow}>
                  <label className={styles.fieldLabel}>
                    <span>{copy.formEmail} *</span>
                    <input type="email" name="email" required placeholder="contact@example.com" />
                  </label>
                  <label className={styles.fieldLabel}>
                    <span>{copy.formPhone}</span>
                    <input type="tel" name="phone" placeholder="+1 / +7 / WhatsApp" />
                  </label>
                </div>

                <label className={styles.fieldLabelFull}>
                  <span>{copy.formMessage} *</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={
                      lang === 'ru'
                        ? 'Например: интересует оптовый прайс на высокогорные улуны Алишань и ГАБА для чайного магазина в Москве, ориентировочный объем 20 кг.'
                        : 'e.g. interested in wholesale catalog for Alishan high-mountain oolongs & GABA for our tea boutique.'
                    }
                  />
                </label>

                <div className={styles.formSubmitRow}>
                  <button type="submit" className="btn btn-primary">
                    {copy.formSubmit}
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" />
                    </svg>
                  </button>
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    {copy.whatsapp} Fast Chat
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
