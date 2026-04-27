import { useState, useEffect } from 'react';

export default function useBreakpoint() {
  const [viewType, setViewType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewType('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setViewType('tablet');
      } else {
        setViewType('desktop');
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { viewType };
}
