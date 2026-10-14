import React from "react";
import Link from "next/link";
import { localePath } from "@/utils/seo";
import initTranslations from "@/app/i18n";
import styles from "./ServicesSection.module.css";
import { FadeIn, StaggerContainer, StaggerItem } from "../MotionWrapper";

const services = [
  {
    slug: "web-development",
    title: "Веб-разработка",
    description:
      "Высоконагруженные веб-приложения, корпоративные порталы и SaaS-платформы на современных стеках.",
    icon: (
      <img
        src="/icons/web.svg"
        alt="Веб-разработка"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    slug: "mobile-app-development",
    title: "Мобильная разработка",
    description:
      "Нативные и кроссплатформенные мобильные приложения для IOS и Android с элегантным UX.",
    icon: (
      <img
        src="/icons/mobile.svg"
        alt="Мобильная разработка"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "Web3 & Blockchain",
    description:
      "Разработка Web3 Blockchain проектов и смарт контрактов на Solidity. Таких сервисов как Bridge, AMM. Liqiudity, Swap, Launchpad, кошельки и т.д.",
    icon: (
      <img
        src="/icons/ai.svg"
        alt="AI Интеграция"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Дизайн",
    description:
      "Дизайн-системы, пользовательские интерфейсы и прототипы мирового уровня от Figma до production.",
    icon: (
      <img
        src="/icons/disign.svg"
        alt="UI/UX Дизайн"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    slug: "cybersecurity",
    title: "Кибербезопасность",
    description:
      "Аудит безопасности, пентестинг, защита данных и соответствие международным стандартам ISO/IEC 27001.",
    icon: (
      <img
        src="/icons/security.svg"
        alt="Кибербезопасность"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    slug: "api-integration",
    title: "API Интеграция",
    description:
      "Разработка и интеграция REST/GraphQL API, микросервисная архитектура и ESB для enterprise-систем.",
    icon: (
      <img
        src="/icons/api.svg"
        alt="API Интеграция"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "Облачные решения",
    description:
      "Проектирование и миграция в облако: AWS, Azure, GCP. DevOps, CI/CD, мониторинг и масштабирование.",
    icon: (
      <img
        src="/icons/network.svg"
        alt="Облачные решения"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
  {
    slug: "website-support",
    title: "Техническая поддержка",
    description:
      "Выделенная команда поддержки 24/7, мониторинг системы, SLA-гарантии и оперативное реагирование.",
    icon: (
      <img
        src="/icons/support.svg"
        alt="Техническая поддержка"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    ),
  },
];

const i18nNamespaces = ["common"];

export default async function ServicesSection({
  lang = "ru",
}: {
  lang?: string;
}) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.headerRow}>
            <div className={styles.titles}>
              <span className={styles.subtitle}>
                {t("services.subtitle", "Что мы делаем")}
              </span>
              <h2 className={styles.mainTitle}>
                {t("services.title", "Полный спектр IT-услуг")}
              </h2>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className={styles.grid} staggerChildren={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              {(() => {
                const body = (
                  <>
                    <div className={styles.iconWrapper}>{service.icon}</div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>
                        {t(`services.list.${index}.title`, service.title)}
                      </h3>
                      <p className={styles.cardDescription}>
                        {t(
                          `services.list.${index}.description`,
                          service.description,
                        )}
                      </p>
                    </div>
                  </>
                );
                return service.slug ? (
                  <Link
                    href={localePath(lang, `services/${service.slug}`)}
                    className={styles.card}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className={styles.card}>{body}</div>
                );
              })()}
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Link
            href={localePath(lang, "services")}
            style={{ color: "#02704f", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 4 }}
          >
            {t("services.allServices", "Все услуги")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
