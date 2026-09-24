import type { Metadata } from "next";
import "../../styles/globals.css";
import { dir } from 'i18next';
import { i18nConfig } from "../../../i18nConfig";
import { ReactNode } from "react";
import { tektur, nunitoSans } from "../../styles/fonts";

import initTranslations from "../i18n";
import GlobalPreloader from "../../components/GlobalPreloader/GlobalPreloader";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  // Initialize translations for SEO. We'll provide fallbacks just in case the translation keys don't exist yet.
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
      url: `${siteUrl}/${lang}`,
      siteName: 'Dushanbe Soft',
      images: [
        {
          url: `${siteUrl}/icons/site-favicon.svg`, 
          width: 800,
          height: 600,
          alt: 'Dushanbe Soft Logo',
        },
      ],
      locale: lang === 'tj' ? 'tg_TJ' : lang === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDesc,
      images: [`${siteUrl}/icons/site-favicon.svg`], 
    },
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        'tg': `${siteUrl}/tj`,
        'ru': `${siteUrl}/ru`,
        'en': `${siteUrl}/en`,
        'x-default': `${siteUrl}/ru`,
      },
    },
    icons: {
      icon: "/icons/site-favicon.svg",
      apple: "/icons/site-favicon.svg", // Fallback for apple touch icon
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
  
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${tektur.variable} ${nunitoSans.variable}`}>
        <GlobalPreloader />
        {children}
      </body>
    </html>
  );
}
