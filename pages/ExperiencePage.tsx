import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, ChevronRight, ExternalLink, Sparkles, Target } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 container mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10% w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10% w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2.5 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Journey
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white tracking-tighter leading-tight">
                WORK
                <span className="block text-cyan-400 text-4xl md:text-5xl mt-2">Experience</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                Strategic contributions and professional growth across data-driven organizations
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 text-slate-500 text-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span>Current</span>
                </div>
                <div className="h-4 w-px bg-slate-700"></div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <span>Previous</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent hidden md:block"></div>
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx}
                className="group relative"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative">
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/3 top-6 -translate-x-1/2 hidden md:block">
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      idx === 0 
                        ? 'bg-cyan-500 border-cyan-500 animate-pulse shadow-lg shadow-cyan-500/20' 
                        : 'bg-slate-900 border-slate-700 group-hover:border-cyan-500'
                    }`}></div>
                  </div>

                  {/* Date/Company Section */}
                  <div className="w-full md:w-1/3 pl-0 md:pl-12">
                    <div className="sticky top-32">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-4 h-4 text-cyan-500" />
                        <span className="text-cyan-500 font-bold text-sm tracking-widest uppercase">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300 mb-2">
                        {exp.company}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="w-4 h-4 text-slate-500" />
                        <p className="text-slate-400 font-semibold uppercase tracking-tight text-sm">
                          {exp.role}
                        </p>
                      </div>
                      
                      <div className={`mt-6 transition-all duration-500 overflow-hidden ${
                        activeIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.slice(0, 3).map((skill, i) => (
                            <span 
                              key={i}
                              className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-400 px-3 py-1.5 rounded-full border border-cyan-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                          {exp.skills.length > 3 && (
                            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-white/5 to-white/10 text-slate-400 px-3 py-1.5 rounded-full border border-white/10">
                              +{exp.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-2/3">
                    <div className={`glass-card p-8 md:p-10 rounded-3xl border transition-all duration-500 transform group-hover:scale-[1.02] ${
                      idx === 0 
                        ? 'border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5' 
                        : 'border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] group-hover:border-cyan-500/20'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className="hidden md:block">
                          <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20">
                            <Briefcase className="w-6 h-6 text-cyan-400" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <ul className="space-y-5">
                            {exp.description.map((item, i) => (
                              <li 
                                key={i}
                                className="flex gap-4 text-slate-300 leading-relaxed font-medium group/item"
                              >
                                <span className="flex-shrink-0 mt-1.5">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 group-hover/item:scale-125 transition-transform"></div>
                                </span>
                                <span className="group-hover/item:text-slate-200 transition-colors">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mt-10 pt-8 border-t border-white/10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <span 
                                    key={i}
                                    className="text-xs font-bold uppercase tracking-wider bg-white/5 text-slate-400 px-3 py-1.5 rounded-lg border border-white/5 hover:bg-white/10 hover:text-slate-300 hover:border-white/10 transition-all cursor-default"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              
                              {exp.link && (
                                <a 
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-bold transition-colors group/link"
                                >
                                  Visit Project
                                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievement Highlight for Current Role */}
                    {idx === 0 && (
                      <div className="mt-6 flex items-center gap-3 text-sm text-cyan-400 font-bold animate-pulse">
                        <Sparkles className="w-4 h-4" />
                        <span>Current Position • Actively Contributing</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Looking to build something extraordinary?
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I bring this same level of dedication and expertise to every project.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40"
            >
              Start a Conversation
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .glass-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-in {
            animation: slideIn 0.6s ease-out forwards;
          }
        `
      }} />
    </div>
  );
};

export default ExperiencePage;