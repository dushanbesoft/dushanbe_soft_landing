"use client";
import { useTranslation } from "react-i18next";
import styles from "./StatisticsComponent.module.css";

export default function StatisticsComponent(){
    const { t } = useTranslation('common');
    return(
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>2017</span>
            <span className={styles.statLabel}>{t('team.stats.founded', 'Год основания')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>150+</span>
            <span className={styles.statLabel}>{t('team.stats.projects', 'Проектов')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>20+</span>
            <span className={styles.statLabel}>{t('team.stats.experts', 'Экспертов')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>5+</span>
            <span className={styles.statLabel}>{t('team.stats.countries', 'Стран')}</span>
          </div>
          <div className={styles.statItemLast}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>{t('team.stats.satisfaction', 'Удовлетворённость')}</span>
          </div>
        </div>
    )
}