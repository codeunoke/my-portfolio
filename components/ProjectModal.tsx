
import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, X } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
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
    setTimeout(onClose, 300);
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
        className={`relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] overflow-hidden glass rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-500 transform ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
          <button 
            onClick={handleClose}
            className="w-12 h-12 sm:w-12 sm:h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all active:scale-90 shadow-lg min-w-[44px] min-h-[44px]"
            aria-label="Close modal"
            title="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
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
            <div className="p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-start overflow-y-auto max-h-[95vh] md:max-h-[90vh]">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 bg-cyan-400/10 px-2 sm:px-3 py-1 rounded-md border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Title */}
              <h2 id="project-modal-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-none tracking-tighter">
                {project.title}
              </h2>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/10">
                {project.year && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Year</div>
                    <div className="text-white font-bold">{project.year}</div>
                  </div>
                )}
                {project.category && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Category</div>
                    <div className="text-white font-bold">{project.category}</div>
                  </div>
                )}
                {project.industry && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Industry</div>
                    <div className="text-white font-bold">{project.industry}</div>
                  </div>
                )}
                {project.role && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">My Role</div>
                    <div className="text-white font-bold">{project.role}</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="space-y-4 md:space-y-6 mb-8">
                <div>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {project.fullDescription && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Overview</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Impact Metrics */}
              {project.impact && project.impact.length > 0 && (
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-4">Key Impact</div>
                  <div className="grid grid-cols-1 gap-3">
                    {project.impact.map((metric, i) => (
                      <div key={i} className="text-sm text-slate-300 flex items-start gap-3">
                        <span className="text-cyan-400 font-bold text-lg mt-[-3px]">✓</span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="text-xs uppercase tracking-widest text-yellow-400 font-bold mb-4">Challenges Faced</div>
                  <div className="grid grid-cols-1 gap-3">
                    {project.challenges.map((challenge, i) => (
                      <div key={i} className="text-sm text-slate-300 flex items-start gap-3">
                        <span className="text-yellow-400 font-bold text-lg mt-[-3px]">⚡</span>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Solutions */}
              {project.solutions && project.solutions.length > 0 && (
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">Solutions Implemented</div>
                  <div className="grid grid-cols-1 gap-3">
                    {project.solutions.map((solution, i) => (
                      <div key={i} className="text-sm text-slate-300 flex items-start gap-3">
                        <span className="text-emerald-400 font-bold text-lg mt-[-3px]">→</span>
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 sm:px-8 py-4 sm:py-5 bg-cyan-500 text-slate-950 font-black rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform min-h-[44px]"
                  >
                    Live Demo
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 sm:px-8 py-4 sm:py-5 glass border border-white/10 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    View Code
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
