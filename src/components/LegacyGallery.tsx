import { pick, type LocaleMap } from "@/lib/i18n";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { galleryBlocks } from "@/lib/legacyMedia";

const labels = {
  uz: { kicker: "Fotogalereya", title: "Tadbirlarimizdan lavhalar", open: "Rasmni kattalashtirish" },
  ru: { kicker: "Фотогалерея", title: "Кадры с наших мероприятий", open: "Открыть фото крупно" },
  en: { kicker: "Gallery", title: "Moments from our events", open: "Open full-size photo" },
} satisfies LocaleMap<Record<string, string>>;

export function LegacyGallery({ locale }: { locale: Locale }) {
  const t = pick(labels, locale);

  return (
    <section className="premiumSection legacyGallery">
      <div className="premiumSectionHeader">
        <div>
          <p className="sectionKicker">{t.kicker}</p>
          <h2>{t.title}</h2>
        </div>
      </div>

      {galleryBlocks.map((block) => (
        <article className="legacyGalleryBlock" key={block.id} id={block.id}>
          <div className="legacyGalleryText">
            <h3>{pick(block.title, locale)}</h3>
            <p>{pick(block.text, locale)}</p>
          </div>

          <div className="legacyGalleryGrid">
            {block.video ? (
              <video
                className="legacyGalleryVideo"
                controls
                preload="none"
                playsInline
                poster={block.video.poster}
                src={block.video.src}
              />
            ) : null}

            {block.images.map((src) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="legacyGalleryItem"
                aria-label={t.open}
              >
                <Image src={src} alt={pick(block.title, locale)} fill sizes="(max-width: 720px) 50vw, 280px" />
              </a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
