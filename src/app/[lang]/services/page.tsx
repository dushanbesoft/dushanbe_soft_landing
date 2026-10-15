import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Services.module.css";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CTAActions from "@/components/CTASection/CTAActions";
import { servicesList, getServiceContent, servicesUi } from "@/const/services-data";
import { contentLocale } from "@/utils/locales";
import {
  ORGANIZATION_ID,
  breadcrumbJsonLd,
  buildPageMetadata,
  homeCrumb,
  jsonLdString,
  localePath,
  localeUrl,
} from "@/utils/seo";

const i18nNamespaces = ["common"];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const ui = servicesUi[contentLocale(lang)];

  return buildPageMetadata({
    lang,
    path: "services",
    title: ui.hubMetaTitle,
    description: ui.hubDescription,
    contentPage: true,
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t, resources } = await initTranslations(lang, i18nNamespaces);
  const ui = servicesUi[contentLocale(lang)];

  const jsonLd = [
    breadcrumbJsonLd([homeCrumb(lang), { name: ui.breadcrumb, url: localeUrl(lang, "services") }]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: ui.hubTitle,
      itemListElement: servicesList.map((service, i) => {
        const content = getServiceContent(service, lang);
        return {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: content.name,
            description: content.metaDescription,
            url: localeUrl(lang, `services/${service.slug}`),
            provider: { "@id": ORGANIZATION_ID },
          },
        };
      }),
    },
  ];

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
        <div className="header-global">
          <Header />
        </div>

        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href={localePath(lang)} className={styles.breadcrumbLink}>
              {homeCrumb(lang).name}
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{ui.breadcrumb}</span>
          </nav>

          <header className={styles.hero}>
            <h1 className={styles.title}>{ui.hubTitle}</h1>
            <p className={styles.lead}>{ui.hubLead}</p>
          </header>

          <div className={styles.servicesGrid}>
            {servicesList.map((service) => {
              const content = getServiceContent(service, lang);
              return (
                <Link
                  key={service.slug}
                  href={localePath(lang, `services/${service.slug}`)}
                  className={styles.serviceCard}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.icon} alt="" className={styles.serviceIcon} width={48} height={48} />
                  <h2 className={styles.serviceName}>{content.name}</h2>
                  <p className={styles.serviceDesc}>{content.lead}</p>
                  <span className={styles.serviceMore}>{ui.more} →</span>
                </Link>
              );
            })}
          </div>

          <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>{ui.ctaTitle}</h2>
            <p className={styles.ctaText}>{ui.ctaText}</p>
            <CTAActions primaryBtnText={t("cta.primaryBtn", ui.ctaButton)} />
          </section>
        </div>

        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
