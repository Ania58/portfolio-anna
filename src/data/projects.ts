export type ProjectBase = {
  id: 'sayright' | 'lolture' | 'eitheror'; 
  stack: string[];
  links: { live?: string; code: string; noteKey?: string }; 
  media: { img: string; video?: string }[];
  kind: 'featured' | 'archive' | 'case-study';
};