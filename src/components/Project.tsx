import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Project() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
