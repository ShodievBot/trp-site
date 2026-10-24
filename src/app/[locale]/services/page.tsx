import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/lib/i18n';
import { dictionary } from '@/lib/dictionary';
import { pageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page = {
  uz: {
    kicker: 'Xizmatlar',
    title: 'Ilmiy faoliyat va nashriyot uchun kompleks xizmatlar',
    description:
      'The Most Reliable Publication tadqiqotchilar, doktorantlar, universitetlar va ilmiy tashkilotlar uchun ilmiy nashrlar, konferensiyalar, Scopus, OAK, patent va nashriyot yo‘nalishlarida xizmat ko‘rsatadi.',
    ctaTitle: 'Xizmatdan foydalanmoqchimisiz?',
    ctaText:
      'Ariza qoldiring, mutaxassislarimiz siz bilan Telegram yoki telefon orqali bog‘lanadi.',
    ctaButton: 'Ariza qoldirish',
    directionsTitle: 'Nashriyot yo‘nalishlari',
    directionsText: 'Nashriyotimiz quyidagi yo‘nalishlarda chop etiladigan mahsulotlar tayyorlaydi.',
    directions: [
      ['Ijtimoiy-siyosiy nashrlar', 'Keng ommaga mo‘ljallangan, targ‘ibot va ma’rifiy xarakterga ega asarlar.'],
      ['Axborot-reklama nashrlari', 'Bukletlar, reklama materiallari, mahsulot va xizmatlar haqidagi nashrlar.'],
      ['O‘quv adabiyotlari', 'Ta’lim muassasalari uchun darsliklar, qo‘llanmalar, ish daftarlari va metodik materiallar.'],
      ['Ma’naviy-ma’rifiy nashrlar', 'Jamiyat tarbiyasi, inson kamoloti va ma’naviy yuksalishga yo‘naltirilgan asarlar.'],
      ['Adabiy-badiiy nashrlar', 'Romanlar, hikoyalar, rivoyatlar, qissalar, to‘plamlar va antologiyalar.'],
      ['Ilmiy nashrlar', 'Ilmiy tadqiqotlar, monografiyalar, ilmiy maqolalar va ilmiy-amaliy ishlanmalar.'],
      ['Ilmiy-ommabop nashrlar', 'Ilm-fan yutuqlarini keng ommaga tushunarli tilda yorituvchi kitoblar.'],
      ['Rasmiy nashrlar', 'Davlat muassasalari, tashkilotlar va idoralarning normativ-huquqiy hujjatlari.'],
      ['Ensiklopedik nashrlar', 'Ma’lumotnomalar, izohli qo‘llanmalar, qisqa va tezkor ma’lumotlar to‘plamlari.'],
      ['Diniy nashrlar', 'Diniy-ma’rifiy mazmundagi asarlar, tarixiy ma’lumotlar va diniy ta’limotga oid kitoblar.'],
    ],
    processTitle: 'Ish jarayoni',
    process: [
      'Murojaatingizni qabul qilamiz',
      'Yo‘nalish va talablarni aniqlaymiz',
      'Kerakli hujjatlar va materiallarni tayyorlaymiz',
      'Nashr, konferensiya yoki xizmat jarayonini kuzatib boramiz',
    ],
    services: [
      {
        title: 'Scopus jurnallarida ilmiy nashr',
        text: 'Scopus bazasidagi xalqaro ilmiy jurnallar uchun maqola tayyorlash va nashr jarayonida maslahat.',
        tag: 'Scopus',
      },
      {
        title: 'Xalqaro konferensiyalar tashkil etish',
        text: 'Universitetlar, kafedralar va ilmiy markazlar bilan hamkorlikda xalqaro konferensiyalarni tashkil etish.',
        tag: 'Konferensiya',
      },
      {
        title: 'Kitob, monografiya va darslik nashri',
        text: 'Kitob, monografiya, o‘quv qo‘llanma va darsliklarni tayyorlash, tahrirlash va nashr qilish.',
        tag: 'Nashriyot',
      },
      {
        title: 'OAK jurnallarida maqola chiqarish',
        text: 'Mahalliy va xalqaro OAK jurnallarida ilmiy maqolalarni joylashtirish bo‘yicha xizmatlar.',
        tag: 'OAK',
      },
      {
        title: 'DGU, patent va foydali model',
        text: 'DGU guvohnomasi, foydali model va ixtiro patentlari bo‘yicha hujjatlarni tayyorlashda yordam.',
        tag: 'Patent',
      },
      {
        title: 'Dissertatsiya va stajirovka bo‘yicha yordam',
        text: 'Dissertatsiya ishlari, ilmiy maqolalar, xorijiy stajirovka va akademik hujjatlar bo‘yicha maslahat.',
        tag: 'Ilmiy yordam',
      },
    ],
  },
  ru: {
    kicker: 'Услуги',
    title: 'Комплексные услуги для научной деятельности и издательства',
    description:
      'The Most Reliable Publication оказывает услуги исследователям, докторантам, университетам и научным организациям в сфере научных публикаций, конференций, Scopus, ОАК, патентов и издательских проектов.',
    ctaTitle: 'Хотите воспользоваться услугой?',
    ctaText:
      'Оставьте заявку, и наши специалисты свяжутся с вами через Telegram или по телефону.',
    ctaButton: 'Оставить заявку',
    directionsTitle: 'Направления издательства',
    directionsText: 'Наше издательство выпускает печатную продукцию по следующим направлениям.',
    directions: [
      ['Общественно-политические издания', 'Агитационные и просветительские произведения для широкой аудитории.'],
      ['Информационно-рекламные издания', 'Буклеты, рекламные материалы, издания о товарах и услугах.'],
      ['Учебная литература', 'Учебники, пособия, рабочие тетради и методические материалы для учебных заведений.'],
      ['Духовно-просветительские издания', 'Произведения о воспитании общества, развитии личности и духовном росте.'],
      ['Художественная литература', 'Романы, рассказы, предания, повести, сборники и антологии.'],
      ['Научные издания', 'Научные исследования, монографии, научные статьи и научно-практические разработки.'],
      ['Научно-популярные издания', 'Книги, понятным языком рассказывающие о достижениях науки.'],
      ['Официальные издания', 'Нормативно-правовые документы государственных учреждений, организаций и ведомств.'],
      ['Энциклопедические издания', 'Справочники, толковые пособия, сборники кратких и оперативных сведений.'],
      ['Религиозные издания', 'Религиозно-просветительские произведения, исторические материалы и книги о религиозном учении.'],
    ],
    processTitle: 'Как мы работаем',
    process: [
      'Принимаем ваше обращение',
      'Уточняем направление и требования',
      'Готовим необходимые документы и материалы',
      'Сопровождаем процесс публикации, конференции или услуги',
    ],
    services: [
      {
        title: 'Публикации в журналах Scopus',
        text: 'Консультация и сопровождение публикационного процесса для международных журналов, индексируемых в Scopus.',
        tag: 'Scopus',
      },
      {
        title: 'Организация международных конференций',
        text: 'Организация международных конференций совместно с университетами, кафедрами и научными центрами.',
        tag: 'Конференции',
      },
      {
        title: 'Издание книг, монографий и учебников',
        text: 'Подготовка, редактирование и издание книг, монографий, учебных пособий и учебников.',
        tag: 'Издательство',
      },
      {
        title: 'Публикации в журналах ОАК',
        text: 'Сопровождение публикации научных статей в местных и международных журналах ОАК.',
        tag: 'ОАК',
      },
      {
        title: 'ДГУ, патенты и полезные модели',
        text: 'Помощь в подготовке документов для ДГУ, полезной модели и патента на изобретение.',
        tag: 'Патенты',
      },
      {
        title: 'Помощь с диссертациями и стажировками',
        text: 'Консультации по диссертационным работам, научным статьям, зарубежным стажировкам и академическим документам.',
        tag: 'Научная поддержка',
      },
    ],
  },
  en: {
    kicker: 'Services',
    title: 'Comprehensive services for research and publishing',
    description:
      'The Most Reliable Publication provides services for researchers, PhD students, universities and scientific organizations in scientific publications, conferences, Scopus, academic journals, patents and publishing projects.',
    ctaTitle: 'Would you like to request a service?',
    ctaText:
      'Submit a request, and our specialists will contact you via Telegram or phone.',
    ctaButton: 'Submit request',
    directionsTitle: 'Publishing areas',
    directionsText: 'Our publishing house produces printed materials in the following areas.',
    directions: [
      ['Socio-political publications', 'Educational and outreach works for a broad audience.'],
      ['Information and advertising publications', 'Booklets, promotional materials and publications about products and services.'],
      ['Educational literature', 'Textbooks, manuals, workbooks and teaching materials for educational institutions.'],
      ['Moral and educational publications', 'Works on public upbringing, personal growth and spiritual development.'],
      ['Fiction and literature', 'Novels, short stories, legends, novellas, collections and anthologies.'],
      ['Scientific publications', 'Research works, monographs, scientific articles and applied research.'],
      ['Popular science publications', 'Books presenting scientific achievements in accessible language.'],
      ['Official publications', 'Regulatory and legal documents of government bodies, organizations and agencies.'],
      ['Encyclopedic publications', 'Reference books, explanatory guides and collections of concise information.'],
      ['Religious publications', 'Religious and educational works, historical materials and books on religious teaching.'],
    ],
    processTitle: 'How we work',
    process: [
      'We receive your request',
      'We clarify the field and requirements',
      'We prepare the required documents and materials',
      'We support the publication, conference or service process',
    ],
    services: [
      {
        title: 'Scopus journal publications',
        text: 'Consulting and support for the publication process in international journals indexed in Scopus.',
        tag: 'Scopus',
      },
      {
        title: 'International conference organization',
        text: 'Organization of international conferences in cooperation with universities, departments and scientific centers.',
        tag: 'Conferences',
      },
      {
        title: 'Books, monographs and textbooks publishing',
        text: 'Preparation, editing and publishing of books, monographs, teaching manuals and textbooks.',
        tag: 'Publishing',
      },
      {
        title: 'Academic journal publications',
        text: 'Support for publishing scientific articles in local and international academic journals.',
        tag: 'Academic journals',
      },
      {
        title: 'Software certificates, patents and utility models',
        text: 'Assistance in preparing documents for software certificates, utility models and invention patents.',
        tag: 'Patents',
      },
      {
        title: 'Dissertation and internship support',
        text: 'Consulting on dissertations, scientific articles, international internships and academic documents.',
        tag: 'Academic support',
      },
    ],
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = page[locale];
  return pageMetadata({ locale, path: '/services', title: c.kicker, description: c.description });
}

export default async function ServicesPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const t = dictionary[locale];
  const c = page[locale];

  return (
    <main>
      <section className="innerHero">

        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="servicesPageSection">
        <div className="servicesPageGrid">
          {c.services.map((service: { title: string; text: string; tag: string }, index: number) => (
            <article className="servicesPageCard" key={service.title}>
              <div className="servicesPageCardTop">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <em>{service.tag}</em>
              </div>

              <h2>{service.title}</h2>
              <p>{service.text}</p>

              <Link href={`/${locale}/contact`} className="servicesPageLink">
                {c.ctaButton} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="premiumSection" id="directions">
        <div className="premiumSectionHeader">
          <div>
            <p className="sectionKicker">{c.kicker}</p>
            <h2>{c.directionsTitle}</h2>
          </div>
          <p>{c.directionsText}</p>
        </div>

        <div className="directionsGrid">
          {c.directions.map(([title, text]: string[], index: number) => (
            <article className="directionCard" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="processSection">
        <div className="processCard">
          <div>
            <p className="sectionKicker">{c.processTitle}</p>
            <h2>{c.processTitle}</h2>
          </div>

          <div className="processList">
            {c.process.map((item: string, index: number) => (
              <div className="processItem" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="serviceCta">
        <div>
          <p className="sectionKicker">{t.contact}</p>
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
        </div>

        <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
          {c.ctaButton}
        </Link>
      </section>
    </main>
  );
}
