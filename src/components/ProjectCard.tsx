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
    <article className="rounded-2xl border p-4 shadow-sm bg-white">
      <header className="mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-slate-600">{value}</p>
      </header>

      {hasVideo ? (
        <div className="mb-3 overflow-hidden rounded-xl border">
          <video
            className="w-full h-auto"
            src={media!.video}
            controls
            preload="metadata"
            poster={media?.img} 
          />
        </div>
      ) : media?.img ? (
        <img
          src={media.img}
          alt={`${title} preview`}
          className="mb-3 w-full h-auto rounded-xl border"
          loading="lazy"
        />
      ) : null}

      <div className="mb-3 text-sm text-slate-700">
        <span className="font-medium">{t('project.stack', 'Tech stack')}:</span>{' '}
        {project.stack.join(' · ')}
      </div>

      {highlights.length > 0 && (
        <div className="mb-3">
          <h4 className="font-medium mb-1">{t('project.highlights')}</h4>
          <ul className="list-disc ml-5 text-slate-700">
            {highlights.map((h: string, i: number) => (
              <li key={`${project.id}-hl-${i}`}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {project.links.live && (
          <a className="underline" href={project.links.live} target="_blank" rel="noopener noreferrer">
            {t('project.live')}
          </a>
        )}
        {project.links.code.frontend && (
          <a
            className="underline"
            href={project.links.code.frontend}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('project.codeFrontend')}
          </a>
        )}
        {project.links.code.backend && (
          <a
            className="underline"
            href={project.links.code.backend}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('project.codeBackend')}
          </a>
        )}
        {note && <span className="text-xs text-slate-500">{note}</span>}
      </div>
    </article>
  )
}
