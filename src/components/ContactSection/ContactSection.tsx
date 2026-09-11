import React from 'react';
import Image from 'next/image';
import initTranslations from '@/app/i18n';
import styles from './ContactSection.module.css';
import ContactForm from './ContactForm';
import { FadeIn, StaggerContainer, StaggerItem } from '../MotionWrapper';

const i18nNamespaces = ['common'];

export default async function ContactSection({ lang = 'ru' }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  return (
    <section id="contacts" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="right" fullWidth className={styles.leftCol}>
          <div className={styles.textContent}>
            <span className={styles.subtitle}>{t('contact.subtitle', 'Связаться с нами')}</span>
            <h2 className={styles.title}>
              <span className={styles.titleBlack}>{t('contact.titleBlack1', 'Давайте обсудим')}</span><br />
              <div className={styles.titleInline}>
                <span className={styles.titleBlack}>{t('contact.titleBlack2', 'ваш ')}</span>
                <span className={styles.titleGradient}>{t('contact.titleGradient', 'проект.')}</span>
              </div>
            </h2>
            <p className={styles.desc}>
              {t('contact.desc', 'Расскажите о своей задаче , а мы предложим лучшее решение и рассчитаем стоимость.')}
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <svg className={styles.featureIcon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="11" fill="url(#paint0_linear_10_970)" fillOpacity="0.11"/>
                <path d="M26.75 31.1851C26.75 31.6492 26.5656 32.0943 26.2374 32.4225C25.9092 32.7507 25.4641 32.9351 25 32.9351C24.5359 32.9351 24.0908 32.7507 23.7626 32.4225C23.4344 32.0943 23.25 31.6492 23.25 31.1851C23.25 30.7209 23.4344 30.2758 23.7626 29.9476C24.0908 29.6194 24.5359 29.4351 25 29.4351C25.4641 29.4351 25.9092 29.6194 26.2374 29.9476C26.5656 30.2758 26.75 30.7209 26.75 31.1851ZM33.75 31.1851C33.75 31.6492 33.5656 32.0943 33.2374 32.4225C32.9092 32.7507 32.4641 32.9351 32 32.9351C31.5359 32.9351 31.0908 32.7507 30.7626 32.4225C30.4344 32.0943 30.25 31.6492 30.25 31.1851C30.25 30.7209 30.4344 30.2758 30.7626 29.9476C31.0908 29.6194 31.5359 29.4351 32 29.4351C32.4641 29.4351 32.9092 29.6194 33.2374 29.9476C33.5656 30.2758 33.75 30.7209 33.75 31.1851ZM39 32.9351C39.4641 32.9351 39.9092 32.7507 40.2374 32.4225C40.5656 32.0943 40.75 31.6492 40.75 31.1851C40.75 30.7209 40.5656 30.2758 40.2374 29.9476C39.9092 29.6194 39.4641 29.4351 39 29.4351C38.5359 29.4351 38.0908 29.6194 37.7626 29.9476C37.4344 30.2758 37.25 30.7209 37.25 31.1851C37.25 31.6492 37.4344 32.0943 37.7626 32.4225C38.0908 32.7507 38.5359 32.9351 39 32.9351Z" fill="url(#paint1_linear_10_970)"/>
                <path d="M21.7887 44.8403L21.8238 44.8333C25.0262 44.1981 26.9827 43.3598 27.8927 42.8996C29.2323 43.2581 30.6133 43.4381 32 43.4351C39.7315 43.4351 46 37.9506 46 31.1851C46 24.4196 39.7315 18.9351 32 18.9351C24.2685 18.9351 18 24.4196 18 31.1851C18 34.2651 19.3003 37.0826 21.4475 39.2351C21.2978 40.6178 20.9902 41.9789 20.5305 43.2916L20.5252 43.3108C20.3945 43.6867 20.2521 44.0585 20.0982 44.4256C19.96 44.7511 20.2278 45.1151 20.576 45.0591C20.9814 44.9926 21.3857 44.9197 21.7887 44.8403ZM23.1887 39.4013C23.2133 39.1451 23.181 38.8866 23.0941 38.6444C23.0073 38.4021 22.8681 38.1819 22.6865 37.9996C20.8315 36.1376 19.75 33.7541 19.75 31.1851C19.75 25.5991 25.007 20.6851 32 20.6851C38.993 20.6851 44.25 25.5991 44.25 31.1851C44.25 36.7711 38.993 41.6851 32 41.6851C30.7663 41.6881 29.5377 41.528 28.346 41.2091C27.9295 41.0974 27.4864 41.1436 27.1018 41.3386C26.4245 41.6816 24.9317 42.3361 22.4922 42.9013C22.8323 41.7587 23.0655 40.587 23.1887 39.4013Z" fill="url(#paint2_linear_10_970)"/>
                <defs>
                  <linearGradient id="paint0_linear_10_970" x1="4.28719" y1="48" x2="59.7128" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_10_970" x1="24.4223" y1="32.0601" x2="26.5873" y2="25.8101" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_10_970" x1="19.8756" y1="38.5324" x2="43.2576" y2="24.0665" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.featureTexts}>
                <span className={styles.featureLabel}>{t('contact.responseTime', 'Ответ в течение')}</span>
                <span className={styles.featureValue}>{t('contact.timeValue', '2 часов')}</span>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <svg className={styles.featureIcon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="11" fill="url(#paint0_linear_10_978)" fillOpacity="0.11"/>
                <path d="M38.6069 28.2439C38.7678 28.0796 38.8582 27.8567 38.8582 27.6244C38.8582 27.392 38.7678 27.1692 38.6069 27.0049C38.4459 26.8406 38.2276 26.7483 38 26.7483C37.7724 26.7483 37.5541 26.8406 37.3931 27.0049L31.1429 33.387L28.3211 30.5048C28.2414 30.4235 28.1468 30.359 28.0427 30.3149C27.9386 30.2709 27.827 30.2482 27.7143 30.2482C27.6016 30.2482 27.49 30.2709 27.3859 30.3149C27.2817 30.359 27.1871 30.4235 27.1074 30.5048C27.0277 30.5862 26.9645 30.6828 26.9214 30.7891C26.8783 30.8954 26.8561 31.0093 26.8561 31.1243C26.8561 31.2394 26.8783 31.3533 26.9214 31.4596C26.9645 31.5659 27.0277 31.6625 27.1074 31.7438L30.536 35.2438C30.6156 35.3252 30.7102 35.3899 30.8143 35.434C30.9185 35.4781 31.0301 35.5008 31.1429 35.5008C31.2556 35.5008 31.3672 35.4781 31.4714 35.434C31.5755 35.3899 31.6701 35.3252 31.7497 35.2438L38.6069 28.2439ZM32.4749 18.1465C32.3342 18.051 32.169 18 32 18C31.831 18 31.6658 18.051 31.5251 18.1465C28.2888 20.3737 24.5996 21.8223 20.7354 22.3832C20.5313 22.4131 20.3445 22.5172 20.2094 22.6763C20.0743 22.8354 20 23.0389 20 23.2495V31.1243C20 37.9335 23.9549 42.9016 31.6914 45.9413C31.89 46.0196 32.11 46.0196 32.3086 45.9413C40.0451 42.9016 44 37.9317 44 31.1243V23.2495C44 23.0386 43.9254 22.8349 43.7899 22.6758C43.6545 22.5166 43.4673 22.4127 43.2629 22.3832C39.3993 21.8221 35.7107 20.3735 32.4749 18.1465ZM21.7143 23.9984C25.11 23.41 28.3668 22.174 31.3143 20.355L32 19.9193L32.6857 20.355C35.6332 22.174 38.89 23.41 42.2857 23.9984V31.1243C42.2857 37.0602 38.912 41.3844 32 44.1844C25.088 41.3844 21.7143 37.062 21.7143 31.1243V23.9984Z" fill="url(#paint1_linear_10_978)"/>
                <defs>
                  <linearGradient id="paint0_linear_10_978" x1="4.28719" y1="48" x2="59.7128" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_10_978" x1="21.6077" y1="39" x2="43.8688" y2="27.9836" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.featureTexts}>
                <span className={styles.featureLabel}>{t('contact.confidentiality', 'Конфиденциальность')}</span>
                <span className={styles.featureValue}>{t('contact.guaranteed', 'гарантирована')}</span>
              </div>
            </div>

            <div className={styles.featureItem}>
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/2f96c9e233051da3cda4d9560c68adf9154f735c?width=128" alt="" width={128} height={128} className={styles.featureIcon} />
              <div className={styles.featureTexts}>
                <span className={styles.featureLabel}>{t('contact.free', 'Бесплатная')}</span>
                <span className={styles.featureValue}>{t('contact.consultation', 'консультация')}</span>
              </div>
            </div>
          </div>
{/* 
          <div className={styles.teamBox}>
            <div className={styles.avatarsGroup}>
              <div className={styles.avatarWrap} style={{ zIndex: 5 }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/2faf45a2e91b9578889e773f47933cb6e201db77?width=104" alt="" />
              </div>
              <div className={styles.avatarWrap} style={{ zIndex: 4, marginLeft: '-15px' }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/958903a1ee4b53f3d7a906783acf03a8460a3ae1?width=128" alt="" />
              </div>
              <div className={styles.avatarWrap} style={{ zIndex: 3, marginLeft: '-15px' }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/d97f350c5ab2f2de8497f5a59a642f096e90921d?width=136" alt="" />
              </div>
              <div className={styles.avatarWrap} style={{ zIndex: 2, marginLeft: '-15px' }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/7a2e95e4bff69bbc26cb810136b34eaff353729f?width=126" alt="" />
              </div>
              <div className={styles.avatarWrap} style={{ zIndex: 1, marginLeft: '-15px' }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/5661293058c63fb8ec2787bf2d8175563424276f?width=120" alt="" />
              </div>
              <div className={styles.avatarPlus} style={{ zIndex: 6, marginLeft: '-15px' }}>
                <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="32" fill="#001010"/>
                  <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#3DDC84" strokeOpacity="0.41"/>
                  <path d="M45.5 34H33.5V46H29.5V34H17.5V30H29.5V18H33.5V30H45.5V34Z" fill="#737C7C"/>
                </svg>
              </div>
            </div>
            <p className={styles.teamText}>
              {t('contact.teamText', 'Наша команда экспертов готова помочь вам в реализации проекта')}
            </p>
          </div> */}

          <div className={styles.messengersSection}>
            <p className={styles.messengersTitle}>{t('contact.messengersTitle', 'Или пишите нам в удобный мессенджер')}</p>
            <div className={styles.messengersList}>
              
              <a href="https://wa.me/992901000535" target="_blank" rel="noopener noreferrer" className={styles.messengerItem}>
                <svg className={styles.messengerIcon} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="46" height="46" rx="23" fill="#2EB843"/>
                  <path d="M23.0521 11C26.382 11.0016 29.5074 12.24 31.8575 14.4879C34.2077 16.7357 35.5013 19.7239 35.5 22.9011C35.4973 29.3929 30.0238 34.6867 23.2578 34.7919L23.0524 34.7935H23.0473C20.996 34.7929 18.9799 34.3089 17.1829 33.3898L17.0989 33.3463L10.5 35L12.2659 28.837C11.1768 27.0339 10.6036 24.9878 10.6045 22.8916C10.6072 16.3347 16.1913 11 23.0521 11ZM23.0564 13.0088C17.3497 13.0088 12.7084 17.4427 12.7062 22.8927C12.7054 24.7318 13.2358 26.524 14.2412 28.0813L14.2879 28.153L14.534 28.5271L13.4888 32.1745L17.4045 31.1932L17.7823 31.4073C19.3455 32.2935 21.1339 32.7694 22.9598 32.7848L23.0481 32.7851H23.0524C28.7548 32.7851 33.396 28.3509 33.3983 22.9006C33.3993 20.2594 32.3243 17.7759 30.3709 15.9075C28.4175 14.0392 25.8198 13.0096 23.0564 13.0087M18.6453 17.3997C18.8525 17.3997 19.0604 17.4015 19.2414 17.4104C19.4324 17.4194 19.6888 17.3411 19.9411 17.9204C20.038 18.1424 20.1853 18.4855 20.336 18.8359L20.3684 18.9111C20.611 19.4751 20.8536 20.0374 20.9003 20.1267C20.9779 20.2753 21.0297 20.449 20.9261 20.6472C20.8226 20.8456 20.7705 20.9695 20.6151 21.1432C20.4596 21.3165 20.2886 21.5307 20.1486 21.6637L20.1258 21.6854L20.1031 21.7076C19.9645 21.8446 19.8484 22.0017 20.0123 22.2699C20.1937 22.5675 20.8178 23.5408 21.7424 24.3286C22.9304 25.341 23.9326 25.6548 24.2437 25.8036C24.5547 25.9525 24.7361 25.9275 24.9175 25.729C25.099 25.5308 25.6949 24.8615 25.9023 24.564C26.1097 24.2665 26.317 24.3162 26.6021 24.4153C26.7376 24.4624 27.1543 24.6496 27.5877 24.8491L27.7225 24.9112C28.1563 25.1118 28.5795 25.3113 28.7273 25.382C29.0384 25.5308 29.2458 25.6052 29.3234 25.729C29.4012 25.8531 29.4012 26.4479 29.142 27.142C28.8828 27.8362 27.6402 28.4697 27.0427 28.5552C26.5068 28.6315 25.8288 28.6634 25.0837 28.4374C24.6321 28.3003 24.0526 28.1175 23.3105 27.8114C20.1906 26.5244 18.1528 23.5227 17.9975 23.3245L17.9869 23.3111C17.7974 23.0691 16.7273 21.6835 16.7273 20.2505C16.7273 18.788 17.531 18.0691 17.8159 17.7716C18.1011 17.4743 18.438 17.3997 18.6453 17.3997Z" fill="white"/>
                </svg>
                <span className={styles.messengerName}>WhatsApp</span>
              </a>

              <a href="https://t.me/992901000535" target="_blank" rel="noopener noreferrer" className={styles.messengerItem}>
                <svg className={styles.messengerIcon} width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5 46C36.2025 46 46.5 35.7025 46.5 23C46.5 10.2975 36.2025 0 23.5 0C10.7975 0 0.5 10.2975 0.5 23C0.5 35.7025 10.7975 46 23.5 46Z" fill="url(#paint0_linear_10_1015)"/>
                  <path d="M15.9083 24.6805L18.6989 32.2362C18.6989 32.2362 19.0477 32.946 19.4241 32.946C19.8004 32.946 25.3448 27.2949 25.3448 27.2949L31.5226 15.6245L16.0093 22.731L15.9083 24.6805Z" fill="#C8DAEA"/>
                  <path d="M19.608 26.6206L19.0756 32.1908C19.0756 32.1908 18.8553 33.8978 20.5902 32.1908C22.3343 30.4838 24.0049 29.1721 24.0049 29.1721" fill="#A9C6D8"/>
                  <path d="M15.9546 24.9496L10.2174 23.1169C10.2174 23.1169 9.52899 22.8474 9.7493 22.2274C9.79519 22.1017 9.88699 21.9939 10.1624 21.8052C11.4383 20.9427 33.6893 13.1175 33.6893 13.1175C33.6893 13.1175 34.3136 12.9109 34.6899 13.0456C34.8735 13.0995 35.0204 13.2523 35.0571 13.4409C35.0938 13.6027 35.1122 13.7734 35.103 13.9351C35.103 14.0788 35.0846 14.2136 35.0663 14.4202C34.9286 16.5584 30.8713 32.5323 30.8713 32.5323C30.8713 32.5323 30.6326 33.4666 29.7605 33.5026C29.3291 33.5205 28.9068 33.3588 28.6039 33.0623C26.8965 31.6249 21.0033 27.7437 19.6998 26.8992C19.6448 26.8633 19.5989 26.8004 19.5897 26.7285C19.5713 26.6387 19.6723 26.5309 19.6723 26.5309C19.6723 26.5309 29.9349 17.6006 30.2103 16.6663C30.2287 16.5944 30.1553 16.5584 30.0451 16.5854C29.3658 16.828 17.5427 24.1411 16.2392 24.9407C16.1566 24.9586 16.0556 24.9676 15.9546 24.9496Z" fill="white"/>
                  <defs>
                    <linearGradient id="paint0_linear_10_1015" x1="23.5" y1="46" x2="23.5" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1D93D2"/>
                      <stop offset="1" stopColor="#38B0E3"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className={styles.messengerName}>Telegram</span>
              </a>

              <a href="mailto:dushanbesoft@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.messengerItem}>
                <svg className={styles.messengerIcon} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="46" height="46" rx="23" fill="#6460EC"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M35.5 16.5761L23 23.7971L10.5 16.5761V16.4386C10.5017 15.5271 10.8643 14.6535 11.5086 14.009C12.1529 13.3645 13.0263 13.0017 13.9375 13H32.0625C32.9737 13.0017 33.8471 13.3645 34.4914 14.009C35.1357 14.6535 35.4983 15.5271 35.5 16.4386V16.5761ZM10.5 18.7393L23 25.9603V25.9666L35.5 18.7455V29.5614C35.4983 30.4729 35.1357 31.3465 34.4914 31.991C33.8471 32.6355 32.9737 32.9983 32.0625 33H13.9375C13.0263 32.9983 12.1529 32.6355 11.5086 31.991C10.8643 31.3465 10.5017 30.4729 10.5 29.5614V18.7393Z" fill="white"/>
                </svg>
                <span className={styles.messengerName}>Email</span>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" fullWidth className={styles.rightCol}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <svg className={styles.formHeaderIcon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="32" fill="url(#paint0_linear_10_1029)" fillOpacity="0.11"/>
                <path d="M26.008 38.2473L28.4734 37.5361L43.3176 22.515C43.4346 22.395 43.4998 22.2338 43.4991 22.0661C43.4983 21.8985 43.4316 21.7379 43.3134 21.619L42.4244 20.7203C42.3669 20.6613 42.2983 20.6143 42.2225 20.582C42.1467 20.5498 42.0652 20.533 41.9828 20.5326C41.9005 20.5323 41.8189 20.5483 41.7428 20.5798C41.6666 20.6113 41.5976 20.6576 41.5396 20.7161L26.7346 35.698L26.008 38.2473ZM44.1842 18.9396L45.0732 19.8397C46.2996 21.0815 46.3108 23.0847 45.0956 24.3139L29.7992 39.7942L24.5296 41.3117C24.3703 41.3565 24.2037 41.3694 24.0394 41.3498C23.8751 41.3302 23.7162 41.2784 23.5719 41.1975C23.4276 41.1165 23.3007 41.0079 23.1984 40.8778C23.0961 40.7478 23.0203 40.5988 22.9756 40.4395C22.9069 40.2085 22.906 39.9627 22.9728 39.7312L24.5058 34.3555L39.7616 18.9158C40.0517 18.6237 40.397 18.3923 40.7775 18.2351C41.1579 18.0779 41.5659 17.998 41.9776 18C42.3892 18.0021 42.7964 18.0862 43.1752 18.2472C43.5541 18.4083 43.897 18.6446 44.1842 18.9396ZM28.0576 20.5537C28.752 20.5537 29.3148 21.1235 29.3148 21.8262C29.3159 21.9923 29.2842 22.1571 29.2216 22.3109C29.159 22.4648 29.0667 22.6049 28.95 22.723C28.8332 22.8412 28.6943 22.9352 28.5412 22.9997C28.388 23.0642 28.2237 23.0978 28.0576 23.0987H23.0288C21.64 23.0987 20.5144 24.2383 20.5144 25.6424V40.9099C20.5144 42.3154 21.64 43.455 23.0288 43.455H38.1152C39.504 43.455 40.631 42.3154 40.631 40.9099V35.8212C40.631 35.1184 41.1938 34.5487 41.8882 34.5487C42.5826 34.5487 43.1454 35.1184 43.1454 35.8226V40.9099C43.1454 43.7209 40.8928 46 38.1152 46H23.0288C20.2512 46 18 43.7209 18 40.9099V25.6424C18 22.8328 20.2512 20.5537 23.0288 20.5537H28.0576Z" fill="url(#paint1_linear_10_1029)"/>
                <defs>
                  <linearGradient id="paint0_linear_10_1029" x1="4.28719" y1="48" x2="59.7128" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_10_1029" x1="19.8756" y1="39" x2="44.1244" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3DDC84"/>
                    <stop offset="1" stopColor="#02704F"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.formHeaderTexts}>
                <h3 className={styles.formTitle}>{t('contact.formTitle', 'Оставьте заявку')}</h3>
                <p className={styles.formSubtitle}>{t('contact.formSubtitle', 'Мы свяжемся с вами для обсуждения деталей')}</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
