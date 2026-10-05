import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jobsData } from "@/components/JobsSection/JobsClient";
import styles from "./JobDetails.module.css";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import initTranslations from "@/app/i18n";

export async function generateStaticParams() {
  return jobsData.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobDetailsPage({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const { t, resources } = await initTranslations(lang, ["common"]);
  const job = jobsData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <TranslationsProvider namespaces={["common"]} locale={lang} resources={resources}>
      <main className={styles.main}>
        <Header />
        
        <div className={styles.container}>
          <Link href={`/${lang}/#careers`} className={styles.backBtn}>
            ← К списку вакансий
          </Link>

          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.categoryBadge}>{job.categoryLabel}</span>
              <h1 className={styles.title}>{job.title}</h1>
              
              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 16C6 16 12 10.314 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 2.37122e-08 4.4087 0 6C0 10.314 6 16 6 16ZM6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9Z" fill="url(#paint0_linear_meta)"/>
                    <defs>
                      <linearGradient id="paint0_linear_meta" x1="0.803848" y1="12" x2="12.4724" y2="6.94737" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3DDC84"/>
                        <stop offset="1" stopColor="#02704F"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <span>Формат: {job.typeLabel}</span>
                </div>
                {job.experienceValue && (
                  <div className={styles.metaItem}>
                    <span>Опыт: {job.experienceValue === 'junior' ? 'Без опыта' : job.experienceValue === 'middle' ? '1-3 года' : '3+ года'}</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.body}>
              <h2 className={styles.sectionTitle}>О вакансии</h2>
              <p className={styles.description}>{job.description}</p>
              
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>Заинтересовала вакансия?</h3>
                <p className={styles.ctaDesc}>Отправьте нам своё резюме через Telegram, и мы свяжемся с вами в ближайшее время!</p>
                <a 
                  href="https://t.me/m_yakub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                >
                  Отправить резюме
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
