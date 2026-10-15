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
import PricingSection from "../../components/PricingSection/PricingSection";
import StatisticsComponent from "../../components/StatisticsComponent/StatisticsComponent";
import JobsSection from "../../components/JobsSection/JobsSection";
import AwardsSection from "../../components/AwardsSection/AwardsSection";
import NewsSection from "../../components/NewsSection/NewsSection";
import MediaSection from "../../components/MediaSection/MediaSection";
import TrustBanner from "../../components/TrustBanner/TrustBanner";

const i18nNamespaces = ["common"];

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className="main-global">
        <div className="header-global header-fixed">
          <Header />
        </div>

        <HomeHero />
        <TrustBanner lang={lang} />
        <NewsSection lang={lang} />
        <CasesSection lang={lang} />
        <ProductsSection lang={lang} />
        <PartnersSection />
        <StatisticsComponent />
        <ServicesSection lang={lang} />
        <PricingSection lang={lang} />
        <ReviewsSection lang={lang} />
        <ProcessSection lang={lang} />
        <JobsSection lang={lang} />
        <AwardsSection lang={lang} />
        <TeamSection />
        <MediaSection lang={lang} />
        <CTASection lang={lang} />
        
        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
