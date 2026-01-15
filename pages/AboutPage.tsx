import React from 'react';
import SkillsGrid from '../components/SkillsGrid';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Story */}
          <div className="space-y-12">
            <div>
              <span className="inline-block text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                Journey
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-none">
                My Story
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
              <div className="relative pl-6 border-l-2 border-cyan-500/30">
                <p className="mb-2">
                  My journey began at{' '}
                  <span className="font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                    Kabarak University
                  </span>{' '}
                  (2017-2020), where I discovered the intersection of logic and creativity through Computer Science.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-indigo-500/30">
                <p className="mb-2">
                  As a data scientist with full-stack capabilities, I don't just analyze data; I build the tools that 
                  make data meaningful. My approach is rooted in the belief that software should be as intelligent 
                  as it is usable.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-cyan-500/30">
                <p className="mb-2">
                  Currently, at{' '}
                  <span className="font-semibold text-cyan-400">Samco Security Services</span>, I leverage Power BI 
                  and Python to drive operational efficiency. My{' '}
                  <span className="font-semibold text-white underline decoration-cyan-500 decoration-2 underline-offset-4">
                    IBM Data Analyst
                  </span>{' '}
                  certification complements my engineering skills, providing a holistic perspective on product development.
                </p>
              </div>
            </div>

            {/* Milestones */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:border-cyan-500/30">
                <div className="text-cyan-400 font-black text-3xl mb-2 group-hover:text-cyan-300 transition-colors">2020</div>
                <div className="text-sm font-semibold uppercase text-slate-400 tracking-wider group-hover:text-slate-300 transition-colors">
                  Graduated Kabarak
                </div>
                <div className="text-xs text-slate-500 mt-2">B.Sc Computer Science</div>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:border-indigo-500/30">
                <div className="text-indigo-400 font-black text-3xl mb-2 group-hover:text-indigo-300 transition-colors">IBM</div>
                <div className="text-sm font-semibold uppercase text-slate-400 tracking-wider group-hover:text-slate-300 transition-colors">
                  Certified Analyst
                </div>
                <div className="text-xs text-slate-500 mt-2">Data Analytics Professional</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="text-right">
              <span className="inline-block text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight uppercase">
                Technical Mastery
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full ml-auto mb-8"></div>
              <p className="text-slate-400 text-lg mb-8 max-w-xl ml-auto">
                A comprehensive toolkit for building intelligent, data-driven solutions
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
              <SkillsGrid />
            </div>

            {/* Additional note */}
            <div className="text-right">
              <p className="text-sm text-slate-500 italic">
                Continuously expanding my skill set to tackle complex challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;