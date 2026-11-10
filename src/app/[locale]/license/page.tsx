import { pick, type LocaleMap } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "@/components/ImageLightbox";
import { isLocale, type Locale } from "@/lib/i18n";
import { getLegalSettings, getLicenseImage } from "@/lib/legalAdmin";
import { legacyLicenseScans } from "@/lib/legacyMedia";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 300;

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const page = {
  uz: {
    kicker: "Litsenziya",
    title: "Nashriyot guvohnomasi va litsenziyalar",
    description:
      "The Most Reliable Publication nashriyot faoliyatini olib borish va Turkiyada xalqaro konferensiyalar o‘tkazish bo‘yicha rasmiy hujjatlari.",
    mainTitle: "Nashriyot guvohnomasi",
    placeholder: "Guvohnoma tasviri tez orada joylashtiriladi",
    open: "Kattalashtirish",
    close: "Yopish",
    scansTitle: "Tasdiqnomalar va ruxsatnomalar",
    scansText: "Turkiyada xalqaro konferensiya o‘tkazish bo‘yicha litsenziya va tasdiqnomalar.",
    contact: "Savollar bo‘yicha bog‘lanish",
  },
  ru: {
    kicker: "Лицензия",
    title: "Свидетельство и лицензии издательства",
    description:
      "Официальные документы The Most Reliable Publication на издательскую деятельность и проведение международных конференций в Турции.",
    mainTitle: "Свидетельство издательства",
    placeholder: "Изображение свидетельства будет добавлено в ближайшее время",
    open: "Открыть крупно",
    close: "Закрыть",
    scansTitle: "Подтверждения и разрешения",
    scansText: "Лицензия и подтверждения на проведение международных конференций в Турции.",
    contact: "Связаться по вопросам",
  },
  en: {
    kicker: "License",
    title: "Publishing certificate and licenses",
    description:
      "Official documents of The Most Reliable Publication for publishing activities and organizing international conferences in Türkiye.",
    mainTitle: "Publishing certificate",
    placeholder: "The certificate image will be added soon",
    open: "Open full size",
    close: "Close",
    scansTitle: "Confirmations and permits",
    scansText: "License and confirmations for organizing international conferences in Türkiye.",
    contact: "Contact us",
  },
} satisfies LocaleMap<Record<string, string>>;

// Official documents sent by the company (JPEG pages in public/images/docs).
const docs: { pages: string[]; title: LocaleMap<string>; text: LocaleMap<string> }[] = [
  {
    pages: ["registration-1"],
    title: {
      uz: "Yuridik shaxsni davlat ro‘yxatidan o‘tkazish guvohnomasi",
      ru: "Свидетельство о государственной регистрации юридического лица",
      en: "Certificate of state registration of a legal entity",
    },
    text: {
      uz: "“THE MOST RELIABLE PUBLICATION” MCHJ, STIR 311 122 349. Ro‘yxatga olingan sana: 22.02.2024, № 1838843. Bergan organ: Samarqand shahar davlat xizmatlari markazi.",
      ru: "ООО «THE MOST RELIABLE PUBLICATION», ИНН (СТИР) 311 122 349. Дата регистрации: 22.02.2024, № 1838843. Выдано Центром государственных услуг г. Самарканда.",
      en: "THE MOST RELIABLE PUBLICATION LLC, TIN 311 122 349. Registered on 22 February 2024, No. 1838843. Issued by the Samarkand City Public Services Centre.",
    },
  },
  {
    pages: ["publishing-1", "publishing-2", "publishing-3"],
    title: {
      uz: "Noshirlik faoliyati to‘g‘risidagi tasdiqnoma № 1090203",
      ru: "Подтверждение о начале издательской деятельности № 1090203",
      en: "Confirmation of publishing activity No. 1090203",
    },
    text: {
      uz: "O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi tomonidan 12.10.2025 da berilgan, reyestr raqami X-25579. Ilmiy, o‘quv, ilmiy-ommabop va boshqa turdagi nashrlarni qamrab oladi.",
      ru: "Выдано Агентством информации и массовых коммуникаций при Администрации Президента Республики Узбекистан 12.10.2025, номер в реестре Х-25579. Охватывает научные, учебные, научно-популярные и другие виды изданий.",
      en: "Issued by the Agency of Information and Mass Communications under the Administration of the President of the Republic of Uzbekistan on 12 October 2025, register No. X-25579. Covers scientific, educational, popular-science and other publications.",
    },
  },
  {
    pages: ["permit-1", "permit-2"],
    title: {
      uz: "Ommaviy tadbirlarni o‘tkazish uchun ruxsatnoma № 1316085",
      ru: "Разрешение на проведение массовых мероприятий № 1316085",
      en: "Permit to hold public events No. 1316085",
    },
    text: {
      uz: "Samarqand viloyati Ichki ishlar boshqarmasi tomonidan berilgan, reyestr raqami R-3972254. Amal qilish muddati: 15.01.2026 dan 15.01.2027 gacha.",
      ru: "Выдано Управлением внутренних дел Самаркандской области, номер в реестре R-3972254. Срок действия: с 15.01.2026 по 15.01.2027.",
      en: "Issued by the Samarkand Regional Department of Internal Affairs, register No. R-3972254. Valid from 15 January 2026 to 15 January 2027.",
    },
  },
];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = pick(page, locale);
  return pageMetadata({ locale, path: "/license", title: c.title, description: c.description });
}

export default async function LicensePage({ params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const c = pick(page, locale);
  const image = getLicenseImage(await getLegalSettings());

  return (
    <main>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      </section>

      <section className="legalSection">
        {image && (
          <article className="legalCard">
            <h2>{c.mainTitle}</h2>
            <ImageLightbox src={image} alt={c.mainTitle} openLabel={c.open} closeLabel={c.close} />
          </article>
        )}

        {docs.map((doc) => (
          <article className="legalCard" key={doc.pages[0]}>
            <h2>{pick(doc.title, locale)}</h2>
            <p>{pick(doc.text, locale)}</p>

            <div className="legalScans legalDocPages">
              {doc.pages.map((name, index) => (
                <ImageLightbox
                  key={name}
                  src={`/images/docs/${name}.jpg`}
                  alt={`${pick(doc.title, locale)}, ${index + 1}`}
                  openLabel={c.open}
                  closeLabel={c.close}
                />
              ))}
            </div>
          </article>
        ))}

        <article className="legalCard">
          <h2>{c.scansTitle}</h2>
          <p>{c.scansText}</p>

          <div className="legalScans">
            {legacyLicenseScans.map((src, index) => (
              <ImageLightbox
                key={src}
                src={src}
                alt={`${c.scansTitle} ${index + 1}`}
                openLabel={c.open}
                closeLabel={c.close}
              />
            ))}
          </div>
        </article>

        <div className="legalActions">
          <Link href={`/${locale}/contact`} className="premiumButton premiumButtonPrimary">
            {c.contact}
          </Link>
        </div>
      </section>
    </main>
  );
}
