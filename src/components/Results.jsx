const STATS = [
  { value: '312%', label: 'Avg. Traffic Increase', sub: 'in 6 months' },
  { value: '8.4x', label: 'Average ROI', sub: 'across all clients' },
  { value: '$42M+', label: 'Revenue Generated', sub: 'for our clients' },
  { value: '200+', label: 'Brands Scaled', sub: 'since 2019' },
]

const TESTIMONIALS = [
  {
    quote: "Day One Digital transformed our organic presence completely. We went from page 3 to dominating the top 3 spots for our highest-value keywords within 5 months.",
    name: "Sarah Mitchell",
    role: "VP Marketing, TechFlow",
    initials: "SM",
    color: "#a981b0",
  },
  {
    quote: "The data transparency alone is worth it. We finally understand exactly where our revenue comes from. The results backed it up — 4x ROI in Q1.",
    name: "James Okafor",
    role: "CEO, Meridian Retail",
    initials: "JO",
    color: "#e8a3a2",
  },
  {
    quote: "I've worked with 3 agencies before. Day One Digital is the only one that spoke in revenue terms from day one — and delivered on every promise.",
    name: "Priya Sharma",
    role: "Head of Growth, Nexus SaaS",
    initials: "PS",
    color: "#595da1",
  },
]

import Reveal from './Reveal'
import DigitizedReveal from './DigitizedReveal'

export default function Results({ view = 'desktop' }) {
  const isDesktop = view === 'desktop'
  return (
    <section 
      id="results" 
      className={isDesktop ? "relative h-screen w-[100vw] flex-shrink-0 flex items-center justify-center overflow-hidden" : "relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden"}
    >
      <div className={`section-container relative z-10 w-full ${isDesktop ? 'h-full flex flex-col justify-center px-10 lg:px-20 pt-[var(--nav-height)]' : 'max-w-screen-xl mx-auto px-6 flex flex-col justify-center'}`}>
        
          <div className={`flex ${isDesktop ? 'flex-row items-center h-full gap-12' : 'flex-col gap-12 md:gap-16'} w-full relative`}>
            
            {/* Header (Left) */}
            <div className={isDesktop ? "lg:w-[28%] flex flex-col justify-center h-full shrink-0" : "w-full flex flex-col justify-center"}>
              <div className={isDesktop ? "text-left" : "text-center md:text-left"}>
                <Reveal delay={100}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-4">
                    <span className="w-1 h-1 rounded-full bg-brand-accent" />
                    Client Success
                  </span>
                </Reveal>
                <Reveal delay={200}>
                  <h2 className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-brand leading-none mb-6 lg:mb-8">
                    Data <br className="hidden md:block"/><span className="text-gradient">Revealed.</span>
                  </h2>
                </Reveal>
                <Reveal delay={300}>
                  <p className={`font-body text-white/60 text-sm lg:text-base leading-relaxed ${isDesktop ? 'max-w-xs' : 'max-w-2xl mx-auto md:mx-0'}`}>
                    We don't guess. We engineer growth using hard data. Here's what happens when you optimize for revenue instead of vanity metrics.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Stats (Center) */}
            <div className={isDesktop ? "lg:w-[32%] flex flex-col justify-center gap-4 h-full shrink-0" : "w-full"}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {STATS.map((stat, i) => (
                     <DigitizedReveal key={`stat-${i}`} delay={200 + i * 200}>
                       <div 
                         className="glass-card p-4 lg:p-5 text-center group hover:scale-105 transition-transform duration-500 w-full"
                       >
                         <p className="font-heading text-3xl lg:text-4xl font-bold tracking-brand mb-1 text-gradient">{stat.value}</p>
                         <p className="font-body text-[10px] lg:text-xs font-semibold text-white/80 mb-0.5 leading-tight">{stat.label}</p>
                         <p className="font-body text-[8px] text-white/35 uppercase tracking-widest">{stat.sub}</p>
                       </div>
                     </DigitizedReveal>
                  ))}
               </div>
            </div>

            {/* Testimonials (Right - Scattered) */}
            <div className={isDesktop ? "lg:w-[35%] flex flex-col justify-center gap-4 h-full px-4" : "w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>
              {TESTIMONIALS.map((t, i) => {
                const aligns = ['self-start', 'self-end', 'self-center'];
                return isDesktop ? (
                  <div 
                    key={`test-${i}`} 
                    className={`w-full max-w-[260px] ${aligns[i]} ${i === 0 ? 'lg:-translate-y-8' : i === 1 ? 'lg:translate-y-8' : 'lg:translate-y-0'}`}
                  >
                    <DigitizedReveal delay={800 + i * 200}>
                      <TestimonialCard t={t} />
                    </DigitizedReveal>
                  </div>
                ) : (
                  <div key={`test-${i}`} className="w-full h-full">
                    <DigitizedReveal delay={200 + i * 150}>
                      <TestimonialCard t={t} />
                    </DigitizedReveal>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="glass-card p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300 h-full">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill={i < 5 ? '#e8a3a2' : 'none'} aria-hidden="true">
            <path d="M7 1L9 5H13L10 8L11 12L7 10L3 12L4 8L1 5H5L7 1Z" stroke="#e8a3a2" strokeWidth="0.5" />
          </svg>
        ))}
      </div>

      <blockquote className="font-body text-xs text-white/70 leading-relaxed flex-1">
        "{t.quote}"
      </blockquote>

      <div className="flex items-center gap-3 pt-3 border-t border-white/8">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-body text-[10px] font-bold text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}80 100%)` }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-body text-xs font-semibold text-white truncate">{t.name}</p>
          <p className="font-body text-[10px] text-white/40 truncate">{t.role}</p>
        </div>
      </div>
    </div>
  )
}
