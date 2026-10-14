import type { Metadata } from 'next';
import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CasesSection from '../../../components/CasesSection/CasesSection';

import { buildPageMetadata } from '../../../utils/seo';

const i18nNamespaces = ['common'];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { t } = await initTranslations(lang, i18nNamespaces);

  return buildPageMetadata({
    lang,
    path: 'cases',
    title: t('seo.cases_title'),
    description: t('seo.cases_description'),
  });
}

export default async function CasesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { resources } = await initTranslations(lang, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={lang} resources={resources}>
      <main className='main-global'>
        <div className='header-global'>
          <Header />
        </div>
        <CasesSection showAll={true} lang={lang} />
        <Footer lang={lang} />
      </main>
    </TranslationsProvider>
  );
}
