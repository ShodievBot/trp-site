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
      "Ibodullayeva Zubayda Sherzodovna — “THE MOST RELIABLE PUBLICATION” MCHJ ilmiy tadqiqotlar markazi va nashriyotining direktori, pedagogika bo‘yicha ilmiy nashrlar muallifi.",
    roleTitle: "Faoliyati",
    role: [
      "“THE MOST RELIABLE PUBLICATION” MCHJ ilmiy tadqiqotlar markazi va nashriyotiga rahbarlik qiladi. Kompaniya Samarqandda ro‘yxatga olingan (STIR 311122349) va Scopus, OAK jurnallarida nashr, kitob va monografiyalar chop etish hamda xalqaro konferensiyalar tashkil etish bilan shug‘ulanadi.",
      "2025–2026-yillarda markaz Turkiya (Trabzon, Istanbul, Alanya) va O‘zbekistondagi universitetlar bilan hamkorlikda xalqaro ilmiy tadbirlar o‘tkazdi, shu jumladan Samarqand davlat pedagogika instituti va SamDAQU bilan xalqaro konferensiyalar.",
      "Nashriyot faoliyati rasmiy hujjatlar asosida olib boriladi: davlat ro‘yxati (22.02.2024), nashriyot faoliyati tasdiqnoma № 1090203 va ommaviy tadbirlar bo‘yicha № 1316085 ruxsatnoma.",
    ],
    scienceTitle: "Ilmiy qiziqishlar",
    science:
      "Pedagogika yo‘nalishida ilmiy maqolalar muallifi. Ishlari, xususan, madaniy xilma-xillik sharoitida pedagogik faoliyat va ta’limda innovatsion texnologiyalarni joriy etishga bag‘ishlangan. Nashrlar Google Scholar profilida keltirilgan.",
    contactTitle: "Bog‘lanish",
    photoNote: "[Direktor rasmi — foto keyinroq qo‘shiladi]",
  },
  ru: {
    kicker: "Руководство",
    name: "Ибодуллаева Зубайда Шерзодовна",
    title: "Ибодуллаева Зубайда Шерзодовна — директор издательства",
    description:
      "Ибодуллаева Зубайда Шерзодовна — директор научного центра и издательства «THE MOST RELIABLE PUBLICATION» MCHJ, автор научных публикаций по педагогике.",
    roleTitle: "Деятельность",
    role: [
      "Руководит научным центром и издательством «THE MOST RELIABLE PUBLICATION» MCHJ. Компания зарегистрирована в Самарканде (ИНН 311122349) и занимается публикациями в журналах Scopus и ОАК, изданием книг и монографий, организацией международных конференций.",
      "В 2025–2026 годах центр провёл международные научные мероприятия в партнёрстве с Турцией (Трабзон, Стамбул, Аланья) и университетами Узбекистана, включая конференции с Самаркандским государственным педагогическим институтом и СамДАКУ.",
      "Издательство работает на официальных документах: госрегистрация (22.02.2024), подтверждение издательской деятельности № 1090203, разрешение на публичные мероприятия № 1316085.",
    ],
    scienceTitle: "Научные интересы",
    science:
      "Автор научных статей по педагогике. Работы посвящены, в частности, педагогической деятельности в условиях культурного разнообразия и внедрению инновационных технологий в образовании. Публикации приведены в профиле Google Scholar.",
    contactTitle: "Контакты",
    photoNote: "[Фотография директора — будет добавлена позже]",
  },
  en: {
    kicker: "Leadership",
    name: "Zubayda Sherzodovna Ibodullayeva",
    title: "Zubayda Sherzodovna Ibodullayeva — director of the publishing house",
    description:
      "Zubayda Sherzodovna Ibodullayeva is the director of the research centre and publishing house \"THE MOST RELIABLE PUBLICATION\" LLC, an author of research publications in pedagogy.",
    roleTitle: "Role",
    role: [
      "Heads the research centre and publishing house \"THE MOST RELIABLE PUBLICATION\" LLC. The company is registered in Samarkand (TIN 311122349) and provides Scopus and OAK journal publications, book and monograph publishing, and international conference organisation.",
      "In 2025–2026 the centre held international academic events in cooperation with Türkiye (Trabzon, Istanbul, Alanya) and universities of Uzbekistan, including conferences with Samarkand State Pedagogical Institute and SamDAQU.",
      "The publishing house operates on official documents: state registration (22.02.2024), publishing activity confirmation No. 1090203 and public events permit No. 1316085.",
    ],
    scienceTitle: "Research interests",
    science:
      "Author of research articles in pedagogy. Her works focus, in particular, on pedagogical activity in the context of cultural diversity and the introduction of innovative technologies in education. Publications are listed in her Google Scholar profile.",
    contactTitle: "Contact",
    photoNote: "[Director photo — to be added later]",
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
                {locale === "ru" ? "Оставить заявку" : locale === "en" ? "Submit a request" : "Ariza qoldirish"}
              </Link>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
