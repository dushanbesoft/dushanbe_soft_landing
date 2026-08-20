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

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className="main-global">
        <div className="header-global">
          <Header />
        </div>
        <HomeHero />
        <ProductsSection lang={lang} />
        <WhyUsSection />
        <CasesSection lang={lang} />
        <TeamSection />
        <ServicesSection />
        <ProcessSection />
        <ReviewsSection />
        <PartnersSection />
        <ContactSection />
        <CTASection />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
