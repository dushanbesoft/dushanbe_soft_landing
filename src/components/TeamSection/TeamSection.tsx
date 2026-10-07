"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./TeamSection.module.css";
import { FadeIn, StaggerContainer, StaggerItem } from "../MotionWrapper";

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

const teamMembers = [
  {
    id: 1,
    transKey: "yakubov",
    thumbnail: "/images/person.png",
    image: "/images/person.png",
  },
  // {
  //   id: 2,
  //   transKey: "member0",
  //   thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/69e24040f3b04f632fdfb77c3ff85d4cce075f71",
  //   image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  // },
  {
    id: 3,
    transKey: "memberDefault",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/c6c34c5e97f823b42668217326595f097545a015",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 4,
    transKey: "memberDefault",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/4efdac4d58302c2ac2c5d2196bb5ea79f4a26beb",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 5,
    transKey: "memberDefault",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/12f403898af0b6e7b2bc9cfd3c09452f79b10384",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 6,
    transKey: "memberDefault",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/b53409e480a41641e6ac6b3fb39e45d97599ac40",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  // {
  //   id: 7,
  //   transKey: "memberDefault",
  //   thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/6a6d3e68db31952108a58350aea4a6de558e4abe",
  //   image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  // },
];

export default function TeamSection() {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prevMember = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const activeMember = teamMembers[activeIndex];

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>{t('team.subtitle', 'Команда')}</span>
              <h2 className={styles.mainTitle}>
                {t('team.title', 'Люди, которые делают это возможным')}
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* <StaggerContainer className={styles.teamCarousel} staggerChildren={0.1}>
          {teamMembers.map((member, index) => (
            <StaggerItem key={member.id}>
              <div
                className={`${styles.thumbnailWrapper} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  className={styles.thumbnail}
                  src={member.thumbnail}
                  alt={t(`team.${member.transKey}.name`)}
                  width={200}
                  height={200}
                />
              </div>
            </StaggerItem>
          ))}

          <FadeIn direction="up" delay={0.2} className={styles.carouselNav}>
            <LeftArrowIcon onClick={prevMember} />
            <RightArrowIcon onClick={nextMember} />
          </FadeIn>
        </StaggerContainer> */}

        <FadeIn direction="up" delay={0.3} style={{ width: "100%" }}>
          <main className={styles.personMainCard}>
          <div key={activeMember.id} className={styles.personCard}>
            <div className={styles.personInfo}>
              <div className={styles.personHeader}>
                <h3 className={styles.personName}>{t(`team.${activeMember.transKey}.name`)}</h3>
                <p className={styles.personRole}>
                  {t(`team.${activeMember.transKey}.role`)}
                </p>
                <p className={styles.personBio}>
                  {t(`team.${activeMember.transKey}.bio`).split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.personDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>{t('team.labels.skills', 'Навыки')}</span>
                  <span className={styles.detailValue}>
                    {t(`team.${activeMember.transKey}.skills`)}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>{t('team.labels.experience', 'Опыт работы')}</span>
                  <span className={styles.detailValue}>{t(`team.${activeMember.transKey}.experience`)}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>{t('team.labels.education', 'Образование')}</span>
                  <span className={styles.detailValue}>
                    {t(`team.${activeMember.transKey}.education`).split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <Image
              className={styles.personImage}
              src={activeMember.image}
              alt={t(`team.${activeMember.transKey}.name`)}
              width={600}
              height={600}
              priority
            />
          </div>
          </main>
        </FadeIn>

        {/* <FadeIn direction="up" delay={0.4}>
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>2015</div>
              <div className={styles.statLabel}>{t('team.stats.founded', 'Год основания')}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>{t('team.stats.projects', 'Проектов')}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>20+</div>
              <div className={styles.statLabel}>{t('team.stats.experts', 'Экспертов')}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statLabel}>{t('team.stats.countries', 'Стран')}</div>
            </div>
            <div className={styles.statItemLast}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>{t('team.stats.satisfaction', 'Удовлетворённость')}</div>
            </div>
          </div>
        </FadeIn> */}
        
      </div>
    </section>
  );
}
