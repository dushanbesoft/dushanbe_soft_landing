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
    logoSmall: "/icons/icon-partners/prezedent-site.svg",
    sector: "president.tj",
  },
  {
    id: 2,
    name: "Digital Tajikistan",
    logoSmall: "/icons/icon-partners/pic.svg",
    sector: "DT.TJ",
  },
  {
    id: 3,
    name: "СХДО",
    logoSmall: "/icons/icon-partners/schdo.svg",
    sector: "mahzan.tj",
  },
  {
    id: 4,
    name: "Рушди Кӯҳистон",
    logoSmall: "/icons/icon-partners/rushdikuhiston.svg",
    sector: "rushdikuhiston.tj",
  },
  {
    id: 5,
    name: "Megafon",
    logoSmall: "/icons/icon-partners/megafon.svg",
    sector: "megafon.tj",
  },
  {
    id: 6,
    name: "Телеком",
    logoSmall: "/icons/icon-partners/ttl.svg",
    sector: "ttl.tj",
  },
  {
    id: 7,
    name: "Mavji Somon",
    logoSmall: "/icons/icon-partners/mavjisomon.svg",
    sector: "mavjisomon.tj",
  },
  {
    id: 8,
    name: "Navo",
    logoSmall: "/icons/icon-partners/navo.svg",
    sector: "navo.tj/ru",
  },
  {
    id: 9,
    name: "Somon TV",
    logoSmall: "/icons/icon-partners/somontv.svg",
    sector: "somon.tv",
  },
  {
    id: 10,
    name: "IMRON NAKLIET",
    logoSmall: "/icons/icon-partners/itrans.svg",
    sector: "imronnakliet.tj",
  },
  {
    id: 11,
    name: "Sunduk TV",
    logoSmall: "/icons/icon-partners/sanduktv.svg",
    sector: "sunduk.tv",
  },
  {
    id: 12,
    name: "Памир Энерджи",
    logoSmall: "/icons/icon-partners/pamire-ergy.svg",
    sector: "pamirenergy.com",
  },
  {
    id: 13,
    name: "Zenith Valuation",
    logoSmall: "/icons/icon-partners/zenit-valuation.svg",
    sector: "zenithvaluation.com",
  },
  {
    id: 14,
    name: "СинамоТВ",
    logoSmall: "/icons/icon-partners/sinamo.svg",
    sector: "sinamo.tv",
  },
  {
    id: 15,
    name: "Минтранс РТ",
    logoSmall: "/icons/icon-partners/prezedent-site.svg", 
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
            <div key={idx} className={styles.card}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
