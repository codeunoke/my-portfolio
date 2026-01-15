import React, { useState } from 'react';
import { View } from '../App';
import { PROFILE } from '../constants';
import { 
  ChevronRight, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Heart, 
  ArrowUpRight,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Coffee
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: 'Home', view: 'home' as View },
    { label: 'About', view: 'about' as View },
    { label: 'Experience', view: 'experience' as View },
    { label: 'Projects', view: 'projects' as View },
    { label: 'Contact', view: 'contact' as View },
  ];

  const socialLinks = [
    { 
      label: 'LinkedIn', 
      url: PROFILE.socials.linkedin, 
      icon: <Linkedin className="w-4 h-4" />,
      color: 'hover:text-[#0A66C2]'
    },
    { 
      label: 'GitHub', 
      url: PROFILE.socials.github, 
      icon: <Github className="w-4 h-4" />,
      color: 'hover:text-white'
    },
    { 
      label: 'X/Twitter', 
      url: PROFILE.socials.x, 
      icon: <Twitter className="w-4 h-4" />,
      color: 'hover:text-[#1DA1F2]'
    },
    { 
      label: 'Instagram', 
      url: PROFILE.socials.instagram, 
      icon: <Instagram className="w-4 h-4" />,
      color: 'hover:text-[#E4405F]'
    },
  ];

  return (
    <footer className="relative py-20 px-4 border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-950/95 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20">
                  {PROFILE.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight">
                  {PROFILE.name}
                </h2>
                <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              Transforming complex data landscapes into intuitive software solutions. 
              Engineering data-driven excellence with precision and creativity.
            </p>
            
            {/* Contact Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span className="font-semibold">Get in Touch</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              Navigation
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => onNavigate(item.view)}
                    onMouseEnter={() => setHoveredLink(item.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-cyan-500 transition-all duration-300 ${
                      hoveredLink === item.label ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}></div>
                    <span className="font-medium">{item.label}</span>
                    <ArrowUpRight className={`w-3 h-3 transition-all duration-300 ${
                      hoveredLink === item.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                    }`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              Connect
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 text-slate-400 ${social.color} transition-all duration-300`}
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              Status
            </h4>
            <div className="space-y-6">
              <div className="glass-card p-4 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Available
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  Open for new projects and collaborations
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-2xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Response Time
                </div>
                <p className="text-sm text-slate-300 font-medium">
                  Typically replies within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
              <span>Made with passion</span>
            </div>
            <div className="h-4 w-px bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="h-4 w-px bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>Fueled by innovation</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              © {currentYear} {PROFILE.name}
            </span>
            <div className="hidden md:block text-xs text-slate-500">
              <span className="text-white/20">•</span>
              <span className="mx-2">All rights reserved</span>
              <span className="text-white/20">•</span>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 md:bottom-12 md:right-12 p-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-white/10 backdrop-blur-sm text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .glass-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `
      }} />
    </footer>
  );
};

export default Footer;
