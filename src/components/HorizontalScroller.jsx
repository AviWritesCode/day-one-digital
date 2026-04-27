import { useRef, useEffect, useState } from 'react'

export default function HorizontalScroller({ children }) {
  const scrollRef = useRef(null)
  const bgRef = useRef(null)
  const progressRef = useRef(null)
  const [contentWidth, setContentWidth] = useState(0)
  const sectionsCacheRef = useRef({})

  useEffect(() => {
    const updateCache = () => {
      const cache = {}
      const sectionIds = ['hero', 'services', 'results', 'process', 'insights', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          cache[id] = { left: el.offsetLeft, right: el.offsetLeft + el.offsetWidth }
        }
      }
      sectionsCacheRef.current = cache
    }

    if (scrollRef.current) {
      setContentWidth(scrollRef.current.scrollWidth / 2)
      updateCache()
    }
    const handleResize = () => {
      if (scrollRef.current) {
        setContentWidth(scrollRef.current.scrollWidth / 2)
        updateCache()
      }
    }
    window.addEventListener('resize', handleResize)
    setTimeout(handleResize, 500)
    return () => window.removeEventListener('resize', handleResize)
  }, [children])

  useEffect(() => {
    if (!contentWidth) return;
    let targetX = 0;
    let currentX = 0;
    let rafId;

    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      targetX += delta;
      
      if (targetX >= contentWidth) {
        targetX -= contentWidth;
        currentX -= contentWidth;
      } else if (targetX < 0) {
        targetX += contentWidth;
        currentX += contentWidth;
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;
    const onTouchStart = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (tag === 'input' || tag === 'button' || tag === 'textarea' || tag === 'select') return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (tag === 'input' || tag === 'button' || tag === 'textarea' || tag === 'select') return;
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const deltaX = touchStartX - touchX;
      const deltaY = touchStartY - touchY;
      const delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
      
      targetX += delta * 1.2;
      
      if (targetX >= contentWidth) {
        targetX -= contentWidth;
        currentX -= contentWidth;
      } else if (targetX < 0) {
        targetX += contentWidth;
        currentX += contentWidth;
      }
      
      touchStartX = touchX;
      touchStartY = touchY;
    };

    let lastActiveSection = '';
    const sectionIds = ['hero', 'services', 'results', 'process', 'insights', 'contact'];

    const update = () => {
      currentX += (targetX - currentX) * 0.05;
      
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translate3d(-${currentX}px, 0, 0)`;
        
        // Parallax background: moves at 40% speed
        if (bgRef.current) {
          const bgX = (currentX * 0.4) % contentWidth;
          bgRef.current.style.transform = `translate3d(-${bgX}px, 0, 0)`;
          
          // Fade gradient in/out near hero (0 or contentWidth)
          const distToHero = Math.min(
            Math.abs(currentX % contentWidth),
            Math.abs(contentWidth - (currentX % contentWidth))
          );
          // Opaque at > 500px away, transparent at 0
          const opacity = Math.min(1, distToHero / 800);
          bgRef.current.style.opacity = 0.8 * opacity;
        }

        const checkX = (currentX + window.innerWidth / 2) % contentWidth;
        const wrappedCheckX = checkX < 0 ? checkX + contentWidth : checkX;

        let currentActive = lastActiveSection;
        for (const id of sectionIds) {
          const bounds = sectionsCacheRef.current[id];
          if (bounds) {
            if (wrappedCheckX >= bounds.left && wrappedCheckX < bounds.right) {
              currentActive = id;
              break;
            }
          }
        }

        if (currentActive !== lastActiveSection) {
          lastActiveSection = currentActive;
          window.dispatchEvent(new CustomEvent('activeSectionChange', { detail: currentActive }));
        }

        if (progressRef.current) {
          const normX = (currentX % contentWidth) / contentWidth;
          const p = normX < 0 ? 1 + normX : normX;
          progressRef.current.style.transform = `scaleX(${p})`;
        }
      }
      rafId = requestAnimationFrame(update);
    };

    const onJumpToSection = (e) => {
      const sectionId = e.detail;
      const element = document.getElementById(sectionId);
      if (element) {
        targetX = element.offsetLeft;
        if (targetX >= contentWidth) targetX %= contentWidth;
        window.history.pushState(null, null, `#${sectionId}`);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('jumpToSection', onJumpToSection);
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('jumpToSection', onJumpToSection);
      cancelAnimationFrame(rafId);
    };
  }, [contentWidth]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#030712] z-0 touch-none">
      {/* Static Hero Background (Always under everything) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e293b_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#0f172a_0%,transparent_50%)]" />
        <div className="w-full h-full bg-grid" />
      </div>

      {/* Seamless Parallax Gradient Background (Rolls over hero) */}
      <div 
        ref={bgRef}
        className="absolute inset-0 flex h-full w-max will-change-transform z-10"
        style={{ pointerEvents: 'none', transition: 'opacity 0.3s ease-out' }}
      >
        <div 
          className="h-full w-[200vw]" 
          style={{ 
            background: 'linear-gradient(90deg, #0f1c30 0%, #1a2a44 20%, #2c1a44 40%, #441a3a 60%, #1a2a44 80%, #0f1c30 100%)',
            backgroundSize: '100% 100%'
          }} 
        />
        <div 
          className="h-full w-[200vw]" 
          style={{ 
            background: 'linear-gradient(90deg, #0f1c30 0%, #1a2a44 20%, #2c1a44 40%, #441a3a 60%, #1a2a44 80%, #0f1c30 100%)',
            backgroundSize: '100% 100%'
          }} 
        />
      </div>

      {/* Main Content Scroller */}
      <div 
        ref={scrollRef}
        className="relative flex h-full w-max will-change-transform z-20"
      >
        {children}
        {children}
      </div>

    </div>
  )
}
