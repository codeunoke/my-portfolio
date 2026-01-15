
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from '../components/ProjectModal';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-32 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-7xl md:text-9xl font-black mb-6 text-white tracking-tighter leading-none">WORKS</h2>
            <p className="text-xl text-slate-400 font-medium">Selected cases spanning data science and engineering.</p>
          </div>
          <div className="glass px-8 py-4 rounded-full flex gap-10">
             <div className="text-center">
               <div className="text-2xl font-bold text-white">12+</div>
               <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Shipped</div>
             </div>
             <div className="text-center">
               <div className="text-2xl font-bold text-white">4</div>
               <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Industry</div>
             </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/10] relative rounded-[3rem] overflow-hidden mb-10 bg-slate-900 border border-white/5 transition-all duration-700 group-hover:border-cyan-500/20 group-hover:shadow-[0_40px_100px_-20px_rgba(34,211,238,0.15)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-cyan-500 text-slate-950 px-3 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-4xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors uppercase">{project.title}</h3>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed font-medium line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default ProjectsPage;
