import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_KEYWORDS,
  COMPANY_INFO,
} from "./constants";

// ------------------------------------------------------------
// HELPERS DE METADATA (SEO on-page)
// ------------------------------------------------------------

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  images?: { url: string; width: number; height: number; alt: string }[];
}

/**
 * Gera Metadata padrão para qualquer página do site.
 * Garante title único, description, canonical, Open Graph,
 * Twitter Cards e controle de indexação em um único lugar.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  images,
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    title === SITE_NAME || title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ogImages =
    images && images.length > 0
      ? images
      : [
          {
            url: `${SITE_URL}/opengraph-image.png`,
            width: 1200,
            height: 630,
            alt: SITE_NAME,
          },
        ];

  return {
    title,
    description,
    keywords: [...SITE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors && authors.length > 0 ? { authors } : {}),
      ...(section ? { section } : {}),
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImages.map((img) => img.url),
    },
  };
}

// ------------------------------------------------------------
// JSON-LD (Schema.org) - dados estruturados
// ------------------------------------------------------------

/** JSON-LD genérico para injetar via dangerouslySetInnerHTML */
export function jsonLd(data: object): string {
  return JSON.stringify(data);
}

/** Schema.org WebPage + BreadcrumbList para páginas internas */
export function webPageSchema({
  title,
  description,
  path,
  breadcrumbs,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs: { name: string; path: string }[];
}): object {
  const itemList = [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    ...breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: b.name,
      item: `${SITE_URL}${b.path}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${path}`,
        url: `${SITE_URL}${path}`,
        name: title,
        description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${path}#breadcrumb`,
        itemListElement: itemList,
      },
    ],
  };
}

/** Schema.org FAQPage */
export function faqSchema(
  faqs: { question: string; answer: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Schema.org Article para posts do blog */
export function articleSchema({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
  authorName = "Equipe Flambra",
  authorUrl,
  section,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedTime: string;
  modifiedTime: string;
  authorName?: string;
  authorUrl?: string;
  section?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${SITE_URL}${image}`,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    inLanguage: "pt-BR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl ? { url: authorUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    ...(section ? { articleSection: section } : {}),
  };
}

/** Schema.org Organization (global, no layout) */
export function organizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    foundingDate: "2022",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/flambra.app/",
      "https://br.linkedin.com/company/flambra",
    ],
  };
}

/** Schema.org WebSite (global, com SearchAction para o blog) */
export function websiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/** Schema.org LocalBusiness (global, com telefone, endereços e horário) */
export function localBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    foundingDate: String(COMPANY_INFO.founded),
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image.png`,
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Metropolitan Tokyo",
        addressRegion: "Tokyo",
        addressCountry: "JP",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.6869,
      longitude: -49.2648,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.instagram.com/flambra.app/",
      "https://br.linkedin.com/company/flambra",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Brasil",
      },
      {
        "@type": "Country",
        name: "Japão",
      },
    ],
  };
}
