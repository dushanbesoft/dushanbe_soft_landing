import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import NewsSection from '../../../components/NewsSection/NewsSection';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);

  const title = t('news.viewAll', { defaultValue: 'Все новости' }) + ' | Dushanbe Soft';
  const description = t('seo.news_description', {
    defaultValue: 'Последние новости, релизы и ключевые события компании Dushanbe Soft — разработка IT-решений в Таджикистане.'
  });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  const currentUrl = lang === 'ru' ? `${siteUrl}/news` : `${siteUrl}/${lang}/news`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: currentUrl,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'tg': `${siteUrl}/tj/news`,
        'ru': `${siteUrl}/news`,
        'en': `${siteUrl}/en/news`,
        'x-default': `${siteUrl}/news`,
      },
    },
  };
}

export default async function NewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className="main-global">
        <div className="header-global">
          <Header />
        </div>
        <NewsSection showAll={true} lang={lang} />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
