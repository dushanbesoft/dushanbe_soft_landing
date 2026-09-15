'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CaseTabs.module.css';

interface ComponentItem {
  slug?: string;
  title: string;
  imageSrc: string;
  shortInfo: string;
  fullInfo: string;
}

interface TabGroup {
  tabName: string;
  items: ComponentItem[];
}

interface CaseTabsProps {
  groups: TabGroup[];
  lang: string;
  projectSlug: string;
}

export default function CaseTabs({ groups, lang, projectSlug }: CaseTabsProps) {
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
              {group.tabName}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.grid}>
        {activeGroup.items.map((item, idx) => {
          const href = item.slug ? `/${lang}/cases/${projectSlug}/${item.slug}` : '#';
          return (
            <Link key={idx} href={href} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardShortInfo}>{item.shortInfo}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
