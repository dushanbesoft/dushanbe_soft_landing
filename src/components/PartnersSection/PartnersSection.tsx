'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './PartnersSection.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '../MotionWrapper';

const partnersData = [
  {
    id: 1,
    name: "Президент ҶТ",
    logoSmall: "/icons/partners/prezedent.svg",
    sector: "president.tj",
  },
  {
    id: 2,
    name: "Digital Tajikistan",
    logoSmall: "/icons/partners/pic.svg",
    sector: "DT.TJ",
  },
  {
    id: 3,
    name: "СХДО",
    logoSmall: "/icons/partners/shdo.webp",
    sector: "mahzan.tj",
  },
  {
    id: 4,
    name: "Рушди Кӯҳистон",
    logoSmall: "/icons/partners/rushd.webp",
    sector: "rushdikuhiston.tj",
  },
  {
    id: 5,
    name: "Megafon",
    logoSmall: "/icons/partners/megafon.svg",
    sector: "megafon.tj",
  },
  {
    id: 6,
    name: "Телеком",
    logoSmall: "/icons/partners/ttl.svg",
    sector: "ttl.tj",
  },
  {
    id: 7,
    name: "Mavji Somon",
    logoSmall: "/icons/partners/mavjisomon.svg",
    sector: "mavjisomon.tj",
  },
  {
    id: 8,
    name: "Navo",
    logoSmall: "/icons/partners/newradio.svg",
    sector: "navo.tj/ru",
  },
  {
    id: 9,
    name: "Somon TV",
    logoSmall: "/icons/partners/somontv.svg",
    sector: "somon.tv",
  },
  {
    id: 10,
    name: "IMRON NAKLIET",
    logoSmall: "/icons/partners/itrans.webp",
    sector: "imronnakliet.tj",
  },
  {
    id: 11,
    name: "Sunduk TV",
    logoSmall: "/icons/partners/sunduk.webp",
    sector: "sunduk.tv",
  },
  {
    id: 12,
    name: "Памир Энерджи",
    logoSmall: "/icons/partners/pamir.webp",
    sector: "pamirenergy.com",
  },
  {
    id: 13,
    name: "Zenith Valuation",
    logoSmall: "/icons/partners/zenith.webp",
    sector: "zenithvaluation.com",
  },
  {
    id: 14,
    name: "СинамоТВ",
    logoSmall: "/icons/partners/sinamo.webp",
    sector: "sinamo.tv",
  },
  {
    id: 15,
    name: "Минтранс РТ",
    logoSmall: "/icons/partners/prezedent.svg", 
    sector: "mintrans.tj",
  }
];

export default function PartnersSection() {
  const { t } = useTranslation('common');

  return (
    <section id="partners" className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.header}>
            <span className={styles.subtitle}>{t('partners.subtitle', 'Таҷрибаи мо')}</span>
            <h2 className={styles.title}>{t('partners.title', 'Ба мо бовар мекунанд')}</h2>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {partnersData.map((partner, idx) => (
            <div key={idx}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <Image 
                    src={partner.logoSmall} 
                    alt={partner.name} 
                    className={styles.logo} 
                    width={158} 
                    height={79} 

                  />
                  <div className={styles.partnerName}>
                    {t(`partners.list.${idx}.name`, partner.name)}
                  </div>
                  <div className={styles.partnerSector}>
                    {t(`partners.list.${idx}.sector`, partner.sector)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
