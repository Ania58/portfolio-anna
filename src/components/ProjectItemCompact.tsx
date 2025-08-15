import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import type { ArchiveProject } from '../data/archive'

export default function ProjectItemCompact({ project }: { project: ArchiveProject }) {
  const { t } = useTranslation()
  const [showAll, setShowAll] = useState(false)

  const baseKey = `archive.${project.id}` as const
  const title = t(`${baseKey}.title`, project.id)
  const value = t(`${baseKey}.value`, '')
  const note  = project.links?.noteKey ? t(project.links.noteKey) : undefined

  const stack = project.stack ?? []
  const max = 4
  const extra = Math.max(0, stack.length - max)
  const visibleStack = showAll ? stack : stack.slice(0, max)

  return (
    <li className="group rounded-xl border border-white/30 bg-white/40 backdrop-blur
                   px-4 py-3 shadow-sm hover:shadow-md transition">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          {project.media?.[0]?.img && (
            <img
              src={project.media[0].img}
              alt=""
              className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/40"
            />
          )}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full ring-1 ring-white/40 bg-white/50 uppercase tracking-wide">
                {project.kind}
              </span>
            </div>

            {value && <p className="text-sm text-slate-700/90">{value}</p>}

            {stack.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {visibleStack.map((tech, i) => (
                  <span
                    key={`${project.id}-t-${i}`}
                    className="text-xs px-2 py-0.5 rounded-full ring-1 ring-white/40 bg-white/50"
                  >
                    {tech}
                  </span>
                ))}

                {extra > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowAll(v => !v)}
                    aria-expanded={showAll}
                    className="text-xs px-2 py-0.5 rounded-full ring-1 ring-white/50 bg-white/60
                               hover:bg-white cursor-pointer focus:outline-none focus:ring"
                  >
                    {showAll
                      ? t('project.lessTech', 'Hide')
                      : t('project.moreTech', { count: extra, defaultValue: '+{{count}} more' })}
                  </button>
                )}
              </div>
            )}

            {note && (
              <p className="mt-2 text-xs text-slate-600">{note}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {t('project.live')}
            </a>
          )}
          {project.links?.code?.frontend && (
            <a
              href={project.links.code.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 rounded-md ring-1 ring-white/50 bg-white/60 hover:bg-white"
            >
              {t('project.codeFrontend')}
            </a>
          )}
          {project.links?.code?.backend && (
            <a
              href={project.links.code.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 rounded-md ring-1 ring-white/50 bg-white/60 hover:bg-white"
            >
              {t('project.codeBackend')}
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
