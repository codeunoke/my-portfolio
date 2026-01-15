
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, idx) => (
        <div 
          key={idx} 
          className="group relative flex flex-col glass rounded-3xl overflow-hidden border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
          
          <div className="p-8 flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            
            <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
              Case Study 
              <span className="group-hover/btn:translate-x-1 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
