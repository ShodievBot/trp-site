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
} satisfies Record<Locale, Record<string, string>>;
