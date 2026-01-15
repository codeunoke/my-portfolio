
import React from 'react';
import { View } from '../App';
import { PROFILE } from '../constants';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-24 border-t border-white/5 mt-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-slate-950 font-black">GM</div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
                {PROFILE.name}
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
              Transforming complex data landscapes into intuitive software solutions. Engineering excellence from Nairobi to the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase() as View)} 
                    className="text-slate-500 hover:text-cyan-400 transition-colors font-semibold text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-semibold">
              <li><a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href={PROFILE.socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">X (Twitter)</a></li>
              <li><a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-slate-500 text-xs font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span className="text-white/20">MADE WITH PASSION IN KENYA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
