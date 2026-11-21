import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale, type LocaleMap } from "@/lib/i18n";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLd, ORGANIZATION_ID } from "@/lib/jsonld";
import { site } from "@/lib/siteConfig";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page: LocaleMap<{
  kicker: string;
  title: string;
  description: string;
  roleTitle: string;
  role: string[];
  scienceTitle: string;
  science: string;
  contactTitle: string;
  photoNote: string;
  name: string;
}> = {
  uz: {
    kicker: "Rahbariyat",
    name: "Ibodullayeva Zubayda Sherzodovna",
    title: "Ibodullayeva Zubayda Sherzodovna — nashriyot direktori",
    description:
      "Ibodullayeva Zubayda Sherzodovna — “THE MOST RELIABLE PUBLICATION” MCHJ ilmiy tadqiqotlar markazi va nashriyotining direktori, pedagogika bo‘yicha 20 dan ortiq ilmiy ish muallifi.",
    roleTitle: "Faoliyati",
    role: [
      "“THE MOST RELIABLE PUBLICATION” MCHJ ilmiy tadqiqotlar markazi va nashriyotiga rahbarlik qiladi. Kompaniya Samarqandda ro‘yxatga olingan (STIR 311122349) va Scopus, OAK jurnallarida nashr, kitob va monografiyalar chop etish hamda xalqaro konferensiyalar tashkil etish bilan shug‘ulanadi.",
      "2025–2026-yillarda markaz Turkiya (Trabzon, Istanbul, Alanya) va O‘zbekistondagi universitetlar bilan hamkorlikda xalqaro ilmiy tadbirlar o‘tkazdi, shu jumladan Samarqand davlat pedagogika instituti va SamDAQU bilan xalqaro konferensiyalar.",
      "Nashriyot faoliyati rasmiy hujjatlar asosida olib boriladi: davlat ro‘yxati (22.02.2024), nashriyot faoliyati tasdiqnoma № 1090203 va ommaviy tadbirlar bo‘yicha № 1316085 ruxsatnoma.",
    ],
    scienceTitle: "Ilmiy qiziqishlar",
    science:
      "Pedagogika yo‘nalishida 20 dan ortiq ilmiy ish muallifi (2023–2025). Ishlari ta’limda innovatsion texnologiyalar (STEAM konsepsiyasi, elektron o‘quv platformalari, “flipped classroom” metod), sun’iy intellektga asoslangan baholash tizimlari, o‘qituvchilarning raqamli kompetensiyalari, madaniy xilma-xillik sharoitida pedagogik faoliyat hamda Xorazm jadidlarining pedagogik qarashlari masalalariga bag‘ishlangan. Nashrlar Google Scholar profilida keltirilgan.",
    contactTitle: "Bog‘lanish",
    photoNote: "[Direktor rasmi — foto keyinroq qo‘shiladi]",
  },
  ru: {
    kicker: "Руководство",
    name: "Ибодуллаева Зубайда Шерзодовна",
    title: "Ибодуллаева Зубайда Шерзодовна — директор издательства",
    description:
      "Ибодуллаева Зубайда Шерзодовна — директор научного центра и издательства «THE MOST RELIABLE PUBLICATION» MCHJ, автор более 20 научных работ по педагогике.",
    roleTitle: "Деятельность",
    role: [
      "Руководит научным центром и издательством «THE MOST RELIABLE PUBLICATION» MCHJ. Компания зарегистрирована в Самарканде (ИНН 311122349) и занимается публикациями в журналах Scopus и ОАК, изданием книг и монографий, организацией международных конференций.",
      "В 2025–2026 годах центр провёл международные научные мероприятия в партнёрстве с Турцией (Трабзон, Стамбул, Аланья) и университетами Узбекистана, включая конференции с Самаркандским государственным педагогическим институтом и СамДАКУ.",
      "Издательство работает на официальных документах: госрегистрация (22.02.2024), подтверждение издательской деятельности № 1090203, разрешение на публичные мероприятия № 1316085.",
    ],
    scienceTitle: "Научные интересы",
    science:
      "Автор более 20 научных работ (2023–2025) по педагогике. Работы посвящены инновационным технологиям в образовании (концепция STEAM, электронные обучающие платформы, метод «перевёрнутого класса»), системам оценивания на основе искусственного интеллекта, цифровым компетенциям учителей, педагогической деятельности в условиях культурного разнообразия, а также педагогическим взглядам хорезмских джадидов. Публикации приведены в профиле Google Scholar.",
    contactTitle: "Контакты",
    photoNote: "[Фотография директора — будет добавлена позже]",
  },
  en: {
    kicker: "Leadership",
    name: "Zubayda Sherzodovna Ibodullayeva",
    title: "Zubayda Sherzodovna Ibodullayeva — director of the publishing house",
    description:
      "Zubayda Sherzodovna Ibodullayeva is the director of the research centre and publishing house \"THE MOST RELIABLE PUBLICATION\" LLC and the author of more than 20 scholarly works in pedagogy.",
    roleTitle: "Role",
    role: [
      "Heads the research centre and publishing house \"THE MOST RELIABLE PUBLICATION\" LLC. The company is registered in Samarkand (TIN 311122349) and provides Scopus and OAK journal publications, book and monograph publishing, and international conference organisation.",
      "In 2025–2026 the centre held international academic events in cooperation with Türkiye (Trabzon, Istanbul, Alanya) and universities of Uzbekistan, including conferences with Samarkand State Pedagogical Institute and SamDAQU.",
      "The publishing house operates on official documents: state registration (22.02.2024), publishing activity confirmation No. 1090203 and public events permit No. 1316085.",
    ],
    scienceTitle: "Research interests",
    science:
      "Author of more than 20 scholarly works (2023–2025) in pedagogy. Her research covers innovative technologies in education (the STEAM concept, e-learning platforms, the flipped classroom method), AI-based assessment systems, teachers' digital competences, pedagogical activity in the context of cultural diversity, and the pedagogical views of the Khorezm Jadids. Publications are listed in her Google Scholar profile.",
    contactTitle: "Contact",
    photoNote: "[Director photo — to be added later]",
  },
  tr: {
    kicker: "Yönetim",
    name: "Zubayda Sherzodovna Ibodullayeva",
    title: "Zubayda Sherzodovna Ibodullayeva — yayınevi direktörü",
    description:
      "Zubayda Sherzodovna Ibodullayeva — \"THE MOST RELIABLE PUBLICATION\" LLC araştırma merkezi ve yayınevinin direktörü, pedagoji alanında 20'den fazla bilimsel çalışmanın yazarı.",
    roleTitle: "Faaliyet",
    role: [
      "Araştırma merkezi ve \"THE MOST RELIABLE PUBLICATION\" LLC yayınevine önderlik etmektedir. Şirket Semerkant'ta kayıtlıdır (VKN 311122349) ve Scopus ile OAK dergilerinde yayınlar, kitap ve monografi yayıncılığı ile uluslararası konferansların organizasyonu ile uğraşmaktadır.",
      "2025–2026 yıllarında merkez, Türkiye (Trabzon, İstanbul, Alanya) ve Özbekistan üniversiteleriyle iş birliği içinde uluslararası bilimsel etkinlikler düzenledi; Semerkant Devlet Pedagoji Enstitüsü ve SamDAQU ile konferanslar dâhil.",
      "Yayınevi resmî belgelere dayalı olarak faaliyet yürütmektedir: devlet kaydı (22.02.2024), yayıncılık faaliyeti onayı № 1090203 ve kamu etkinlikleri izni № 1316085.",
    ],
    scienceTitle: "Bilimsel ilgi alanları",
    science:
      "Pedagoji alanında 20'den fazla bilimsel çalışmanın yazarıdır (2023–2025). Çalışmaları eğitimde yenilikçi teknolojileri (STEAM kavramı, e-öğrenme platformları, \"ters yüz sınıf\" yöntemi), yapay zekâ tabanlı değerlendirme sistemlerini, öğretmenlerin dijital yeterliliklerini, kültürel çeşitlilik bağlamında pedagojik faaliyeti ve Harezm Ceditlerinin pedagojik görüşlerini kapsamaktadır. Yayınlar Google Scholar profilinde listelenmiştir.",
    contactTitle: "İletişim",
    photoNote: "[Yönetici fotoğrafı — daha sonra eklenecek]",
  },
  kk: {
    kicker: "Басшылық",
    name: "Ибодуллаева Зубайда Шерзодовна",
    title: "Ибодуллаева Зубайда Шерзодовна — баспа үйінің директоры",
    description:
      "Ибодуллаева Зубайда Шерзодовна — «THE MOST RELIABLE PUBLICATION» ЖШС ғылыми орталығы мен баспа үйінің директоры, педагогика салонындағы 20-дан астам ғылыми еңбектің авторы.",
    roleTitle: "Қызмет",
    role: [
      "«THE MOST RELIABLE PUBLICATION» ЖШС ғылыми орталығы мен баспа үйін басқарады. Компания Самарқантта тіркелген (СТИН 311122349) және Scopus пен ОАК журналдарындағы жарияланымдар, кітап пен монографиялар шығару, халықаралық конференциялар ұйымдастырумен айналысады.",
      "2025–2026 жылдары орталық Түркиямен (Трабзон, Стамбул, Аланья) және Өзбекстан университеттерімен бірлесіп халықаралық ғылыми іс-шаралар өткізді, соның ішінде Самарқант мемлекеттік педагогикалық институты және СамДАҚУ-мен конференциялар.",
      "Баспа үйі ресми құжаттар негізінде жұмыс істейді: мемлекеттік тіркеу (22.02.2024), баспалық қызметті растау № 1090203 және жариялы іс-шараларға рұқсат № 1316085.",
    ],
    scienceTitle: "Ғылыми қызығушылықтары",
    science:
      "Педагогика салонындағы 20-дан астам ғылыми еңбектің авторы (2023–2025). Еңбектері білім берудегі инновациялық технологияларға (STEAM тұжырымдамасы, электрондық оқыту платформалары, «аударылған сынып» әдісі), жасанды интеллект негізіндегі бағалау жүйелеріне, мұғалімдердің цифрлық құзыреттіліктеріне, мәдени алуантүрлілік жағдайындағы педагогикалық қызметке және хорезмдік жәдіттердің педагогикалық көзқарастарына арналған. Жарияланымдар Google Scholar профилінде келтірілген.",
    contactTitle: "Байланыс",
    photoNote: "[Директор фотосы — кейін қосылады]",
  },
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = page[locale] ?? page.uz;
  return pageMetadata({ locale, path: "/director", title: c.kicker, description: c.description });
}

