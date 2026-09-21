"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CaseTabs.module.css";
import { TranslatedString, getTranslated } from "../../utils/translation";

interface ComponentItem {
  slug?: string;
  title: TranslatedString;
  imageSrc: string;
  imageFit?: "cover" | "contain";
  shortInfo: TranslatedString;
  fullInfo: TranslatedString;
}

interface TabGroup {
  tabName: TranslatedString;
  items: ComponentItem[];
  platform?: string;
}

interface CaseTabsProps {
  groups: TabGroup[];
  lang: string;
  projectSlug: string;
  projectTitle?: string;
}

export default function CaseTabs({ groups, lang, projectSlug, projectTitle }: CaseTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!groups || groups.length === 0) return null;

  const activeGroup = groups[activeTabIndex];

  return (
    <div
      className={
        activeGroup?.platform?.toString() === "mobile"
          ? styles.mobile
          : styles.tabsContainer
      }
    >
      <div className={styles.tabHeader}>
        {projectTitle && <h1 className={styles.projectTitle}>{projectTitle}</h1>}
        <div className={styles.tabButtons}>
          {groups.map((group, idx) => (
            <button
              key={idx}
              className={`${styles.tabButton} ${idx === activeTabIndex ? styles.activeTab : ""}`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {getTranslated(group.tabName, lang)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {activeGroup.items.map((item, idx) => {
          const href = item.slug
            ? `/${lang}/cases/${projectSlug}/${item.slug}`
            : "#";
          return (
            <Link key={idx} href={href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageSrc}
                  alt={getTranslated(item.title, lang)}
                  fill
                  className={styles.image}
                  style={item.imageFit ? { objectFit: item.imageFit } : undefined}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>
                  {getTranslated(item.title, lang)}
                </h3>
                <p className={styles.cardShortInfo}>
                  {getTranslated(item.shortInfo, lang)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
