import React from "react";
import initTranslations from "@/app/i18n";
import styles from "./PricingSection.module.css";
import { FadeIn } from "../MotionWrapper";
import PricingButton from "./PricingButton";

const i18nNamespaces = ["common"];

export default async function PricingSection({ lang = "ru" }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);

  const plans = [
    {
      title: "Тариф «Стандарт»",
      price: "1126с",
      features: [
        "Консультации по работам проекта и администрированию — 1 час;",
        "Проверка доступности веб-сайта",
        "Контроль продления домена, хостинга и SSL-сертификата"
      ],
      isPopular: false
    },
    {
      title: "Основной тариф",
      price: "2263с",
      features: [
        "Консультации по работам проекта и администрированию — 2 часа;",
        "Проверка доступности веб-сайта",
        "Контроль продления домена, хостинга и SSL-сертификата",
        "Очистка и проверка конкурентного кода;",
        "Резервное копирование сайта — 1 раз в месяц;",
        "Исправление ошибок — до 2 часов в течение 24 часов;"
      ],
      isPopular: true
    },
    {
      title: "Продвинутый тариф",
      price: "4537с",
      features: [
        "Консультации по работам проекта и администрированию — 2 часа;",
        "Проверка доступности веб-сайта",
        "Контроль продления домена, хостинга и SSL-сертификата",
        "Очистка и проверка конкурентного кода;",
        "Резервное копирование сайта — 2 раза в месяц;",
        "Исправление ошибок — до 8 часов в течение 12 часов;",
        "Администрирование почты — создание и настройка.",
        "Защита от атак и вирусов;",
        "Доработка программного кода проекта — 4 часа."
      ],
      isPopular: false
    },
    {
      title: "Тариф «Премиум»",
      price: "7948с",
      features: [
        "Консультации по работам проекта и администрированию — 2 часа;",
        "Проверка доступности веб-сайта",
        "Контроль продления домена, хостинга и SSL-сертификата",
        "Очистка и проверка конкурентного кода;",
        "Резервное копирование сайта — 2 раза в месяц;",
        "Исправление ошибок в течение 6 часов;",
        "Администрирование почты — создание и настройка.",
        "Защита от атак и вирусов;",
        "Доработка программного кода проекта — 20 часа.",
        "Аудит сайта и рекомендации по продолжению проекта."
      ],
      isPopular: false
    }
  ];

  return (
    <section className={styles.section} id="pricing">
      <FadeIn direction="up">
        <main className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Тарифы</span>
            <h2 className={styles.title}>Доступные тарифные планы</h2>
          </div>
          <div className={styles.grid}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.card} ${plan.isPopular ? styles.popularCard : ""}`}
              >
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{plan.title}</h3>
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>/мес</span>
                  </div>
                  <ul className={styles.features}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.checkIcon}
                        >
                          <path
                            d="M8 0C3.592 0 0 3.592 0 8C0 12.408 3.592 16 8 16C12.408 16 16 12.408 16 8C16 3.592 12.408 0 8 0ZM11.824 6.16L7.288 10.696C7.1755 10.8084 7.023 10.8715 6.864 10.8715C6.705 10.8715 6.5525 10.8084 6.44 10.696L4.176 8.432C4.06442 8.31909 4.00184 8.16674 4.00184 8.008C4.00184 7.84926 4.06442 7.69691 4.176 7.584C4.408 7.352 4.792 7.352 5.024 7.584L6.864 9.424L10.976 5.312C11.208 5.08 11.592 5.08 11.824 5.312C12.056 5.544 12.056 5.92 11.824 6.16Z"
                            fill="url(#paint_linear)"
                          />
                          <defs>
                            <linearGradient
                              id="paint_linear"
                              x1="1.0718"
                              y1="12"
                              x2="14.9282"
                              y2="4"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3DDC84" />
                              <stop offset="1" stopColor="#02704F" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <PricingButton isPopular={plan.isPopular} />
              </div>
            ))}
          </div>
        </main>
      </FadeIn>
    </section>
  );
}
