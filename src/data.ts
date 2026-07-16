import { Project, Skill, Service, Milestone, Testimonial, BlogPost, Award } from './types';

export const MADISON_PORTRAIT = 'https://i.ibb.co/m5ptP15Y/Whats-App-Image-2026-03-14-at-7-03-20-AM.jpg';
export const PROJECT_MOBILE = '/src/assets/images/portfolio_project_1_1784185979612.jpg';
export const PROJECT_WEB = '/src/assets/images/portfolio_project_2_1784185998304.jpg';
export const CASE_STUDY_BANNER = '/src/assets/images/case_study_banner_1784186018408.jpg';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'University Management Portal UI',
    category: 'UI',
    year: '2026',
    description: 'An elegant, intuitive dashboard portal interface for student administration and courses.',
    longDescription: 'Designed a high-fidelity visual workspace in Figma featuring responsive layouts, custom sidebar navigation, dark/light theme options, and streamlined course-tracking widgets.',
    technologies: ['Figma', 'UI/UX Design', 'Grid Layouts', 'Wireframing'],
    image: PROJECT_MOBILE,
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Bespoke Corporate Landing Page',
    category: 'Web',
    year: '2025',
    description: 'A responsive landing page built with modern semantic HTML and utility-first Tailwind CSS.',
    longDescription: 'Developed an interactive, speed-optimized corporate showcase page. Integrated smooth scroll states, custom responsive navigation, and balanced typographic hierarchies.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    image: PROJECT_WEB,
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Interactive Cricket Scoreboard Hub',
    category: 'Web',
    year: '2025',
    description: 'A dynamic frontend widget for tracking live stats and cricket run calculations.',
    longDescription: 'Built a interactive cricket run analyzer and scoreboard using vanilla JavaScript DOM controls and Tailwind CSS. Implemented localStorage for matching persistent match logs.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
    image: CASE_STUDY_BANNER,
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Personal Creative Portfolio Website',
    category: 'Web',
    year: '2026',
    description: 'Bespoke high-performance visual portfolio built with React and Framer Motion.',
    longDescription: 'Created an immersive personal portfolio app showcasing project archives, active skill bars, and a clean contact portal integrated with client-side state checks.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://picsum.photos/seed/aerospace/800/600',
    featured: false,
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    id: 'sk-1',
    name: 'HTML',
    category: 'Development',
    percentage: 95,
    description: 'Semantic markup structure, SEO optimized tags, and clean accessibility compliant element layouts.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'sk-2',
    name: 'CSS',
    category: 'Design',
    percentage: 92,
    description: 'Advanced responsive grids, Flexbox components, custom property variables, and keyframe animations.',
    iconName: 'Palette',
  },
  {
    id: 'sk-3',
    name: 'Javascript',
    category: 'Development',
    percentage: 85,
    description: 'ES6+ modern functions, dynamic DOM interaction, client state handlers, and async APIs.',
    iconName: 'Code',
  },
  {
    id: 'sk-4',
    name: 'Tailwind CSS',
    category: 'Development',
    percentage: 90,
    description: 'Utility-first fast design layouts, custom theme configurations, responsive prefix variables, and styles.',
    iconName: 'Wind',
  },
  {
    id: 'sk-5',
    name: 'Figma',
    category: 'Tools',
    percentage: 90,
    description: 'Vector UI structures, high-fidelity wireframing, component styles, and beautiful graphic prototypes.',
    iconName: 'Compass',
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'ser-1',
    title: 'Responsive Web Design',
    description: 'Creating high-fidelity web designs that scale perfectly on mobile, tablet, and desktop viewports, using modern layouts.',
    iconName: 'Globe',
    features: ['Modern Landing Pages', 'Custom Styling Systems', 'Creative Mobile Layouts', 'Clean visual hierarchy'],
  },
  {
    id: 'ser-2',
    title: 'Frontend Web Development',
    description: 'Translating Figma designs into pixel-perfect responsive front-end code with clean, semantic markup and fast load speeds.',
    iconName: 'Cpu',
    features: ['HTML5 & CSS3 structures', 'Tailwind CSS layouts', 'Vanilla JavaScript flow', 'Modular maintainable components'],
  },
  {
    id: 'ser-3',
    title: 'UI/UX Interactive Mockups',
    description: 'Building clean interactive wireframes and vector user interface mockups in Figma for startups and commercial applications.',
    iconName: 'Layers',
    features: ['Figma UI Systems', 'Responsive Wireframes', 'Interactive Prototypes', 'Asset Design & Guidelines'],
  },
  {
    id: 'ser-4',
    title: 'IT & Project Management Support',
    description: 'Utilizing ADP ITM training to coordinate account management systems, organize datasets, and optimize digital project workflows.',
    iconName: 'Sparkles',
    features: ['Database administration', 'IT Workflows & Systems', 'Account coordination', 'Structured problem solving'],
  }
];

