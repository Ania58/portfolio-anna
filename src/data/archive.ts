export type ArchiveProject = {
  id: 'dashboard' | 'clothes-shop' | 'blog-web' | 'harry-potter' | 'doctor-who' | 'jobsync'
  kind: 'archive' | 'case-study'
  stack?: string[]
  links?: {
    live?: string
    code?: { frontend?: string; backend?: string }
    noteKey?: string 
  }
  media?: { img: string }[]
}

export const archiveProjects: ArchiveProject[] = [
  {
    id: 'dashboard',
    kind: 'archive',
    stack: ['HTML', 'CSS', 'JavaScript', 'WeatherAPI', 'LocalStorage'],
    links: {
        live: 'https://ania58.github.io/project-break-dashboard/',
        code: { frontend: 'https://github.com/Ania58/project-break-dashboard' },
        noteKey: 'archive.dashboard.note', 
    },
    media: [{ img: '/media/4-element-dashboard.jpg' }],
  },
  {
    id: 'clothes-shop',
    kind: 'archive',
    stack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Firebase Auth'],
    links: {
       live: 'https://backend-project-break-final.onrender.com', 
       code: { backend: 'https://github.com/Ania58/backend-project-break' },
       noteKey: 'archive.clothes-shop.note',
    },
    media: [{ img: '/media/clothes-shop.jpg' }], 
  },
  {
    id: 'blog-web',
    kind: 'archive',
    stack: ['Node', 'Express', 'MongoDB', 'EJS', 'Firebase Auth'],
    links: {
      live: 'https://blog-web-lk6u.onrender.com', 
      code: { backend: 'https://github.com/Ania58/Blog-Web' },
      noteKey: 'archive.blog-web.note',
    },
    media: [{ img: '/media/blog-web.jpg' }],
  },
  {
    id: 'harry-potter',
    kind: 'archive',
    stack: ['Node', 'Express', 'Axios', 'EJS', 'PotterDB API'],
    links: {
      live: 'https://harry-potter-world.onrender.com', 
      code: { backend: 'https://github.com/Ania58/Harry-Potter-API' },
      noteKey: 'archive.harry-potter.note',
    },
    media: [{ img: '/media/harry-potter.jpg' }],
  },
  {
    id: 'doctor-who',
    kind: 'archive',
    stack: ['Node', 'Express', 'Axios', 'EJS', 'Doctor Who API'],
    links: {
      live: 'https://doctor-who-world.onrender.com', 
      code: { backend: 'https://github.com/Ania58/DoctorWho-API' },
      noteKey: 'archive.doctor-who.note',
    },
    media: [{ img: '/media/doctor-who.jpg' }], 
  },
  {
    id: 'jobsync',
    kind: 'archive',
    stack: ['React', 'Tailwind', 'Context API', 'Axios', 'Node', 'Express', 'PostgreSQL'],
    links: {
      live: 'https://jobsyncnet.netlify.app', 
      code: { frontend: 'https://github.com/Ania58/job-tracker-frontend', backend: 'https://github.com/Ania58/job-tracker-backend' },
      noteKey: 'archive.jobsync.note',
    },
    media: [{ img: '/media/jobsync.jpg' }],
  },
]
