import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Project() {
  const { t } = useTranslation()

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t('sections.projects', 'Projects')}
      </h2>
      <div className="flex flex-col gap-8 items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

