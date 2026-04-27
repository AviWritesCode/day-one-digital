const SERVICES = [
  {
    id: '001',
    iconType: 'search',
    label: 'Search & SEO',
    title: 'Dominate Search Results',
    description: 'Technical SEO, content strategy, and link-building that puts you at the top and keeps you there.',
    color: '#a981b0',
  },
  {
    id: '002',
    iconType: 'target',
    label: 'Paid Media',
    title: 'Performance Advertising',
    description: 'ROI-obsessed Google and Meta ad campaigns engineered to turn ad spend into measurable revenue.',
    color: '#e8a3a2',
  },
  {
    id: '003',
    iconType: 'chart',
    label: 'Analytics',
    title: 'Data Intelligence',
    description: 'Full-funnel tracking, attribution modeling, and dashboards that reveal exactly where revenue comes from.',
    color: '#7ba7d4',
  },
  {
    id: '004',
    iconType: 'pen',
    label: 'Content',
    title: 'Authority Content',
    description: 'Expert-led content that builds topical authority, earns backlinks, and converts readers into customers.',
    color: '#595da1',
  },
  {
    id: '005',
    iconType: 'code',
    label: 'CRO',
    title: 'Conversion Optimization',
    description: 'A/B testing, UX audits, and landing page engineering to maximize every visitor value.',
    color: '#a981b0',
  },
  {
    id: '006',
    iconType: 'link',
    label: 'Link Building',
    title: 'Authority Link Acquisition',
    description: 'White-hat, editorial-quality backlinks from authoritative sites that move domain authority and rankings.',
    color: '#e8a3a2',
  },
]

function ServiceIcon({ type }) {
  const props = { width: '22', height: '22', viewBox: '0 0 22 22', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  switch (type) {
    case 'search': return (
      <svg {...props}><circle cx="10" cy="10" r="7" /><path d="M21 21L15 15" /></svg>
    )
    case 'target': return (
      <svg {...props}><circle cx="11" cy="11" r="9" /><circle cx="11" cy="11" r="5" /><circle cx="11" cy="11" r="1" /></svg>
    )
    case 'chart': return (
      <svg {...props}><rect x="3" y="12" width="4" height="8" rx="1" /><rect x="9" y="7" width="4" height="13" rx="1" /><rect x="15" y="3" width="4" height="17" rx="1" /></svg>
    )
    case 'pen': return (
      <svg {...props}><path d="M12 20H21" /><path d="M16.5 3.5L18.5 5.5L7 17H5V15L16.5 3.5Z" /></svg>
    )
    case 'code': return (
      <svg {...props}><path d="M8 3L3 11L8 19" /><path d="M14 3L19 11L14 19" /></svg>
    )
    case 'link': return (
      <svg {...props}><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07L11.5 5.5" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07L10.5 18.5" /></svg>
    )
    default: return null
  }
}

import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal'

export default function Services({ view = 'desktop' }) {
  const [isPaused, setIsPaused] = useState(false)
  const requestRef = useRef()
  const previousTimeRef = useRef()
  const containerRef = useRef(null)
  const offsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const loopHeightRef = useRef(0)

  // Triplicate for seamless loop
  const triplicatedServices = [...SERVICES, ...SERVICES, ...SERVICES]

  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  useEffect(() => {
    // Calculate exact height of one set of services for perfect looping
    if (containerRef.current) {
      const children = containerRef.current.children
      let totalHeight = 0
      for (let i = 0; i < SERVICES.length; i++) {
        if (children[i]) {
          // height + gap (which is 2rem / 32px based on flex-col gap-8)
          totalHeight += children[i].getBoundingClientRect().height + 32
        }
      }
      loopHeightRef.current = totalHeight
    }
  }, [])

  const animate = time => {
    if (previousTimeRef.current !== undefined && !isPausedRef.current && loopHeightRef.current > 0) {
      const deltaTime = time - previousTimeRef.current
      // Move 40px per second
      offsetRef.current += deltaTime * 0.04
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(0, -${offsetRef.current % loopHeightRef.current}px, 0)`
      }
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return (
    <section id="services" className={
      view === 'desktop'
        ? "relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
        : "relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden py-24"
    }>
      <div className={
        view === 'desktop'
          ? "section-container relative z-10 w-full h-full flex flex-col lg:flex-row items-center gap-16 lg:gap-32 px-10 lg:px-20 justify-center pt-[var(--nav-height)]"
          : "section-container relative z-10 w-full h-full flex flex-col gap-12 px-6 lg:px-20 justify-center"
      }>
        <div className="w-full lg:w-[40%] text-left">
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-6">
              <span className="w-1 h-1 rounded-full bg-brand-accent" />
              Vertical Scale
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="font-heading text-4xl lg:text-7xl font-bold text-white tracking-brand leading-[1.1]">
              Built for <br />
              <span className="text-gradient">Revenue</span>
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 font-body text-white/55 text-lg leading-brand max-w-md">
              No fluff. Every engagement is tied to bottom-line growth. Our cascading methodology ensures every layer of your business is optimized.
            </p>
          </Reveal>
        </div>

        {view === 'desktop' ? (
          <div 
            className="absolute right-[-2%] top-0 bottom-0 w-full lg:w-[42%] overflow-hidden flex justify-center translate-x-4 lg:translate-x-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={containerRef}
              className="flex flex-col gap-8 transition-transform duration-100 ease-linear will-change-transform"
            >
              {triplicatedServices.map((svc, i) => (
                <div key={`${svc.id}-${i}`} className="w-full max-w-[340px]">
                  <ServiceCard svc={svc} index={i} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ServiceCard({ svc, index }) {
  return (
    <div
      className="glass-card p-7 group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-glass-lg"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="flex items-center justify-between mb-6">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}
        >
          <span style={{ color: svc.color }}>
            <ServiceIcon type={svc.iconType} />
          </span>
        </div>
        <span className="font-body text-xs text-white/25 number-accent">{svc.id}</span>
      </div>

      <div className="mb-4">
        <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-2">{svc.label}</p>
        <h3 className="font-heading text-xl font-semibold text-white tracking-brand mb-3">
          {svc.title}
        </h3>
        <p className="font-body text-sm text-white/55 leading-brand">{svc.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/8">
        <span className="font-body text-xs font-semibold transition-colors duration-200" style={{ color: svc.color }}>
          Learn more
        </span>
        <svg className="transition-transform duration-300 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke={svc.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
