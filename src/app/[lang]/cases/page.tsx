import initTranslations from '../../i18n';
import TranslationsProvider from '../../../components/TranslationsProvider';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import CasesSection from '../../../components/CasesSection/CasesSection';

const i18nNamespaces = ['common'];

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
