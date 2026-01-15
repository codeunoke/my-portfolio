import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

interface SkillProficiency {
  name: string;
  level: number;
  category: string;
}

interface SkillsVisualizationProps {
  skills: SkillProficiency[];
  chartType?: 'bar' | 'line';
}

const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({ skills, chartType = 'bar' }) => {
  const data = useMemo(() => {
    return skills.map(skill => ({
      name: skill.name.split('(')[0].trim(),
      level: skill.level,
      category: skill.category,
      fullName: skill.name
    }));
  }, [skills]);

  const colors = {
    'Data Science & Analytics': '#06b6d4',
    'Full Stack Development': '#6366f1',
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-slate-900 border border-cyan-500/30 rounded-lg p-3 shadow-lg">
          <p className="text-cyan-400 font-bold text-sm">{payload[0].payload.fullName}</p>
          <p className="text-white font-bold">Proficiency: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  const ChartComponent = chartType === 'bar' ? (
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
      <XAxis 
        dataKey="name" 
        angle={-45}
        textAnchor="end"
        height={100}
        tick={{ fill: '#94a3b8', fontSize: 12 }}
      />
      <YAxis 
        domain={[0, 100]}
        tick={{ fill: '#94a3b8', fontSize: 12 }}
        label={{ value: 'Proficiency Level', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
      />
      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(34,211,238,0.1)' }} />
      <Bar 
        dataKey="level" 
        fill="#06b6d4" 
        radius={[8, 8, 0, 0]}
        animationDuration={800}
      >
        {data.map((entry, index) => (
          <Bar key={`bar-${index}`} dataKey="level" fill={colors[entry.category as keyof typeof colors] || '#06b6d4'} />
        ))}
      </Bar>
    </BarChart>
  ) : (
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
      <XAxis 
        dataKey="name" 
        angle={-45}
        textAnchor="end"
        height={100}
        tick={{ fill: '#94a3b8', fontSize: 12 }}
      />
      <YAxis 
        domain={[0, 100]}
        tick={{ fill: '#94a3b8', fontSize: 12 }}
        label={{ value: 'Proficiency Level', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend wrapperStyle={{ paddingTop: '20px' }} />
      <Line 
        type="monotone" 
        dataKey="level" 
        stroke="#06b6d4" 
        strokeWidth={3}
        dot={{ fill: '#06b6d4', r: 5 }}
        activeDot={{ r: 7 }}
        name="Proficiency Level"
        animationDuration={800}
      />
    </LineChart>
  );

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height={400}>
        {ChartComponent}
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsVisualization;
