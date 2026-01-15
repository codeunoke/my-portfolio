
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-12">
      {EXPERIENCES.map((exp, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12 border-l-2 border-slate-800 group">
          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-slate-800 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-300"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-cyan-400 font-semibold">{exp.company}</p>
            </div>
            <div className="mt-2 md:mt-0 glass px-4 py-1.5 rounded-full text-sm font-mono text-slate-400 border-white/5">
              {exp.period}
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {exp.description.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                <span className="text-cyan-500 mt-1.5 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, i) => (
              <span key={i} className="text-xs bg-white/5 text-slate-300 px-3 py-1 rounded-lg border border-white/5">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
