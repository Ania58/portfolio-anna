import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import LanguageSwitch from './LanguageSwitch'

export default function Nav() {
  const { t } = useTranslation()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:underline ${isActive ? 'font-semibold' : ''}`

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border rounded px-3 py-1"
      >
        Skip to content
      </a>

      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-lg">Anna Heliasz</Link>

        <div className="flex items-center gap-6">
          <NavLink to="/projects" className={linkClass}>{t('nav.projects')}</NavLink>
          <NavLink to="/about" className={linkClass}>{t('nav.about')}</NavLink>
          <NavLink to="/contact" className={linkClass}>{t('nav.contact')}</NavLink>
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  )
}

