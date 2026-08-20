import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./CaseDetails.module.css";
import { ProductSite } from "../../../../const/product-site";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../../components/TranslationsProvider";

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

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={lang}
      resources={resources}
    >
      <main className={styles.main}>
        <div className="header-global">
          <Header />
        </div>

        <div className={styles.heroOverlay}>
          <div
            className={styles.hero}
            style={{ backgroundImage: `url('${project.imageSrc}')` }}
          ></div>
        </div>

        <div className={styles.contentWrapper}>
          <Link href={`/${lang}/cases`} className={styles.backBtn}>
            <ArrowLeftIcon />
            <span>Все проекты</span>
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.yearBadge}>
              <span className={styles.yearText}>{project.year}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle}>О проекте</h2>
            <p className={styles.descriptionText}>{project.description}</p>
          </div>

          <div className={styles.grid}>
            {project.tasks && project.tasks.length > 0 && (
              <div className={styles.tasksSection}>
                <h2 className={styles.sectionTitle}>Чӣ иҷро карда шуд</h2>
                <ul className={styles.tasksList}>
                  {project.tasks.map((task, idx) => (
                    <li key={idx} className={styles.taskItem}>
                      <CheckIcon />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.tagsSection}>
              <h2 className={styles.sectionTitle}>Технологияҳо</h2>
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, idx) => (
                  <div key={idx} className={styles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </TranslationsProvider>
  );
}
