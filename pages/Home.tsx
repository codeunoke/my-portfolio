import React, { useEffect, useState } from 'react';
import { View } from '../App';
import ScrambledText from '../components/ScrambledText';
import { ChevronRight, Sparkles, Terminal } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const TECH_STACK = [
  { label: "Data Science", color: "text-cyan-500/25" },
  { label: "Full Stack", color: "text-indigo-500/25" },
  { label: "Machine Learning", color: "text-emerald-500/25" },
  { label: "React TS", color: "text-sky-500/25" },
  { label: "Python", color: "text-amber-500/25" },
  { label: "Power BI", color: "text-yellow-500/25" },
];

const MILESTONES = [
  { 
    label: "Kabarak University", 
    value: "2017 - 2020", 
    subtitle: "Computer Science Alumni",
    accent: "from-cyan-500 to-blue-500"
  },
  { 
    label: "IBM Certified", 
    value: "Data Analyst", 
    subtitle: "Professional Certification",
    accent: "from-indigo-500 to-purple-500"
  },
  { 
    label: "Samco Security", 
    value: "Lead Analyst", 
    subtitle: "Present Role",
    accent: "from-emerald-500 to-cyan-500"
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-24 md:pt-32 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Name Heading with Scrambled Text Effect */}
        <div className="mb-12 md:mb-16">
          <ScrambledText 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-cyan-400 leading-tight select-none"
            radius={180}
            duration={0.7}
            speed={0.4}
            enableHover={true}
            glowColor="#06B6D4"
            glowIntensity={0.8}
          >
            Godwin Mbabu
          </ScrambledText>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Availability Badge */}
          <div className={`inline-flex items-center gap-3 mb-12 px-4 py-2.5 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <Sparkles className="w-3 h-3" />
            Available for next-generation projects
          </div>
          
          {/* Hero Title */}
          <div className="relative mb-12">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <ScrambledText 
                className="text-[clamp(3rem,12vw,8rem)] font-black tracking-[-0.02em] text-white leading-[0.85] uppercase select-none"
              >
                DATA
              </ScrambledText>
              <div className="relative">
                <ScrambledText 
                  className="text-[clamp(3rem,12vw,8rem)] font-black tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 leading-[0.85] uppercase select-none relative z-10"
                >
                  ARCHITECT
                </ScrambledText>
                <div className="absolute inset-0 z-0 text-[clamp(3rem,12vw,8rem)] font-black tracking-[-0.02em] text-white/5 leading-[0.85] uppercase select-none blur-[2px]">
                  ARCHITECT
                </div>
              </div>
            </div>
            
            {/* Animated Cursor */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono animate-pulse">
                <Terminal className="w-4 h-4" />
                <span className="animate-blink">_</span>
              </div>
            </div>
          </div>
          
          {/* Subtitle and CTA */}
          <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-end mt-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                I transform <span className="text-white font-semibold relative before:absolute before:-inset-1 before:bg-cyan-500/20 before:rounded-lg before:-z-10">complex datasets</span> into{' '}
                <span className="text-white font-semibold relative before:absolute before:-inset-1 before:bg-indigo-500/20 before:rounded-lg before:-z-10">intuitive digital experiences</span>. 
                Currently engineering data solutions at Samco Security Services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:flex-col lg:flex-row md:justify-end">
              <button 
                onClick={() => onNavigate('projects')}
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 flex items-center justify-center gap-3"
              >
                <span>Explore Work</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 md:px-10 md:py-5 backdrop-blur-sm bg-white/5 border border-white/10 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95 group flex items-center justify-center gap-3"
              >
                <span>Let's Talk</span>
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-32 md:mt-48 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10"></div>
        <div className="border-y border-white/5 py-8 md:py-12 rotate-[-0.5deg] bg-gradient-to-r from-cyan-500/5 via-transparent to-indigo-500/5 relative w-[110vw] left-[-5vw]">
          <div className="flex overflow-hidden select-none">
            <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-16">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex gap-8 md:gap-16 items-center">
                  {TECH_STACK.map((tech, techIndex) => (
                    <div key={`${index}-${techIndex}`} className="flex items-center gap-8 md:gap-16">
                      <span className={`text-4xl md:text-5xl lg:text-6xl font-black ${tech.color} uppercase tracking-tighter transition-all duration-300 hover:scale-105 hover:opacity-40`}>
                        {tech.label}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-cyan-500/10"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`container mx-auto px-4 sm:px-6 mt-32 md:mt-48 mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {MILESTONES.map((milestone, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
                onClick={() => onNavigate('about')}
              >
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {milestone.subtitle}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {milestone.label}
                  </h4>
                  <p className="text-slate-400 font-medium">{milestone.value}</p>
                  <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center gap-4 text-slate-500 group cursor-pointer" onClick={() => onNavigate('about')}>
              <span className="text-sm font-medium tracking-widest uppercase group-hover:text-slate-400 transition-colors">Explore Journey</span>
              <div className="w-6 h-10 rounded-full border-2 border-slate-500/30 flex justify-center p-1 group-hover:border-slate-400/50 transition-all">
                <div className="w-1 h-3 rounded-full bg-slate-500/50 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default Home;