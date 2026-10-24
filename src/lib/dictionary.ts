import type { Locale } from './i18n';

export const dictionary = {
  uz: {
    brand: 'The Most Reliable Publication',
    subtitle: 'Ilmiy tadqiqotlar markazi',
    heroText:
      'Ilmiy nashrlar, xalqaro konferensiyalar, Scopus, OAK jurnallari va nashriyot xizmatlari bo‘yicha ishonchli hamkor.',
    services: 'Xizmatlar',
    conferences: 'Konferensiyalar',
    contact: 'Bog‘lanish',
    popularPages: 'Ommabop sahifalar',
    latestNews: 'So‘nggi yangiliklar',
    allNews: 'Barcha yangiliklar',
    readMore: 'Batafsil',
    noNews: 'Hozircha yangiliklar mavjud emas.',
  },
  ru: {
    brand: 'The Most Reliable Publication',
    subtitle: 'Научно-исследовательский центр',
    heroText:
      'Надёжный партнёр по научным публикациям, международным конференциям, Scopus, журналам ОАК и издательским услугам.',
    services: 'Услуги',
    conferences: 'Конференции',
    contact: 'Контакты',
    popularPages: 'Популярные страницы',
    latestNews: 'Последние новости',
    allNews: 'Все новости',
    readMore: 'Подробнее',
    noNews: 'Пока нет опубликованных новостей.',
  },
  en: {
    brand: 'The Most Reliable Publication',
    subtitle: 'Scientific Research Center',
    heroText:
      'A reliable partner for scientific publications, international conferences, Scopus, academic journals and publishing services.',
    services: 'Services',
    conferences: 'Conferences',
    contact: 'Contact',
    popularPages: 'Popular pages',
    latestNews: 'Latest news',
    allNews: 'All news',
    readMore: 'Read more',
    noNews: 'No published news yet.',
  },
  tr: {
    brand: 'The Most Reliable Publication',
    subtitle: 'Bilimsel Araştırma Merkezi',
    heroText:
      'Bilimsel yayınlar, uluslararası konferanslar, Scopus, akademik dergiler ve yayıncılık hizmetlerinde güvenilir ortağınız.',
    services: 'Hizmetler',
    conferences: 'Konferanslar',
    contact: 'İletişim',
    popularPages: 'Popüler sayfalar',
    latestNews: 'Son haberler',
    allNews: 'Tüm haberler',
    readMore: 'Devamını oku',
    noNews: 'Henüz yayınlanmış haber yok.',
  },
  kk: {
    brand: 'The Most Reliable Publication',
    subtitle: 'Ғылыми-зерттеу орталығы',
    heroText:
      'Ғылыми басылымдар, халықаралық конференциялар, Scopus, ОАК журналдары және баспа қызметтері бойынша сенімді серіктес.',
    services: 'Қызметтер',
    conferences: 'Конференциялар',
    contact: 'Байланыс',
    popularPages: 'Танымал беттер',
    latestNews: 'Соңғы жаңалықтар',
    allNews: 'Барлық жаңалықтар',
    readMore: 'Толығырақ',
    noNews: 'Әзірге жаңалықтар жоқ.',
  },
} satisfies Record<Locale, Record<string, string>>;
