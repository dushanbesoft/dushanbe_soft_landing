import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { jobsData } from "@/const/jobsData";
import styles from "./JobDetails.module.css";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import initTranslations from "@/app/i18n";
import { TELEGRAM_URL } from "@/const/contacts";
import {
  COMPANY,
  ORGANIZATION_ID,
  breadcrumbJsonLd,
  buildPageMetadata,
  homeCrumb,
  jsonLdString,
  localeUrl,
} from "@/utils/seo";
import { LOCALES } from "@/utils/locales";

const JOB_SUFFIX: Record<string, string> = {
  ru: "вакансия в Душанбе",
  en: "job in Dushanbe",
  tj: "ҷои корӣ дар Душанбе",
  uz: "Dushanbedagi vakansiya",
  kk: "Душанбедегі бос орын",
  ky: "Душанбедеги бош орун",
  tk: "Duşenbedäki boş iş orny",
  fa: "فرصت شغلی در دوشنبه",
  ar: "وظيفة في دوشنبه",
};

type DescBlock =
  | { type: "heading"; text: string }
  | { type: "text"; text: string }
  | { type: "list"; items: string[] };

/**
 * Turns the plain-text job description into structured blocks:
 * a line followed by "•" / "1." items becomes a heading with a list.
 */
function parseJobDescription(raw: string): DescBlock[] {
  const blocks: DescBlock[] = [];
  const isItem = (line: string) => /^(•|-|\d+\.)\s*/.test(line);
  for (const chunk of raw.split(/\n\s*\n/)) {
    const lines = chunk
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    let i = 0;
    while (i < lines.length) {
      if (isItem(lines[i])) {
        const items: string[] = [];
        while (i < lines.length && isItem(lines[i])) {
          items.push(lines[i].replace(/^(•|-|\d+\.)\s*/, ""));
          i++;
        }
        blocks.push({ type: "list", items });
      } else if (i + 1 < lines.length && isItem(lines[i + 1])) {
        blocks.push({ type: "heading", text: lines[i].replace(/:$/, "") });
        i++;
      } else {
        blocks.push({ type: "text", text: lines[i] });
        i++;
      }
    }
  }
  return blocks;
}

export async function generateStaticParams() {
  const languages = LOCALES;
  const params: { lang: string; slug: string }[] = [];

  languages.forEach((lang) => {
    jobsData.forEach((job) => {
      params.push({ lang, slug: job.slug });
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
  const job = jobsData.find((j) => j.slug === slug);

  if (!job) {
    return {};
  }

  return buildPageMetadata({
    lang,
    path: `jobs/${slug}`,
    title: `${job.title} — ${JOB_SUFFIX[lang] ?? JOB_SUFFIX.ru}`,
    description: job.description,
    type: "article",
    publishedTime: job.datePosted,
    contentPage: true,
  });
}

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const { t, resources } = await initTranslations(lang, ["common"]);
  const job = jobsData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const jsonLd = [
    breadcrumbJsonLd([
      homeCrumb(lang),
      {
        name: t("header.careers", "Карьера"),
        url: `${localeUrl(lang)}/#careers`,
      },
      { name: job.title, url: localeUrl(lang, `jobs/${slug}`) },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: (job.fullDescription || job.description).replace(
        /\n/g,
        "<br>",
      ),
      datePosted: job.datePosted,
      validThrough:
        (job as any).validThrough ||
        new Date(
          new Date(job.datePosted || Date.now()).setFullYear(
            new Date(job.datePosted || Date.now()).getFullYear() + 1,
          ),
        ).toISOString(),
      employmentType: (job as any).employmentType || "FULL_TIME",
      ...((job as any).baseSalary
        ? {
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: (job as any).baseSalary.currency || "TJS",
              value: {
                "@type": "QuantitativeValue",
                ...((job as any).baseSalary.value !== undefined
                  ? { value: (job as any).baseSalary.value }
                  : {
                      minValue: (job as any).baseSalary.minValue,
                      maxValue: (job as any).baseSalary.maxValue,
                    }),
                unitText: (job as any).baseSalary.unitText || "MONTH",
              },
            },
          }
        : {}),
      hiringOrganization: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: COMPANY.name,
        sameAs: localeUrl("ru"),
        logo: localeUrl("ru") + "/logo-rm-bg.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY.addressLocality,
          addressCountry: COMPANY.addressCountry,
        },
      },
      ...(job.typeValue === "remote"
        ? {
            jobLocationType: "TELECOMMUTE",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Tajikistan",
            },
          }
        : {}),
      directApply: false,
    },
  ];

  return (
    <TranslationsProvider
      namespaces={["common"]}
      locale={lang}
      resources={resources}
    >
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
        />
        <div className="header-global">
          <Header />
        </div>

        <div className={styles.container}>
          <Link
            href={lang === "ru" ? "/#careers" : `/${lang}/#careers`}
            className={styles.backBtn}
          >
            ← {t("jobs.backToList", "К списку вакансий")}
          </Link>

          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.categoryBadge}>{job.categoryLabel}</span>
              <h1 className={styles.title}>{job.title}</h1>

              <div className={styles.metaInfo}>
                <div className={styles.metaItem}>
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 16C6 16 12 10.314 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 2.37122e-08 4.4087 0 6C0 10.314 6 16 6 16ZM6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9Z"
                      fill="url(#paint0_linear_meta)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_meta"
                        x1="0.803848"
                        y1="12"
                        x2="12.4724"
                        y2="6.94737"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3DDC84" />
                        <stop offset="1" stopColor="#02704F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>{t("jobs.location.dushanbe", job.location)}</span>
                </div>
                <div className={styles.metaItem}>
                  <span>
                    {t("jobs.formatLabel", "Формат")}:{" "}
                    {t(`jobs.${job.typeValue}`, job.typeLabel)}
                  </span>
                </div>
                {job.experienceValue && (
                  <div className={styles.metaItem}>
                    <span>
                      {t("jobs.experienceLabel", "Опыт")}:{" "}
                      {t(`jobs.${job.experienceValue}`)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.body}>
              <h2 className={styles.sectionTitle}>
                {t("jobs.about", "О вакансии")}
              </h2>
              <div className={styles.description}>
                {parseJobDescription(
                  job.fullDescription || job.description,
                ).map((block, i) =>
                  block.type === "heading" ? (
                    <h3 key={i} className={styles.descHeading}>
                      {block.text}
                    </h3>
                  ) : block.type === "list" ? (
                    <ul key={i} className={styles.descList}>
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className={styles.descText}>
                      {block.text}
                    </p>
                  ),
                )}
              </div>

              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>
                  {t("jobs.detailCtaTitle", "Заинтересовала вакансия?")}
                </h3>
                <p className={styles.ctaDesc}>
                  {t(
                    "jobs.detailCtaDesc",
                    "Отправьте нам своё резюме через Telegram, и мы свяжемся с вами в ближайшее время!",
                  )}
                </p>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                >
                  {t("jobs.send_cv", "Отправить резюме")}
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
