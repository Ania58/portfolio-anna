import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'en', label: 'EN', title: 'English' },
  { code: 'pl', label: 'PL', title: 'Polski' },
  { code: 'es', label: 'ES', title: 'Español' },
]

export default function LanguageSwitch() {
  const { i18n } = useTranslation()
  const current = i18n.language?.split('-')[0] || 'en'

  useEffect(() => {
    document.documentElement.setAttribute('lang', current)
  }, [current])

  const change = async (lng: string) => {
    if (lng === current) return
    await i18n.changeLanguage(lng)
    // window.scrollTo({ top: window.scrollY })
  }

  return (
    <div className="flex gap-2" role="group" aria-label="Language switch">
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => change(l.code)}
          className={`px-2 py-1 rounded-md border text-sm cursor-pointer transition-colors duration-200
            ${current === l.code
              ? 'font-semibold bg-indigo-600 text-white border-indigo-600'
              : 'bg-white/60 text-slate-900 border-slate-300 hover:bg-white hover:text-slate-900'}`}
          aria-pressed={current === l.code}
          title={l.title}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
