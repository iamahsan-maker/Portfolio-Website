import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowUpRight, Check, X, Code, ExternalLink, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'UI', 'Branding', 'Development', 'Mobile', 'Web'];

  // Filter and Search logic
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesQuery =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="portfolio"
      className="py-24 bg-brand-bg transition-colors duration-500 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
              <Code size={11} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">MY CRAFTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-brand-text dark:text-white">
              Selected Projects & <br />
              <span className="text-accent">Interactive Showcases</span>
            </h2>
          </div>
          
          {/* Search bar & Filter trigger info */}
          <div className="relative w-full lg:max-w-xs">
            <input
              type="text"
              placeholder="Search by tech (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-xs bg-brand-card border border-brand-border rounded-full shadow-sm focus:outline-none focus:border-accent text-brand-text dark:text-white transition-all duration-300"
            />
            <Search className="absolute left-3.5 top-3.5 text-brand-dark-gray/40 dark:text-white/30" size={14} />
          </div>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-black/5 dark:border-white/5 pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm cursor-pointer ${
                  isActive
                    ? 'text-black dark:text-black font-bold'
                    : 'text-brand-dark-gray/70 dark:text-white/70 bg-brand-card border border-brand-border hover:border-accent hover:text-accent'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePortfolioCategory"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Pinterest-Inspired Creative Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Create layout variance: make first and third project taller on large viewports (Pinterest style)
              const isTaller = index === 0 || index === 2 || index === 5;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative bg-brand-card rounded-[2rem] overflow-hidden border border-brand-border shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between ${
                    isTaller ? 'lg:row-span-2 lg:min-h-[500px]' : 'lg:min-h-[380px]'
                  }`}
                  id={`project-card-${project.id}`}
                >
                  {/* Image container */}
                  <div className="relative w-full overflow-hidden aspect-[4/3] flex-grow">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6" />
                    
                    {/* Floating year / category tags */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-[9px] font-mono text-accent uppercase tracking-widest font-semibold border border-white/10">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-[9px] font-mono text-white/80 uppercase tracking-widest border border-white/10">
                        {project.year}
                      </span>
                    </div>

                    {/* View project floating overlay action button */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex items-center space-x-2 bg-accent text-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Text descriptions */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-text dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-brand-dark-gray/60 dark:text-white/40 font-sans leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech details */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-border">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-black/[0.03] dark:bg-white/5 rounded text-[9px] font-mono text-brand-dark-gray/80 dark:text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-black/[0.03] dark:bg-white/5 rounded text-[9px] font-mono text-brand-dark-gray/40">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Handler */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-brand-card rounded-[2rem] border border-dashed border-brand-border">
            <SlidersHorizontal size={32} className="mx-auto text-brand-dark-gray/30 mb-4" />
            <h3 className="text-lg font-bold">No projects matched your search</h3>
            <p className="text-xs text-brand-dark-gray/50 max-w-sm mx-auto mt-1">
              Try choosing another category, looking for "React", or clearing your search keywords.
            </p>
          </div>
        )}

      </div>

      {/* Project Case Study Detailed Popup Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-brand-card w-full max-w-3xl rounded-[2.5rem] overflow-hidden border border-brand-border shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/80 text-white hover:bg-accent hover:text-black transition-colors duration-300 z-10"
                aria-label="Close project modal"
              >
                <X size={16} />
              </button>

              {/* Modal Banner Graphic */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-8 right-8 text-white">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-accent uppercase tracking-widest font-semibold mb-1">
                    <span>{activeProject.category}</span>
                    <span>•</span>
                    <span>{activeProject.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-black leading-tight">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Content body */}
              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">Overview & Goals</h4>
                  <p className="text-sm text-brand-dark-gray/80 dark:text-white/70 leading-relaxed font-sans">
                    {activeProject.longDescription || activeProject.description}
                  </p>
                </div>

                {/* Simulated case metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-y border-brand-border">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-gray/40 dark:text-white/40">Role</span>
                    <div className="text-xs font-bold text-brand-text dark:text-white">Lead UI/UX Developer</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-gray/40 dark:text-white/40">Engagement</span>
                    <div className="text-xs font-bold text-brand-text dark:text-white">Full-cycle Delivery</div>
                  </div>
                  <div className="space-y-1 col-span-2 md:col-span-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-dark-gray/40 dark:text-white/40">Impact metrics</span>
                    <div className="text-xs font-bold text-accent">+45% conversion score</div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono text-brand-dark-gray/50 dark:text-white/40 uppercase tracking-wider">Built with:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-xs font-mono text-brand-dark-gray/80 dark:text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action triggers */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-accent dark:hover:bg-accent dark:hover:text-black transition-colors duration-300 shadow-md"
                  >
                    <span>Visit Live Demo</span>
                    <ExternalLink size={12} className="ml-2" />
                  </a>
                  <button
                    onClick={() => {
                      alert(`Inquiring about case documentation for: ${activeProject.title}`);
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-transparent border border-black/10 dark:border-white/15 text-brand-dark-gray dark:text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    <span>View Technical Specs</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
