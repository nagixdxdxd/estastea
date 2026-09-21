import Link from 'next/link';
import { pathFor, t, type Lang } from '@/lib/i18n';
import { producerCopy, producers } from '@/lib/producers';
import styles from './AboutContent.module.css';

type Props = { lang: Lang };

export const IMG = {
  mountainsOwner: '/images/about/mountains-owner.jpg',
  gardenOwner: '/images/about/garden-owner.jpg',
  gardenSlope: '/images/about/garden-slope.jpg',
  teaRows: '/images/about/tea-rows.jpg',
  heroGarden: '/images/about/hero-garden.jpg',
  fieldTerraces: '/images/about/field-terraces.jpg',
  fieldRowsMountains: '/images/about/field-rows-mountains.jpg',
  fieldPalms: '/images/about/field-palms.jpg',
  fieldPalms2: '/images/about/field-palms-2.jpg',
  fieldPickingSlope: '/images/about/field-picking-slope.jpg',
  leafCloseup: '/images/about/leaf-closeup.jpg',
  travelTaiwan: '/images/about/travel-taiwan.jpg',
  producerGarden: '/images/about/producer-garden.jpg',
  producerWorkshop: '/images/about/producer-workshop.jpg',
  producerMeeting: '/images/about/producer-meeting.jpg',
  withering: '/images/about/fresh-leaf-withering.jpg',
  leafCheck: '/images/about/fresh-leaf-check.jpg',
  tasting: '/images/about/tasting-producer.jpg',
  drySelection: '/images/about/dry-leaf-selection.jpg',
  finishedTea: '/images/products/emperor.jpg',
};

const strip = [
  { src: IMG.mountainsOwner, ru: 'В горах Тайваня', en: 'In the mountains of Taiwan' },
  { src: IMG.fieldPickingSlope, ru: 'Сбор на горном склоне', en: 'Picking on a mountain slope' },
  { src: IMG.leafCloseup, ru: 'Свежий лист перед сбором', en: 'Fresh leaf before picking' },
  { src: IMG.fieldPalms2, ru: 'Чайные ряды в горах', en: 'Tea rows in the mountains' },
];


