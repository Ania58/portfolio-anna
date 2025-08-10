import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t } = useTranslation();

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
