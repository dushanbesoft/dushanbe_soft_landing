"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./TeamSection.module.css";

const LeftArrowIcon = ({ onClick }: { onClick: () => void }) => (
  <svg
    className={styles.arrowIcon}
    viewBox="0 0 102 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <rect
      x="-0.5"
      y="0.5"
      width="101"
      height="52"
      rx="26"
      transform="matrix(-1 0 0 1 101 0)"
      stroke="#9EAABB"
    />
    <path
      d="M64 26.5H38M49.7 34L38 26.5L49.7 19"
      stroke="#9EAABB"
      strokeWidth="2"
    />
  </svg>
);

const RightArrowIcon = ({ onClick }: { onClick: () => void }) => (
  <svg
    className={styles.arrowIconActive}
    viewBox="0 0 102 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <rect x="0.5" y="0.5" width="101" height="52" rx="26" stroke="white" />
    <path
      d="M38 26.5H64M52.3 34L64 26.5L52.3 19"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);



export default function TeamSection({ teamMembers = [] }: { teamMembers?: any[] }) {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prevMember = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const activeMember = teamMembers.length > 0 ? teamMembers[activeIndex] : null;

  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <span className={styles.subtitle}>{t('team.subtitle', 'Команда')}</span>
            <h2 className={styles.mainTitle}>
              {t('team.title', 'Люди, которые делают это возможным')}
            </h2>
          </div>
        </div>

        <div className={styles.teamCarousel}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`${styles.thumbnailWrapper} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              <img
                className={styles.thumbnail}
                src={member.thumbnail}
                alt={member.name}
              />
            </div>
          ))}

          <div className={styles.carouselNav}>
            <LeftArrowIcon onClick={prevMember} />
            <RightArrowIcon onClick={nextMember} />
          </div>
        </div>

        <main className={styles.personMainCard}>
          <div key={activeMember.id} className={styles.personCard}>
            <div className={styles.personInfo}>
              <div className={styles.personHeader}>
                <h3 className={styles.personName}>{activeIndex === 0 ? t('team.member0.name') : t('team.memberDefault.name')}</h3>
                <p className={styles.personRole}>
                  {activeIndex === 0 ? t('team.member0.role') : t('team.memberDefault.role')}
                </p>
                <p className={styles.personBio}>
                  {activeIndex === 0 ? t('team.member0.bio') : t('team.memberDefault.bio')}
                </p>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.personDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>{t('team.labels.skills', 'Навыки')}</span>
                  <span className={styles.detailValue}>
                    {activeIndex === 0 ? t('team.member0.skills') : t('team.memberDefault.skills')}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>{t('team.labels.experience', 'Опыт работы')}</span>
                  <span className={styles.detailValue}>{activeIndex === 0 ? t('team.member0.experience') : t('team.memberDefault.experience')}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>{t('team.labels.education', 'Образование')}</span>
                  <span className={styles.detailValue}>
                    {activeIndex === 0 ? t('team.member0.education') : t('team.memberDefault.education')}
                  </span>
                </div>
              </div>
            </div>
            <img
              className={styles.personImage}
              src={activeMember.image}
              alt={activeMember.name}
            />
          </div>
        </main>

        
      </div>
    </section>
  );
}
