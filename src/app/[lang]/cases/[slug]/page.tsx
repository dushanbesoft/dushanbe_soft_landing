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

export async function generateStaticParams() {
  const languages = ["ru", "tj", "en"];
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
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbesoft.tj';

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${siteUrl}/${lang}/cases/${slug}`,
      images: [
        {
          url: project.imageSrc.startsWith('http') ? project.imageSrc : `${siteUrl}${project.imageSrc}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === 'tj' ? 'tg_TJ' : lang === 'ru' ? 'ru_RU' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [project.imageSrc.startsWith('http') ? project.imageSrc : `${siteUrl}${project.imageSrc}`],
    },
    alternates: {
      canonical: `${siteUrl}/${lang}/cases/${slug}`,
      languages: {
        'tg': `${siteUrl}/tj/cases/${slug}`,
        'ru': `${siteUrl}/ru/cases/${slug}`,
        'en': `${siteUrl}/en/cases/${slug}`,
        'x-default': `${siteUrl}/ru/cases/${slug}`,
      },
    },
  };
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
        <div className="header-global header-fixed">
          <Header />
        </div>

        <div className={styles.heroOverlay}>
          <div
            className={styles.hero}
            style={{
              backgroundImage: `url('${project.bannerSrc ?? project.imageSrc}')`,
              backgroundSize: project.bannerFit ?? "cover",
              ...(project.bannerFit === "contain"
                ? { backgroundColor: "#ffffff" }
                : {}),
            }}
          ></div>
        </div>

        <div className={styles.contentWrapper}>
          <Link href={`/${lang}/cases`} className={styles.backBtn}>
            <ArrowLeftIcon />
            <span>{t("cases.all_projects")}</span>
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.yearBadge}>
              <span className={styles.yearText}>{project.year}</span>
            </div>
            <h1 className={styles.title}>{title}</h1>
          </div>

          {projectComponents ? (
            <div style={{ marginTop: '40px', width: '100%' }}>
              <CaseTabs groups={projectComponents} lang={lang} projectSlug={slug} />
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
                  />
                </div>
              )}
            </>
          )}
        </div>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
