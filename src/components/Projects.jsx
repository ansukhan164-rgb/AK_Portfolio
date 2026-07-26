import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Archive, Layers, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';
import HologramCard from './ui/HologramCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 text-sci-cyan font-mono text-[10px] tracking-[0.4em] uppercase mb-6">
            <div className="w-12 h-px bg-sci-cyan/50" />
            <span className="bg-sci-black px-2">Quantum Archive</span>
            <div className="w-12 h-px bg-sci-cyan/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-sci-cyan via-sci-blue to-sci-purple">Repositories</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border
                ${filter === cat
                  ? 'bg-sci-cyan text-sci-black border-sci-cyan shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-sci-dark/40 text-gray-400 border-sci-border hover:border-sci-cyan/50'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <HologramCard className="p-1 rounded-sm overflow-hidden group">
                  <div className="relative p-6 bg-sci-black/40 rounded-sm h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-sci-dark rounded-sm text-sci-cyan group-hover:scale-110 transition-transform border border-sci-border">
                        <Archive className="w-6 h-6" />
                      </div>
                      <div className="flex gap-3">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sci-cyan transition-colors"><ExternalLink className="w-5 h-5" /></a>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-sci-cyan/60 border border-sci-cyan/20 px-2 py-1 rounded-sm">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-sci-cyan transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-8 flex-grow font-mono text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="px-2 py-1 rounded-sm bg-sci-dark text-[9px] font-black uppercase tracking-widest text-gray-500 border border-sci-border group-hover:border-sci-cyan/50 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
