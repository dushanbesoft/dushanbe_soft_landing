"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./TeamSection.module.css";
import { FadeIn } from "../MotionWrapper";

const teamMembers = [
  {
    id: 1,
    transKey: "yakubov",
    thumbnail: "/images/person.png",
    image: "/images/person.png",
  },
];

export default function TeamSection() {
  const { t } = useTranslation('common');
  const [activeIndex] = useState(0);

  const activeMember = teamMembers[activeIndex];

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>{t('team.subtitle', 'Руководство')}</span>
              <h2 className={styles.mainTitle}>
                {t('team.title', 'Человек, который делает это возможным')}
              </h2>
            </div>
          </div>
        </FadeIn>

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
      </div>
    </section>
  );
}
