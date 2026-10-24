import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { dictionary } from '@/lib/dictionary';
import { PopularPages } from '@/components/PopularPages';
import { LatestNews } from '@/components/LatestNews';
import { LegacyGallery } from '@/components/LegacyGallery';
import { pageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  uz: {
    badge: 'Xalqaro ilmiy nashrlar va konferensiyalar markazi',
    primary: 'Xizmatlarni ko‘rish',
    secondary: 'Ariza qoldirish',
    trustTitle: 'Ilm-fan, nashriyot va xalqaro hamkorlik uchun ishonchli markaz',
    trustText:
      'The Most Reliable Publication ilmiy tadqiqotlar markazi ilmiy maqolalar, monografiyalar, konferensiyalar, Scopus, OAK va xalqaro nashrlar bo‘yicha xizmat ko‘rsatadi.',
    servicesTitle: 'Asosiy xizmatlar',
    servicesText:
      'Tadqiqotchilar, doktorantlar, universitetlar va ilmiy tashkilotlar uchun kompleks xizmatlar.',
    conferenceTitle: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    conferenceText:
      '2026-yil 20–25-iyun kunlari Trabzonda (Turkiya) xalqaro akademik hamkorlik sammiti bo‘lib o‘tdi. 40 nafar ishtirokchi ilmiy maqolalarini taqdim etdi va xalqaro sertifikatlar bilan taqdirlandi.',
    conferenceDate: '20–25-iyun 2026',
    conferencePlace: 'Trabzon, Turkiya',
    conferencePrice: '800$',
    labels: {
      about: 'Markaz haqida',
      services: 'Xizmatlar',
      featured: 'O‘tgan tadbir',
      date: 'Sana',
      location: 'Manzil',
      price: 'Ishtirok narxi',
    },
    stats: [
      ['Scopus', 'Xalqaro nashrlar'],
      ['OAK', 'Mahalliy va xalqaro jurnallar'],
      ['3 til', 'O‘zbek / rus / ingliz'],
      ['24/7', 'Telegram orqali murojaat'],
    ],
    services: [
      'Scopus jurnallarida ilmiy nashr',
      'Xalqaro konferensiyalar tashkil etish',
      'Kitob, monografiya va darslik nashri',
      'OAK jurnallarida maqola chiqarish',
      'DGU, patent va foydali model',
      'Dissertatsiya va stajirovka bo‘yicha yordam',
    ],
  },
  ru: {
    badge: 'Центр международных научных публикаций и конференций',
    primary: 'Посмотреть услуги',
    secondary: 'Оставить заявку',
    trustTitle: 'Надёжный центр для науки, издательства и международного сотрудничества',
    trustText:
      'The Most Reliable Publication помогает исследователям, университетам и организациям с научными публикациями, конференциями, Scopus, ОАК, монографиями и издательскими проектами.',
    servicesTitle: 'Основные услуги',
    servicesText:
      'Комплексные решения для исследователей, докторантов, университетов и научных организаций.',
    conferenceTitle: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    conferenceText:
      '20–25 июня 2026 года в Трабзоне (Турция) прошёл международный саммит академического сотрудничества. 40 участников представили научные статьи и получили международные сертификаты.',
    conferenceDate: '20–25 июня 2026',
    conferencePlace: 'Трабзон, Турция',
    conferencePrice: '800$',
    labels: {
      about: 'О центре',
      services: 'Услуги',
      featured: 'Прошедшее событие',
      date: 'Даты',
      location: 'Место',
      price: 'Стоимость участия',
    },
    stats: [
      ['Scopus', 'Международные публикации'],
      ['ОАК', 'Местные и международные журналы'],
      ['3 языка', 'Узбекский / русский / английский'],
      ['24/7', 'Связь через Telegram'],
    ],
    services: [
      'Публикации в журналах Scopus',
      'Организация международных конференций',
      'Издание книг, монографий и учебников',
      'Публикации в журналах ОАК',
      'ДГУ, патенты и полезные модели',
      'Помощь с диссертациями и стажировками',
    ],
  },
  en: {
    badge: 'International Scientific Publications and Conferences Center',
    primary: 'View services',
    secondary: 'Submit request',
    trustTitle: 'A reliable center for science, publishing and international cooperation',
    trustText:
      'The Most Reliable Publication supports researchers, universities and organizations with scientific publications, conferences, Scopus, academic journals, monographs and publishing projects.',
    servicesTitle: 'Main services',
    servicesText:
      'Comprehensive solutions for researchers, PhD students, universities and scientific organizations.',
    conferenceTitle: 'Uzbekistan–Türkiye International Academic Cooperation Summit',
    conferenceText:
      'The international academic cooperation summit took place in Trabzon, Türkiye, on 20–25 June 2026. 40 participants presented their papers and received international certificates.',
    conferenceDate: '20–25 June 2026',
    conferencePlace: 'Trabzon, Türkiye',
    conferencePrice: '$800',
    labels: {
      about: 'About the center',
      services: 'Services',
      featured: 'Past event',
      date: 'Dates',
      location: 'Location',
      price: 'Participation fee',
    },
    stats: [
      ['Scopus', 'International publications'],
      ['Academic', 'Local and international journals'],
      ['3 languages', 'Uzbek / Russian / English'],
      ['24/7', 'Telegram communication'],
    ],
    services: [
      'Scopus journal publications',
      'International conference organization',
      'Books, monographs and textbooks publishing',
      'Academic journal publications',
      'Software certificates, patents and utility models',
      'Dissertation and internship support',
    ],
  },
} satisfies Record<Locale, unknown>;

