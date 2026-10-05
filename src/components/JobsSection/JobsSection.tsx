import React from "react";
import styles from "./JobsSection.module.css";
import { FadeIn } from "../MotionWrapper";
import initTranslations from "@/app/i18n";
import JobsClient from "./JobsClient";
import JobsCTA from "./JobsCTA";

export default async function JobsSection({ lang = "ru" }: { lang?: string }) {
  const { t } = await initTranslations(lang, ["common"]);

  return (
    <section className={styles.section} id="careers">
      <FadeIn direction="up">
        <main className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>КАРЬЕРА</span>
            <h2 className={styles.title}>Вакансии в Душанбе-Софт</h2>
          </div>

          <JobsClient lang={lang} />

          <JobsCTA />
        </main>
      </FadeIn>
    </section>
  );
}
