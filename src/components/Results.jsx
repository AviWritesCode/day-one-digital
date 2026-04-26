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

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Top divider */}
      <hr className="divider mb-0" />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(89,93,161,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-brand-accent" />
            Proven Results
          </span>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-brand">
            Numbers That Don't Lie
          </h2>
          <p className="mt-4 font-body text-white/55 text-lg max-w-lg mx-auto leading-brand">
            Real performance data from real clients — no cherry-picked case studies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div key={i} className="glass-card p-6 lg:p-8 text-center group hover:scale-[1.03] transition-transform duration-300">
              <p className="font-heading text-3xl lg:text-5xl font-bold tracking-brand mb-2 text-gradient">{stat.value}</p>
              <p className="font-body text-sm font-semibold text-white/80 mb-1">{stat.label}</p>
              <p className="font-body text-xs text-white/35">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Marquee logos */}
        <div className="mt-20 overflow-hidden">
          <p className="text-center font-body text-xs text-white/30 uppercase tracking-widest mb-8">Trusted by growth-stage brands</p>
          <div className="flex" style={{ overflow: 'hidden' }}>
            <div className="marquee-track">
              {[...Array(2)].map((_, r) =>
                ['TechFlow','Meridian','Nexus SaaS','Apex Media','Cornerstone','BluePeak','Volta','IronBridge'].map((name, i) => (
                  <div key={`${r}-${i}`} className="flex items-center px-8 py-3 mx-2 glass-card rounded-full">
                    <span className="font-heading text-sm font-semibold text-white/40 whitespace-nowrap">{name}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="divider mt-0" />
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="glass-card p-7 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < 5 ? '#e8a3a2' : 'none'} aria-hidden="true">
            <path d="M7 1L9 5H13L10 8L11 12L7 10L3 12L4 8L1 5H5L7 1Z" stroke="#e8a3a2" strokeWidth="0.5" />
          </svg>
        ))}
      </div>

      <blockquote className="font-body text-sm text-white/70 leading-brand flex-1">
        "{t.quote}"
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-body text-sm font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}80 100%)` }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-white">{t.name}</p>
          <p className="font-body text-xs text-white/40">{t.role}</p>
        </div>
      </div>
    </div>
  )
}
