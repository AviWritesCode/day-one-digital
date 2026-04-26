import { useState, useEffect, useRef } from 'react'

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass shadow-nav py-3' : 'py-5 bg-transparent'
        }`}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center group"
              aria-label="Day One Digital — Home"
            >
              <img 
                src="/src/assets/DayOneDigital_WordsOnly.png" 
                alt="Day One Digital" 
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`hover-underline font-body text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'text-brand-cta'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden lg:inline-flex btn-cta text-sm px-6 py-3"
                id="nav-cta-btn"
              >
                Get Free Audit
                <ArrowRight />
              </a>

              {/* Hamburger */}
              <button
                id="nav-hamburger-btn"
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
                <div className="w-4 flex flex-col gap-1.5">
                  <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
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
            onClick={() => setMenuOpen(false)}
          >
            <img 
              src="/src/assets/DayOneDigital_WordsOnly.png" 
              alt="Day One Digital" 
              className="h-10 w-auto object-contain"
            />
          </a>

          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-heading text-3xl font-medium text-white/80 hover:text-white transition-colors duration-200 hover-underline"
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-8 btn-cta"
            onClick={() => setMenuOpen(false)}
            id="mobile-nav-cta"
          >
            Get Free Audit
            <ArrowRight />
          </a>
        </div>
      </div>
    </>
  )
}

function LogoIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.9604 26.2866C38.1838 16.5056 29.9765 8.78525 20.0001 8.78525C10.0237 8.78525 1.81745 16.5066 1.03981 26.2866C0.378822 24.3036 0.019165 22.1835 0.019165 19.9812C0.019165 8.96347 8.9825 0 20.0001 0C31.0177 0 39.981 8.96347 39.981 19.9812C39.981 22.1835 39.6213 24.3036 38.9604 26.2866ZM20.0002 10.4637C10.4374 10.4637 2.65675 18.2435 2.65675 27.8074C2.65675 28.0721 2.66323 28.3356 2.67511 28.597C6.33756 22.8964 12.7336 19.1129 19.998 19.1129C27.2625 19.1129 33.6617 22.8985 37.3242 28.6013C37.3361 28.3378 37.3436 28.0731 37.3436 27.8074C37.3436 18.2445 29.564 10.4637 20.0002 10.4637ZM19.9988 20.9286C13.363 20.9286 7.52097 24.3923 4.18578 29.6069H35.8129C32.4777 24.3923 26.6357 20.9286 19.9999 20.9286H19.9988Z"
        fill="url(#logoGrad)"
      />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a981b0" />
          <stop offset="1" stopColor="#e8a3a2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
