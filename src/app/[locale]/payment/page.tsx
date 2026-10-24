import { pick } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPaymentSettings,
  getYouTubeEmbedUrl,
  type Locale,
} from "@/lib/paymentAdmin";
import { pageMetadata } from "@/lib/seo";

const extra = {
  uz: { process: "Jarayon", video: "Video", offer: "Ommaviy oferta", license: "Nashriyot guvohnomasi" },
  ru: { process: "Порядок", video: "Видео", offer: "Публичная оферта", license: "Лицензия издательства" },
  en: { process: "Process", video: "Video", offer: "Public offer", license: "Publishing license" },
};

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

function isLocale(value: string): value is Locale {
  return value === "uz" || value === "ru" || value === "en";
}

export const revalidate = 300;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = (await getPaymentSettings())[locale];
  return pageMetadata({ locale, path: "/payment", title: t.title, description: t.subtitle });
}

export default async function PaymentPage({ params }: Props) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const settings = await getPaymentSettings();
  const t = pick(settings, locale) || settings.uz;
  const videoEmbedUrl = getYouTubeEmbedUrl(settings.youtubeUrl);
  const x = pick(extra, locale);

  return (
    <main className="paymentUnifiedPage">
      <section className="innerHero paymentUnifiedHero">
        <div className="innerHeroContent paymentUnifiedHeroContent">
          <p className="innerKicker">{t.badge}</p>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <section className="paymentUnifiedSection">
        <div className="paymentUnifiedGrid">
          <article className="paymentUnifiedCard paymentUnifiedQrCard">
            <div className="paymentUnifiedQrPlaceholder">
              {settings.qrImage ? (
                <Image
                  src={settings.qrImage}
                  alt={t.qrTitle}
                  width={260}
                  height={260}
                  className="paymentUnifiedQrImage"
                  unoptimized
                />
              ) : (
                <>
                  <div className="paymentUnifiedQrIcon">{t.qrLabel}</div>
                  <span>{t.qrComing}</span>
                </>
              )}
            </div>

            <div className="paymentUnifiedText">
              <p className="sectionKicker">{t.badge}</p>
              <h2>{t.qrTitle}</h2>
              <p>{t.qrText}</p>

              <div className="paymentUnifiedActions">
                <a
                  href={settings.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premiumButton premiumButtonPrimary"
                >
                  {t.telegram}
                </a>

                <Link
                  href={`/${locale}/contact`}
                  className="premiumButton premiumButtonSecondary"
                >
                  {t.contact}
                </Link>
              </div>
            </div>
          </article>

          <article className="paymentUnifiedCard paymentUnifiedStepsCard">
            <p className="sectionKicker">{x.process}</p>
            <h2>{t.stepsTitle}</h2>

            <div className="paymentUnifiedSteps">
              {t.steps.map((step, index) => (
                <div className="paymentUnifiedStep" key={`${step}-${index}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="paymentUnifiedVideoCard">
          <div className="paymentUnifiedVideoText">
            <p className="sectionKicker">{x.video}</p>
            <h2>{t.videoTitle}</h2>
            <p>{t.videoText}</p>
          </div>

          <div className="paymentUnifiedVideoPlaceholder">
            {videoEmbedUrl ? (
              <iframe
                className="paymentUnifiedVideoFrame"
                src={videoEmbedUrl}
                title={t.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                <div className="paymentUnifiedPlay"></div>
                <span>{t.videoComing}</span>
              </>
            )}
          </div>
        </article>

        <div className="paymentUnifiedBack">
          <Link href={`/${locale}/offer`} className="premiumButton premiumButtonSecondary">
            {x.offer}
          </Link>
          <Link href={`/${locale}/license`} className="premiumButton premiumButtonSecondary">
            {x.license}
          </Link>
          <Link href={`/${locale}`} className="premiumButton premiumButtonSecondary">
            {t.back}
          </Link>
        </div>
      </section>
    </main>
  );
}
