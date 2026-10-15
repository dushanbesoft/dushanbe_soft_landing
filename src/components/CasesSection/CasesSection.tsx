import React from "react";
import styles from "./CasesSection.module.css";
import CasesGrid from "./CasesGrid";
import { ProductSite } from "../../const/product-site";
import initTranslations from "../../app/i18n";

const i18nNamespaces = ["common"];


interface CasesSectionProps {
  showAll?: boolean;
  lang?: string;
}

export default async function CasesSection({ showAll = false, lang = 'ru' }: CasesSectionProps) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  
  return (
    <section id="cases" className={styles.section}>
      <div className={styles.container}>

        <CasesGrid
          title={t("cases.title")}
          isPage={showAll}
          lang={lang}
          casesData={ProductSite.map(e => ({
            slug: e.slug,
            imageSrc: e.imageSrc,
            year: e.year,
            title: t(`projects.${e.slug}.title`),
            description: t(`projects.${e.slug}.description`),
            tags: e.tags,
            gallery: e.gallery
          }))}
          labels={{
            descriptionTitle: t('cases.descriptionTitle', { defaultValue: 'Описание проекта' }),
            techTitle: t('cases.techTitle', { defaultValue: 'Технологии' }),
            advantagesTitle: t('cases.advantagesTitle', { defaultValue: 'Преимущества' }),
            prevProject: t('cases.prevProject', { defaultValue: 'Предыдущий проект' }),
            nextProject: t('cases.nextProject', { defaultValue: 'Следующий проект' }),
            outOf: t('cases.outOf', { defaultValue: 'из' }),
            loadMore: t('cases.loadMore', { defaultValue: 'Посмотреть еще' })
          }}
        />
      </div>
    </section>
  );
}
