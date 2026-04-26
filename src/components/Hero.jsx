import { useState, useEffect, useRef } from 'react'
import heroBackground from '../assets/HeroBackground.svg'
import heroCheckmarks from '../assets/Hero_CheckmarksVertical.svg'
import heroBanner from '../assets/Hero_BackgroundBanner.svg'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (!heroRef.current) return
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / width
      const y = (e.clientY - top - height / 2) / height
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f1c30 0%, #192945 40%, #1a2d52 100%)' }}
    >
      {/* Background SVG */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -8}px)`,
          transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <img src={heroBackground} alt="" className="w-full h-full object-cover" loading="eager" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 opacity-30 pointer-events-none">
        <img src={heroBanner} alt="" className="w-full" loading="lazy" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg/80 pointer-events-none" />

      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #595da1 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.8s ease',
        }}
      />

      <div className="section-container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="animate-fade-up animate-fade-up-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-body uppercase tracking-widest glass-card border border-brand-accent/20 text-brand-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cta animate-pulse" />
                ROI-Driven Digital Marketing
              </span>
            </div>

            <div className="animate-fade-up animate-fade-up-2">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-brand text-white">
                Turn Every Click Into{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Revenue</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none" aria-hidden="true">
                    <path d="M2 5.5C60 2 120 1 180 2.5C220 3.5 260 5 298 5.5" stroke="url(#ug)" strokeWidth="2.5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="ug" x1="0" y1="0" x2="300" y2="0">
                        <stop stopColor="#a981b0" /><stop offset="1" stopColor="#e8a3a2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </div>

            <p className="animate-fade-up animate-fade-up-3 font-body text-white/60 text-lg lg:text-xl leading-brand max-w-lg">
              Day One Digital is an authoritative SEO and performance marketing firm.
              We build revenue systems, not vanity metrics — starting from day one.
            </p>

            <div className="animate-fade-up animate-fade-up-4">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md" aria-label="Free SEO audit">
                  <input
                    id="hero-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@website.com"
                    required
                    className="flex-1 px-5 py-4 rounded-2xl font-body text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  />
                  <button id="hero-audit-btn" type="submit" className="btn-cta text-sm px-6 py-4 whitespace-nowrap">
                    Free Audit
                    <ArrowRight />
                  </button>
                </form>
              ) : (
                <div className="glass-card px-6 py-4 flex items-center gap-3 max-w-md">
                  <CheckIcon />
                  <p className="font-body text-sm text-white/80">
                    Audit incoming to <strong className="text-brand-cta">{email}</strong> within 24h.
                  </p>
                </div>
              )}
            </div>

            <div className="animate-fade-up animate-fade-up-5 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['#a981b0','#595da1','#e8a3a2','#7ba7d4'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-bg flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                    {['R','M','J','S'][i]}
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-white/50">
                <span className="text-white/80 font-semibold">200+</span> businesses growing with us
              </p>
            </div>
          </div>

          {/* Right: Dashboard */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up animate-fade-up-2">
            <div
              className="relative w-full max-w-sm lg:max-w-md"
              style={{
                transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`,
                transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <div className="glass-card-lg p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Revenue Dashboard</p>
                    <p className="font-heading text-xl font-semibold text-white">Growth Report</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(169,129,176,0.15)', color: '#e8a3a2', border: '1px solid rgba(232,163,162,0.2)' }}>
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <MetricCard label="Organic Traffic" value="+312%" color="#a981b0" />
                  <MetricCard label="Conv. Rate" value="+87%" color="#e8a3a2" />
                  <MetricCard label="Revenue" value="+$42K" color="#7ba7d4" />
                  <MetricCard label="ROI" value="8.4x" color="#595da1" />
                </div>

                <div className="relative h-20 mb-4">
                  <MiniChart />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <p className="font-body text-xs text-white/40">Last 90 days vs prior period</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-body text-xs text-white/50">Real-time</span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <img src={heroCheckmarks} alt="Services checklist" className="w-16 opacity-90" loading="lazy" />
              </div>

              <div className="absolute -top-4 -right-4 glass-card px-4 py-3 hidden lg:flex items-center gap-2.5" style={{ animation: 'float 6s 1.5s ease-in-out infinite' }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(232,163,162,0.15)' }}>
                  <StarIcon />
                </div>
                <div>
                  <p className="font-body text-xs text-white/50 leading-none mb-1">New milestone</p>
                  <p className="font-body text-sm font-semibold text-white leading-none">#1 on Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}

function MetricCard({ label, value, color }) {
  return (
    <div className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <p className="font-body text-xs text-white/40 mb-1.5">{label}</p>
      <div className="flex items-center justify-between">
        <p className="font-heading text-lg font-bold" style={{ color }}>{value}</p>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 10L6 5L9 8L12 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function MiniChart() {
  const points = [20,35,28,45,38,55,48,65,60,75,70,80]
  const w=280, h=80, min=20, max=80
  const norm = (v) => h - ((v - min)/(max - min)) * h
  const pathD = points.map((v,i) => `${i===0?'M':'L'} ${(i/(points.length-1))*w} ${norm(v)}`).join(' ')
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-label="Revenue chart">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a981b0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a981b0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#a981b0" /><stop offset="1" stopColor="#e8a3a2" />
        </linearGradient>
      </defs>
      <path d={`${pathD} L ${w} ${h} L 0 ${h} Z`} fill="url(#cg)" />
      <path d={pathD} fill="none" stroke="url(#lg2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={w} cy={norm(points[points.length-1])} r="4" fill="#e8a3a2" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(169,129,176,0.2)' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8L6.5 11.5L13 4.5" stroke="#e8a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" stroke="#e8a3a2" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}
