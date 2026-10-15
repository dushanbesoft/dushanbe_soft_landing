import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../../styles/globals.css";
import { dir } from 'i18next';
import { i18nConfig } from "../../../i18nConfig";
import { ReactNode } from "react";
import { tektur, nunitoSans } from "../../styles/fonts";

import initTranslations from "../i18n";
import {
  COMPANY,
  OG_IMAGE,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  buildPageMetadata,
  jsonLdString,
} from "../../utils/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { t } = await initTranslations(lang, ["common"]);

  const defaultTitle = t("seo.default_title", "Dushanbe Soft | Разработка программного обеспечения");
  const defaultDesc = t("seo.default_description", "Инновационные IT-решения для бизнеса. Разработка программного обеспечения, сайтов, ERP систем и мобильных приложений в Таджикистане.");
  const page = buildPageMetadata({ lang, path: "", title: defaultTitle, description: defaultDesc });

  return {
    ...page,
    metadataBase: new URL(SITE_URL),
    title: {
      default: defaultTitle,
      template: `%s | ${SITE_NAME}`
    },
    applicationName: SITE_NAME,
    keywords: t("seo.keywords", "разработка ПО, создание сайтов, мобильные приложения, автоматизация бизнеса, Душанбе, Таджикистан, Dushanbe Soft, IT компания, web development, mobile development, software engineering"),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
    appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "black-translucent",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#000607",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t } = await initTranslations(lang, ["common"]);
  const inLanguage = lang === 'tj' ? 'tg' : lang;

  // One entity graph for the whole site: the organization (as a local
  // ProfessionalService) and the website it publishes. Pages reference
  // these by @id instead of re-declaring the organization.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORGANIZATION_ID,
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        alternateName: ['Dushanbe-Soft', 'DushanbeSoft', 'Душанбе Софт', 'Private Enterprise "Dushanbe Soft"'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        image: OG_IMAGE.url,
        description: t("seo.default_description"),
        slogan: t("footer.desc"),
        foundingDate: COMPANY.foundingDate,
        telephone: COMPANY.telephone,
        email: COMPANY.email,
        priceRange: '$$',
        currenciesAccepted: 'TJS, USD',
        address: {
          '@type': 'PostalAddress',
          addressLocality: COMPANY.addressLocality,
          addressRegion: COMPANY.addressRegion,
          addressCountry: COMPANY.addressCountry,
        },
        areaServed: [
          { '@type': 'Country', name: 'Tajikistan' },
          { '@type': 'Place', name: 'Central Asia' },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: COMPANY.telephone,
          email: COMPANY.email,
          areaServed: 'TJ',
          availableLanguage: ['Russian', 'Tajik', 'English'],
        },
        knowsAbout: [
          'Разработка программного обеспечения',
          'Создание сайтов',
          'Разработка мобильных приложений',
          'CRM',
          'ERP',
          'SMS-рассылки',
          'UI/UX дизайн',
          'Кибербезопасность',
          'Автоматизация бизнеса',
        ],
        sameAs: COMPANY.sameAs,
        award: COMPANY.worldBankAward.text,
        subjectOf: {
          '@type': 'WebPage',
          name: 'World Bank contract award notice OP00455715',
          url: COMPANY.worldBankAward.url,
          publisher: { '@type': 'Organization', name: 'The World Bank', url: 'https://www.worldbank.org' },
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ['ru', 'tg', 'en'],
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  };

  return (
    <html lang={inLanguage} dir={dir(lang)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
        />
      </head>
      <body className={`${tektur.variable} ${nunitoSans.variable}`}>
        {children}
        <Script
          id="livechat-widget"
          src="https://core.livechat.tj/widget/IgW317eT_p"
          strategy="lazyOnload"
        />
      </body>
      <GoogleAnalytics gaId="G-BC9JE7JMKM" />
    </html>
  );
}
