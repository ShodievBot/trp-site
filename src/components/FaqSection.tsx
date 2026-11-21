import { faqItems } from "@/content/faq";
import { JsonLd, faqLd } from "@/lib/jsonld";
import { pick, type Locale, type LocaleMap } from "@/lib/i18n";

const labels: LocaleMap<{ kicker: string; title: string; note: string }> = {
  uz: { kicker: "FAQ", title: "Ko‘p beriladigan savollar", note: "Javobini topmadingizmi? Telegram orqali so‘rang." },
  ru: { kicker: "FAQ", title: "Частые вопросы", note: "Не нашли ответ? Спросите нас в Telegram." },
  en: { kicker: "FAQ", title: "Frequently asked questions", note: "Didn't find your answer? Ask us on Telegram." },
};

// FAQ accordion for the services page. Inline styles on purpose: the site's
// global stylesheet has no FAQ block, and details/summary needs just a few rules.
export default function FaqSection({ locale }: { locale: Locale }) {
  const t = pick(labels, locale);
  const items = faqItems.map((i) => ({ q: pick(i.q, locale), a: pick(i.a, locale) }));

  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 20px" }}>
      <p className="sectionKicker">{t.kicker}</p>
      <h2 style={{ marginBottom: 32 }}>{t.title}</h2>

      <div>
        {items.map((item) => (
          <details
            key={item.q}
            style={{ borderBottom: "1px solid rgba(128,128,128,0.25)", padding: "16px 4px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>{item.q}</summary>
            <p style={{ marginTop: 12, lineHeight: 1.6, color: "inherit", opacity: 0.85 }}>{item.a}</p>
          </details>
        ))}
      </div>

      <p style={{ marginTop: 24, opacity: 0.7 }}>{t.note}</p>

      <JsonLd data={faqLd(items)} />
    </section>
  );
}
