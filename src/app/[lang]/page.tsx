/* eslint-disable @typescript-eslint/no-unused-vars */
import initTranslations from "../i18n";
import TranslationsProvider from "../../components/TranslationsProvider";
import Header from "../../components/Header/Header";
import HomeHero from "../../components/HomeHero/HomeHero";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";
import CasesSection from "../../components/CasesSection/CasesSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection";

const i18nNamespaces = ["common"];

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t, resources } = await initTranslations(lang, i18nNamespaces);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dushanbe Soft",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://dushanbesoft.tj",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://dushanbesoft.tj"}/icons/site-favicon.svg`,
    "description": t("seo.default_description", "Инновационные IT-решения для бизнеса. Разработка программного обеспечения, сайтов и мобильных приложений в Таджикистане."),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Душанбе",
      "addressCountry": "TJ"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+992988888888" // Example, can be replaced by real phone if known
    }
  };

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className="main-global">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="header-global header-fixed">
          <Header />
        </div>
        <HomeHero />
        <CasesSection lang={lang} />

        <ProductsSection lang={lang} />
        <WhyUsSection lang={lang} />
        {/* <TeamSection /> */}
        <ServicesSection lang={lang} />
        <ProcessSection lang={lang} />
        <ReviewsSection lang={lang} />
        <PartnersSection />
        <ContactSection lang={lang} />
        <CTASection lang={lang} />
        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
