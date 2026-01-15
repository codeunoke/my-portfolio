
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperiencePage: React.FC = () => {
  return (
    <div className="py-32 px-4 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-4 text-white tracking-tighter">WORK</h2>
        <p className="text-xl text-slate-400 mb-20 font-medium">Professional path and industry contributions.</p>
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                  <span className="text-cyan-500 font-black text-sm tracking-widest uppercase block mb-2">{exp.period}</span>
                  <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.company}</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-tight text-sm">{exp.role}</p>
                </div>
                
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="glass p-8 rounded-3xl border-white/5">
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-4 text-slate-400 leading-relaxed font-medium">
                          <span className="text-cyan-500 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-white/5 text-slate-400 px-3 py-1 rounded-md border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
