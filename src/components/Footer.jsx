export default function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Services: ['SEO & Search', 'Paid Media', 'Content Strategy', 'Analytics', 'CRO', 'Link Building'],
    Company: ['About Us', 'Case Studies', 'Careers', 'Press Kit'],
    Resources: ['Blog', 'Free SEO Audit', 'ROI Calculator', 'Keyword Research Tool'],
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0f1c30', borderTop: '1px solid rgba(255,255,255,0.07)' }} role="contentinfo">
      <div className="section-container py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-5" aria-label="Day One Digital">
              <img 
                src="/src/assets/DayOneDigital_WordsOnly.png" 
                alt="Day One Digital" 
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="font-body text-sm text-white/45 leading-brand max-w-xs mb-6">
              ROI-driven SEO and performance marketing for ambitious brands. We build revenue systems that compound.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
                { label: 'Twitter', href: '#', icon: <TwitterIcon /> },
                { label: 'Email', href: 'mailto:hello@dayonedigital.com', icon: <EmailIcon /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/8 transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <h4 className="font-body text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">{col}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200 hover-underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            © {year} Day One Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="font-body text-xs text-white/25 hover:text-white/50 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
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
