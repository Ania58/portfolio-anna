import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './locales/pl/translations.json';
import en from './locales/en/translations.json';
import es from './locales/es/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: { pl: { translation: pl }, en: { translation: en }, es: { translation: es } },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;