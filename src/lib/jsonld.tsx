// JSON-LD structured data. Render with <JsonLd data={...} /> — one block per page.
import { site } from "@/lib/siteConfig";
import { SITE_URL } from "@/lib/seo";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: site.legalName,
    alternateName: "The Most Reliable Publication",
    url: SITE_URL,
    email: site.email,
    telephone: site.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Beruniy ko‘chasi, 1-uy",
      addressLocality: "Samarqand",
      addressCountry: "UZ",
    },
    sameAs: [site.telegramUrl, site.channelUrl],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "The Most Reliable Publication",
    inLanguage: ["uz", "ru", "en"],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function articleLd({
  locale,
  path,
  title,
  description,
  date,
  image,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  date?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    ...(date ? { datePublished: date } : {}),
    inLanguage: locale,
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    mainEntityOfPage: `${SITE_URL}/${locale}${path}`,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function eventLd({
  locale,
  path,
  title,
  description,
  start,
  end,
  city,
  country,
  image,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  start: string;
  end?: string;
  city: string;
  country: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    description,
    startDate: start,
    ...(end ? { endDate: end } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: city, addressCountry: country },
    },
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    url: `${SITE_URL}/${locale}${path}`,
    organizer: { "@id": ORGANIZATION_ID },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
