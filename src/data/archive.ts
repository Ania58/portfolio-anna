export type ArchiveProject = {
  id: 'dashboard' | 'clothes-shop' | 'blog-web' | 'harry-potter' | 'doctor-who' | 'jobsync'
  stack?: string[]
  links?: {
    live?: string
    code?: { frontend?: string; backend?: string }
  }
  media?: { img: string }[]
}

export const archiveProjects: ArchiveProject[] = [
  {
    id: 'dashboard',
    stack: ['HTML', 'CSS', 'JavaScript', 'WeatherAPI', 'LocalStorage'],
    links: {
        live: 'https://ania58.github.io/project-break-dashboard/',
        code: { frontend: 'https://github.com/Ania58/project-break-dashboard' }
    },
    media: [{ img: '/media/4-element-dashboard.jpg' }],
  },
  {
    id: 'clothes-shop',
    stack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Firebase Auth'],
    links: {
       live: 'https://backend-project-break-final.onrender.com', 
       code: { backend: 'https://github.com/Ania58/backend-project-break' }
    },
    media: [{ img: '/media/clothes-shop.jpg' }], 
  },
  {
    id: 'blog-web',
    stack: ['Node', 'Express', 'MongoDB', 'EJS', 'Firebase Auth'],
    links: {
      live: 'https://blog-web-lk6u.onrender.com', 
      code: { backend: 'https://github.com/Ania58/Blog-Web' }
    },
    media: [{ img: '/media/blog-web.jpg' }],
  },
  {
    id: 'harry-potter',
    stack: ['Node', 'Express', 'Axios', 'EJS', 'PotterDB API'],
    links: {
      live: 'https://harry-potter-world.onrender.com', 
      code: { backend: 'https://github.com/Ania58/Harry-Potter-API' }
    },
    media: [{ img: '/media/harry-potter.jpg' }],
  },
  {
    id: 'doctor-who',
    stack: ['Node', 'Express', 'Axios', 'EJS', 'Doctor Who API'],
    links: {
      live: 'https://doctor-who-world.onrender.com', 
      code: { backend: 'https://github.com/Ania58/DoctorWho-API' }
    },
    media: [{ img: '/media/doctor-who.jpg' }], 
  },
  {
    id: 'jobsync',
    stack: ['React', 'Tailwind', 'Context API', 'Axios', 'Node', 'Express', 'PostgreSQL'],
    links: {
      live: 'https://jobsyncnet.netlify.app', 
      code: { frontend: 'https://github.com/Ania58/job-tracker-frontend', backend: 'https://github.com/Ania58/job-tracker-backend' }
    },
    media: [{ img: '/media/jobsync.jpg' }],
  },
]
