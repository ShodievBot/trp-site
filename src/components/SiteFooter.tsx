import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getNav } from "@/lib/navigation";

const footer: Record<
  Locale,
  { pages: string; tagline: string; license: string; offer: string; telegramGroup: string; rights: string }
> = {
  uz: {
    pages: "Sahifalar",
    tagline: "Ilmiy nashrlar va akademik hamkorlik",
    license: "Nashriyot guvohnomasi",
    offer: "Ommaviy oferta",
    telegramGroup: "Telegram guruh",
    rights: "Barcha huquqlar himoyalangan.",
  },
  en: {
    pages: "Pages",
    tagline: "Scientific publications & academic cooperation",
    license: "Publishing license",
    offer: "Public offer",
    telegramGroup: "Telegram group",
    rights: "All rights reserved.",
  },
  ru: {
    pages: "Страницы",
    tagline: "Научные публикации и академическое сотрудничество",
    license: "Лицензия издательства",
    offer: "Публичная оферта",
    telegramGroup: "Telegram-группа",
    rights: "Все права защищены.",
  },
  tr: {
    pages: "Sayfalar",
    tagline: "Bilimsel yayınlar ve akademik iş birliği",
    license: "Yayınevi lisansı",
    offer: "Kamuya açık teklif",
    telegramGroup: "Telegram grubu",
    rights: "Tüm hakları saklıdır.",
  },
  kk: {
    pages: "Беттер",
    tagline: "Ғылыми басылымдар және академиялық серіктестік",
    license: "Баспа лицензиясы",
    offer: "Жария оферта",
    telegramGroup: "Telegram тобы",
    rights: "Барлық құқықтар қорғалған.",
  },
};

type Props = {
  locale: Locale;
};

export default function SiteFooter({ locale }: Props) {
  const t = footer[locale] || footer.uz;
  const nav = getNav(locale);

  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="footerBrandCompact">
          <Link href={`/${locale}`} className="footerLogoCompact">
            TRP
          </Link>

          <div>
            <strong>The Most Reliable Publication</strong>
            <span>{t.tagline}</span>
          </div>
        </div>

        <nav className="footerLinks" aria-label={t.pages}>
          {nav.map((item) => (
            <Link key={item.key} href={`/${locale}${item.path}`}>
              {item.label}
            </Link>
          ))}
          <Link href={`/${locale}/license`}>{t.license}</Link>
          <Link href={`/${locale}/offer`}>{t.offer}</Link>
        </nav>

        <div className="footerContacts">
          <a href="tel:+998501076556">+998 50 107 65 56</a>
          <a href="tel:+905306476809">+90 530 647 68 09</a>
          <a
            href="https://t.me/Scopus_xalqaro_respublika_Oak"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.telegramGroup}: @Scopus_xalqaro_respublika_Oak
          </a>
          <a href="mailto:themostreliablepublication@gmail.com">
            themostreliablepublication@gmail.com
          </a>
        </div>
      </div>

      <div className="siteFooterBottom">
        <span>© {new Date().getFullYear()} The Most Reliable Publication</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  );
}
