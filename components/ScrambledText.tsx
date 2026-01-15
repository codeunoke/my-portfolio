
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  enableHover?: boolean;
  glowColor?: string;
  glowIntensity?: number;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 150,
  duration = 0.8,
  speed = 0.4,
  scrambleChars = '!@#$%^&*()_+{}:"<>?|',
  className = '',
  style = {},
  children,
  enableHover = true,
  glowColor = '#22d3ee',
  glowIntensity = 1
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLElement[]>([]);
  const charDataRef = useRef<Map<HTMLElement, { original: string; isScrambling: boolean }>>(new Map());

  useEffect(() => {
    if (!rootRef.current || !enableHover) return;

    const p = rootRef.current.querySelector('p');
    if (!p) return;

    // Clear and rebuild
    const text = p.innerText;
    p.innerHTML = '';
    const chars = text.split('').map(char => {
      const span = document.createElement('span');
      span.className = 'char';
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.innerText = char;
      span.dataset.content = char;
      p.appendChild(span);
      
      charDataRef.current.set(span, {
        original: char,
        isScrambling: false
      });
      
      return span;
    });
    charsRef.current = chars;

    const handleMove = (e: PointerEvent) => {
      charsRef.current.forEach(c => {
        const rect = c.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;
        
        const dx = e.clientX - charCenterX;
        const dy = e.clientY - charCenterY;
        const dist = Math.hypot(dx, dy);
        const charData = charDataRef.current.get(c);

        if (!charData) return;

        if (dist < radius && !charData.isScrambling) {
          const intensity = 1 - dist / radius;
          
          // Scramble with enhanced effects
          if (Math.random() < 0.25 * intensity) {
            charData.isScrambling = true;
            
            // Animate scrambling
            let scrambleCount = 0;
            const maxScrambles = Math.ceil(5 * intensity);
            
            const scrambleInterval = setInterval(() => {
              const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              c.innerText = randomChar;
              scrambleCount++;
              
              if (scrambleCount >= maxScrambles) {
                clearInterval(scrambleInterval);
                c.innerText = charData.original;
                charData.isScrambling = false;
              }
            }, (duration * 1000) / (maxScrambles + 1));
            
            // Apply glow effect
            gsap.to(c, {
              textShadow: `0 0 ${10 * glowIntensity}px ${glowColor}, 0 0 ${20 * glowIntensity}px ${glowColor}80`,
              color: glowColor,
              duration: duration * intensity * 0.5,
              ease: 'power2.out',
            });
            
            // Return to normal
            gsap.to(c, {
              textShadow: '0 0 0px transparent',
              color: 'inherit',
              duration: duration * intensity * 0.5,
              delay: duration * intensity * 0.5,
              ease: 'power2.in'
            });
            
            // Add slight scale animation
            gsap.to(c, {
              scale: 1.1,
              duration: duration * intensity * 0.3,
              ease: 'back.out'
            });
            
            gsap.to(c, {
              scale: 1,
              duration: duration * intensity * 0.3,
              delay: duration * intensity * 0.3,
              ease: 'back.in'
            });
          }
        }
      });
    };

    const el = rootRef.current;
    if (enableHover) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
      charDataRef.current.clear();
    };
  }, [radius, duration, speed, scrambleChars, enableHover, glowColor, glowIntensity]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
};

export default ScrambledText;
