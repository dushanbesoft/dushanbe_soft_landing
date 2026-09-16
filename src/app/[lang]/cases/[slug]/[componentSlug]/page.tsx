import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./ComponentDetails.module.css";
import { ProductSite } from "../../../../../const/product-site";
import Header from "../../../../../components/Header/Header";
import Footer from "../../../../../components/Footer/Footer";
import initTranslations from "../../../../i18n";
import TranslationsProvider from "../../../../../components/TranslationsProvider";
import { Metadata } from "next";
import { getTranslated } from "../../../../../utils/translation";

const i18nNamespaces = ["common"];

const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export async function generateStaticParams() {
  const languages = ["ru", "tj", "en"];
  const params: { lang: string; slug: string; componentSlug: string }[] = [];

  languages.forEach((lang) => {
    ProductSite.forEach((project) => {
      if (project.projectComponents) {
        project.projectComponents.forEach((group) => {
          group.items.forEach((item) => {
            if (item.slug) {
              params.push({
                lang,
                slug: project.slug,
                componentSlug: item.slug,
              });
            }
          });
        });
      }
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string; componentSlug: string }>;
}): Promise<Metadata> {
  const { lang, slug, componentSlug } = await params;
  const project = ProductSite.find((p) => p.slug === slug);

  if (!project) return {};

  let component = null;
  if (project.projectComponents) {
    for (const group of project.projectComponents) {
      const found = group.items.find((item) => item.slug === componentSlug);
      if (found) {
        component = found;
        break;
      }
    }
  }

  if (!component) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dushanbesoft.tj";

  return {
    title: `${getTranslated(component.title, lang)} | ${project.slug}`,
    description: getTranslated(component.shortInfo, lang),
    openGraph: {
      title: getTranslated(component.title, lang),
      description: getTranslated(component.shortInfo, lang),
      url: `${siteUrl}/${lang}/cases/${slug}/${componentSlug}`,
      images: [
        {
          url: component.imageSrc.startsWith("http")
            ? component.imageSrc
            : `${siteUrl}${component.imageSrc}`,
          width: 1200,
          height: 630,
          alt: getTranslated(component.title, lang),
        },
      ],
      locale: lang === "tj" ? "tg_TJ" : lang === "ru" ? "ru_RU" : "en_US",
      type: "article",
    },
  };
}

export default async function ComponentDetailsPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string; componentSlug: string }>;
}) {
  const { lang, slug, componentSlug } = await params;
  const project = ProductSite.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  let component = null;
  if (project.projectComponents) {
    for (const group of project.projectComponents) {
      const found = group.items.find((item) => item.slug === componentSlug);
      if (found) {
        component = found;
        break;
      }
    }
  }

  if (!component) {
    notFound();
  }

  const { t, resources } = await initTranslations(lang, i18nNamespaces);
  const projectTitle = t(`projects.${project.slug}.title`, {
    defaultValue: project.slug,
  });

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className={styles.main}>
        <div className="header-global header-fixed">
          <Header />
        </div>

        <div className={styles.heroOverlay}>
          {/* <div
            className={styles.hero}
            style={{
              backgroundImage: `url('${component.imageSrc}')`,
              // backgroundSize: "cover",
            }}
          ></div> */}
          <img src={component.imageSrc}  className={styles.hero} alt="imageSrc" />
        </div>

        <div className={styles.contentWrapper}>
          <Link href={`/${lang}/cases/${slug}`} className={styles.backBtn}>
            <ArrowLeftIcon />
            <span>Вернуться к {projectTitle}</span>
          </Link>

          <div>
            <h1 className={styles.title}>{getTranslated(component.title, lang)}</h1>
            <p className={styles.shortInfo}>{getTranslated(component.shortInfo, lang)}</p>
          </div>

          <div className={styles.descriptionSection}>
            {getTranslated(component.fullInfo, lang).split("\n").map(
              (paragraph, idx) =>
                paragraph.trim() && (
                  <p
                    key={idx}
                    className={styles.descriptionText}
                    style={{ marginBottom: "16px" }}
                  >
                    {paragraph}
                  </p>
                ),
            )}
          </div>
        </div>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
