import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroContent.module.css";
import HeroMarquee from "./HeroMarquee";

const ArrowRight = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9686 7.26001C13.8673 7.1656 13.786 7.05175 13.7297 6.92525C13.6733 6.79875 13.643 6.66219 13.6406 6.52373C13.6381 6.38526 13.6636 6.24772 13.7155 6.11931C13.7673 5.9909 13.8445 5.87426 13.9424 5.77633C14.0404 5.67841 14.157 5.60121 14.2854 5.54934C14.4138 5.49747 14.5514 5.472 14.6898 5.47445C14.8283 5.47689 14.9649 5.5072 15.0914 5.56356C15.2179 5.61992 15.3317 5.70119 15.4261 5.80251L19.8963 10.2713L20.625 11L19.8963 11.7288L15.4275 16.1975C15.2331 16.3855 14.9726 16.4895 14.7023 16.4873C14.4319 16.4851 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0313H2.40625C2.13275 12.0313 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96876 2.40625 9.96876H16.6774L13.9686 7.26001Z"
      fill="#F1F7FF"
    />
  </svg>
);

const TYPING_SPEED_MS = 95;

function TypedTitle({ text }: { text: string }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, TYPING_SPEED_MS);

    return () => clearInterval(intervalId);
  }, [text]);

  return <span className={styles.typedText}>{typed}</span>;
}

export default function HeroContent({ marqueeItems }: { marqueeItems?: string[] }) {
  const { t } = useTranslation();
  const fullTitle = t(
    "hero.subtitle",
    "Разрабатываем и внедряем современные IT-решения",
  );

  return (
    <div className={styles.heroContent}>
      <div className={styles.centerGroup}>
        <div className={styles.titlesContainer}>

          <h1 className={styles.mainTitle}>
            <TypedTitle key={fullTitle} text={fullTitle} />
            <span className={styles.cursor} aria-hidden="true" />
            <br />
            {/* {t("hero.title2", "двигают бизнес вперёд")} */}
          </h1>
          {/* <p className={styles.subtitle}>
            {t(
              "hero.subtitle",
              "Разрабатываем и внедряем современные IT-решения, автоматизируем процессы и повышаем эффективность компаний.",
            )}
          </p> */}
        </div>

     

        <div className={styles.buttons}>
          <a
            href="https://t.me/m_yakub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            {t("hero.btnPrimary", "Получить консультацию")} <ArrowRight />
          </a>
          <button 
            type="button"
            className={styles.btnSecondary}
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('openCaseModal', { detail: { index: 0 } }));
            }}
          >
            {t("hero.btnSecondary", "Смотреть проекты")}
          </button>
        </div>
      </div>
      <HeroMarquee marqueeItems={marqueeItems} />
    </div>
  );
}
