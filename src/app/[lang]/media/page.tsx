import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import MediaSection from '../../../components/MediaSection/MediaSection';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);

  const title = t('media.title', { defaultValue: 'Фото и видео' }) + ' | Dushanbe Soft';
  const description = t('seo.media_description', {
    defaultValue: 'Фото и видео галерея компании Dushanbe Soft: презентации проектов, разработка ПО и жизнь команды в Душанбе, Таджикистан.'
  });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbe-soft.tj';
  const currentUrl = lang === 'ru' ? `${siteUrl}/media` : `${siteUrl}/${lang}/media`;

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
        'tg': `${siteUrl}/tj/media`,
        'ru': `${siteUrl}/media`,
        'en': `${siteUrl}/en/media`,
        'x-default': `${siteUrl}/media`,
      },
    },
  };
}

export default async function MediaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className="main-global">
        <div className="header-global">
          <Header />
        </div>
        <MediaSection showAll={true} lang={lang} />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
