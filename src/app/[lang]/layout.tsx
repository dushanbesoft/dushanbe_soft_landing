import type { Metadata } from "next";
import "../../styles/globals.css";
import { dir } from 'i18next';
import { i18nConfig } from "../../../i18nConfig";
import { ReactNode } from "react";
import { tektur, nunitoSans } from "../../styles/fonts";

import initTranslations from "../i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { t } = await initTranslations(lang, ["common"]);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';

  const defaultTitle = t("seo.default_title", "Dushanbe Soft | Разработка программного обеспечения");
  const defaultDesc = t("seo.default_description", "Инновационные IT-решения для бизнеса. Разработка программного обеспечения, сайтов, ERP систем и мобильных приложений в Таджикистане.");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | Dushanbe Soft`
    },
    description: defaultDesc,
    keywords: t("seo.keywords", "разработка ПО, создание сайтов, мобильные приложения, автоматизация бизнеса, Душанбе, Таджикистан, Dushanbe Soft, IT компания, web development, mobile development, software engineering"),
    authors: [{ name: "Dushanbe Soft", url: siteUrl }],
    creator: "Dushanbe Soft",
    publisher: "Dushanbe Soft",
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
    openGraph: {
      title: defaultTitle,
      description: defaultDesc,
      url: lang === 'ru' ? siteUrl : `${siteUrl}/${lang}`,
      siteName: 'Dushanbe Soft',
      images: [
        {
          url: `${siteUrl}/images/hero-bg.png`,
          alt: 'Dushanbe Soft — разработка программного обеспечения в Таджикистане',
        },
      ],
      locale: lang === 'tj' ? 'tg_TJ' : lang === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDesc,
      images: [`${siteUrl}/images/hero-bg.png`], 
    },
    alternates: {
      canonical: lang === 'ru' ? siteUrl : `${siteUrl}/${lang}`,
      languages: {
        'tg': `${siteUrl}/tj`,
        'ru': `${siteUrl}`,
        'en': `${siteUrl}/en`,
        'x-default': `${siteUrl}`,
      },
    },
    icons: {
      icon: "/icons/site-favicon.svg",
      apple: "/icons/site-favicon.svg",
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
    appleWebApp: {
      capable: true,
      title: "Dushanbe Soft",
      statusBarStyle: "black-translucent",
    },
  };
}

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'areaServed': ['TJ', 'Central Asia'],
    'knowsAbout': ['Разработка программного обеспечения', 'Создание сайтов', 'Мобильные приложения', 'ERP', 'CRM', 'Автоматизация бизнеса'],
    'name': 'Dushanbe Soft',
    'url': siteUrl,
    'logo': `${siteUrl}/icons/logo-header.svg`,
    'image': `${siteUrl}/icons/site-favicon.svg`,
    'description': 'Ведущая IT-компания в Таджикистане (г. Душанбе). Разработка программного обеспечения, сайтов, ERP и мобильных приложений.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Душанбе',
      'addressCountry': 'TJ'
    },
    'sameAs': [
      'https://www.instagram.com/dushanbesoft',
      'https://t.me/dushanbesoft'
    ]
  };

  return (
    <html lang={lang === 'tj' ? 'tg' : lang} dir={dir(lang)}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BC9JE7JMKM"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BC9JE7JMKM');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="//core.livechat.tj/widget/IgW317eT_p"
        />
      </head>
      <body className={`${tektur.variable} ${nunitoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
