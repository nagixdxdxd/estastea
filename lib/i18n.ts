export type Lang = 'ru' | 'en';

export const defaultLang: Lang = 'en';
export const languages: Record<Lang, string> = { en: 'EN', ru: 'RU' };

export function pathFor(lang: Lang, path = '/'): string {
  const [pathnamePart, ...rest] = path.split('?');
  const queryPart = rest.length > 0 ? `?${rest.join('?')}` : '';
  const clean = pathnamePart === '/' ? '/' : `/${pathnamePart.replace(/^\/+|\/+$/g, '')}`;
  if (lang === 'ru') {
    return clean === '/' ? `/ru${queryPart}` : `/ru${clean}${queryPart}`;
  }
  return `${clean}${queryPart}`;
}

export function switchLocalePath(lang: Lang, pathname: string): string {
  const [pathnamePart, ...rest] = pathname.split('?');
  const queryPart = rest.length > 0 ? `?${rest.join('?')}` : '';
  const withoutLocale = pathnamePart.replace(/^\/(ru|en)(?=\/|$)/, '') || '/';
  const next: Lang = lang === 'en' ? 'ru' : 'en';
  return pathFor(next, `${withoutLocale}${queryPart}`);
}

export const ui = {
  en: {
    brand: 'EstasTea',
    ribbon: 'Direct Sourcing from Taiwan Highlands · B2B & Wholesale',
    ribbonCta: 'Request Catalog',
    nav: {
      home: 'Home',
      catalog: 'Tea',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
    },
    dropdown: {
      all: 'All Teas',
      oolong: 'High-Mountain Oolong',
      gaba: 'GABA Tea',
      puerh: 'Aged Pu-erh',
    },
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
    heroKicker: 'Direct Sourcing · Taiwan Highlands',
    heroTitle: 'Timeless Taste. Ancient Roots. Island Craft.',
    heroSubtitle:
      'Authentic alpine oolongs, certified GABA, and cellar pu-erh for tea shops, importers, and private brands.',
    heroCta: 'Explore Teas',
    heroSecondary: 'B2B Terms',
    whatsapp: 'WhatsApp',
    searchPlaceholder: 'Search by tea name, notes or origin...',
    showingCount: 'Showing teas',
    noResults: 'No teas found matching your criteria',
    resetFilter: 'Reset filters',
    terroirsTitle: 'High-Mountain Terroirs',
    terroirsSubtitle: 'Subalpine microclimates and multigenerational family mastery.',
    terroirs: [
      { name: 'Lishan', alt: '2,200–2,600 m', desc: 'Subalpine crispness, green apple and orchid bouquet' },
      { name: 'Alishan', alt: '1,200–1,600 m', desc: 'Highland mist, creamy mouthfeel, sweet floral finish' },
      { name: 'Shan Lin Xi', alt: '1,600–1,900 m', desc: 'Pristine bamboo forest air, fir pine notes' },
      { name: 'Dong Ding', alt: '600–900 m', desc: 'Charcoal roast, honeyed roasted nutty depth' },
    ],
    selectionKicker: 'Our Selection',
    selectionTitle:
      'GABA tea, high-mountain oolongs, aged teas and rare collectible positions for tea shops, distributors and private brands worldwide.',
    selectionTerroirsTitle: 'Direct Access to Taiwan’s Premier Tea Terroirs',
    selectionTerroirsText:
      'Working directly with artisan producers from Alishan, Lishan, Shan Lin Xi, Dong Ding and other renowned mountain regions across the island.',
    selectionAgedTitle: 'Rare Aged & Vintage Collectible Teas',
    selectionCuppingTitle: 'Direct Cupping Expertise & Quality Control',
    newArrivalsKicker: 'Fresh In',
    newArrivalsTitle: 'New Arrivals',
    newArrivalsSubtitle: 'Lots that have just joined our range — straight from the mountain gardens.',
    featuredTitle: 'This Season’s Harvest',
    featuredSubtitle: 'Fresh alpine pickings and collector lots for professional cupping.',
    viewAll: 'All Teas',
    viewProduct: 'Details',
    wholesaleOnly: 'Wholesale Only',
    limited: 'Limited',
    status: { new: 'New', seasonal: 'Seasonal', 'sold-out': 'Sold out' },
    aboutTitle: 'About EstasTea',
    aboutLead: 'Over a decade based in Taiwan, working directly with artisan growers.',
    aboutBody:
      'We secure fresh harvest lots directly from Alishan, Lishan, Shan Lin Xi, and Dong Ding. Guaranteed harvest freshness, single-estate traceability, and origin pricing.',
    aboutCta: 'Our Story',
    stats: [
      { value: '100+', label: 'Artisan Farms' },
      { value: '10+', label: 'Years in Taiwan' },
      { value: '15', label: 'Years Cupping' },
      { value: '2600m', label: 'Peak Elevation' },
    ],
    pillarsTitle: 'Why Partner with EstasTea',
    pillars: [
      {
        title: 'Direct Farm-Gate Access',
        text: 'Direct sourcing from Formosa family gardens without middlemen markups or storage delays.',
      },
      {
        title: 'Rigorous Cupping QC',
        text: 'Strict organoleptic testing for leaf density, infusion clarity, and multi-steep endurance.',
      },
      {
        title: 'Seasonal Freshness',
        text: 'Fresh spring and winter pickings shipped promptly to preserve delicate aromatics.',
      },
      {
        title: 'Rare & Aged Selections',
        text: 'High-potency GABA, competition lots, and genuine Taiwan cellar-stored aged pu-erh.',
      },
    ],
    videoTitle: 'Artisanal Craft',
    videoCaption: 'Hand-plucking on cloud-shrouded terraces and traditional processing.',
    reviewTitle: 'Client Testimonial',
    reviewQuote:
      'Mountain tea of exceptional quality, sourced directly from dedicated farmers. Highly recommended.',
    reviewAuthor: 'Yuri Delyagin',
    reviewMeta: 'Tea Master & Wholesale Partner',
    ctaTitle: 'Request Wholesale Pricing & Samples',
    ctaText:
      'Tell us about your project: we will prepare custom lot offerings, sample kits, and logistics.',
    ctaButton: 'Request B2B Access',
    catalogTitle: 'Taiwan Artisan Tea Collection',
    catalogLead:
      'High-mountain oolongs, certified GABA, and cellar-stored pu-erh for tea rooms, retailers, and distributors.',
    catalogFilter: 'Tea Category',
    catalogAll: 'All Teas',
    origin: 'Origin Terroir',
    cultivar: 'Cultivar',
    altitude: 'Elevation',
    style: 'Craft & Oxidation',
    notes: 'Cup Profile',
    storage: 'Storage',
    year: 'Harvest / Vintage',
    brewing: 'Gongfu Brewing Guide',
    requestPrice: 'Request Wholesale Price',
    related: 'More from This Terroir',
    notFound: 'Tea Not Found',
    backCatalog: 'Back to Teas',
    aboutPageTitle: 'About EstasTea',
    aboutPageLead: 'Direct connection to Taiwan’s premier high-mountain tea growers with single-estate traceability.',
    blogPageTitle: 'Tea Journal & Guides',
    blogPageLead:
      'Articles on Taiwanese high-mountain tea terroirs, GABA tea science, oxidation, and direct farm sourcing.',
    contactTitle: 'Contact & Wholesale Inquiries',
    contactLead: 'Connect directly with our Taiwan export desk on WhatsApp or via form for current harvest pricing and samples.',
    contactPhone: 'Phone / WhatsApp (Taiwan)',
    contactEmail: 'Email',
    formName: 'Your Name',
    formCompany: 'Company / Brand Name',
    formEmail: 'Business Email',
    formPhone: 'Phone / Messenger',
    formMessage: 'Teas of interest, estimated volumes, and shipping destination',
    formSubmit: 'Submit Wholesale Inquiry',
    formNote: 'Our team replies within 24 hours with our complete PDF export catalog and price list.',
    formSuccess: 'Thank you! Your inquiry has been received. We will get back to you shortly.',
    footerTagline: 'Premium Taiwanese high-mountain tea sourced directly from origin. Wholesale, export & private label.',
    footerQuality: 'Quality Standard',
    footerQualityText: 'Certified high-mountain Formosa estates with strict tracking from harvest to shipment.',
    footerContact: 'Export Inquiries',
    footerCopy: '© 2026 EstasTea. Taiwan High Mountain Tea Direct. All rights reserved.',
    skip: 'Skip to main content',
    openMenu: 'Open navigation',
    categories: {
      'gaba-oolong': 'GABA Oolong',
      'light-oolong': 'Light Oolong',
      'dark-oolong': 'Dark Oolong',
      'dong-ding': 'Dong Ding',
      red: 'Red Tea',
      white: 'White Tea',
      aged: 'Aged Tea',
      competition: 'Competition Tea',
      'gaba-special': 'GABA Special Collection',
      'shu-puerh': 'Shu Pu-erh',
      'collectible-puerh': 'Collectible Pu-erh',
    },
    seo: {
      homeTitle: 'Premium Taiwanese Tea | Direct Wholesale & B2B | EstasTea',
      homeDesc:
        'Direct supply of Taiwanese high-mountain tea from 100+ artisan farmers. Wholesale oolong, GABA, and aged pu-erh.',
      catalogTitle: 'Taiwan Tea Collection | EstasTea',
      catalogDesc:
        'High-mountain oolongs, GABA teas and Taiwan-stored pu-erh. Wholesale, samples and price list on request.',
      aboutTitle: 'About EstasTea | Direct Taiwan Tea Importers',
      aboutDesc:
        'More than a decade in Taiwan. Direct sourcing from Alishan, Lishan, Shan Lin Xi and Dong Ding farmers.',
      blogTitle: 'Tea Journal & Guides | Taiwanese Tea Insights | EstasTea',
      blogDesc:
        'Articles on Taiwanese high-mountain tea terroirs, GABA tea science, oxidation, and direct farm sourcing.',
      contactTitle: 'Contact & Price List | EstasTea',
      contactDesc: 'Reach EstasTea: WhatsApp +886 900 783 530, info@estastea.com.',
    },
  },
  ru: {
    brand: 'EstasTea',
    ribbon: 'Прямой импорт с чайных садов Тайваня · B2B и опт',
    ribbonCta: 'Запросить прайс',
    nav: {
      home: 'Главная',
      catalog: 'Чай',
      about: 'О нас',
      blog: 'Блог',
      contact: 'Контакты',
    },
    dropdown: {
      all: 'Весь чай',
      oolong: 'Высокогорные улуны',
      gaba: 'ГАБА чай',
      puerh: 'Выдержанный пуэр',
    },
    menu: 'Меню',
    close: 'Закрыть',
    langLabel: 'Язык',
    heroKicker: 'Прямой импорт · Высокогорья Тайваня',
    heroTitle: 'Вкус, не подвластный времени. Корни, уходящие в века. Мастерство Тайваня.',
    heroSubtitle:
      'Аутентичные высокогорные улуны, ГАБА и выдержанный пуэр для чайных клубов, бутиков и ресторанов.',
    heroCta: 'Смотреть чай',
    heroSecondary: 'Условия B2B',
    whatsapp: 'WhatsApp',
    searchPlaceholder: 'Поиск по названию, нотам или региону...',
    showingCount: 'Показано позиций',
    noResults: 'По вашему запросу ничего не найдено',
    resetFilter: 'Сбросить фильтр',
    terroirsTitle: 'Горные терруары',
    terroirsSubtitle: 'Уникальный микроклимат и традиции фермерских династий.',
    terroirs: [
      { name: 'Лишань (Lishan)', alt: '2200–2600 м', desc: 'Кристальная чистота, яблонево-цветочный букет' },
      { name: 'Алишань (Alishan)', alt: '1200–1600 м', desc: 'Сливочная плотность, сладкое цветочное послевкусие' },
      { name: 'Шань Линь Си (Shan Lin Xi)', alt: '1600–1900 м', desc: 'Хвойный горный воздух, свежесть бамбукового леса' },
      { name: 'Дун Дин (Dong Ding)', alt: '600–900 м', desc: 'Классический прогрев на углях, орехово-медовый тон' },
    ],
    selectionKicker: 'Наша подборка',
    selectionTitle:
      'ГАБА чай, высокогорные улуны, выдержанные чаи и редкие коллекционные позиции для чайных магазинов, дистрибьюторов и частных брендов по всему миру.',
    selectionTerroirsTitle: 'Прямой доступ к лучшим чайным регионам Тайваня',
    selectionTerroirsText:
      'Работаем напрямую с производителями из Алишань, Лишань, Шань Линь Си, Дун Дин и других известных чайных регионов острова',
    selectionAgedTitle: 'Редкие выдержанные и коллекционные чаи',
    selectionCuppingTitle: 'Экспертиза и контроль качества',
    newArrivalsKicker: 'Свежее поступление',
    newArrivalsTitle: 'Новинки',
    newArrivalsSubtitle: 'Позиции, которые только появились в нашем ассортименте — прямо с горных садов.',
    featuredTitle: 'Сборы этого сезона',
    featuredSubtitle: 'Свежие горные сборы и редкие коллекционные лоты.',
    viewAll: 'Весь ассортимент',
    viewProduct: 'Подробнее',
    wholesaleOnly: 'Только опт',
    limited: 'Лимит сезона',
    status: { new: 'Новинка', seasonal: 'Сезонный', 'sold-out': 'Sold out' },
    aboutTitle: 'О компании EstasTea',
    aboutLead: 'Более 10 лет мы работаем на Тайване напрямую с чайными мастерами.',
    aboutBody:
      'Закупаем свежий лист без посредников в Алишане, Лишане, Шань Линь Си и Дун Дине. Гарантия свежести, чистоты и прозрачной цены для B2B-партнёров.',
    aboutCta: 'О компании',
    stats: [
      { value: '100+', label: 'Фермерских хозяйств' },
      { value: '10+', label: 'Лет на Тайване' },
      { value: '15', label: 'Лет экспертизы' },
      { value: '2600м', label: 'Высота сбора' },
    ],
    pillarsTitle: 'Преимущества работы с нами',
    pillars: [
      {
        title: 'Прямой доступ к садам',
        text: 'Закупка у фермеров без посредников и долгого хранения.',
      },
      {
        title: 'Контроль качества',
        text: 'Органолептическая проверка плотности листа и чистоты настоя.',
      },
      {
        title: 'Свежесть сборов',
        text: 'Поставки весенних и зимних сборов небольшими свежими лотами.',
      },
      {
        title: 'Редкие лоты и пуэр',
        text: 'Высокоактивная ГАБА и выдержанный чай сухого хранения.',
      },
    ],
    videoTitle: 'Производство чая',
    videoCaption: 'Сбор урожая на высокогорных террасах и традиционная ферментация.',
    reviewTitle: 'Отзывы клиентов',
    reviewQuote:
      'Горный чай исключительного качества, напрямую от преданных фермеров. Рекомендую.',
    reviewAuthor: 'Юрий Делягин',
    reviewMeta: 'Чайный эксперт и партнер',
    ctaTitle: 'Запросите оптовый прайс-лист',
    ctaText:
      'Подберём сорта под ваш формат, предоставим образцы и согласуем доставку.',
    ctaButton: 'Оформить заявку',
    catalogTitle: 'Коллекция тайваньского чая',
    catalogLead:
      'Высокогорные улуны, ГАБА с подтверждённым содержанием кислоты и выдержанный пуэр для чайных клубов и дистрибьюторов.',
    catalogFilter: 'Категория чая',
    catalogAll: 'Все сорта',
    origin: 'Происхождение',
    cultivar: 'Культивар',
    altitude: 'Высота плантации',
    style: 'Технология / Стиль',
    notes: 'Вкусовой профиль',
    storage: 'Условия хранения',
    year: 'Сезон / Год сбора',
    brewing: 'Рекомендации по завариванию',
    requestPrice: 'Запросить оптовую цену',
    related: 'Похожие позиции из этого терруара',
    notFound: 'Позиция не найдена',
    backCatalog: 'Назад к чаю',
    aboutPageTitle: 'О компании EstasTea',
    aboutPageLead: 'Прямой мост между тайваньскими высокогорными хозяйствами и чайными проектами по всему миру.',
    blogPageTitle: 'Чайный блог и статьи',
    blogPageLead:
      'Статьи о чайных регионах Тайваня, свойствах ГАБА чая, степени ферментации улунов и прямых поставках от фермеров.',
    contactTitle: 'Контакты и B2B отдел',
    contactLead: 'Свяжитесь с нами в WhatsApp или отправьте форму — мы оперативно вышлем актуальный прайс-лист и условия поставки.',
    contactPhone: 'Телефон / WhatsApp Тайвань',
    contactEmail: 'Электронная почта',
    formName: 'Ваше имя',
    formCompany: 'Название компании / проекта',
    formEmail: 'Email',
    formPhone: 'Телефон / Мессенджер',
    formMessage: 'Интересующие сорта, объёмы и город доставки',
    formSubmit: 'Отправить запрос на прайс-лист',
    formNote: 'Мы отвечаем в течение 24 часов в рабочие дни и высылаем подробный оптовый каталог в PDF.',
    formSuccess: 'Спасибо. Ваш запрос принят. Мы свяжемся с вами в ближайшее время.',
    footerTagline: 'Премиальный тайваньский высокогорный чай напрямую от фермеров. Опт, контрактные закупки и Private Label.',
    footerQuality: 'Стандарты качества',
    footerQualityText: 'Сертифицированные высокогорные плантации Формозы с контролем на каждом этапе производства.',
    footerContact: 'Связь с отделом экспорта',
    footerCopy: '© 2026 EstasTea. Taiwan High Mountain Tea Direct. Все права защищены.',
    skip: 'Перейти к основному контенту',
    openMenu: 'Открыть навигацию',
    categories: {
      'gaba-oolong': 'ГАБА-улуны',
      'light-oolong': 'Светлые улуны',
      'dark-oolong': 'Тёмные улуны',
      'dong-ding': 'Дун Дины',
      red: 'Красные чаи',
      white: 'Белые чаи',
      aged: 'Выдержанные чаи',
      competition: 'Конкурсные чаи',
      'gaba-special': 'Особая коллекция GABA',
      'shu-puerh': 'Шу пуэр',
      'collectible-puerh': 'Коллекционные пуэры',
    },
    seo: {
      homeTitle: 'Премиальный чай из Тайваня | Опт и B2B поставки | EstasTea',
      homeDesc:
        'Премиальный тайваньский чай напрямую от фермеров. Оптовые поставки и B2B сотрудничество для чайных магазинов, импортеров и брендов.',
      catalogTitle: 'Коллекция тайваньского чая | EstasTea',
      catalogDesc:
        'Высокогорные улуны, ГАБА и выдержанный пуэр тайваньского хранения. Опт, образцы и прайс-лист по запросу.',
      aboutTitle: 'О нас | EstasTea',
      aboutDesc:
        'Более 10 лет на Тайване. Прямые закупки у фермеров Алишаня, Лишаня, Шань Линь Си и Дун Дина.',
      blogTitle: 'Чайный блог и статьи о тайваньском чае | EstasTea',
      blogDesc:
        'Статьи о чайных регионах Тайваня, свойствах ГАБА чая, степени ферментации улунов и прямых поставках от фермеров.',
      contactTitle: 'Контакты и прайс-лист | EstasTea',
      contactDesc: 'Свяжитесь с EstasTea: WhatsApp +886 900 783 530, info@estastea.com.',
    },
  },
} as const;

export type UI = (typeof ui)['en'];

export function t(lang: Lang): UI {
  return (ui[lang] || ui.en) as UI;
}