const meta = {
  uz: {
    title: 'The Most Reliable Publication — ilmiy nashrlar va xalqaro konferensiyalar',
    description:
      'Scopus va OAK jurnallarida ilmiy maqolalar, monografiya va darsliklar nashri, xalqaro konferensiyalar tashkil etish. Ilmiy tadqiqotlar markazi va nashriyot.',
  },
  ru: {
    title: 'The Most Reliable Publication — научные публикации и международные конференции',
    description:
      'Публикации в журналах Scopus и ОАК, издание монографий и учебников, организация международных конференций. Научно-исследовательский центр и издательство.',
  },
  en: {
    title: 'The Most Reliable Publication — scientific publications and international conferences',
    description:
      'Publications in Scopus and academic journals, monographs and textbooks, international conference organization. A scientific research center and publishing house.',
  },
} satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, path: '', ...meta[locale] });
}

export default async function HomePage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const t = dictionary[locale];
  const c = content[locale];

  return (
    <main>
      <header className="premiumHero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="premiumHeroInner">
          <div className="premiumBadge">{c.badge}</div>

          <h1>
            The Most Reliable
            <span>Publication</span>
          </h1>

          <p className="premiumHeroText">{t.heroText}</p>

          <div className="premiumHeroActions">
            <Link href={`/${locale}/services`} className="premiumButton premiumButtonPrimary">
              {c.primary}
            </Link>
            <Link href={`/${locale}/contact`} className="premiumButton premiumButtonSecondary">
              {c.secondary}
            </Link>
          </div>

          <div className="premiumStats">
            {c.stats.map((item: string[]) => (
              <div className="premiumStat" key={item[0]}>
                <strong>{item[0]}</strong>
                <span>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="premiumIntro">
        <div>
          <p className="sectionKicker">{c.labels.about}</p>
          <h2>{c.trustTitle}</h2>
        </div>
        <p>{c.trustText}</p>
      </section>

      <section className="premiumSection">
        <div className="premiumSectionHeader">
          <div>
            <p className="sectionKicker">{c.labels.services}</p>
            <h2>{c.servicesTitle}</h2>
          </div>
          <p>{c.servicesText}</p>
        </div>

        <div className="serviceGrid">
          {c.services.map((service: string, index: number) => (
            <Link href={`/${locale}/services`} className="serviceCard" key={service}>
              <div className="serviceNumber">{String(index + 1).padStart(2, '0')}</div>
              <h3>{service}</h3>
              <span>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="conferenceBlock">
        <div className="conferenceCard">
          <div>
            <p className="sectionKicker light">{c.labels.featured}</p>
            <h2>{c.conferenceTitle}</h2>
            <p>{c.conferenceText}</p>

            <div className="conferenceFacts">
              <div>
                <span>{c.labels.date}</span>
                <strong>{c.conferenceDate}</strong>
              </div>
              <div>
                <span>{c.labels.location}</span>
                <strong>{c.conferencePlace}</strong>
              </div>
              <div>
                <span>{c.labels.price}</span>
                <strong>{c.conferencePrice}</strong>
              </div>
            </div>

            <Link href={`/${locale}/conferences`} className="premiumButton premiumButtonLight">
              {t.readMore}
            </Link>
          </div>
        </div>
      </section>

      <LegacyGallery locale={locale} />

      <PopularPages locale={locale} />

      <LatestNews locale={locale} />
    </main>
  );
}
