import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowUpRight, Award } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data';

export default function Blog() {
  const triggerSimulatedRead = (title: string) => {
    alert(`Opening Reader Mode for article: "${title}". (Simulation only)`);
  };

  return (
    <section
      id="blog"
      className="py-24 bg-brand-bg text-brand-text dark:text-white transition-colors duration-500 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
              <BookOpen size={11} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">THOUGHT LEADERSHIP</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
              Latest Editorial <br />
              <span className="text-accent">& Thought Pieces</span>
            </h2>
          </div>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-sm text-sm font-sans leading-relaxed">
            Exploring intersections between layout geometries, tactile animations, design systems engineering, and brand psychology.
          </p>
        </div>

        {/* 3 Featured Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 70, damping: 15, delay: idx * 0.1 }}
              className="group relative bg-brand-card rounded-[2rem] overflow-hidden border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`blog-card-${post.id}`}
            >
              <div>
                
                {/* Thumbnail Screen */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Floating category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-full text-[9px] font-mono text-accent uppercase tracking-widest font-semibold border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content body descriptors */}
                <div className="p-6 md:p-8 space-y-4">
                  
                  {/* Date and Reading Time meta bar */}
                  <div className="flex items-center space-x-4 text-[10px] font-mono text-brand-dark-gray/50 dark:text-white/40 uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-extrabold text-brand-text dark:text-white leading-snug group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 leading-relaxed font-sans">
                    {post.summary}
                  </p>

                </div>

              </div>

              {/* Action Button footer */}
              <div className="p-6 md:p-8 pt-0">
                <button
                  onClick={() => triggerSimulatedRead(post.title)}
                  className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider py-3 border-t border-brand-border text-brand-text dark:text-white group-hover:text-accent font-bold transition-all duration-300 cursor-pointer"
                >
                  <span>Read Article</span>
                  <div className="p-1 rounded-full border border-brand-border group-hover:border-accent transition-colors duration-300">
                    <ArrowUpRight size={12} />
                  </div>
                </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