export const MILESTONES_DATA: Milestone[] = [
  {
    id: 'mil-1',
    company: 'Riphah International University, Lahore',
    role: 'Associate Degree Program in IT & Management (ADP ITM)',
    duration: '2024 - 2026',
    description: 'Studied dual specializations: Web Technologies (Frontend development, databases) and Management (Account coordination, workflow administration). Gained deep technical expertise in interface construction and systems analysis.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Database Management', 'Management Sciences'],
  },
  {
    id: 'mil-2',
    company: 'Frontend & UI Practice Studio',
    role: 'Independent Web Developer & UI Designer',
    duration: '2025 - Present',
    description: 'Designed and coded multiple responsive web templates, customized widgets, and interactive landing pages. Perfected utility styles with Tailwind CSS, custom DOM scripts, and interactive mockup layouts.',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Figma'],
  },
  {
    id: 'mil-3',
    company: 'Riphah Academic Capstone Project',
    role: 'Frontend UI/UX Designer & Lead',
    duration: '2025 - 2026',
    description: 'Spearheaded the visual branding and user interface design for our academic portal capstone project. Constructed high-fidelity wireframes in Figma and built clean, modular HTML/CSS responsive pages.',
    technologies: ['Figma UI Design', 'CSS Grid', 'Tailwind CSS', 'Vanilla JS'],
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Prof. Muhammad Usman',
    role: 'Department Coordinator of ITM',
    company: 'Riphah International University',
    feedback: 'Ahsan is an exceptionally focused student. He possesses a strong, deliberate talent for combining clean frontend structure with systematic database management. His dedication to learning is exemplary.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 't-2',
    name: 'Haris Ali',
    role: 'Lead Capstone Developer',
    company: 'Academic Project Team',
    feedback: 'Ahsan spearheaded the user interface layout for our capstone portal. He translated complex user flows into beautiful, lightweight responsive pages that were incredibly intuitive to navigate.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 't-3',
    name: 'Behance Showcases',
    role: 'Interactive Design Critic',
    company: 'Creative Community Reviews',
    feedback: 'A delightful visual aesthetic! Ahsan’s design prototypes demonstrate a crisp, meticulous understanding of layouts, balanced spacing, modern color palettes, and typography.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200',
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building Lightweight Semantic Pages for Maximum SEO Score',
    category: 'Development',
    readTime: '4 min read',
    date: 'June 10, 2026',
    image: 'https://picsum.photos/seed/whitespace/600/400',
    summary: 'A comprehensive guide to structured HTML5 layout landmarks, alt text configurations, and fast page weight optimization.'
  },
  {
    id: 'blog-2',
    title: 'CSS Grid and Flexbox: Mastering Multi-Device Design layouts',
    category: 'Design & CSS',
    readTime: '6 min read',
    date: 'May 25, 2026',
    image: 'https://picsum.photos/seed/spring/600/400',
    summary: 'How to combine fluid fractional units, flex wraps, and CSS custom variables to achieve perfectly responsive visual portfolios.'
  },
  {
    id: 'blog-3',
    title: 'Designing Beautiful UI Component Systems in Figma',
    category: 'UI/UX Design',
    readTime: '5 min read',
    date: 'April 15, 2026',
    image: 'https://picsum.photos/seed/contrast/600/400',
    summary: 'Best practices for grid alignment, pixel-perfect margins, clean font hierarchies, and cohesive palette selections in modern prototyping.'
  }
];

export const AWARDS_DATA: Award[] = [
  {
    id: 'aw-1',
    title: 'Outstanding Capstone UI Presentation',
    organization: 'Riphah ITM Department',
    year: '2026',
    count: '1x',
  },
  {
    id: 'aw-2',
    title: 'Featured UI/UX Showcase Recognition',
    organization: 'Behance Creative Review',
    year: '2025',
    count: '2x',
  },
  {
    id: 'aw-3',
    title: 'Academic Excellence Honor list',
    organization: 'Riphah International University',
    year: '2025',
    count: '1x',
  },
  {
    id: 'aw-4',
    title: 'Responsive Web Design Certificate',
    organization: 'Online Professional Academy',
    year: '2025',
    count: '1x',
  }
];
