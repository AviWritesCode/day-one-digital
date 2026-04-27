import { useState, useEffect, useRef } from 'react'

export default function DigitizedReveal({ children, delay = 0, duration = 800 }) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If scrolling forward (entry is moving from right to left into view)
          if (entry.boundingClientRect.left < window.innerWidth) {
            setTimeout(() => setIsVisible(true), delay)
          }
        } else {
          // Reset if it exits to the right (scrolling left/backward)
          if (entry.boundingClientRect.left > window.innerWidth * 0.2) {
            setIsVisible(false)
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 200px 0px 0px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  useEffect(() => {
    if (!isVisible || !canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    // Support high DPI displays for crisp pixels
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const gridSize = 55;
    const cellW = width / gridSize;
    const cellH = height / gridSize;
    
    const pixels = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        pixels.push({
          x: x * cellW,
          y: y * cellH,
          delay: Math.random() * (duration * 0.4),
          cleared: false
        });
      }
    }
    
    let startTime = null;
    let animationFrame;

    // Draw initial black overlay
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, width, height);

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      let allCleared = true;
      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];
        if (!p.cleared) {
          if (elapsed > p.delay) {
            // Animate scale for 180ms
            const animElapsed = elapsed - p.delay;
            if (animElapsed >= 180) {
              ctx.clearRect(p.x - 0.5, p.y - 0.5, cellW + 1, cellH + 1);
              p.cleared = true;
            } else {
              const scale = 1 - (animElapsed / 180);
              const cx = p.x + cellW / 2;
              const cy = p.y + cellH / 2;
              ctx.clearRect(p.x - 0.5, p.y - 0.5, cellW + 1, cellH + 1);
              ctx.fillRect(cx - (cellW * scale) / 2, cy - (cellH * scale) / 2, cellW * scale, cellH * scale);
              allCleared = false;
            }
          } else {
            allCleared = false;
          }
        }
      }
      
      if (!allCleared) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    animationFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, duration]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div 
        className="relative transition-opacity duration-300 ease-out"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(4px)',
          transitionDelay: '20ms'
        }}
      >
        {children}
      </div>
      
      {isVisible && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-50"
        />
      )}
    </div>
  )
}
