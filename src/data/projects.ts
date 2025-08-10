export type ProjectBase = {
  id: 'sayright' | 'lolture' | 'eitheror'; 
  stack: string[];
  links: { 
    live?: string; 
    code: { 
      frontend?: string; backend?: string 
    };  
    noteKey?: string 
  }; 
  media: { 
    img: string; 
    video?: string 
  }[];
  kind: 'featured' | 'archive' | 'case-study';
};

export const projects: ProjectBase[] = [
  {
    id: 'sayright',
    stack: ['React', 'TypeScript', 'Node', 'MongoDB', 'Firebase', 'Cloudinary', 'i18next'],
    links: { 
      live: 'https://sayright.gottaspeak.com', 
      code: { 
        frontend: 'https://github.com/Ania58/Pronunciation-App-Frontend', 
        backend: 'https://github.com/Ania58/Pronunciation-App-Backend' 
      },
      noteKey: 'projects.sayright.note' 
    },
    media: [
      {
        img: '/media/sayright1.jpg', 
        video: '/media/SayRight.mp4' 
      }
    ],
    kind: 'featured',
  },
  {
    id: 'lolture',
    stack: ['React', 'Node/Express', 'MongoDB', 'Firebase'],
    links: { 
      live: 'https://lolture.netlify.app', 
      code: {
        frontend: 'https://github.com/Ania58/projectbreak-frontend-memeweb',
        backend: 'https://github.com/Ania58/projectbreak-memeweb'
      },
      noteKey: 'projects.lolture.note' 
    },
    media: [
      { 
        img: '/media/lolture1.jpg', 
        video: '/media/Lolture.mp4' 
      }
    ],
    kind: 'featured',
  },
  {
    id: 'eitheror',
    stack: ['React', 'Node/Express', 'MongoDB', 'Firebase', 'Tailwind'],
    links: { 
      live: 'https://eitheroryouchoose.netlify.app',
      code: {
        frontend: 'https://github.com/Ania58/EitherOr-Frontend',
        backend: 'https://github.com/Ania58/EitherOr-Backend'
      },
      noteKey: 'projects.eitheror.note' 
    },
    media: [
      { 
        img: '/media/eitheror1.jpg', 
        video: '/media/EitherOr.mp4' 
      }
    ],
    kind: 'featured',
  },
];