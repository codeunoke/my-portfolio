
import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      // Trigger entrance animation
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for exit animation
  };

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-8 transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] overflow-hidden glass rounded-[2rem] md:rounded-[3rem] border-white/10 shadow-2xl transition-all duration-500 transform ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >
        {/* Close Button - Sticky/Fixed relative to modal */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
          <button 
            onClick={handleClose}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all active:scale-90 shadow-lg"
            aria-label="Close Modal"
          >
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto max-h-[95vh] md:max-h-[90vh] scrollbar-hide">
          <div className="grid md:grid-cols-2">
            {/* Image Column */}
            <div className="h-56 sm:h-72 md:h-auto relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 md:bg-gradient-to-r md:from-transparent md:to-slate-950/10"></div>
            </div>

            {/* Info Column */}
            <div className="p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 bg-cyan-400/10 px-2 sm:px-3 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-none tracking-tighter uppercase">
                {project.title}
              </h3>
              
              <div className="space-y-4 md:space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                <p>{project.description}</p>
                <p className="text-slate-500 text-xs sm:text-sm">
                  This project represents a synthesis of technical engineering and analytical reasoning. It was developed to address specific operational challenges, utilizing a modern stack and data-first architecture.
                </p>
              </div>

              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href={project.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-slate-950 font-black rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  Live Preview
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <button 
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass border border-white/10 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/5 transition-all"
                >
                  Back to projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
