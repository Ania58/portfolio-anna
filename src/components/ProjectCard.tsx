import { useTranslation } from 'react-i18next'
import type { ProjectBase } from '../data/projects'

type Props = { project: ProjectBase }

export default function ProjectCard({ project }: Props) {
  const { t } = useTranslation()
  const baseKey = `projects.${project.id}` as const

  const title = t(`${baseKey}.title`)
  const value = t(`${baseKey}.value`)
  const highlights =
    (t(`${baseKey}.highlights`, { returnObjects: true }) as unknown as string[]) ?? []
  const note = project.links.noteKey ? t(project.links.noteKey) : undefined

  const media = project.media?.[0]
  const hasVideo = Boolean(media?.video)

  return (
    <article
      className="rounded-3xl border border-slate-200 bg-white/95 shadow-sm
                 transition-all duration-300 p-4 sm:p-6
                 hover:shadow-xl hover:-translate-y-0.5"
    >
      <header className="mb-5 text-center">
        <h3 className="text-2xl font-semibold text-indigo-900">{title}</h3>
        <p className="mt-2 text-slate-700">{value}</p>
      </header>

      {hasVideo && (
        <div className="mb-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <video
            className="w-full h-auto transition-transform duration-300 hover:scale-[1.01]"
            src={media!.video}
            controls
            preload="metadata"
            poster={media?.img}
          />
        </div>
      )}

      <div className="mb-5">
        <div className="text-sm font-semibold text-indigo-800 mb-2">
          {t('project.stack', 'Tech stack')}
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          {project.stack.map((tech, i) => (
            <span
              key={`${project.id}-tech-${i}`}
              className="px-2.5 py-1 rounded-full text-xs font-medium
                         bg-indigo-50 text-indigo-900 ring-1 ring-indigo-200
                         transition-colors hover:bg-indigo-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {highlights.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-indigo-900">{t('project.highlights')}</h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {highlights.map((h: string, i: number) => (
              <div
                key={`${project.id}-hl-${i}`}
                className="flex items-start gap-2 rounded-xl px-3 py-2
                           bg-indigo-50 text-indigo-900 ring-1 ring-indigo-200
                           transition-colors hover:bg-indigo-100"
              >
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full
                                 bg-gradient-to-r from-indigo-600 to-blue-600" />
                <span className="text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
        {project.links.live && (
          <a
            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl text-sm font-medium
                       bg-gradient-to-r from-indigo-700 to-blue-600 text-white
                       transition-colors hover:from-indigo-800 hover:to-blue-700"
            href={project.links.live}
            target="_blank" rel="noopener noreferrer"
          >
            {t('project.live')}
          </a>
        )}
        {project.links.code.frontend && (
          <a
            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl text-sm font-medium
                       bg-slate-100 text-indigo-900 ring-1 ring-indigo-200
                       transition-colors hover:bg-slate-200"
            href={project.links.code.frontend}
            target="_blank" rel="noopener noreferrer"
          >
            {t('project.codeFrontend')}
          </a>
        )}
        {project.links.code.backend && (
          <a
            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl text-sm font-medium
                       bg-slate-100 text-indigo-900 ring-1 ring-indigo-200
                       transition-colors hover:bg-slate-200"
            href={project.links.code.backend}
            target="_blank" rel="noopener noreferrer"
          >
            {t('project.codeBackend')}
          </a>
        )}
      </div>

      {note && (
        <p className="mt-3 text-xs text-slate-500 text-center sm:text-left">{note}</p>
      )}
    </article>
  )
}

