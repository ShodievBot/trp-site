import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import LegalPage, { legalMeta } from "@/components/LegalPage";

export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = legalMeta("privacy", locale);
  return pageMetadata({ locale, path: "/privacy", title: m.title, description: m.description });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage doc="privacy" locale={locale} />;
}