export const copyBlocks = {
  ru: {
    heroKicker: 'О нас',
    heroTitle: ['Некоторые чаи легко найти.', 'Для других нужно быть здесь.'],
    heroLead: 'Отбор тайваньского чая для международных B2B-клиентов.',

    advantageKicker: 'Преимущество Тайваня',
    advantageTitle: 'Быть здесь — значит видеть больше.',
    advantageBody: [
      'Мы живём и работаем на Тайване. Мы не заказываем чай по каталогу и не ждём образцы по почте — мы поднимаемся в горы к производителю в сезон сбора и видим лист до того, как он станет партией.',
      'Это меняет всё: мы знаем, каким был год, как прошла погода, что происходит на производстве прямо сейчас. И мы отвечаем за то, что предлагаем, потому что были там сами.',
    ],
    advantageCaption: 'Между сборами',

    fourKicker: 'Что это даёт',
    fourTitle: 'Четыре преимущества',
    four: [
      { title: 'Мы рядом с источником', text: 'Производство в нескольких часах езды, а не в другом полушарии.' },
      { title: 'Мы знаем людей', text: 'Прямые отношения с производителями, выстроенные годами.' },
      { title: 'Мы пробуем до того, как предложить', text: 'Ни одна позиция не попадает в ассортимент без дегустации.' },
      { title: 'Мы видим, что происходит сейчас', text: 'Сезон, погода, состояние сада — информация из первых рук.' },
    ],

    networkKicker: '100+ производителей',
    networkTitle: 'Сеть, построенная по одному знакомству за раз.',
    networkLead:
      'Мы работаем напрямую с фермерскими хозяйствами в основных чайных регионах Тайваня. Ниже — регионы нашей сети, без точных адресов производителей.',
    regionsLabel: 'Регионы нашей сети',
    regionPhotos: [
      { src: IMG.fieldPalms, caption: 'Высокогорный чайный сад' },
      { src: IMG.teaRows, caption: 'Ряды чайных кустов' },
      { src: IMG.fieldTerraces, caption: 'Чайные террасы в горах' },
    ],

    peopleKicker: 'О наших мастерах',
    peopleTitle: 'Чай не создают каталоги. Его создают люди.',
    peopleLead: [
      'Рассказать обо всех мастерах, с которыми мы работаем, в формате одного сайта практически невозможно — за каждым из них стоит своя большая и очень интересная история.',
      'Но есть несколько мастеров, с которыми мы особенно тесно работаем и о которых, на наш взгляд, вам стоит узнать.',
    ],
    peopleCta: 'Познакомиться',
    beyondKicker: 'Больше, чем бизнес',
    beyondTitle: 'Некоторые отношения становятся чем-то большим.',
    beyondCaption: 'Настоящие отношения, выстроенные годами, — а не просто сделки.',
    beyondPhotos: [
      { src: IMG.travelTaiwan, caption: 'Путешествуем по Тайваню с Мастером Джеком' },
      { src: IMG.producerMeeting, caption: 'Встреча с давним партнёром' },
      { src: IMG.producerGarden, caption: 'В чайном саду с производителем' },
    ],

    selectKicker: 'Как мы отбираем',
    selectTitle: 'Мы не просто покупаем чай. Мы его выбираем.',
    steps: [
      { label: 'Источник', src: IMG.fieldRowsMountains, caption: 'Чайный сад производителя' },
      { label: 'Дегустация', src: IMG.drySelection, caption: 'Пробуем на месте' },
      { label: 'Отбор', src: IMG.leafCheck, caption: 'Оцениваем лист' },
      { label: 'Ассортимент', src: IMG.finishedTea, caption: 'Готовая партия' },
    ],

    askKicker: 'Ищете то, чего пока не нашли?',
    askTitle: 'Спросите того, кто уже находится на месте.',
    askBody:
      'Если нужной позиции нет в каталоге — напишите нам. Мы на Тайване, у нас есть доступ к производителям напрямую, и часто найти нужный чай — это вопрос одного разговора в горах.',
    askCaption: 'Внутри чайного производства',
    askCta: 'Связаться с нами',

    whyKicker: 'Почему мы',
    whyTitle: 'Почему работают с нами',
    why: ['На Тайване', 'Прямые отношения', 'Отобранный ассортимент', 'Опыт в B2B', 'Локальный доступ'],

    finalTitle: ['Из гор Тайваня —', 'в ваш бизнес.'],
    finalPrimary: 'Посмотреть чаи',
    finalSecondary: 'Связаться с нами',

    stripKicker: 'Наш Тайвань',
  },
  en: {
    heroKicker: 'About us',
    heroTitle: ['Some teas are easy to find.', 'Some require being there.'],
    heroLead: 'Taiwan-based tea sourcing for international B2B customers.',

    advantageKicker: 'The Taiwan advantage',
    advantageTitle: 'Being here changes everything.',
    advantageBody: [
      'We live and work in Taiwan. We do not order tea from a catalogue or wait for samples by post — we drive up into the mountains during harvest and see the leaf before it becomes a lot.',
      'That changes everything: we know how the year went, how the weather behaved, what is happening at the factory right now. And we stand behind what we offer, because we were there ourselves.',
    ],
    advantageCaption: 'Between harvests',

    fourKicker: 'What it means for you',
    fourTitle: 'Four advantages',
    four: [
      { title: 'We are close to the source', text: 'The farms are a few hours away, not a hemisphere away.' },
      { title: 'We know the people', text: 'Direct relationships with producers, built over years.' },
      { title: 'We taste before we offer', text: 'Nothing enters the range without being cupped first.' },
      { title: 'We see what is happening now', text: 'Season, weather, the state of the garden — first-hand.' },
    ],

    networkKicker: '100+ producers',
    networkTitle: 'A network built one relationship at a time.',
    networkLead:
      'We work directly with family farms across Taiwan’s major tea-growing regions. Below are the regions we source from — without the exact locations of our producers.',
    regionsLabel: 'Regions we source from',
    regionPhotos: [
      { src: IMG.fieldPalms, caption: 'High-mountain tea garden' },
      { src: IMG.teaRows, caption: 'Rows of tea bushes' },
      { src: IMG.fieldTerraces, caption: 'Tea terraces in the mountains' },
    ],

    peopleKicker: 'About our masters',
    peopleTitle: 'Tea is not made by catalogues. It is made by people.',
    peopleLead: [
      'Telling the story of every master we work with would be all but impossible on a single website — behind each of them stands a long and genuinely interesting story of their own.',
      'But there are a few masters we work with especially closely, and who we believe are worth knowing about.',
    ],
    peopleCta: 'View profile',
    beyondKicker: 'Beyond business',
    beyondTitle: 'Some relationships become something more.',
    beyondCaption: 'Real relationships built over years — not just transactions.',
    beyondPhotos: [
      { src: IMG.travelTaiwan, caption: 'Travelling around Taiwan with Master Jack' },
      { src: IMG.producerMeeting, caption: 'Meeting a long-term partner' },
      { src: IMG.producerGarden, caption: 'In the tea garden with a producer' },
    ],

    selectKicker: 'How we select',
    selectTitle: 'We don’t just buy tea. We choose it.',
    steps: [
      { label: 'Source', src: IMG.fieldRowsMountains, caption: 'The producer’s tea garden' },
      { label: 'Taste', src: IMG.drySelection, caption: 'Cupping on site' },
      { label: 'Select', src: IMG.leafCheck, caption: 'Evaluating the leaf' },
      { label: 'Offer', src: IMG.finishedTea, caption: 'The finished lot' },
    ],

    askKicker: 'Something you haven’t found yet?',
    askTitle: 'Ask someone who is already there.',
    askBody:
      'If what you need is not in the catalogue, write to us. We are in Taiwan with direct access to producers, and finding the right tea is often a single conversation up in the mountains.',
    askCaption: 'Inside a tea factory',
    askCta: 'Contact us',

    whyKicker: 'Why us',
    whyTitle: 'Why work with us',
    why: ['Taiwan-based', 'Direct relationships', 'Selected range', 'B2B experience', 'Local access'],

    finalTitle: ['From the mountains of Taiwan', 'to your business.'],
    finalPrimary: 'Explore our teas',
    finalSecondary: 'Contact us',

    stripKicker: 'Our Taiwan',
  },
} as const;

