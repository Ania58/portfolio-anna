import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import LanguageSwitch from './LanguageSwitch'

export default function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative px-2 py-1 transition-all duration-200',
      'text-slate-900/80 hover:text-slate-900 hover:scale-110',
      isActive && 'font-semibold text-slate-900',
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <header className="sticky top-4 z-20">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white/90 border rounded px-3 py-1"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-5xl px-4">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/40 bg-white/50 backdrop-blur-md shadow-sm px-4 py-3">
          {/* Logo + imię */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <img src="/images/logo.png" alt="" className="h-7 w-7 rounded-md object-contain" />
            <span>Anna Heliasz</span>
          </Link>

          {/* Burger (mobile) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center rounded-lg border border-white/50 bg-white/40 px-3 py-2 backdrop-blur-sm text-slate-900/80 hover:text-slate-900"
            aria-controls="main-nav"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* DESKTOP: czysto, bez tła/ramki */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/projects" className={linkClass}>{t('nav.projects')}</NavLink>
            <NavLink to="/about" className={linkClass}>{t('nav.about')}</NavLink>
            <NavLink to="/contact" className={linkClass}>{t('nav.contact')}</NavLink>
            <LanguageSwitch />
          </div>
        </nav>

        {/* MOBILE: rozwijane menu jako „pigułka” pod nawigacją */}
        {open && (
          <div
            id="main-nav"
            className="md:hidden mt-2 rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-3
                       flex flex-col items-start gap-3"
          >
            <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
              {t('nav.projects')}
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              {t('nav.contact')}
            </NavLink>
            <LanguageSwitch />
          </div>
        )}
      </div>
    </header>
  )
}
