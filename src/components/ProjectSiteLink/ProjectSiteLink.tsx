import styles from "./ProjectSiteLink.module.css";

interface ProjectSiteLinkProps {
  url: string;
  label: string;
  /** "pill" sits under a page title, "button" closes an article. */
  variant?: "pill" | "button";
}

/** "https://www.kontakio.com/" → "kontakio.com" */
export const displayHost = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

/** External link to the live project site (e.g. kontakio.com). */
export default function ProjectSiteLink({ url, label, variant = "pill" }: ProjectSiteLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className={variant === "button" ? styles.button : styles.pill}
    >
      <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <span className={styles.label}>{label}:</span>
      <span className={styles.host}>{displayHost(url)}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
