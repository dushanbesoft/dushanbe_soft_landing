'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './CaseTabs.module.css';
import { TranslatedString, getTranslated } from '../../utils/translation';

interface ComponentItem {
  slug?: string;
  title: TranslatedString;
  imageSrc: string;
  shortInfo: TranslatedString;
  fullInfo: TranslatedString;
}

interface TabGroup {
  tabName: TranslatedString;
  items: ComponentItem[];
}

interface CaseTabsProps {
  groups: TabGroup[];
  lang: string;
  projectSlug: string;
}

export default function CaseTabs({ groups, lang, projectSlug }: CaseTabsProps) {
  const { t } = useTranslation('common');
  const [activeTabIndex, setActiveTabIndex] = useState(0);


  if (!groups || groups.length === 0) return null;

  const activeGroup = groups[activeTabIndex];

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeader}>
        <div className={styles.tabButtons}>
          {groups.map((group, idx) => (
            <button
              key={idx}
              className={`${styles.tabButton} ${idx === activeTabIndex ? styles.activeTab : ''}`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {getTranslated(group.tabName, lang)}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.grid}>
        {activeGroup.items.map((item, idx) => {
          const href = item.slug ? `/${lang}/cases/${projectSlug}/${item.slug}` : '#';
          const cardTitle = item.slug
            ? t(`projectComponents.${projectSlug}.${item.slug}.title`, item.title)
            : item.title;
          const cardShortInfo = item.slug
            ? t(`projectComponents.${projectSlug}.${item.slug}.shortInfo`, item.shortInfo)
            : item.shortInfo;
          return (
            <Link key={idx} href={href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageSrc}
                  alt={getTranslated(item.title, lang)}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>{getTranslated(item.title, lang)}</h3>
                <p className={styles.cardShortInfo}>{getTranslated(item.shortInfo, lang)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
