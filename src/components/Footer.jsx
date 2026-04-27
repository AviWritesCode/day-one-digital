import Reveal from './Reveal'
import logo from '../assets/DayOneDigital_WordsOnly.png'

export default function Footer({ view = 'desktop' }) {
  const isDesktop = view === 'desktop'
  const year = new Date().getFullYear()

  const links = {
    Services: ['SEO & Search', 'Paid Media', 'Content Strategy', 'Analytics', 'CRO', 'Link Building'],
    Company: ['About Us', 'Case Studies', 'Careers', 'Press Kit'],
    Resources: ['Blog', 'Free SEO Audit', 'ROI Calculator', 'Keyword Research Tool'],
  }

  return (
    <footer 
      id="footer" 
      className={isDesktop ? "relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden" : "relative w-full flex flex-col items-center justify-center py-24 overflow-hidden"} 
      role="contentinfo"
    >
      
      {/* Giant Branding Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <img 
          src={logo} 
          alt="" 
          className="w-[120%] h-auto object-contain opacity-[0.05] grayscale brightness-200 contrast-125 scale-150 rotate-[-5deg]"
          style={{ filter: 'grayscale(100%) brightness(200%) opacity(0.06)' }}
        />
      </div>

      <div className={`section-container relative z-10 w-full px-6 lg:px-24 flex ${isDesktop ? 'flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32 h-[calc(100vh-var(--nav-height))] mt-[var(--nav-height)]' : 'flex-col items-center justify-center gap-16 max-w-screen-xl mx-auto'}`}>
        
        {/* Brand Block */}
        <div className={`max-w-md ${isDesktop ? 'text-center lg:text-left' : 'text-center flex flex-col items-center'}`}>
          <Reveal delay={100}>
            <a href="/" className="inline-block mb-8" aria-label="Day One Digital">
              <img 
                src={logo} 
                alt="Day One Digital" 
                className="h-12 lg:h-16 w-auto object-contain brightness-200"
              />
            </a>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-lg lg:text-xl text-white/40 leading-brand mb-12">
              Building revenue systems that compound. ROI-driven marketing for the digital elite.
            </p>
          </Reveal>
          
          <div className={`flex items-center gap-6 ${isDesktop ? 'justify-center lg:justify-start' : 'justify-center'}`}>
            {[
              { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
              { label: 'Twitter', href: '#', icon: <TwitterIcon /> },
              { label: 'Email', href: 'mailto:hello@dayonedigital.com', icon: <EmailIcon /> },
            ].map((social, i) => (
              <Reveal key={social.label} delay={300 + i * 100}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white/30 hover:text-brand-cta hover:bg-white/5 transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className={`flex flex-wrap lg:flex-nowrap gap-8 lg:gap-24 items-start ${isDesktop ? 'justify-center lg:justify-start' : 'justify-center w-full'}`}>
          {Object.entries(links).map(([col, items], i) => (
            <div 
              key={col} 
              className="min-w-[140px] lg:min-w-[180px]"
              style={isDesktop ? { transform: `translateY(${i * 20}px)` } : {}}
            >
              <Reveal delay={400 + i * 150}>
                <h4 className="font-heading text-xs lg:text-sm font-bold text-white uppercase tracking-[0.2em] mb-6 lg:mb-8 opacity-30">{col}</h4>
                <ul className="flex flex-col gap-4 lg:gap-5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="font-body text-sm lg:text-base text-white/40 hover:text-white transition-all duration-300 block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Copyright Footer (Mobile optimization) */}
        <div className="lg:absolute lg:bottom-12 lg:left-24 mt-12 lg:mt-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
           <Reveal delay={800}>
            <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.3em]">
              © {year} Day One Digital
            </p>
          </Reveal>
          <div className="hidden lg:block w-12 h-[1px] bg-white/10" />
          <Reveal delay={900}>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms'].map((item) => (
                <a key={item} href="#" className="font-body text-[10px] text-white/20 uppercase tracking-[0.3em] hover:text-white/40">
                  {item}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </footer>
  )
}

function LogoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.9604 26.2866C38.1838 16.5056 29.9765 8.78525 20.0001 8.78525C10.0237 8.78525 1.81745 16.5066 1.03981 26.2866C0.378822 24.3036 0.019165 22.1835 0.019165 19.9812C0.019165 8.96347 8.9825 0 20.0001 0C31.0177 0 39.981 8.96347 39.981 19.9812C39.981 22.1835 39.6213 24.3036 38.9604 26.2866ZM20.0002 10.4637C10.4374 10.4637 2.65675 18.2435 2.65675 27.8074C2.65675 28.0721 2.66323 28.3356 2.67511 28.597C6.33756 22.8964 12.7336 19.1129 19.998 19.1129C27.2625 19.1129 33.6617 22.8985 37.3242 28.6013C37.3361 28.3378 37.3436 28.0731 37.3436 27.8074C37.3436 18.2445 29.564 10.4637 20.0002 10.4637ZM19.9988 20.9286C13.363 20.9286 7.52097 24.3923 4.18578 29.6069H35.8129C32.4777 24.3923 26.6357 20.9286 19.9999 20.9286H19.9988Z"
        fill="url(#footerLogoGrad)"
      />
      <defs>
        <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a981b0" />
          <stop offset="1" stopColor="#e8a3a2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="12" height="12" rx="2" />
      <path d="M4 7V10" /><path d="M4 5V5.01" /><path d="M7 10V7C7 5.5 9.5 5.5 9.5 7V10" /><path d="M7 7H9.5" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M8.3 6L13 1H11.7L7.7 5.1L4.5 1H0.5L5.5 7.8L0.5 13H1.8L6.2 8.6L9.5 13H13.5L8.3 6ZM6.8 7.9L6.2 7.1L2.3 2H4L7.3 6.2L7.9 7L11.7 12H10L6.8 7.9Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="12" height="8" rx="1.5" />
      <path d="M1 4L7 8L13 4" />
    </svg>
  )
}
