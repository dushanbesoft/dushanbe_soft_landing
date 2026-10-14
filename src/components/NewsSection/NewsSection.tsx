"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NewsSection.module.css";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../MotionWrapper";
import { newsList, NewsItem } from "@/const/news-data";

interface NewsSectionProps {
  lang?: string;
  showAll?: boolean;
}

const ArrowIcon = ({ gradient = false }: { gradient?: boolean }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={gradient ? styles.allNewsIcon : styles.moreBtnIcon}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z"
      fill={gradient ? "url(#paint_news_arrow)" : "#F1F7FF"}
    />
    {gradient && (
      <defs>
        <linearGradient
          id="paint_news_arrow"
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
    )}
  </svg>
);

export default function NewsSection({ lang = "ru", showAll = false }: NewsSectionProps) {
  const { t } = useTranslation("common");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const allNewsUrl = lang === "ru" ? "/news" : `/${lang}/news`;

  const getCaseUrl = (slug: string) => {
    return lang === "ru" ? `/cases/${slug}` : `/${lang}/cases/${slug}`;
  };

  const displayedList: NewsItem[] = useMemo(() => {
    if (!showAll) {
      return newsList.slice(0, 4);
    }
    if (selectedCategory === "all") {
      return newsList;
    }
    return newsList.filter((item) => item.category === selectedCategory);
  }, [showAll, selectedCategory]);

  const categories = [
    { key: "all", label: t("news.filterAll", "Все") },
    { key: "gov", label: t("news.filterGov", "Гос. проекты") },
    { key: "media", label: t("news.filterMedia", "Медиа & OTT") },
    { key: "erp", label: t("news.filterErp", "ERP & Автоматизация") },
    { key: "saas", label: t("news.filterSaas", "SaaS & Финтех") },
    { key: "retail", label: t("news.filterRetail", "E-Commerce") },
  ];

  return (
    <section
      className={styles.section}
      id="news"
      aria-label={t("news.title", "Последние новости")}
    >
      <FadeIn direction="up" fullWidth>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>{t("news.subtitle", "новости")}</span>
              <h2 className={styles.title}>
                {showAll ? t("news.viewAll", "Все новости") : t("news.title", "Последние новости")}
              </h2>
            </div>

            {!showAll && (
              <Link
                href={allNewsUrl}
                className={styles.allNewsBtn}
                aria-label={t("news.viewAll", "Все новости")}
              >
                <span className={styles.allNewsText}>{t("news.viewAll", "Все новости")}</span>
                <ArrowIcon gradient />
              </Link>
            )}
          </div>

          {showAll && (
            <div className={styles.filterRow} role="tablist">
              {categories.map((cat) => {
                const count =
                  cat.key === "all"
                    ? newsList.length
                    : newsList.filter((item) => item.category === cat.key).length;
                if (count === 0 && cat.key !== "all") return null;

                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
                    onClick={() => setSelectedCategory(cat.key)}
                  >
                    {cat.label} <span className={styles.countBadge}>{count}</span>
                  </button>
                );
              })}
            </div>
          )}

          <div className={showAll ? styles.cardsGridAll : styles.cardsGrid}>
            {displayedList.map((item, index) => {
              const tag = t(item.tagKey, item.defaultTag);
              const title = t(item.titleKey, item.defaultTitle);
              const desc = t(item.descKey, item.defaultDesc);
              const targetUrl = getCaseUrl(item.slug);

              return (
                <article key={item.id} className={styles.card}>
                  <div className={styles.imageContainer}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={title}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={styles.cardImage}
                        loading={index > 1 ? "lazy" : "eager"}
                      />
                    ) : (
                      <div className={styles.fallbackImagePlaceholder}>
                        <div className={styles.placeholderPattern} />
                      </div>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardTop}>
                      <div className={styles.metaRow}>
                        <time
                          className={styles.date}
                          dateTime={item.date.split(".").reverse().join("-")}
                        >
                          {item.date}
                        </time>
                        <div className={styles.tagBadge}>
                          <span className={styles.tagText}>{tag}</span>
                        </div>
                      </div>

                      <h3 className={styles.cardTitle}>{title}</h3>
                      <p className={styles.cardDesc}>{desc}</p>
                    </div>

                    <Link
                      href={targetUrl}
                      className={styles.moreBtn}
                      aria-label={`${t("news.more", "Подробнее")}: ${title}`}
                    >
                      <span className={styles.moreBtnText}>
                        {t("news.more", "Подробнее")}
                      </span>
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
