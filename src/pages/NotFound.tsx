import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] ?? 'en').toLowerCase()
  const locale = lang === 'pl' ? 'pl_PL' : lang === 'es' ? 'es_ES' : 'en_US'

  useSEO({
    title: `${t('notFound.title')} — ${t('hero.title')}`,
    description: t('notFound.description'),
    url: 'https://anna-dev.netlify.app/404',
    image: 'https://anna-dev.netlify.app/images/logo.png',
    locale,
  })

  return (
    <section className="py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{t('notFound.title')}</h2>
      <p className="mb-6">{t('notFound.description')}</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {t('notFound.backHome')}
      </Link>
    </section>
  );
}
