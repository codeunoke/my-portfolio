import React, { useState } from 'react';
import SkillsGrid from '../components/SkillsGrid';
import SkillsVisualization from '../components/SkillsVisualization';
import { BarChart3, LineChart as LineChartIcon } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const AboutPage: React.FC = () => {
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  // Flatten skills for visualization
  const allSkills = SKILL_CATEGORIES.flatMap(category =>
    category.skills.map(skill => ({
      name: skill.name,
      level: skill.level,
      category: category.name
    }))
  );

  return (
    <div className="min-h-screen py-20 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
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

        {/* Skills Visualization Section */}
        <div className="space-y-8">
          <div>
            <span className="inline-block text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
              Proficiency Metrics
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
              Skill Proficiency Overview
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-8"></div>
            <p className="text-slate-400 text-lg max-w-2xl">
              A comprehensive view of my technical proficiency levels across different domains and technologies
            </p>
          </div>

          {/* Chart Type Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setChartType('bar')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                chartType === 'bar'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Bar Chart
            </button>
            <button
              onClick={() => setChartType('line')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                chartType === 'line'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              <LineChartIcon className="w-5 h-5" />
              Line Chart
            </button>
          </div>

          {/* Visualization */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <SkillsVisualization skills={allSkills} chartType={chartType} />
          </div>

          {/* Skill Categories Legend */}
          <div className="grid md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${idx === 0 ? 'bg-cyan-500' : 'bg-indigo-500'}`}></div>
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${idx === 0 ? 'bg-cyan-500' : 'bg-indigo-500'}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-cyan-400 font-bold text-xs w-8 text-right">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .glass-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
        `
      }} />
    </div>
  );
};

export default AboutPage;