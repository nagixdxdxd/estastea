import type { Lang } from './i18n';

export type ProducerPhoto = { src: string; ru: string; en: string };

export type Producer = {
  slug: string;
  portrait?: string;
  featured: boolean;
  photos: ProducerPhoto[];
  ru: ProducerLocale;
  en: ProducerLocale;
};

type ProducerLocale = {
  name: string;
  region: string;
  teas: string;
  subtitle: string;
  teaser: string;
  portraitCaption?: string;
  body: string[];
  seoTitle: string;
  seoDesc: string;
};

export const producers: Producer[] = [
  {
    slug: 'master-jack',
    portrait: '/images/about/producer-workshop.jpg',
    featured: true,
    photos: [
      {
        src: '/images/about/producer-garden.jpg',
        ru: 'В чайном саду с Мастером Джеком',
        en: 'In the tea garden with Master Jack',
      },
      {
        src: '/images/about/field-terraces-mist.jpg',
        ru: 'Чайные террасы в тумане, Шань Лин Си',
        en: 'Misty tea terraces, Shan Lin Xi',
      },
    ],
    ru: {
      name: 'Мастер Джек',
      region: 'Shan Lin Xi · 1200–1600 м',
      teas: 'Высокогорный улун · Угольная прожарка · ГАБА',
      subtitle: 'Чайный мастер из Шань Лин Си и наш давний друг',
      teaser: 'Чайный мастер из Шань Лин Си, с которым нас связывают многолетние профессиональные и личные отношения.',
      portraitCaption: 'С Мастером Джеком и его семьёй',
      body: [
        'Чжун Син И (Zhong Xin-Yi), которого многие иностранные покупатели знают как Мастера Джека, — тайваньский чайный мастер и производитель, с которым нас связывают многолетние профессиональные и личные отношения.',
        'Мы познакомились с Мастером Джеком много лет назад. За это время сотрудничество постепенно переросло в настоящую дружбу. Сегодня мы поддерживаем близкие отношения не только с самим Мастером, но и с его семьёй. Поэтому наши встречи на Тайване давно выходят за рамки обсуждения чая и производства.',
        'Основные чайные сады Мастера Джека находятся в высокогорном районе Shan Lin Xi, на высотах около 1200–1600 метров.',
        'Горный климат, высота, прохладные температуры и частые туманы создают благоприятные условия для производства высокогорного тайваньского улуна.',
        'Одной из характерных особенностей его работы является традиционная угольная прожарка. Для отдельных чаёв используется уголь из древесины фруктовых деревьев, в том числе личи и лунъян.',
        'Именно работа с прожаркой — один из элементов, который формирует характер его традиционных улунов.',
        'Мы ценим его за многолетний опыт, глубокое понимание тайваньского чая и собственный подход к обработке. Он также открыт к экспериментам и новым идеям, что позволяет нам находить интересные продукты за пределами классического ассортимента.',
        'Но особенно важны для нас отношения, которые сформировались за годы знакомства.',
        'Мы регулярно встречаемся на Тайване, посещаем производство и поддерживаем связь с его семьёй.',
        'Мы не просто предлагаем всё производство мастера — мы самостоятельно отбираем конкретные чаи и партии для нашего ассортимента и международных B2B-клиентов.',
      ],
      seoTitle: 'Мастер Джек | Производители EstasTea',
      seoDesc:
        'Чжун Син И (Мастер Джек) — чайный мастер из Shan Lin Xi, высокогорный улун с традиционной угольной прожаркой, 1200–1600 м.',
    },
    en: {
      name: 'Master Jack',
      region: 'Shan Lin Xi · 1,200–1,600 m',
      teas: 'High Mountain Oolong · Charcoal Roast · GABA',
      subtitle: 'A tea master from Shan Lin Xi and a long-standing friend',
      teaser: 'A tea master from Shan Lin Xi, with whom we share years of professional and personal ties.',
      portraitCaption: 'With Master Jack and his family',
      body: [
        'Zhong Xin-Yi, known to many international buyers as Master Jack, is a Taiwanese tea master and producer with whom we share many years of both professional and personal relationships.',
        'We met Master Jack many years ago. Over that time the cooperation gradually grew into a genuine friendship. Today we are close not only to the Master himself but to his family as well, so our meetings in Taiwan have long gone beyond discussing tea and production.',
        'Master Jack’s main tea gardens lie in the high-mountain area of Shan Lin Xi, at roughly 1,200–1,600 metres.',
        'The mountain climate, the elevation, the cool temperatures and the frequent mists create favourable conditions for producing Taiwanese high-mountain oolong.',
        'One characteristic feature of his work is traditional charcoal roasting. For certain teas he uses charcoal from fruit-tree wood, including lychee and longan.',
        'It is this work with roasting that shapes the character of his traditional oolongs.',
        'We value him for his long experience, his deep understanding of Taiwanese tea and his own approach to processing. He is also open to experiments and new ideas, which lets us find interesting products beyond the classic range.',
        'But what matters most to us are the relationships built over the years of knowing him.',
        'We meet regularly in Taiwan, visit the production and stay in touch with his family.',
        'We do not simply offer everything the master makes — we select specific teas and specific lots ourselves, for our range and for our international B2B customers.',
      ],
      seoTitle: 'Master Jack | EstasTea Producers',
      seoDesc:
        'Master Zhong Xin Yi (Master Jack) — winner of the LGFA 2010 Dong Ding competition, tea gardens in Shan Lin Xi at 1,200–1,600 m.',
    },
  },
  {
    slug: 'lin-mei-yu',
    portrait: '/images/about/tasting-producer.jpg',
    featured: false,
    photos: [
      {
        src: '/images/about/field-pickers.jpg',
        ru: 'Сбор чайного листа на плантации',
        en: 'Picking tea leaf on the plantation',
      },
    ],
    ru: {
      name: 'Мастер Линь Мэй-Юй',
      region: 'Тайвань',
      teas: 'Дун Дин',
      subtitle: 'Мастерица, с которой мы нашли свой Дун Дин',
      teaser:
        'Мы познакомились, когда искали интересный Дун Дин. Чай — чистый, выразительный, с характером.',
      portraitCaption: 'С мастером Линь Мэй-Юй',
      body: [
        'Некоторые мастера не стремятся быть известными. Они просто год за годом делают свой чай — внимательно, спокойно и без лишнего шума.',
        'С мастерицей Линь Мэй-Юй мы познакомились, когда искали интересный Дун Дин. Нам понравился её подход к работе и, прежде всего, сам чай — чистый, выразительный и с характером, который сложно получить случайно.',
        'Для нас такие знакомства — одна из самых ценных частей работы на Тайване. За каждой пачкой чая стоит конкретный человек, его опыт, его горы и его собственное понимание того, каким должен быть хороший чай.',
      ],
      seoTitle: 'Мастер Линь Мэй-Юй | Производители EstasTea',
      seoDesc:
        'Мастер Линь Мэй-Юй — тайваньская чайная мастерица, у которой мы нашли свой Дун Дин: чистый, выразительный чай с характером.',
    },
    en: {
      name: 'Master Lin Mei-Yu',
      region: 'Taiwan',
      teas: 'Dong Ding',
      subtitle: 'The master with whom we found our Dong Ding',
      teaser: 'We met while looking for an interesting Dong Ding. The tea is clean, expressive, with character.',
      portraitCaption: 'With Master Lin Mei-Yu',
      body: [
        'Some masters have no wish to be famous. They simply make their tea year after year — carefully, calmly and without any noise about it.',
        'We met Master Lin Mei-Yu while looking for an interesting Dong Ding. We liked how she works and, above all, the tea itself — clean, expressive, with a character that is hard to arrive at by accident.',
        'For us these encounters are one of the most valuable parts of working in Taiwan. Behind every packet of tea stands a particular person, their experience, their mountains and their own understanding of what good tea should be.',
      ],
      seoTitle: 'Master Lin Mei-Yu | EstasTea Producers',
      seoDesc:
        'Master Lin Mei-Yu — a Taiwanese tea master with whom we found our Dong Ding: a clean, expressive tea with character.',
    },
  },
];

export function producerCopy(producer: Producer, lang: Lang): ProducerLocale {
  return lang === 'ru' ? producer.ru : producer.en;
}
