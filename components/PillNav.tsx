import React, { useState } from 'react';
import { View } from '../App';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: View;
  ariaLabel?: string;
}

interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: NavItem[];
  activeHref: View;
  className?: string;
  onNavigate: (view: View) => void;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  onNavigate,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: View) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-[150] flex justify-center pointer-events-none px-3 sm:px-6">
      <nav 
        className={`glass pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-white/10 ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          aria-label="Go to home page"
          title="Home"
        >
          <img src={logo} alt={logoAlt} className="w-full h-full object-cover rounded-full" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 m-0 p-0 list-none">
          {items.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavigate(item.href)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 min-h-[44px] flex items-center ${
                  activeHref === item.href
                    ? 'bg-red-600/20 text-red-500 border border-red-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
                aria-current={activeHref === item.href ? 'page' : undefined}
                aria-label={item.ariaLabel || `Go to ${item.label}`}
                title={item.label}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:bg-white/5 transition-colors min-h-[44px] flex-shrink-0"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-slate-300" />
          ) : (
            <Menu className="w-5 h-5 text-slate-300" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 sm:top-20 left-3 right-3 sm:left-6 sm:right-6 glass rounded-2xl p-4 sm:p-6 border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-2 m-0 p-0 list-none">
            {items.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavigate(item.href)}
                  className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all min-h-[44px] flex items-center ${
                    activeHref === item.href
                      ? 'bg-red-600 text-white'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                  aria-current={activeHref === item.href ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PillNav;
