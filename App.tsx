
import React, { useState, useEffect } from 'react';
import PillNav from './components/PillNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export type View = 'home' | 'experience' | 'projects' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    <div className="min-h-screen bg-[#020617] text-slate-200 relative overflow-hidden bg-grid selection:bg-cyan-500 selection:text-slate-950">
      {/* Visual background layers */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none opacity-40"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/5 blur-[180px] rounded-full pointer-events-none opacity-30"></div>
      
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
    </div>
  );
};

export default App;
