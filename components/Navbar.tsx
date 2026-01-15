
import React from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navItems: { id: View; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none">
      <div className="glass px-8 py-3 rounded-full flex items-center gap-10 shadow-2xl pointer-events-auto border border-white/10">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-xs">
            GM
          </div>
          <span className="hidden md:block font-bold text-sm tracking-tight text-white uppercase">Godwin Mbabu</span>
        </div>

        <div className="flex gap-1 md:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[13px] font-semibold transition-all px-3 py-1 rounded-full ${
                currentView === item.id 
                  ? 'text-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
