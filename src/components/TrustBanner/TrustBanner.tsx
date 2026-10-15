import Link from "next/link";
import initTranslations from "@/app/i18n";
import { localePath } from "@/utils/seo";
import styles from "./TrustBanner.module.css";

export default async function TrustBanner({ lang = "ru" }: { lang?: string }) {
  const { t } = await initTranslations(lang, ["common"]);

  return (
    <section className={styles.banner} aria-label={t("trust.badge")}>
      <div className={styles.inner}>
        <span className={styles.badge}>{t("trust.badge")}</span>
        <p className={styles.text}>{t("trust.text")}</p>
        <Link
          href={localePath(lang, "news/world-bank-tajikistan-digital-foundations")}
          className={styles.link}
        >
          {t("trust.more")} →
        </Link>
      </div>
    </section>
  );
}
