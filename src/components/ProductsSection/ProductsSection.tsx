import React from 'react';
import Link from 'next/link';
import styles from './ProductsSection.module.css';
import ProductCard from './ProductCard';

const ArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="white"/>
  </svg>
);

const SmsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.2 9H11.8C10.26 9 9 10.26 9 11.8V37L14.6 31.4H34.2C35.74 31.4 37 30.14 37 28.6V11.8C37 10.26 35.74 9 34.2 9ZM34.2 28.6H13.438L11.8 30.238V11.8H34.2V28.6ZM16 18.8H18.8V21.6H16V18.8ZM27.2 18.8H30V21.6H27.2V18.8ZM21.6 18.8H24.4V21.6H21.6V18.8Z" fill="url(#paint2_linear_sms)"/>
    <defs>
      <linearGradient id="paint2_linear_sms" x1="10.8756" y1="30" x2="35.1244" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5EB5F0"/>
        <stop offset="1" stopColor="#02704F"/>
      </linearGradient>
    </defs>
  </svg>
);

const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4444 26.1013H25.3333V24.5202H14.4444V26.1013ZM14.4444 21.3581H31.5556V19.777H14.4444V21.3581ZM14.4444 16.6148H31.5556V15.0338H14.4444V16.6148ZM9 36.5V12.055C9 11.3267 9.24007 10.719 9.72022 10.232C10.2004 9.74507 10.7977 9.50105 11.5122 9.5H34.4878C35.2033 9.5 35.8007 9.74401 36.2798 10.232C36.7589 10.7201 36.999 11.3277 37 12.055V29.0816C37 29.8089 36.7599 30.4166 36.2798 30.9046C35.7996 31.3926 35.2023 31.6361 34.4878 31.635H13.7864L9 36.5ZM13.1222 30.054H34.4878C34.7263 30.054 34.9456 29.9528 35.1458 29.7504C35.3459 29.548 35.4455 29.3251 35.4444 29.0816V12.0534C35.4444 11.811 35.3449 11.5881 35.1458 11.3846C34.9467 11.1812 34.7273 11.08 34.4878 11.0811H11.5122C11.2737 11.0811 11.0544 11.1823 10.8542 11.3846C10.6541 11.587 10.5545 11.8099 10.5556 12.0534V32.6548L13.1222 30.054Z" fill="url(#paint2_linear_chat)"/>
    <defs>
      <linearGradient id="paint2_linear_chat" x1="10.8756" y1="29.75" x2="34.6755" y2="15.5003" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5EB5F0"/>
        <stop offset="1" stopColor="#02704F"/>
      </linearGradient>
    </defs>
  </svg>
);

const smsTags = [
  { label: 'Персонализация сообщений', highlighted: true },
  { label: 'Подробная статистика' },
  { label: 'Низкая стоимость' },
  { label: 'Отправка всем операторам' },
  { label: 'Надежность и безопасность' },
  { label: 'API для интеграции' },
  { label: 'Использование своих шаблонов' },
  { label: 'Высокая доставляемость' },
  { label: 'Высокая скорость и эффективность' },
];

const chatTags = [
  { label: 'Мультиканальность' },
  { label: 'Настройка виджета' },
  { label: 'Шаблоны ответов' },
  { label: 'Мгновенный ответ' },
  { label: 'Умный виджет' },
  { label: 'Автоответы' },
  { label: 'Многоязычность' },
  { label: 'CRM интеграция' },
  { label: 'Командная работа' },
  { label: 'Управление операторами' },
  { label: 'Аналитика и отчёты' },
  { label: 'Поиск по чатам' },
  { label: 'История чатов' },
  { label: 'Безопасность данных' },
];

export default function ProductsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.titles}>
            <div className={styles.subtitle}>Наши продукты</div>
            <h2 className={styles.mainTitle}>Готовые продукты для вашего бизнеса</h2>
          </div>
          <Link href="/products" className={styles.allProductsBtn}>
            Все продукты <ArrowUpRight />
          </Link>
        </div>

        <div className={styles.cardsContainer}>
          <ProductCard 
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/6cd17b2eb6e5d66a3f49ca6d4c078d80211f395d?width=893"
            icon={<SmsIcon />}
            title="SMS Платформа"
            subtitle="Messaging"
            description="Высоконагруженная платформа для массовых SMS-рассылок с аналитикой доставки в реальном времени."
            tags={smsTags}
          />
          <ProductCard 
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/268dcc72b94a7c00121e9469418d8968ab539011?width=893"
            icon={<ChatIcon />}
            title="Онлайн-чат"
            subtitle="Communication"
            description="Интеллектуальная платформа поддержки клиентов с чат-ботом на базе AI и мультиканальной интеграцией."
            tags={chatTags}
          />
           <ProductCard 
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/268dcc72b94a7c00121e9469418d8968ab539011?width=893"
            icon={<ChatIcon />}
            title="Онлайн-чат"
            subtitle="Communication"
            description="Интеллектуальная платформа поддержки клиентов с чат-ботом на базе AI и мультиканальной интеграцией."
            tags={chatTags}
          />
        </div>
      </div>
    </section>
  );
}
