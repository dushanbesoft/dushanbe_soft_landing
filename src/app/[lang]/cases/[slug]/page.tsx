import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./CaseDetails.module.css";
import { ProductSite } from "../../../../const/product-site";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../../components/TranslationsProvider";
import CaseGallery from "../../../../components/CasesSection/CaseGallery";
import CaseTabs from "../../../../components/CasesSection/CaseTabs";

const i18nNamespaces = ["common"];

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={styles.taskIcon}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

import { Metadata } from "next";
import { LOCALES } from "@/utils/locales";
import {
  ORGANIZATION_ID,
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  caseTitle,
  casesCrumb,
  homeCrumb,
  jsonLdString,
  localeUrl,
  truncate,
} from "../../../../utils/seo";

export async function generateStaticParams() {
  const languages = LOCALES;
  const params: { lang: string; slug: string }[] = [];

  languages.forEach((lang) => {
    ProductSite.forEach((project) => {
      params.push({ lang, slug: project.slug });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = ProductSite.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  const { t } = await initTranslations(lang, ["common"]);
  const title = t(`projects.${project.slug}.title`, { defaultValue: "Кейс Dushanbe Soft" });
  const description = t(`projects.${project.slug}.description`, { defaultValue: "Кейс Dushanbe Soft" });
  
  return buildPageMetadata({
    lang,
    path: `cases/${slug}`,
    title: caseTitle(title, lang),
    description: truncate(description),
    image: { url: project.imageSrc, alt: title },
    type: "article",
    contentPage: true,
  });
}

export default async function CaseDetailsPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = ProductSite.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { t, resources } = await initTranslations(lang, i18nNamespaces);
  
  const title = t(`projects.${project.slug}.title`);
  const description = t(`projects.${project.slug}.description`);
  const tasks = t(`projects.${project.slug}.tasks`, { returnObjects: true, defaultValue: null }) as string[] | null;
  const galleryCaptions = t(`projects.${project.slug}.gallery`, { returnObjects: true, defaultValue: null }) as string[] | null;
  const gallery = project.gallery ?? [];
  const projectComponents = project.projectComponents;
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
            __html: jsonLdString([
              breadcrumbJsonLd([
                homeCrumb(lang),
                casesCrumb(lang),
                { name: title, url: localeUrl(lang, `cases/${slug}`) },
              ]),
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: title,
                headline: title,
                description: truncate(description, 300),
                image: absoluteUrl(project.imageSrc),
                dateCreated: project.year,
                keywords: project.tags.join(", "),
                url: localeUrl(lang, `cases/${slug}`),
                creator: { "@id": ORGANIZATION_ID },
                publisher: { "@id": ORGANIZATION_ID },
              },
            ]),
          }}
        />
        <div className="header-global header-fixed">
          <Header />
        </div>

        <div className={styles.contentWrapper}>
          <Link href={lang === 'ru' ? "/cases" : `/${lang}/cases`} className={styles.backBtn}>
            <ArrowLeftIcon />
            <span>{t("cases.all_projects")}</span>
          </Link>

          {!projectComponents && (
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{title}</h1>
            </div>
          )}

          {projectComponents ? (
            <div style={{ marginTop: '0px', width: '100%' }}>
              <CaseTabs groups={projectComponents} lang={lang} projectSlug={slug} projectTitle={title} />
            </div>
          ) : (
            <>
              <div className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>{t("cases.about_project")}</h2>
                <p className={styles.descriptionText}>{description}</p>
              </div>

              <div className={styles.grid}>
                {Array.isArray(tasks) && tasks.length > 0 && (
                  <div className={styles.tasksSection}>
                    <h2 className={styles.sectionTitle}>{t("cases.what_was_done")}</h2>
                    <ul className={styles.tasksList}>
                      {tasks.map((task, idx) => (
                        <li key={idx} className={styles.taskItem}>
                          <CheckIcon />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.tagsSection}>
                  <h2 className={styles.sectionTitle}>{t("cases.technologies")}</h2>
                  <div className={styles.tagsContainer}>
                    {project.tags.map((tag, idx) => (
                      <div key={idx} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {gallery.length > 0 && (
                <div className={styles.descriptionSection}>
                  <h2 className={styles.sectionTitle}>{t("cases.gallery")}</h2>
                  <CaseGallery
                    images={gallery}
                    captions={galleryCaptions}
                    title={title}
                    labels={{
                      prev: t("cases.gallery_prev"),
                      next: t("cases.gallery_next"),
                      close: t("cases.gallery_close"),
                    }}
                  />
                </div>
              )}
            </>
          )}
        </div>

        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
