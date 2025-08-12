import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pl from './locales/pl/translations.json'
import en from './locales/en/translations.json'
import es from './locales/es/translations.json'

type Lng = 'pl' | 'es' | 'en'
const STORAGE_KEY = 'i18nextLng'

function readSaved(): Lng | null {
  try {
  
    const old = localStorage.getItem('lang') as Lng | null
    const cur = localStorage.getItem(STORAGE_KEY) as Lng | null
    if (!cur && old && ['pl','es','en'].includes(old)) {
      localStorage.setItem(STORAGE_KEY, old)
      return old
    }
    if (cur && ['pl','es','en'].includes(cur)) return cur
  } catch {}
  return null
}

function detectByTimeZone(): Lng | null {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  if (tz === 'Europe/Warsaw') return 'pl'
  const esTz = new Set([
    'Europe/Madrid','Atlantic/Canary',
    'America/Mexico_City','America/Monterrey','America/Tijuana',
    'America/Guatemala','America/El_Salvador','America/Managua','America/Tegucigalpa',
    'America/Costa_Rica','America/Panama','America/Bogota','America/Lima',
    'America/La_Paz','America/Quito','America/Caracas','America/Santo_Domingo',
    'America/Puerto_Rico','America/Havana','America/Santiago','America/Buenos_Aires',
    'America/Montevideo','America/Asuncion'
  ])
  if (esTz.has(tz)) return 'es'
  return null
}

function detectInitialLang(): Lng {
  const saved = readSaved()
  if (saved) return saved
  const tz = detectByTimeZone()
  if (tz) return tz
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || ''
  if (nav.toLowerCase().startsWith('pl')) return 'pl'
  if (nav.toLowerCase().startsWith('es')) return 'es'
  return 'en'
}

const initialLng = detectInitialLang()

i18n.use(initReactI18next).init({
  resources: { pl: { translation: pl }, en: { translation: en }, es: { translation: es } },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})


i18n.on('languageChanged', (lng: string) => {
  try { localStorage.setItem(STORAGE_KEY, lng) } catch {}
  document.documentElement.setAttribute('lang', lng)
})


document.documentElement.setAttribute('lang', initialLng)

export default i18n
