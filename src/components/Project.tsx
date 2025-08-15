import { useTranslation } from 'react-i18next'
import { archiveProjects } from '../data/archive'
import ProjectItemCompact from './ProjectItemCompact'

export default function Project() {
  const { t } = useTranslation()

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t('sections.projects', 'Projects')}
      </h2>

      <ul className="mx-auto max-w-4xl space-y-2">
        {archiveProjects.map(p => (
          <ProjectItemCompact key={p.id} project={p} />
        ))}
      </ul>
    </section>
  )
}


