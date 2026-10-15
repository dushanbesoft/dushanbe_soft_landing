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
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  casesCrumb,
  homeCrumb,
  jsonLdString,
  localeUrl,
  truncate,
} from "../../../../../utils/seo";

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

const ChevronLeftIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
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

  const { t } = await initTranslations(lang, i18nNamespaces);
  const projectTitle = t(`projects.${project.slug}.title`, { defaultValue: project.slug });
  const componentTitle = getTranslated(component.title, lang);

  return buildPageMetadata({
    lang,
    path: `cases/${slug}/${componentSlug}`,
    title: `${componentTitle} — ${projectTitle}`,
    description: truncate(getTranslated(component.shortInfo, lang)),
    image: { url: component.imageSrc, alt: componentTitle },
    type: "article",
  });
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
  let componentGroup = null;
  if (project.projectComponents) {
    for (const group of project.projectComponents) {
      const found = group.items.find((item) => item.slug === componentSlug);
      if (found) {
        component = found;
        componentGroup = group;
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

  const allItems =
    project.projectComponents?.flatMap((group) => group.items) ?? [];
  const currentIndex = allItems.findIndex(
    (item) => item.slug === componentSlug,
  );
  const hasSiblings = allItems.length > 1;
  const prevSlug = hasSiblings
    ? allItems[(currentIndex - 1 + allItems.length) % allItems.length].slug
    : null;
  const nextSlug = hasSiblings
    ? allItems[(currentIndex + 1) % allItems.length].slug
    : null;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString(
              breadcrumbJsonLd([
                homeCrumb(lang),
                casesCrumb(lang),
                { name: projectTitle, url: localeUrl(lang, `cases/${slug}`) },
                { name: getTranslated(component.title, lang), url: localeUrl(lang, `cases/${slug}/${componentSlug}`) },
              ]),
            ),
          }}
        />
        <div className="header-global header-fixed">
          <Header />
        </div>

        <div className={styles.topNav}>
          <Link href={lang === "ru" ? `/cases/${slug}` : `/${lang}/cases/${slug}`} className={styles.backBtn}>
            <ArrowLeftIcon />
            <span>{t("ui.backTo", "Вернуться к")} {projectTitle}</span>
          </Link>
        </div>

        <div className={styles.heroOverlay}>
          <img 
            src={component.imageSrc}
            alt={`${getTranslated(component.title, lang)} — ${projectTitle}`}
            className={styles.hero} 
            style={componentGroup?.platform === "mobile" ? { maxHeight: "80vh", maxWidth: "450px", objectFit: "contain", margin: "0 auto", display: "block" } : undefined}
          />

          {hasSiblings && prevSlug && (
            <Link
              href={lang === "ru" ? `/cases/${slug}/${prevSlug}` : `/${lang}/cases/${slug}/${prevSlug}`}
              className={`${styles.heroNav} ${styles.heroNavPrev}`}
              aria-label="Previous"
              scroll={false}
            >
              <ChevronLeftIcon />
            </Link>
          )}
          {hasSiblings && nextSlug && (
            <Link
              href={lang === "ru" ? `/cases/${slug}/${nextSlug}` : `/${lang}/cases/${slug}/${nextSlug}`}
              className={`${styles.heroNav} ${styles.heroNavNext}`}
              aria-label="Next"
              scroll={false}
            >
              <ChevronRightIcon />
            </Link>
          )}
        </div>

        <div className={styles.contentWrapper}>
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

        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
