import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CasesSection from '../../../components/CasesSection/CasesSection';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);
  
  const title = t('header.cases', { defaultValue: 'Кейсы' }) + ' | Dushanbe Soft';
  const description = t('seo.cases_description', { defaultValue: 'Примеры выполненных проектов и кейсов Dushanbe Soft.' });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dushanbesoft.tj';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}/cases`,
    },
    alternates: {
      canonical: `${siteUrl}/${lang}/cases`,
      languages: {
        'tg': `${siteUrl}/tj/cases`,
        'ru': `${siteUrl}/ru/cases`,
        'en': `${siteUrl}/en/cases`,
        'x-default': `${siteUrl}/ru/cases`,
      },
    },
  };
}

export default async function CasesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t, resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className='main-global'>
        <div className='header-global'>
          <Header />
        </div>
        <CasesSection showAll={true} lang={lang} />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
