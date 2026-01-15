
import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="text-center max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-semibold tracking-wider uppercase">
        Available for new opportunities
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[1.1]">
        GODWIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600">MBABU</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
        {PROFILE.bio}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="#projects" 
          className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">View My Work</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
        <a 
          href="#about" 
          className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-2xl transition-all hover:bg-white/5 active:scale-95"
        >
          Read My Story
        </a>
      </div>

      <div className="mt-20 flex justify-center gap-12 text-slate-500">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">3+</div>
          <div className="text-xs uppercase tracking-widest">Years Exp</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">10+</div>
          <div className="text-xs uppercase tracking-widest">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">2+</div>
          <div className="text-xs uppercase tracking-widest">Global Certs</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
