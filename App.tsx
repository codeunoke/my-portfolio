
import React, { useState, useEffect } from 'react';
import PillNav from './components/PillNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Moon, Sun } from 'lucide-react';

export type View = 'home' | 'experience' | 'projects' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const dark = JSON.parse(savedMode);
      setIsDarkMode(dark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove('light-mode');
    } else {
      htmlElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const viewOrder: View[] = ['home', 'about', 'experience', 'projects', 'contact'];
      const currentIndex = viewOrder.indexOf(currentView);

      // Left/Up arrow - previous view
      if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
        e.preventDefault();
        navigateTo(viewOrder[currentIndex - 1]);
      }
      // Right/Down arrow - next view
      else if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < viewOrder.length - 1) {
        e.preventDefault();
        navigateTo(viewOrder[currentIndex + 1]);
      }
      // Home key
      else if (e.key === 'Home') {
        e.preventDefault();
        navigateTo('home');
      }
      // End key
      else if (e.key === 'End') {
        e.preventDefault();
        navigateTo('contact');
      }
      // Escape key - focus to nav
      else if (e.key === 'Escape') {
        document.querySelector('.pill-nav')?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView]);

  const navigateTo = (view: View) => {
    if (view === currentView) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 400);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'experience': return <ExperiencePage />;
      case 'projects': return <ProjectsPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  const navItems: { label: string; href: View }[] = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 relative overflow-hidden bg-grid selection:bg-cyan-500 ${
        isDarkMode
          ? 'bg-[#020617] text-slate-200'
        : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Visual background layers */}
      <div className={`fixed top-[-10%] left-[-10%] w-[60%] h-[60%] blur-[180px] rounded-full pointer-events-none opacity-40 ${
        isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-400/5'
      }`}></div>
      <div className={`fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] blur-[180px] rounded-full pointer-events-none opacity-30 ${
        isDarkMode ? 'bg-purple-500/5' : 'bg-purple-300/3'
      }`}></div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          isDarkMode
            ? 'bg-white/10 hover:bg-white/20 text-yellow-400 border border-white/10'
            : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border border-slate-300'
        }`}
        aria-label="Toggle dark mode"
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
      
      <PillNav 
        logo="https://api.dicebear.com/7.x/avataaars/svg?seed=Godwin" 
        items={navItems}
        activeHref={currentView}
        onNavigate={navigateTo}
      />
      
      <main className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4 scale-[0.99]' : 'opacity-100 page-transition'}`}>
        {renderView()}
      </main>

      <Footer onNavigate={navigateTo} />

      <style dangerouslySetInnerHTML={{
        __html: `
          html.light-mode {
            color-scheme: light;
          }

          html.light-mode body {
            background-color: #f8fafc;
            color: #1e293b;
          }

          html.light-mode .bg-\[#020617\] {
            background-color: #f8fafc;
          }

          html.light-mode .text-slate-200 {
            color: #1e293b;
          }

          html.light-mode .text-slate-300 {
            color: #334155;
          }

          html.light-mode .text-slate-400 {
            color: #64748b;
          }

          html.light-mode .text-slate-500 {
            color: #64748b;
          }

          html.light-mode .text-white {
            color: #0f172a;
          }

          html.light-mode .bg-white\/5 {
            background-color: rgba(15, 23, 42, 0.05);
          }

          html.light-mode .bg-white\/10 {
            background-color: rgba(15, 23, 42, 0.1);
          }

          html.light-mode .border-white\/10 {
            border-color: rgba(15, 23, 42, 0.1);
          }

          html.light-mode .border-white\/5 {
            border-color: rgba(15, 23, 42, 0.05);
          }

          html.light-mode .glass {
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.02) 100%);
          }
        `
      }} />
    </div>
  );
};

export default App;
