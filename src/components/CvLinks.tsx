import { useTranslation } from 'react-i18next'

const CV_LINKS: Record<'en'|'pl'|'es', string> = {
  en: 'https://drive.google.com/file/d/1ubb-aOU3kIhIxERytsYqlK4eYV-y-DuB/view?usp=sharing',
  pl: 'https://drive.google.com/file/d/1LSlg3uDBOiBQs2nYAlxK0OsApKvw6bGA/view?usp=sharing',
  es: 'https://drive.google.com/file/d/1kteqJEzop3T6YxHtEK6Fl_KL7ky9IFv4/view?usp=sharing',
}

export default function CvLinks() {
  const { t, i18n } = useTranslation()
  const current = (i18n.language?.split('-')[0] ?? 'en') as 'en'|'pl'|'es'
  const href = CV_LINKS[current] || CV_LINKS.en
  const others = (['en','pl','es'] as const).filter(l => l !== current)

  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2
                   bg-gradient-to-r from-indigo-700 to-blue-600 text-white
                   hover:from-indigo-800 hover:to-blue-700 transition-colors"
      >
        📄 {t('cv.viewCurrent')}
      </a>

      <div className="text-sm text-slate-700 flex items-center gap-2">
        <span>{t('cv.otherLangs')}</span>
        <div className="flex gap-2">
          {others.map((lng, idx) => (
            <span key={lng} className="flex items-center gap-2">
              {idx > 0 && <span>·</span>}
              <a
                className="underline hover:no-underline"
                href={CV_LINKS[lng]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(`cv.lang.${lng}`)}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
