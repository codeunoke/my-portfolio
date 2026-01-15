
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const SkillsGrid: React.FC = () => {
  return (
    <div className="space-y-16">
      {SKILL_CATEGORIES.map((category, idx) => (
        <div key={idx} className="glass p-10 rounded-[2.5rem] border-white/5 group hover:border-cyan-500/20 transition-all">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-black text-white flex items-center gap-4">
              <span className="w-12 h-[2px] bg-cyan-500"></span>
              {category.name}
            </h3>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expertise Levels</span>
          </div>
          
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={category.skills} layout="vertical" margin={{ left: 0, right: 30 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 700 }}
                  width={140}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{ 
                    backgroundColor: '#020617', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                  itemStyle={{ color: '#22d3ee', fontWeight: 800 }}
                />
                <Bar dataKey="level" radius={[0, 20, 20, 0]} barSize={20}>
                  {category.skills.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={idx === 0 ? '#06b6d4' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
