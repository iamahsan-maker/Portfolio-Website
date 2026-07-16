export interface Project {
  id: string;
  title: string;
  category: 'UI' | 'Branding' | 'Development' | 'Mobile' | 'Web';
  year: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Design' | 'Development' | 'Tools';
  percentage: number;
  description: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Milestone {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  count: string;
}
