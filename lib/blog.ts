import type { Lang } from './i18n';

export type BlogParagraph =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; author?: string };

export type BlogPostLocalized = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: BlogParagraph[];
  seo: {
    title: string;
    description: string;
  };
};

export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  en: BlogPostLocalized;
  ru: BlogPostLocalized;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'svyaz-mezhdu-stressom-zdorovem-kozhi-i-ezhednevnymi-ritualami',
    image: '/images/blog/stress-skin-rituals.png',
    date: '2026-06-12',
    en: {
      title: 'The Connection Between Stress, Skin Health, and Daily Rituals',
      excerpt:
        'How chronic stress impacts body inflammation and skin vitality, and why mindful rituals like functional GABA tea help restore balance.',
      category: 'Health & GABA',
      date: 'June 12, 2026',
      readTime: '2 min read',
      seo: {
        title: 'Stress, Skin Health & Mindful Daily Rituals | EstasTea Blog',
        description:
          'Scientific insights into chronic stress, skin aging, and how daily rituals like functional GABA tea support holistic wellness.',
      },
      content: [
        {
          type: 'p',
          text: 'Modern scientific research increasingly confirms the close relationship between chronic stress, systemic inflammatory processes in the body, and premature skin aging.',
        },
        {
          type: 'p',
          text: 'When stress levels remain elevated over prolonged periods, the body produces excess cortisol — a hormone that accelerates collagen breakdown, intensifies inflammation, and weakens the protective epidermal barrier. As a result, skin loses elasticity, moisture retention diminishes, and sensitivity to environmental stressors increases significantly.',
        },
        {
          type: 'h2',
          text: 'The Power of Mindful Daily Rituals',
        },
        {
          type: 'p',
          text: 'This is precisely why intentional daily self-care rituals have gained widespread appreciation. Practices of mindfulness, restorative sleep, balanced nutrition, and functional beverages collectively support foundational health and foster longevity.',
        },
        {
          type: 'p',
          text: 'Among these transformative practices, Taiwanese GABA tea has emerged as a cornerstone ritual. Crafted through specialized anaerobic nitrogen fermentation that naturally elevates gamma-aminobutyric acid (GABA) concentrations, this tea is celebrated for soothing the nervous system, encouraging deep relaxation, and alleviating mental tension without drowsiness.',
        },
        {
          type: 'h2',
          text: 'Holistic Skin Health and Inner Equilibrium',
        },
        {
          type: 'p',
          text: 'Dermatological and wellness experts continuously emphasize that skin health extends far beyond topical applications. Internal physiological balance, controlled inflammation, stress mitigation, and cellular hydration dictate the skin’s radiant resilience.',
        },
        {
          type: 'quote',
          text: 'Holistic wellness recognizes that youthful vitality is nurtured from the inside out — combining pure mountain botanicals, restorative rituals, and evidence-based care.',
        },
        {
          type: 'p',
          text: 'For individuals seeking a scientifically grounded approach to skincare synergy, platforms like Swiss Maison SAHÉO exemplify barrier restoration and microbiome support. Aligning advanced cellular skincare with daily functional tea rituals creates a powerful, comprehensive routine that supports both outer beauty and inner peace.',
        },
      ],
    },
    ru: {
      title: 'Связь между стрессом, здоровьем кожи и ежедневными ритуалами',
      excerpt:
        'Современные научные исследования о влиянии стресса на организм и почему ритуалы заботы о себе и ГАБА чай помогают поддерживать баланс.',
      category: 'Здоровье и ГАБА',
      date: '12 июня 2026',
      readTime: '2 мин чтения',
      seo: {
        title: 'Связь между стрессом, здоровьем кожи и ежедневными ритуалами | Блог EstasTea',
        description:
          'Как хронический стресс влияет на кожу и организм, и почему ежедневные ритуалы, включая чай GABA, восстанавливают баланс.',
      },
      content: [
        {
          type: 'p',
          text: 'Современные научные исследования всё чаще подтверждают тесную связь между хроническим стрессом, воспалительными процессами в организме и преждевременным старением кожи.',
        },
        {
          type: 'p',
          text: 'Когда уровень стресса остаётся повышенным в течение длительного времени, организм вырабатывает больше кортизола — гормона, который может способствовать разрушению коллагена, усиливать воспаление и ослаблять защитный барьер кожи. В результате кожа может терять упругость, хуже удерживать влагу, становиться более чувствительной и менее устойчивой к внешним факторам.',
        },
        {
          type: 'h2',
          text: 'Значение ежедневных ритуалов',
        },
        {
          type: 'p',
          text: 'Именно поэтому ежедневные ритуалы заботы о себе приобретают всё большее значение. Практики осознанности, полноценный сон, сбалансированное питание и функциональные напитки помогают поддерживать общее благополучие и способствуют более здоровому образу жизни.',
        },
        {
          type: 'p',
          text: 'Одним из таких ритуалов становится чай GABA, который привлекает всё больше внимания благодаря своим уникальным свойствам. Этот чай производится по специальной технологии, естественным образом увеличивающей содержание гамма-аминомасляной кислоты (GABA). Многие ценят его за мягкий расслабляющий эффект и способность помогать справляться со стрессом без чрезмерной стимуляции.',
        },
        {
          type: 'h2',
          text: 'Комплексный подход к здоровью и уходу',
        },
        {
          type: 'p',
          text: 'В то же время специалисты в области ухода за кожей всё чаще подчёркивают, что здоровье кожи зависит не только от косметических средств. Важную роль играют внутренний баланс организма, уровень воспаления, управление стрессом и состояние кожного барьера. Именно комплексный подход позволяет поддерживать кожу здоровой, сияющей и устойчивой к возрастным изменениям.',
        },
        {
          type: 'quote',
          text: 'Продвинутый уход и функциональные чайные традиции становятся важным дополнением к целостному подходу к здоровью, благополучию и долголетию.',
        },
        {
          type: 'p',
          text: 'Тем, кто интересуется научно обоснованным подходом к уходу за кожей, стоит обратить внимание на Maison SAHÉO — швейцарскую платформу экспертного ухода за кожей. Основное внимание здесь уделяется восстановлению кожного барьера, поддержке микробиома и современным протоколам ухода, направленным на повышение восприимчивости кожи к активным компонентам и достижение заметных результатов.',
        },
      ],
    },
  },
  {
    slug: 'chto-takoe-ulun',
    image: '/images/blog/what-is-oolong.jpg',
    date: '2026-06-01',
    en: {
      title: 'What Is Oolong Tea: Varieties, Oxidation Levels, and Flavor Crafting',
      excerpt:
        'Oolong is one of the most versatile tea categories in the world. Learn how oxidation and roasting shape aroma, what distinguishes Taiwan alpine oolongs, and how to select your ideal cup.',
      category: 'Tea Guide',
      date: 'June 1, 2026',
      readTime: '3 min read',
      seo: {
        title: 'What Is Oolong Tea: Varieties, Oxidation & Terroirs | EstasTea Blog',
        description:
          'Complete guide to Taiwanese oolong tea: oxidation spectrum, roasting techniques, high-mountain cultivars, and flavor characteristics.',
      },
      content: [
        {
          type: 'h2',
          text: 'Introduction to the World of Oolong',
        },
        {
          type: 'p',
          text: 'Oolong occupies a unique place between green and red (black) tea. Thanks to partial oxidation, it masterfully combines the vibrant freshness and floral lift of green tea with the depth, warmth, and complexity of darker varieties.',
        },
        {
          type: 'p',
          text: 'Today, high-mountain oolongs are Taiwan’s signature masterpiece. Connoisseurs worldwide regard Taiwanese oolongs among the most multifaceted teas in aromatics and mouthfeel.',
        },
        {
          type: 'p',
          text: 'Behind the name “oolong” lies an expansive universe of crafting styles, oxidation gradients, and roasting masteries. Two oolongs can display entirely distinct characters while belonging to the same botanical heritage.',
        },
        {
          type: 'h2',
          text: 'Understanding Oxidation in Tea',
        },
        {
          type: 'p',
          text: 'On the oxidation spectrum, green tea undergoes minimal oxidation, red tea undergoes complete oxidation, while oolong is partially oxidized (typically between 15% and 75%).',
        },
        {
          type: 'p',
          text: 'During controlled oxidation, the tea master orchestrates enzymatic transformations. Grassy notes soften into fresh orchid blossoms, honey, ripe stone fruits, and sweet confectionery nuances.',
        },
        {
          type: 'h2',
          text: 'How Oxidation Levels Shape the Flavor',
        },
        {
          type: 'h3',
          text: 'Light Oxidation (15%–25%)',
        },
        {
          type: 'p',
          text: 'These alpine oolongs spotlight crisp floral aromatics, spring freshness, and silky creaminess. Notes of wild orchid, lilac, white peach, and fresh cream dominate. Most contemporary high-mountain teas from Alishan and Lishan belong to this esteemed category.',
        },
        {
          type: 'h3',
          text: 'Medium Oxidation (30%–50%)',
        },
        {
          type: 'p',
          text: 'Medium oxidation introduces layered depth. Notes of ripe peach, wildflower honey, dried apricot, and warm spices emerge, offering a plush body alongside refined sweetness.',
        },
        {
          type: 'h3',
          text: 'Heavy Oxidation (60%–75%)',
        },
        {
          type: 'p',
          text: 'Higher oxidation produces rich, amber infusions reminiscent of baked fruit, wild honey, caramelized sugar, and precious wood notes (exemplified by legendary Oriental Beauty / Dongfang Meiren).',
        },
        {
          type: 'h2',
          text: 'The Art and Role of Roasting (Hong Pei)',
        },
        {
          type: 'p',
          text: 'Roasting over longan charcoal or in precision convection ovens is an essential second pillar of Taiwanese tea craft:',
        },
        {
          type: 'ul',
          items: [
            'Light Roast: Preserves pure floral elevation, crisp alpine breeze, and youthful freshness.',
            'Medium Roast: Imparts golden honey sweetness, toasted hazelnuts, and rounded mouthfeel.',
            'Traditional Deep Roast (Dong Ding Style): Develops dark cocoa, warm caramel, charcoal warmth, and lingering sweet resonance.',
          ],
        },
        {
          type: 'h2',
          text: 'High-Mountain Terroirs (Gao Shan Cha)',
        },
        {
          type: 'p',
          text: 'Teas cultivated above 1,000 meters benefit from frequent mountain mist, sharp diurnal temperature swings, and rich subalpine soils. The leaves develop slowly, concentrating amino acids, pectin, and volatile aromatic oils.',
        },
        {
          type: 'p',
          text: 'The most renowned Taiwanese terroirs include Alishan (1,200–1,600m), Lishan (2,000–2,600m), and Shan Lin Xi (1,600–1,900m).',
        },
      ],
    },
    ru: {
      title: 'Что такое улун: виды, степень ферментации и как формируется вкус',
      excerpt:
        'Улун — одна из самых разнообразных категорий чая в мире. Узнайте, как ферментация и обжарка влияют на вкус, чем отличаются тайваньские высокогорные улуны и как выбрать чай, который подойдёт именно вам.',
      category: 'Гайд по чаю',
      date: '1 июня 2026',
      readTime: '3 мин чтения',
      seo: {
        title: 'Что такое улун: виды, степень ферментации и вкус | Блог EstasTea',
        description:
          'Подробный разбор тайваньского улуна: шкала ферментации, роль обжарки, высокогорные терруары Алишань и Лишань.',
      },
      content: [
        {
          type: 'h2',
          text: 'Введение',
        },
        {
          type: 'p',
          text: 'Улун занимает особое место между зелёным и красным чаем. Именно благодаря частичной ферментации он способен сочетать свежесть зелёного чая с глубиной и сложностью более тёмных сортов.',
        },
        {
          type: 'p',
          text: 'Сегодня улуны являются визитной карточкой Тайваня. Многие ценители чая считают именно тайваньские улуны одними из самых сложных и многогранных по аромату и вкусу.',
        },
        {
          type: 'p',
          text: 'Однако за словом «улун» скрывается огромный мир различных стилей обработки, уровней ферментации и способов обжарки. Два улуна могут иметь совершенно разный характер, оставаясь при этом частью одной категории.',
        },
        {
          type: 'h2',
          text: 'Что такое ферментация в чае',
        },
        {
          type: 'p',
          text: 'В чайной индустрии под ферментацией обычно понимают процесс окисления чайного листа после сбора. После того как лист сорван, начинается взаимодействие ферментативных веществ с кислородом.',
        },
        {
          type: 'p',
          text: 'Во время этого процесса меняется аромат, вкус и структура будущего напитка. Исчезают травянистые оттенки, появляются цветочные, фруктовые, медовые и сладкие ноты. Контроль этого этапа является одним из главных навыков чайного мастера.',
        },
        {
          type: 'h2',
          text: 'Как степень ферментации влияет на вкус',
        },
        {
          type: 'h3',
          text: 'Слабая ферментация (15–25%)',
        },
        {
          type: 'p',
          text: 'Такие улуны часто имеют цветочные ноты, свежесть, лёгкость и сливочность. Во вкусе можно встретить орхидею, сирень, белые цветы и молочные оттенки. Многие современные высокогорные тайваньские улуны относятся именно к этой категории.',
        },
        {
          type: 'h3',
          text: 'Средняя ферментация (30–50%)',
        },
        {
          type: 'p',
          text: 'Здесь появляется больше глубины. Часто встречаются спелые фрукты, мёд, сухофрукты и сладкие пряности. Такие чаи сохраняют свежесть, но становятся более объёмными и насыщенными.',
        },
        {
          type: 'h3',
          text: 'Высокая ферментация (60–75%)',
        },
        {
          type: 'p',
          text: 'При большей степени ферментации вкус становится насыщеннее. Появляются карамельные ноты, сухофрукты, древесные оттенки и печёные фрукты. Подобные улуны часто ценятся за богатый и сложный характер.',
        },
        {
          type: 'h2',
          text: 'Роль обжарки',
        },
        {
          type: 'p',
          text: 'Помимо ферментации важную роль играет обжарка. После обработки чай может дополнительно прогреваться:',
        },
        {
          type: 'ul',
          items: [
            'Лёгкая обжарка: помогает сохранить цветочность, свежесть и высокогорный характер.',
            'Средняя обжарка: добавляет сладость, ореховые ноты и более плотное тело настоя.',
            'Сильная обжарка: формирует шоколадные оттенки, карамель, жареные орехи и длительное послевкусие.',
          ],
        },
        {
          type: 'h2',
          text: 'Высокогорные тайваньские улуны',
        },
        {
          type: 'p',
          text: 'Высокогорный чай выращивается на высоте более 1000 метров над уровнем моря. Такие условия создают медленный рост листа, высокую концентрацию ароматических веществ, мягкую сладость и продолжительное послевкусие.',
        },
        {
          type: 'p',
          text: 'Наиболее известные регионы Тайваня: Алишань, Лишань, Шань Лин Си. Каждый из них обладает собственным характером, однако все они известны качественными высокогорными улунами.',
        },
      ],
    },
  },
  {
    slug: 'taivanskii-chai-regiony-osobennosti-i-pryamye-postavki-ot-fermerov',
    image: '/images/blog/taiwan-tea-regions.png',
    date: '2026-05-30',
    en: {
      title: 'Taiwanese Tea: Terroirs, High-Mountain Profiles, and Direct Farm Sourcing',
      excerpt:
        'A comprehensive guide to Taiwan’s iconic tea terroirs, the secret behind high-mountain microclimates, and how transparent direct sourcing works.',
      category: 'Origin & Terroirs',
      date: 'May 30, 2026',
      readTime: '4 min read',
      seo: {
        title: 'Taiwanese Tea Regions & Direct Farm Sourcing | EstasTea Blog',
        description:
          'Explore Alishan, Lishan, Shan Lin Xi, and direct B2B tea supply models straight from multigenerational Taiwanese artisan farms.',
      },
      content: [
        {
          type: 'h2',
          text: 'Introduction to Formosa Tea Terroirs',
        },
        {
          type: 'p',
          text: 'Taiwanese tea occupies an esteemed place in global tea culture due to the island’s steep alpine topography, rich volcanic soils, and exceptional processing standards. Despite its modest geographical size, Taiwan produces an astonishing range of micro-lot teas.',
        },
        {
          type: 'p',
          text: 'The defining hallmark of Taiwanese tea is its deep connection to terroir. Elevation, persistent mountain fogs, dramatic daily temperature fluctuations, and soil minerality directly define leaf density and essential oil content.',
        },
        {
          type: 'h2',
          text: 'Key High-Mountain Tea Regions',
        },
        {
          type: 'h3',
          text: 'Alishan (1,000–1,600 m)',
        },
        {
          type: 'p',
          text: 'Alishan is perhaps the most famous alpine tea region in Taiwan. Its terraced gardens are enveloped in dense morning and afternoon mists.',
        },
        {
          type: 'ul',
          items: [
            'Climate: Frequent mountain mists, high humidity, and crisp highland breezes.',
            'Cup Profile: Silky, creamy texture with radiant orchid, sweet cream, and long sweet aftertaste.',
            'Significance: The global benchmark for classic Taiwanese Gao Shan Cha.',
          ],
        },
        {
          type: 'h3',
          text: 'Lishan (2,000–2,600 m)',
        },
        {
          type: 'p',
          text: 'Lishan stands among the highest commercial tea-growing terroirs in the world. Its freezing nights and intense UV radiation create extreme growing conditions.',
        },
        {
          type: 'ul',
          items: [
            'Climate: Subalpine cold weather and slow vegetative growth with limited yields.',
            'Cup Profile: Crystalline clarity, juicy green apple, wild alpine blossoms, and opulent texture.',
            'Significance: Regarded as the crown jewel of high-mountain oolongs.',
          ],
        },
        {
          type: 'h3',
          text: 'Shan Lin Xi (1,200–1,900 m)',
        },
        {
          type: 'p',
          text: 'Enclosed by virgin cedar and bamboo forests, Shan Lin Xi is famous for its harmonious balance of aroma and body.',
        },
        {
          type: 'ul',
          items: [
            'Climate: Pristine forest canopy, temperate alpine air, and constant cloud cover.',
            'Cup Profile: Distinctive evergreen pine resin note, vibrant floral sweetness, and superior multi-infusion endurance.',
          ],
        },
        {
          type: 'h2',
          text: 'Why Direct Farm-Gate Partnership Matters',
        },
        {
          type: 'p',
          text: 'Traditional global tea distribution often involves multiple intermediary trading tiers, resulting in stale lots, inflated costs, and lost origin traceability.',
        },
        {
          type: 'p',
          text: 'Our model is built on direct relationships with multi-generational grower families on the island:',
        },
        {
          type: 'ul',
          items: [
            'Single-Estate Traceability: Guaranteed estate origin, elevation, harvest date, and cultivar.',
            'Rigorous Batch Cupping: Every lot is cupped immediately at farm-gate for leaf density and infusion purity.',
            'B2B Quality Consistency: Stable seasonal profiles tailored for professional tea rooms and specialty retailers.',
            'Long-Term Trust: Decades of mutual collaboration ensuring access to limited competition pickings.',
          ],
        },
      ],
    },
    ru: {
      title: 'Тайваньский чай: регионы, особенности и прямые поставки от фермеров',
      excerpt:
        'Разбираем тайваньский чай: основные регионы, особенности высокогорного улуна и как устроены прямые поставки от фермеров без посредников.',
      category: 'Терруары и поставки',
      date: '30 мая 2026',
      readTime: '4 мин чтения',
      seo: {
        title: 'Тайваньский чай: регионы и прямые поставки от фермеров | Блог EstasTea',
        description:
          'Обзор чайных регионов Тайваня: Алишань, Лишань, Шань Линь Си, особенности терруаров и прямые B2B поставки чая.',
      },
      content: [
        {
          type: 'h2',
          text: 'Введение',
        },
        {
          type: 'p',
          text: 'Тайваньский чай занимает особое место в мире чайной культуры благодаря сочетанию природных условий, традиций обработки и высокой культуры производства. Несмотря на компактный размер острова, Тайвань предлагает удивительное разнообразие чаёв — от лёгких цветочных улунов до насыщенных, глубоких высокогорных сортов с многослойным вкусом.',
        },
        {
          type: 'p',
          text: 'Главная особенность тайваньского чая — это его тесная связь с местом происхождения. Высота плантаций, влажность, перепады температур и даже туман напрямую влияют на вкус листа. Именно поэтому два одинаковых по технологии улуна могут кардинально отличаться в зависимости от региона.',
        },
        {
          type: 'p',
          text: 'Мы работаем напрямую с чайными фермерами Тайваня, с которыми выстроены долгосрочные отношения. Основной фокус — высокогорные чаи, включая такие регионы, как Алишань, где чай выращивается в уникальных климатических условиях и собирается вручную небольшими партиями.',
        },
        {
          type: 'h2',
          text: 'Основные чайные регионы Тайваня',
        },
        {
          type: 'h3',
          text: 'Алишань (Alishan)',
        },
        {
          type: 'p',
          text: 'Алишань — один из самых известных высокогорных чайных регионов Тайваня. Плантации расположены на высоте примерно от 1000 до 1600 метров над уровнем моря.',
        },
        {
          type: 'ul',
          items: [
            'Особенности климата: частые туманы, высокая влажность, большие суточные перепады температур.',
            'Вкус: мягкий, сладковатый, с цветочными и сливочными нотами и длительным послевкусием.',
            'Статус: один из мировых эталонов высокогорного улуна.',
          ],
        },
        {
          type: 'h3',
          text: 'Лишань (Lishan)',
        },
        {
          type: 'p',
          text: 'Лишань находится ещё выше — плантации доходят до 2200–2600 метров. Это один из самых экстремальных чайных регионов Тайваня.',
        },
        {
          type: 'ul',
          items: [
            'Особенности климата: субальпийский холод, крайне медленный рост листа, ограниченные урожаи.',
            'Вкус: кристально чистый, «хрустящий», с яркой естественной сладостью и маслянистым настоем.',
            'Статус: премиальный сегмент коллекционных чаев.',
          ],
        },
        {
          type: 'h3',
          text: 'Шань Лин Си (Shan Lin Xi)',
        },
        {
          type: 'p',
          text: 'Этот регион окружен бамбуковыми рощами и хвойными лесами. Высота сбора обычно 1200–1900 метров.',
        },
        {
          type: 'ul',
          items: [
            'Особенности: чистейший лесной воздух, стабильный мягкий микроклимат.',
            'Вкус: выразительный хвойно-цветочный букет, шелковистая текстура и стойкость к множеству проливов.',
          ],
        },
        {
          type: 'h2',
          text: 'Почему мы работаем напрямую с фермерами',
        },
        {
          type: 'p',
          text: 'Современный чайный рынок часто включает множество посредников, которые увеличивают стоимость и не добавляют ценности продукту. Наша модель основана на прямом взаимодействии с хозяйствами Тайваня:',
        },
        {
          type: 'ul',
          items: [
            'Прозрачность происхождения: точные данные о высоте, дате сбора и фермерской семье.',
            'Контроль качества: строгий отбор партий в ходе титестинга на месте производства.',
            'Стабильность для B2B: предсказуемые характеристики партий и свежие сезонные поставки.',
            'Доверие и партнерство: многолетнее сотрудничество и приоритетный доступ к лучшим сборам.',
          ],
        },
      ],
    },
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
