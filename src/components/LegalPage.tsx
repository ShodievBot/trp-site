import Link from "next/link";
import "@/app/legal.css";
import { pick, type Locale, type LocaleMap } from "@/lib/i18n";
import { getLegalHtml, type LegalDoc } from "@/lib/legalDocs";

type Meta = { kicker: string; title: string; description: string };

const meta: Record<LegalDoc, LocaleMap<Meta>> = {
  offer: {
    uz: { kicker: "Oferta", title: "Ommaviy oferta", description: "Ilmiy ishlarni nashrga tayyorlash va nashr etilishini ta'minlash xizmatlari shartnomasi." },
    ru: { kicker: "Оферта", title: "Публичная оферта", description: "Договор оказания услуг по подготовке к публикации и обеспечению публикации научных работ." },
    en: { kicker: "Offer", title: "Public offer", description: "Agreement for pre-publication preparation and publication support services." },
    tr: { kicker: "Teklif", title: "Kamuya açık teklif", description: "Bilimsel çalışmaların yayına hazırlanması ve yayın desteği hizmet sözleşmesi." },
    kk: { kicker: "Оферта", title: "Жария оферта", description: "Ғылыми жұмыстарды жариялауға дайындау және жариялануын қамтамасыз ету қызметтері шарты." },
  },
  privacy: {
    uz: { kicker: "Maxfiylik", title: "Konfidensiallik siyosati", description: "Saytda shaxsga doir ma'lumotlarni qayta ishlash va himoya qilish tartibi." },
    ru: { kicker: "Конфиденциальность", title: "Политика конфиденциальности", description: "Порядок обработки и защиты персональных данных пользователей сайта." },
    en: { kicker: "Privacy", title: "Privacy policy", description: "How we process and protect the personal data of website users." },
    tr: { kicker: "Gizlilik", title: "Gizlilik politikası", description: "Site kullanıcılarının kişisel verilerinin işlenmesi ve korunması." },
    kk: { kicker: "Құпиялылық", title: "Құпиялылық саясаты", description: "Сайт пайдаланушыларының дербес деректерін өңдеу және қорғау тәртібі." },
  },
};

const ui = {
  uz: { fallback: "", contact: "Bog'lanish" },
  ru: { fallback: "", contact: "Связаться с нами" },
  en: { fallback: "", contact: "Contact us" },
  tr: { fallback: "Bu belge İngilizce sunulmaktadır. Hukuken geçerli metinler Özbekçe, Rusça ve İngilizce sürümlerdir.", contact: "İletişim" },
  kk: { fallback: "Бұл құжат орыс тілінде берілген. Заңды күші бар мәтіндер — өзбек, орыс және ағылшын тілдеріндегі нұсқалар.", contact: "Байланыс" },
} satisfies LocaleMap<{ fallback: string; contact: string }>;

export function legalMeta(doc: LegalDoc, locale: Locale) {
  return pick(meta[doc], locale);
}

export default async function LegalPage({ doc, locale }: { doc: LegalDoc; locale: Locale }) {
  const m = legalMeta(doc, locale);
  const t = pick(ui, locale);
  const other: LegalDoc = doc === "offer" ? "privacy" : "offer";
  const { html, isFallback } = await getLegalHtml(doc, locale);

  return (
    <main>
      <section className="innerHero">
        <div className="innerHeroContent">
          <p className="innerKicker">{m.kicker}</p>
          <h1>{m.title}</h1>
          <p>{m.description}</p>
        </div>
      </section>
      <section className="legalSection">
        {isFallback && t.fallback ? <p className="legalNotice">{t.fallback}</p> : null}
        <article className="legalCard legalDoc" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="legalActions">
          <Link href={`/${locale}/${other}`} className="premiumButton premiumButtonSecondary">
            {legalMeta(other, locale).title}
          </Link>
          <Link href={`/${locale}/contact`} className="premiumButton premiumButtonSecondary">{t.contact}</Link>
        </div>
      </section>
    </main>
  );
}
