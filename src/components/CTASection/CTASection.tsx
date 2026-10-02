import React from "react";
import initTranslations from "@/app/i18n";
import styles from "./CTASection.module.css";
import { FadeIn } from "../MotionWrapper";
import CTAActions from "./CTAActions";

const i18nNamespaces = ["common"];

export default async function CTASection({ lang = "ru" }: { lang?: string }) {
  const { t } = await initTranslations(lang, i18nNamespaces);
  return (
    <section className={styles.section}>
      <FadeIn direction="up">
        <main>
          <div className={styles.content}>
            <span className={styles.subtitle}>
              {t("cta.subtitle", "Готовы начать?")}
            </span>
            <h2 className={styles.title}>
              {t("cta.title", "Готовы начать свой проект?")}
            </h2>
            <p className={styles.desc}>
              {t(
                "cta.desc",
                "Оставьте заявку и мы свяжемся с вами в течение одного рабочего дня для бесплатной консультации.",
              )}
            </p>
          </div>
          <CTAActions primaryBtnText={t("cta.primaryBtn", "Получить консультацию")} />
        </main>
      </FadeIn>
    </section>
  );
}
