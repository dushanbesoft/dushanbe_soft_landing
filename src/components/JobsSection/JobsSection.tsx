import React from "react";
import styles from "./JobsSection.module.css";
import { FadeIn } from "../MotionWrapper";
import initTranslations from "@/app/i18n";
import JobsClient from "./JobsClient";

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

          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIconBox}>
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="55" height="55" rx="27.5" fill="url(#paint0_linear_cta)" fillOpacity="0.22"/>
                  <path d="M41.4202 16.867L37.1948 38.9305C36.8761 40.4877 36.0447 40.8753 34.8634 40.1417L28.4253 34.8888L25.3188 38.1969C24.975 38.5776 24.6875 38.8959 24.0249 38.8959L24.4875 31.636L36.4198 19.6976C36.9386 19.1854 36.3073 18.9017 35.6134 19.4138L20.8621 29.6982L14.5116 27.4973C13.1302 27.0198 13.1052 25.9678 14.7991 25.2342L39.6388 14.6385C40.7889 14.1609 41.7952 14.9222 41.4202 16.867Z" fill="url(#paint1_linear_cta)"/>
                  <defs>
                    <linearGradient id="paint0_linear_cta" x1="3.6843" y1="41.25" x2="51.3157" y2="13.75" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5EB5F0"/>
                      <stop offset="1" stopColor="#02704F"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_cta" x1="15.3756" y1="34" x2="38.693" y2="19.5021" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3DDC84"/>
                      <stop offset="1" stopColor="#02704F"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.ctaTextGroup}>
                <h3 className={styles.ctaTitle}>Хочешь стать частью нашей команды?</h3>
                <p className={styles.ctaDesc}>Отправьте резюме — даже если подходящей вакансии сейчас нет, мы свяжемся с вами при появлении подходящей возможности.</p>
              </div>
            </div>
            <a 
              href="https://t.me/m_yakub" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              style={{ textDecoration: "none" }}
            >
              Отправить резюме
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="#9EAABB"/>
              </svg>
            </a>
          </div>
        </main>
      </FadeIn>
    </section>
  );
}
