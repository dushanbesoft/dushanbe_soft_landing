import Link from "next/link";
import styles from "./not-found.module.css";
import { LOCALE_META, type Locale } from "@/utils/locales";
import { localePath } from "@/utils/seo";

// not-found.tsx gets no route params, and reading the locale from headers()
// would make every route under [lang] dynamic. So all variants are rendered
// and CSS shows the one matching <html lang> (not-found.module.css). It must
// stay a Server Component: client components are not rendered into this 404.
const TEXT: Record<Locale, { title: string; text: string; home: string; links: [string, string, string] }> = {
  ru: { title: "Страница не найдена", text: "Возможно, она была перемещена или адрес введён с ошибкой.", home: "На главную", links: ["Услуги", "Портфолио", "Новости"] },
  en: { title: "Page not found", text: "It may have been moved, or the address was mistyped.", home: "Go to home page", links: ["Services", "Portfolio", "News"] },
  tj: { title: "Саҳифа ёфт нашуд", text: "Шояд он кӯчонида шудааст ё суроға бо хато ворид шудааст.", home: "Ба саҳифаи асосӣ", links: ["Хизматрасониҳо", "Портфолио", "Хабарҳо"] },
  uz: { title: "Sahifa topilmadi", text: "Ehtimol, u ko‘chirilgan yoki manzil xato kiritilgan.", home: "Bosh sahifaga", links: ["Xizmatlar", "Portfolio", "Yangiliklar"] },
  kk: { title: "Бет табылмады", text: "Ол басқа жерге көшірілген немесе мекенжай қате енгізілген болуы мүмкін.", home: "Басты бетке", links: ["Қызметтер", "Портфолио", "Жаңалықтар"] },
  ky: { title: "Барак табылган жок", text: "Балким, ал башка жакка жылдырылган же дарек ката терилген.", home: "Башкы бетке", links: ["Кызматтар", "Портфолио", "Жаңылыктар"] },
  tk: { title: "Sahypa tapylmady", text: "Ol başga ýere geçirilen ýa-da salgy ýalňyş ýazylan bolmagy mümkin.", home: "Baş sahypa", links: ["Hyzmatlar", "Portfolio", "Habarlar"] },
  fa: { title: "صفحه پیدا نشد", text: "ممکن است این صفحه منتقل شده باشد یا نشانی را اشتباه وارد کرده باشید.", home: "بازگشت به خانه", links: ["خدمات", "نمونه کارها", "اخبار"] },
  ar: { title: "الصفحة غير موجودة", text: "ربما نُقلت هذه الصفحة أو أُدخل العنوان بشكل خاطئ.", home: "العودة إلى الرئيسية", links: ["الخدمات", "أعمالنا", "الأخبار"] },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <span className={styles.code} aria-hidden="true">404</span>
      {(Object.keys(TEXT) as Locale[]).map((lang) => {
        const t = TEXT[lang];
        return (
          <div key={lang} className={styles.variant} data-locale={LOCALE_META[lang].hreflang}>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.text}>{t.text}</p>
            <Link href={localePath(lang)} className={styles.home}>{t.home}</Link>
            <nav className={styles.links}>
              {(["services", "cases", "news"] as const).map((path, i) => (
                <Link key={path} href={localePath(lang, path)}>{t.links[i]}</Link>
              ))}
            </nav>
          </div>
        );
      })}
    </main>
  );
}
