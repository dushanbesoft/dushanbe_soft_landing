import React from "react";
import initTranslations from "@/app/i18n";
import styles from "./ProductsSection.module.css";
import ProductCard from "./ProductCard";
import ProductsCarousel from "./ProductsCarousel";
import { FadeIn } from "../MotionWrapper";


const SmsIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.2 9H11.8C10.26 9 9 10.26 9 11.8V37L14.6 31.4H34.2C35.74 31.4 37 30.14 37 28.6V11.8C37 10.26 35.74 9 34.2 9ZM34.2 28.6H13.438L11.8 30.238V11.8H34.2V28.6ZM16 18.8H18.8V21.6H16V18.8ZM27.2 18.8H30V21.6H27.2V18.8ZM21.6 18.8H24.4V21.6H21.6V18.8Z"
      fill="url(#paint2_linear_sms)"
    />
    <defs>
      <linearGradient
        id="paint2_linear_sms"
        x1="10.8756"
        y1="30"
        x2="35.1244"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#02704F" />
      </linearGradient>
    </defs>
  </svg>
);

const ChatIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4444 26.1013H25.3333V24.5202H14.4444V26.1013ZM14.4444 21.3581H31.5556V19.777H14.4444V21.3581ZM14.4444 16.6148H31.5556V15.0338H14.4444V16.6148ZM9 36.5V12.055C9 11.3267 9.24007 10.719 9.72022 10.232C10.2004 9.74507 10.7977 9.50105 11.5122 9.5H34.4878C35.2033 9.5 35.8007 9.74401 36.2798 10.232C36.7589 10.7201 36.999 11.3277 37 12.055V29.0816C37 29.8089 36.7599 30.4166 36.2798 30.9046C35.7996 31.3926 35.2023 31.6361 34.4878 31.635H13.7864L9 36.5ZM13.1222 30.054H34.4878C34.7263 30.054 34.9456 29.9528 35.1458 29.7504C35.3459 29.548 35.4455 29.3251 35.4444 29.0816V12.0534C35.4444 11.811 35.3449 11.5881 35.1458 11.3846C34.9467 11.1812 34.7273 11.08 34.4878 11.0811H11.5122C11.2737 11.0811 11.0544 11.1823 10.8542 11.3846C10.6541 11.587 10.5545 11.8099 10.5556 12.0534V32.6548L13.1222 30.054Z"
      fill="url(#paint2_linear_chat)"
    />
    <defs>
      <linearGradient
        id="paint2_linear_chat"
        x1="10.8756"
        y1="29.75"
        x2="34.6755"
        y2="15.5003"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#02704F" />
      </linearGradient>
    </defs>
  </svg>
);

const TvIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 10H6C4.89543 10 4 10.8954 4 12V32C4 33.1046 4.89543 34 6 34H18V38H28V34H40C41.1046 34 42 33.1046 42 32V12C42 10.8954 41.1046 10 40 10ZM40 32H6V12H40V32ZM16 16L32 22L16 28V16Z"
      fill="url(#paint2_linear_tv)"
    />
    <defs>
      <linearGradient
        id="paint2_linear_tv"
        x1="10.8756"
        y1="30"
        x2="35.1244"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#02704F" />
      </linearGradient>
    </defs>
  </svg>
);

const FinanceIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38 10H8C6.89543 10 6 10.8954 6 12V34C6 35.1046 6.89543 36 8 36H38C39.1046 36 40 35.1046 40 34V12C40 10.8954 39.1046 10 38 10ZM38 34H8V22H38V34ZM38 16H8V12H38V16ZM33 27C33 28.1 32.1 29 31 29C29.9 29 29 28.1 29 27C29 25.9 29.9 25 31 25C32.1 25 33 25.9 33 27Z"
      fill="url(#paint2_linear_finance)"
    />
    <defs>
      <linearGradient
        id="paint2_linear_finance"
        x1="10.8756"
        y1="30"
        x2="35.1244"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#02704F" />
      </linearGradient>
    </defs>
  </svg>
);

interface ProductsSectionProps {
  showAll?: boolean;
  lang?: string;
}

const i18nNamespaces = ["common"];

