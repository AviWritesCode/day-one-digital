import { useRef, useEffect, useState } from 'react';

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If it exits to the right (meaning we scrolled left), we reset it so it can animate again when we scroll right.
          // In a transformed container, the clientRect works relative to the viewport.
          if (entry.boundingClientRect.left > window.innerWidth * 0.3) {
             setIsVisible(false);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 100px 0px 0px' }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : 'opacity-0 translate-x-12 translate-y-4 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
