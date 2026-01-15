
import React from 'react';
import SkillsGrid from '../components/SkillsGrid';

const AboutPage: React.FC = () => {
  return (
    <div className="py-32 px-4 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">Story</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
              <p>
                My journey began at <span className="text-white">Kabarak University</span> (2017-2020), where I discovered the intersection of logic and creativity through Computer Science.
              </p>
              <p>
                As a data scientist with full-stack capabilities, I don't just analyze data; I build the tools that make data meaningful. My approach is rooted in the belief that software should be as intelligent as it is usable.
              </p>
              <p>
                Currently, at <span className="text-cyan-400">Samco Security Services</span>, I leverage Power BI and Python to drive operational efficiency. My <span className="text-white underline decoration-cyan-500">IBM Data Analyst</span> certification complements my engineering skills, providing a holistic perspective on product development.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6">
              <div className="glass p-8 rounded-3xl border-white/5">
                <div className="text-cyan-500 font-black text-2xl mb-1">2020</div>
                <div className="text-xs font-bold uppercase text-slate-500 tracking-widest">Graduated Kabarak</div>
              </div>
              <div className="glass p-8 rounded-3xl border-white/5">
                <div className="text-indigo-500 font-black text-2xl mb-1">IBM</div>
                <div className="text-xs font-bold uppercase text-slate-500 tracking-widest">Certified Analyst</div>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-black mb-8 text-white tracking-tight uppercase text-right">Mastery</h2>
             <SkillsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