export default async function DirectorPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const c = page[locale] ?? page.uz;

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.name,
    jobTitle: "Direktor / Director",
    worksFor: { "@id": ORGANIZATION_ID },
    url: `${SITE_URL}/${locale}/director`,
    sameAs: [
      "https://scholar.google.com/citations?user=jjFQUvcAAAAJ",
      "https://www.instagram.com/zubayda_sherzodovna/",
      site.directorTelegramUrl,
    ],
    address: { "@type": "PostalAddress", addressLocality: "Samarqand", addressCountry: "UZ" },
  };

  return (
    <main>
      <JsonLd data={personLd} />

      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 20px" }}>
        <article
          style={{
            display: "grid",
            gridTemplateColumns: "min(280px, 100%) 1fr",
            gap: 32,
            alignItems: "start",
          }}
        >
          <div
            style={{
              aspectRatio: "3 / 4",
              borderRadius: 16,
              background: "linear-gradient(135deg, #140f2e, #3a0f8f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f6dda0",
              fontSize: 14,
              textAlign: "center",
              padding: 16,
            }}
          >
            {c.photoNote}
          </div>

          <div>
            <h2>{c.roleTitle}</h2>
            {c.role.map((p) => (
              <p key={p.slice(0, 24)} style={{ lineHeight: 1.6, opacity: 0.9 }}>
                {p}
              </p>
            ))}

            <h2 style={{ marginTop: 28 }}>{c.scienceTitle}</h2>
            <p style={{ lineHeight: 1.6, opacity: 0.9 }}>{c.science}</p>

            <h2 style={{ marginTop: 28 }}>{c.contactTitle}</h2>
            <p>
              <a href={site.directorTelegramUrl} target="_blank" rel="noopener noreferrer">
                Telegram: {site.directorTelegram} ↗
              </a>
            </p>
            <p>
              <a
                href="https://scholar.google.com/citations?user=jjFQUvcAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar ↗
              </a>
            </p>
            <p style={{ marginTop: 20 }}>
              <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
                {locale === "ru"
                  ? "Оставить заявку"
                  : locale === "en"
                    ? "Submit a request"
                    : locale === "tr"
                      ? "Talep gönderin"
                      : locale === "kk"
                        ? "Өтініш қалдыру"
                        : "Ariza qoldirish"}
              </Link>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
