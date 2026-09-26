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
    name: "Дилавар Абдуллаев",
    role: "Специалист по анализу данных, Fullstack-разработчик, специалист по администрированию баз данных (DBA)",
    bio: "Дилавар — выдающийся междисциплинарный специалист, сочетающий знания и навыки в области анализа данных, разработки Fullstack и управления базами данных. Широкий спектр его компетенций делает его ценным активом для нашей команды, способным решать самые разнообразные задачи. Дилавар умеет работать как с данными, так и с веб-приложениями и базами данных, что позволяет ему создавать комплексные и эффективные бизнес-решения.",
    skills: "HTML, CSS, JavaScript, React, C, C++, C#, ASP .NET, Java, Python, TensorFlow, Scikit-learn, Jupyter Notebook, Django, Fast API, SQL (MySQL, PostgreSQL), NoSQL (MongoDB)",
    experience: "2012",
    education: "Курсы Ташкентского университета информационных технологий : Stepik, IT Step, Harvard, Skillbox, ITVDN, Yandex",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/69e24040f3b04f632fdfb77c3ff85d4cce075f71",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 2,
    name: "Имя сотрудника 2",
    role: "Роль",
    bio: "Описание сотрудника 2",
    skills: "Навыки",
    experience: "Опыт работы",
    education: "Образование",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/c6c34c5e97f823b42668217326595f097545a015",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 3,
    name: "Имя сотрудника 3",
    role: "Роль",
    bio: "Описание сотрудника 3",
    skills: "Навыки",
    experience: "Опыт работы",
    education: "Образование",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/4efdac4d58302c2ac2c5d2196bb5ea79f4a26beb",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 4,
    name: "Имя сотрудника 4",
    role: "Роль",
    bio: "Описание сотрудника 4",
    skills: "Навыки",
    experience: "Опыт работы",
    education: "Образование",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/12f403898af0b6e7b2bc9cfd3c09452f79b10384",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 5,
    name: "Имя сотрудника 5",
    role: "Роль",
    bio: "Описание сотрудника 5",
    skills: "Навыки",
    experience: "Опыт работы",
    education: "Образование",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/b53409e480a41641e6ac6b3fb39e45d97599ac40",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
  {
    id: 6,
    name: "Имя сотрудника 6",
    role: "Роль",
    bio: "Описание сотрудника 6",
    skills: "Навыки",
    experience: "Опыт работы",
    education: "Образование",
    thumbnail: "https://api.builder.io/api/v1/image/assets/TEMP/685dfaf77fe7ac96160c133d047c3f85d4df0c5c",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2f7f3ad106d99463911718070ee986bc62015419",
  },
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

        <StaggerContainer className={styles.teamCarousel} staggerChildren={0.1}>
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
                  alt={member.name}
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
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
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
            <Image
              className={styles.personImage}
              src={activeMember.image}
              alt={activeMember.name}
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
