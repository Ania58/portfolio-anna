import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'

export default function Nav() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border rounded px-3 py-1"
      >
        Skip to content
      </a>

      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <a href="/" className="font-bold text-lg">Anna Heliasz</a>

        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:underline">{t('nav.projects')}</a>
          <a href="#about" className="hover:underline">{t('nav.about')}</a>
          <a href="#contact" className="hover:underline">{t('nav.contact')}</a>
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  )
}
