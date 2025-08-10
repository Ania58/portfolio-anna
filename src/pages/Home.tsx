import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-10">
      <section id="projects" className="py-8">
        <h2 className="text-2xl font-semibold mb-2">{t('nav.projects')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
