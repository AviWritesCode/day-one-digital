import { useState, useEffect, useRef } from 'react'
import logo from '../assets/DayOneDigital_WordsOnly.png'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef(null)

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    window.dispatchEvent(new CustomEvent('jumpToSection', { detail: sectionId }));
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleActiveSection = (e) => setActiveSection(e.detail)
    window.addEventListener('activeSectionChange', handleActiveSection)
    return () => window.removeEventListener('activeSectionChange', handleActiveSection)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-8 lg:h-20 bg-[#0a0a1a] border-b border-white/5"
        role="banner"
      >
        <div className="section-container h-full relative flex items-center">
          {/* Centered Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center py-2 z-10">
            <a
              href="/"
              className="flex items-center group h-full overflow-visible"
              aria-label="Day One Digital — Home"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <img 
                src={logo} 
                alt="Day One Digital" 
                className="h-[180%] lg:h-[120%] w-auto object-contain transition-all duration-500 group-hover:scale-105 brightness-[2.5] contrast-[1.5] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
            </a>
          </div>

          <div className="flex items-center justify-between w-full h-full relative">
            {/* Desktop Nav - Left side */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_ITEMS.slice(0, 2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`hover-underline font-body text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'text-brand-cta'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Side - Remaining Nav + CTA */}
            <div className="flex items-center gap-4 lg:gap-8 ml-auto h-full">
              <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation secondary">
                {NAV_ITEMS.slice(2).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`hover-underline font-body text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 ${
                      activeSection === item.href.slice(1)
                        ? 'text-brand-cta'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden lg:inline-flex btn-cta text-[9px] px-4 py-2.5 uppercase tracking-widest"
                id="nav-cta-btn"
              >
                Get Free Audit
              </a>

              {/* Hamburger */}
              <button
                id="nav-hamburger-btn"
                className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 ml-auto"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
                <div className="w-3.5 flex flex-col gap-1">
                  <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(15,28,48,0.98)', backdropFilter: 'blur(20px)' }}
        ref={menuRef}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <a
            href="/"
            className="flex items-center mb-8"
            onClick={(e) => { e.preventDefault(); handleNavClick(e, '#hero'); }}
          >
            <img 
              src={logo} 
              alt="Day One Digital" 
              className="h-16 w-auto object-contain brightness-[2.5] contrast-[1.5] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </a>

          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-heading text-3xl font-medium text-white/80 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-8 btn-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get Free Audit
          </a>
        </div>
      </div>
    </>
  )
}
