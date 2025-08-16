import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language?.split('-')[0] ?? 'en').toLowerCase()
  const locale = lang === 'pl' ? 'pl_PL' : lang === 'es' ? 'es_ES' : 'en_US'

  useSEO({
    title: t('hero.title'),
    description: t('hero.subtitle'),
    url: 'https://anna-dev.netlify.app/',
    image: 'https://anna-dev.netlify.app/images/logo.png', 
    locale,
  })

  return (
    <main id="main" className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <section id="projects" className="space-y-8">
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center
                     bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-600
                     bg-clip-text text-transparent"
        >
          {t('sections.projects', 'Projects')}
        </h2>

        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  )
}

