
import React from 'react';
import { View } from '../App';
import ScrambledText from '../components/ScrambledText';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col pt-32 md:pt-48 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full border border-cyan-500/10 bg-cyan-500/5 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for next-gen projects
          </div>
          
          <div className="relative mb-8">
            <ScrambledText className="text-[12vw] md:text-[8rem] font-black tracking-tighter text-white leading-[0.8] uppercase select-none">
              DATA
            </ScrambledText>
            <ScrambledText className="text-[12vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-glow leading-[0.8] uppercase select-none">
              ARCHITECT
            </ScrambledText>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-end mt-12">
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-xl">
              I translate <span className="text-white">complex datasets</span> into elegant <span className="text-white">digital products</span>. Currently engineering at Samco Security Services.
            </p>
            
            <div className="flex flex-wrap gap-4 md:justify-end">
              <button 
                onClick={() => onNavigate('projects')}
                className="group relative px-12 py-6 bg-cyan-500 text-slate-950 font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
              >
                Explore Work
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-12 py-6 glass text-white font-bold rounded-full transition-all hover:bg-white/5"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-32 border-y border-white/5 py-12 rotate-[-1deg] bg-slate-950 relative w-[110vw] left-[-5vw]">
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span className="text-5xl font-black text-white/5 uppercase">Data Science</span>
                <span className="text-5xl font-black text-cyan-500/20 uppercase">Full Stack</span>
                <span className="text-5xl font-black text-white/5 uppercase">Machine Learning</span>
                <span className="text-5xl font-black text-indigo-500/20 uppercase">React JS</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 mt-32 mb-20">
        <div className="grid md:grid-cols-3 gap-1 px-4 py-4 glass rounded-[3rem]">
          {[
            { label: "Kabarak University", val: "2017 - 2020", sub: "Alumni" },
            { label: "IBM Certified", val: "Data Analyst", sub: "Professional" },
            { label: "Samco Security", val: "Lead Analyst", sub: "Present" }
          ].map((item, i) => (
            <div key={i} className="p-10 border-r border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-2">{item.sub}</p>
              <h4 className="text-2xl font-bold text-white mb-1">{item.label}</h4>
              <p className="text-slate-500 font-medium">{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
