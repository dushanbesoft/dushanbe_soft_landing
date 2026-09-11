import React from "react";
import Link from "next/link";
import styles from "./CasesSection.module.css";
import CasesScrollLayout from "./CasesScrollLayout";
import { ProductSite } from "../../const/product-site";
import initTranslations from "../../app/i18n";
import { FadeIn } from "../MotionWrapper";

const i18nNamespaces = ["common"];

const ArrowUpIcon = () => (
  <svg
    className={styles.btnIcon}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z"
      fill="url(#paint0_linear_10_251)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10_251"
        x1="6.1875"
        y1="15.7496"
        x2="9.97473"
        y2="4.28374"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#02704F" />
      </linearGradient>
    </defs>
  </svg>
);

interface CasesSectionProps {
  showAll?: boolean;
  lang?: string;
}

export default async function CasesSection({ showAll = false, lang = 'ru' }: CasesSectionProps) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  
  return (
    <section id="cases" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>{t("cases.subtitle")}</span>
              <h2 className={styles.mainTitle}>{t("cases.title")}</h2>
            </div>
            {/* {!showAll && (
              <Link href={`/${lang}/cases`} className={styles.allCasesBtn}>
                <span className={styles.btnText}>{t("cases.all_cases")}</span>
                <ArrowUpIcon />
              </Link>
            )} */}
          </div>
        </FadeIn>

        <CasesScrollLayout
          lang={lang}
          casesData={ProductSite.map(e => ({
            slug: e.slug,
            imageSrc: e.imageSrc,
            year: e.year,
            title: t(`projects.${e.slug}.title`),
            description: t(`projects.${e.slug}.description`),
            tags: e.tags
          }))}
          labels={{
            descriptionTitle: t('cases.descriptionTitle', { defaultValue: 'Описание проекта' }),
            techTitle: t('cases.techTitle', { defaultValue: 'Технологии' }),
            advantagesTitle: t('cases.advantagesTitle', { defaultValue: 'Преимущества' }),
            prevProject: t('cases.prevProject', { defaultValue: 'Предыдущий проект' }),
            nextProject: t('cases.nextProject', { defaultValue: 'Следующий проект' }),
            outOf: t('cases.outOf', { defaultValue: 'из' }),
            loadMore: t('cases.loadMore', { defaultValue: 'Посмотреть еще' })
          }}
        />
      </div>
    </section>
  );
}
