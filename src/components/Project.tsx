import { useTranslation } from 'react-i18next'
import { archiveProjects } from '../data/archive'
import ProjectItemCompact from './ProjectItemCompact'

export default function Project() {
  const { t } = useTranslation()

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center">
        {t('sections.archive')}
      </h2>
      <p className="mt-2 mb-6 text-center text-sm text-slate-700">
        {t('archive.intro')}
      </p>

      <ul className="mx-auto max-w-4xl space-y-2">
        {archiveProjects.map((project) => (
          <ProjectItemCompact key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}