const TAIWAN_PATH =
  'M148.6,11.8 L167.5,27.5 L185.5,39.5 L174.7,65.3 L178.3,76.4 L155.8,127.1 L155.8,133.6 ' +
  'L134.2,214.8 L113.5,247 L91,283.9 L86.5,325.4 L74.8,311.6 L59.5,282.1 L50.5,272.9 ' +
  'L23.5,224 L21.7,189 L21.7,159.4 L46,127.1 L56.8,104.1 L77.5,76.4 L91,55.2 L104.5,34.9 L136,22.9 Z';

const MAP_MARKERS = [
  { n: 1, x: 112, y: 105 },
  { n: 2, x: 78, y: 188 },
  { n: 3, x: 93, y: 170 },
  { n: 4, x: 71, y: 156 },
];

export function AboutContent({ lang }: Props) {
  const copy = t(lang);
  const c = copyBlocks[lang];
  const regions = copy.terroirs;

  return (
    <div className={styles.aboutPage}>
      {/* 1. HERO */}
      <section className={styles.hero}>
        <img className={styles.heroImg} src={IMG.heroGarden} alt="Taiwan high mountain tea garden" fetchPriority="high" />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroKicker}>{c.heroKicker}</span>
          <h1 className={styles.heroTitle}>
            {c.heroTitle[0]}
            <br />
            <em>{c.heroTitle[1]}</em>
          </h1>
          <p className={styles.heroLead}>{c.heroLead}</p>
        </div>
      </section>

      {/* 2. THE TAIWAN ADVANTAGE */}
      <section className="section-spacer">
        <div className={`container ${styles.splitGrid}`}>
          <figure className={`${styles.splitFigure} ${styles.figureLandscape}`}>
            <img src={IMG.gardenOwner} alt={c.advantageCaption} loading="lazy" />
            <figcaption>{c.advantageCaption}</figcaption>
          </figure>
          <div className={styles.splitProse}>
            <span className="kicker">{c.advantageKicker}</span>
            <h2 className={styles.sectionTitle}>{c.advantageTitle}</h2>
            {c.advantageBody.map((p) => (
              <p key={p} className={styles.bodyPara}>
                {p}
              </p>
            ))}
            <div className={styles.ctaRow}>
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

      {/* 3. FOUR ADVANTAGES + photo strip */}
      <section className={`section-spacer ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{c.fourKicker}</span>
            <h2 className={styles.sectionTitle}>{c.fourTitle}</h2>
          </div>
          <div className={styles.fourGrid}>
            {c.four.map((item, i) => (
              <div key={item.title} className={styles.fourItem}>
                <span className={styles.fourIndex}>0{i + 1}</span>
                <h3 className={styles.fourTitle}>{item.title}</h3>
                <p className={styles.fourText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stripWrap}>
          <span className={`kicker ${styles.stripKicker}`}>{c.stripKicker}</span>
          <div className={styles.marquee}>
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className={styles.marqueeTrack} aria-hidden={copyIndex === 1}>
                {strip.map((photo) => (
                  <figure key={photo.src} className={styles.photoCard}>
                    <img src={photo.src} alt={lang === 'ru' ? photo.ru : photo.en} loading="lazy" />
                    <figcaption className={styles.photoCaption}>{lang === 'ru' ? photo.ru : photo.en}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 100+ PRODUCERS */}
      <section className="section-spacer">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{c.networkKicker}</span>
            <h2 className={styles.sectionTitle}>{c.networkTitle}</h2>
            <p className={styles.sectionLead}>{c.networkLead}</p>
          </div>

          <div className={styles.mapGrid}>
            <div className={styles.mapCard}>
              <svg viewBox="0 0 200 340" className={styles.mapSvg} role="img" aria-label="Taiwan tea regions">
                <path className={styles.mapShape} d={TAIWAN_PATH} />
                {MAP_MARKERS.map((m) => (
                  <g key={m.n}>
                    <circle className={styles.mapPulse} cx={m.x} cy={m.y} r="13" />
                    <circle className={styles.mapDot} cx={m.x} cy={m.y} r="8" />
                    <text className={styles.mapNum} x={m.x} y={m.y + 3.2} textAnchor="middle">
                      {m.n}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className={styles.regionList}>
              <span className={styles.regionListLabel}>{c.regionsLabel}</span>
              {regions.map((r, i) => (
                <div key={r.name} className={styles.regionRow}>
                  <span className={styles.regionNum}>{i + 1}</span>
                  <div>
                    <div className={styles.regionName}>
                      {r.name} <span className={styles.regionAlt}>{r.alt}</span>
                    </div>
                    <div className={styles.regionDesc}>{r.desc}</div>
                  </div>
                </div>
              ))}
              <div className={styles.statsRow}>
                {copy.stats.map((s) => (
                  <div key={s.label} className={styles.statCard}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.regionPhotos}>
            {c.regionPhotos.map((p) => (
              <figure key={p.caption} className={styles.regionPhoto}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PEOPLE BEHIND THE TEA */}
      <section className={`section-spacer ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{c.peopleKicker}</span>
            <h2 className={styles.sectionTitle}>{c.peopleTitle}</h2>
            {c.peopleLead.map((paragraph) => (
              <p key={paragraph} className={styles.sectionLead}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.producerGrid}>
            {producers.map((producer) => {
              const pc = producerCopy(producer, lang);
              const cardImage = producer.portrait ?? producer.photos[0]?.src;
              return (
                <Link
                  key={producer.slug}
                  href={pathFor(lang, `/about/${producer.slug}`)}
                  className={`${styles.producerCard} ${cardImage ? '' : styles.producerCardPlain}`}
                >
                  {cardImage && (
                    <div className={styles.producerMedia}>
                      <img src={cardImage} alt={pc.name} loading="lazy" />
                    </div>
                  )}
                  <div className={styles.producerBody}>
                    <h3 className={styles.producerName}>{pc.name}</h3>
                    <div className={styles.producerRegion}>{pc.region}</div>
                    <div className={styles.producerTeas}>{pc.teas}</div>
                    <p className={styles.producerTeaser}>{pc.teaser}</p>
                    <span className={styles.producerLink}>{c.peopleCta} &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BEYOND BUSINESS */}
      <section className={`section-spacer ${styles.tintSection}`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{c.beyondKicker}</span>
            <h2 className={styles.sectionTitle}>{c.beyondTitle}</h2>
          </div>
          <div className={styles.collage}>
            {c.beyondPhotos.map((p) => (
              <figure key={p.caption} className={styles.collageItem}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className={styles.collageNote}>{c.beyondCaption}</p>
        </div>
      </section>

      {/* 8. HOW WE SELECT */}
      <section className="section-spacer">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{c.selectKicker}</span>
            <h2 className={styles.sectionTitle}>{c.selectTitle}</h2>
          </div>
          <ol className={styles.process}>
            {c.steps.map((step, i) => (
              <li key={step.label} className={styles.processStep}>
                <div className={styles.processMedia}>
                  <img src={step.src} alt={step.caption} loading="lazy" />
                </div>
                <span className={styles.processIndex}>0{i + 1}</span>
                <h3 className={styles.processLabel}>{step.label}</h3>
                <p className={styles.processCaption}>{step.caption}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. ASK SOMEONE WHO IS ALREADY THERE */}
      <section className={`section-spacer ${styles.tintSection}`}>
        <div className={`container ${styles.splitGrid}`}>
          <figure className={`${styles.splitFigure} ${styles.figurePortrait}`}>
            <img src={IMG.withering} alt={c.askCaption} loading="lazy" />
            <figcaption>{c.askCaption}</figcaption>
          </figure>
          <div className={styles.splitProse}>
            <span className="kicker">{c.askKicker}</span>
            <h2 className={styles.sectionTitle}>{c.askTitle}</h2>
            <p className={styles.bodyPara}>{c.askBody}</p>
            <div className={styles.ctaRow}>
              <Link href={pathFor(lang, '/contact')} className="btn btn-primary">
                {c.askCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHY WORK WITH US */}
      <section className="section-spacer">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="kicker">{c.whyKicker}</span>
            <h2 className={styles.sectionTitle}>{c.whyTitle}</h2>
          </div>
          <ul className={styles.whyList}>
            {c.why.map((item, i) => (
              <li key={item} className={styles.whyItem}>
                <span className={styles.whyIndex}>0{i + 1}</span>
                <span className={styles.whyLabel}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className={styles.finalCta}>
        <img className={styles.finalImg} src={IMG.gardenSlope} alt="Taiwan tea mountains" loading="lazy" />
        <div className={styles.finalOverlay} />
        <div className={`container ${styles.finalInner}`}>
          <h2 className={styles.finalTitle}>
            {c.finalTitle[0]}
            <br />
            <em>{c.finalTitle[1]}</em>
          </h2>
          <div className={styles.finalCtas}>
            <Link href={pathFor(lang, '/catalog')} className="btn btn-gold">
              {c.finalPrimary}
            </Link>
            <Link href={pathFor(lang, '/contact')} className="btn btn-outline-white">
              {c.finalSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
