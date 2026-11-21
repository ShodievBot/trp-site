import "../globals.css";
import "../header.css";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MotionReveal from "@/components/MotionReveal";
import { JsonLd, organizationLd, websiteLd } from "@/lib/jsonld";
import { plexSans } from "@/lib/fonts";
import { isLocale, locales } from "@/lib/i18n";
import YandexMetrika from "@/components/YandexMetrika";
import { INDEXING } from "@/lib/seo";

export const metadata = INDEXING
  ? {
      icons: {
        icon: [
          { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
          { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
        ],
        apple: "/icon-192.png",
      },
      manifest: "/manifest.webmanifest",
    }
  : { robots: { index: false, follow: false } };

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={plexSans.variable}>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
        <YandexMetrika />
        <MotionReveal />
      </body>
    </html>
  );
}
