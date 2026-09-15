'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CaseTabs.module.css';

interface ComponentItem {
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
}

export default function CaseTabs({ groups }: CaseTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ComponentItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

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
        {activeGroup.items.map((item, idx) => (
          <div key={idx} className={styles.card} onClick={() => setSelectedItem(item)}>
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
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedItem(null)}>
              ✕
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                fill
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalText}>
              <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
              <p className={styles.modalFullInfo}>{selectedItem.fullInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