export default async function ProductsSection({
  showAll = false,
  lang = "ru",
}: ProductsSectionProps) {
  const { t } = await initTranslations(lang, i18nNamespaces);

  const getSmsTags = () => [
    {
      label: t(
        "products.zudsms.tags.0",
        "Разработка архитектуры платежного и SMS-шлюза",
      ),
      highlighted: true,
    },
    {
      label: t(
        "products.zudsms.tags.1",
        "Полная совместимость со всеми устройствами",
      ),
    },
    {
      label: t(
        "products.zudsms.tags.2",
        "Высокая стабильность системы и мгновенная доставка сообщений",
      ),
    },
    {
      label: t(
        "products.zudsms.tags.3",
        "Модуль планирования рассылок и работа с базой клиентов",
      ),
    },
    {
      label: t(
        "products.zudsms.tags.4",
        "Личный кабинет пользователя с управлением тарифами, балансом и шаблонами сообщений",
      ),
    },
    {
      label: t(
        "products.zudsms.tags.5",
        "Интеграция REST API для автоматической отправки сообщений из внешних CRM/ERP систем",
      ),
    },
  ];

  const getChatTags = () => [
    {
      label: t("products.livechat.tags.0", "Разработка архитектуры системы"),
      highlighted: true,
    },
    { label: t("products.livechat.tags.1", "Высокая стабильность системы") },
    {
      label: t("products.livechat.tags.2", "Интеграция онлайн-чата и виджетов"),
    },
    { label: t("products.livechat.tags.3", "Поддержка мобильных устройств") },
    { label: t("products.livechat.tags.4", "Личный кабинет и аналитика") },
    { label: t("products.livechat.tags.5", "Защита от DDoS-атак") },
    { label: t("products.livechat.tags.6", "Мультиязычность") },
  ];

  const getTvcrmTags = () => [
    { label: "React", highlighted: true },
    { label: "Next.js" },
    { label: "Tailwind CSS" },
    { label: "CRM", highlighted: true },
    { label: "Telecom" },
  ];

  const getMablagTags = () => [
    {
      label: t(
        "products.mablagtj.tags.0",
        "Финансовый, складской и торговый учет",
      ),
      highlighted: true,
    },
    {
      label: t(
        "products.mablagtj.tags.1",
        "Мультивалютные кассы и управленческая аналитика (P&L)",
      ),
      highlighted: true,
    },
    {
      label: t(
        "products.mablagtj.tags.2",
        "Контроль взаиморасчетов с клиентами и поставщиками",
      ),
    },
    {
      label: t(
        "products.mablagtj.tags.3",
        "Управление складами, остатками и перемещениями",
      ),
    },
    {
      label: t(
        "products.mablagtj.tags.4",
        "Гибкое разграничение прав доступа и аудит действий",
      ),
    },
  ];

  const Heading = showAll ? "h1" : "h2";

  return (
    <section id="products" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up" fullWidth>
          <ProductsCarousel
            headerSubtitle={t("products.subtitle", "Наши продукты")}
            headerTitle={
              <Heading className={styles.mainTitle}>
                {t("products.title", "Готовые продукты для вашего бизнеса")}
              </Heading>
            }
          >
            <ProductCard
              imageSrc="/images/ZudSMSBanner.webp"
              icon={<SmsIcon />}
              title={t(
                "products.zudsms.title",
                "ZudSMS – Платформа SMS-рассылок",
              )}
              subtitle={t("products.zudsms.subtitle", "zudsms.tj")}
              description={t(
                "products.zudsms.description",
                "Облачный сервис автоматизации и массовой рассылки SMS-сообщений для бизнеса...",
              )}
              tags={getSmsTags()}
              href="https://zudsms.tj"
            />
            <ProductCard
              imageSrc="/images/liveChatBanner.webp"
              icon={<ChatIcon />}
              title={t("products.livechat.title", "LiveChat TJ - Онлайн-чат")}
              subtitle={t("products.livechat.subtitle", "LiveChat TJ")}
              description={t(
                "products.livechat.description",
                "Веб-сервис и платформа онлайн-консультаций для бизнеса...",
              )}
              tags={getChatTags()}
              href="https://livechat.tj"
            />
            <ProductCard
              imageSrc="/images/projects/mablag-banner.png"
              icon={<FinanceIcon />}
              title={t(
                "products.mablagtj.title",
                "Mablag.tj – Автоматизация и учет для бизнеса",
              )}
              subtitle={t("products.mablagtj.subtitle", "mablag.tj")}
              description={t(
                "products.mablagtj.description",
                "Облачная платформа и ERP-система для комплексного финансового, складского и торгового учета...",
              )}
              tags={getMablagTags()}
              href={lang === "ru" ? "/cases/mablagtj" : `/${lang}/cases/mablagtj`}
            />
            <ProductCard
              imageSrc="/images/projects/tvcrm-banner.png"
              icon={<TvIcon />}
              title={t("products.tvcrm.title", "TV CRM")}
              subtitle={t(
                "products.tvcrm.subtitle",
                "CRM для кабельных телевидений",
              )}
              description={t(
                "products.tvcrm.description",
                "Внутренняя CRM-система для провайдера кабельного телевидения, автоматизирующая управление абонентами, контроллерами, кассовыми операциями и отчетностью.",
              )}
              tags={getTvcrmTags()}
              href={lang === "ru" ? "/cases/sinamoktv" : `/${lang}/cases/sinamoktv`}
            />
          </ProductsCarousel>
        </FadeIn>
      </div>
    </section>
  );
}
