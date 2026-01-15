
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { View } from '../App';

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
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  onNavigate,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  pillColor = 'rgba(34, 211, 238, 0.1)',
  hoveredPillTextColor = '#020617',
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? '#94a3b8';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        // Calculation for the covering circle radius based on the button dimensions
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 20), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);

    // Initial Load Animation
    const logoEl = logoRef.current;
    const navItemsEl = navItemsRef.current;
    if (logoEl) gsap.from(logoEl, { scale: 0, duration: 0.6, ease });
    if (navItemsEl) gsap.from(navItemsEl, { width: 0, opacity: 0, duration: 0.8, ease, delay: 0.2 });

    return () => window.removeEventListener('resize', layout);
  }, [items, ease]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.play();
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.reverse();
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
      overwrite: 'auto',
      onComplete: () => gsap.set(img, { rotate: 0 })
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, { opacity: 0, y: 10, duration: 0.2, onComplete: () => gsap.set(menu, { visibility: 'hidden' }) });
      }
    }
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor
  } as React.CSSProperties;

  return (
    <div className="pill-nav-container fixed top-6 left-0 right-0 z-[150] flex justify-center pointer-events-none px-6">
      <nav className={`pill-nav glass ${className} pointer-events-auto`} style={cssVars}>
        <a
          className="pill-logo"
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
        >
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-black text-xs overflow-hidden">
             <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-cover" />
          </div>
        </a>

        <div className="pill-nav-items hidden md:flex" ref={navItemsRef}>
          <ul className="pill-list flex items-center gap-2 m-0 p-0 list-none">
            {items.map((item, i) => (
              <li key={item.href}>
                <button
                  onClick={() => onNavigate(item.href)}
                  className={`pill relative overflow-hidden flex items-center justify-center px-5 py-2.5 rounded-full transition-all duration-300 group ${activeHref === item.href ? 'is-active' : ''}`}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span
                    className="hover-circle absolute left-1/2 rounded-full bg-cyan-400 z-0 pointer-events-none"
                    ref={el => { circleRefs.current[i] = el; }}
                  />
                  <span className="label-stack relative z-10 flex flex-col items-center">
                    <span className="pill-label font-bold text-[13px] tracking-tight transition-colors duration-300 text-slate-400 group-[.is-active]:text-cyan-400">
                      {item.label}
                    </span>
                    <span className="pill-label-hover absolute font-black text-[13px] tracking-tight text-slate-950 pointer-events-none">
                      {item.label}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button md:hidden flex flex-col gap-1 w-8 h-8 items-center justify-center bg-white/5 rounded-lg border border-white/10"
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
        >
          <span className="hamburger-line w-5 h-[2px] bg-white rounded-full" />
          <span className="hamburger-line w-5 h-[2px] bg-white rounded-full" />
        </button>
      </nav>

      <div className="mobile-menu-popover md:hidden absolute top-20 left-6 right-6 glass rounded-3xl p-6 border border-white/10" ref={mobileMenuRef} style={{ visibility: 'hidden' }}>
        <ul className="mobile-menu-list flex flex-col gap-2 p-0 m-0 list-none">
          {items.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => { onNavigate(item.href); toggleMobileMenu(); }}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold text-lg transition-all ${activeHref === item.href ? 'bg-cyan-500 text-slate-950' : 'text-white hover:bg-white/5'}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .pill-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0.75rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .pill-logo {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .pill-logo:hover {
          transform: scale(1.1);
        }
        .label-stack {
          height: 1.25rem;
          overflow: hidden;
        }
        .pill.is-active .pill-label {
          color: #22d3ee;
        }
      `}</style>
    </div>
  );
};

export default PillNav;
