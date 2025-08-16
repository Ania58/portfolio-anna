import { useTranslation } from 'react-i18next'
import { useSEO } from '../hooks/useSEO'

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language?.split('-')[0] ?? 'en').toLowerCase()
  const locale = lang === 'pl' ? 'pl_PL' : lang === 'es' ? 'es_ES' : 'en_US'

  useSEO({
    title: `${t('about.title')} — ${t('hero.title')}`,
    description: t('about.p1'),
    url: 'https://anna-dev.netlify.app/about',
    image: 'https://anna-dev.netlify.app/images/logo.png',
    locale,
  })

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('about.title', 'About')}</h2>

      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6 md:flex-row md:items-stretch">
        <img
          src="/images/about-me-photo.jpg"
          alt={t('about.photoAlt')}
          loading="lazy"
          className="w-56 h-auto max-w-[250px] md:w-72 md:max-w-[300px]
                    rounded-2xl object-cover shadow-md ring-1 ring-white/40
                    bg-white/40 backdrop-blur"
        />

        <article
          className="w-full rounded-2xl bg-gradient-to-br from-white/95 to-slate-50/90
                     p-6 md:p-8 shadow-sm ring-1 ring-black/5
                     transition-transform duration-300
                     motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.01]
                     hover:shadow-xl"
        >
          <p className="text-slate-700 leading-relaxed">{t('about.p1')}</p>
          <p className="text-slate-700 leading-relaxed mt-4">{t('about.p2')}</p>
          <p className="text-slate-700 leading-relaxed mt-4">{t('about.p3')}</p>
          <p className="text-slate-700 leading-relaxed mt-4">{t('about.p4')}</p>
          <p className="text-slate-700 leading-relaxed mt-4">{t('about.p5')}</p>
        </article>
      </div>
    </section>
  )
}
