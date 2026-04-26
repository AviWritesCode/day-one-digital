const STEPS = [
  {
    num: '01',
    iconType: 'discover',
    title: 'Deep Discovery',
    description: 'We audit your current performance, map competitor gaps, and identify your highest-leverage growth opportunities.',
    color: '#a981b0',
  },
  {
    num: '02',
    iconType: 'blueprint',
    title: 'Revenue Blueprint',
    description: 'Custom strategy built around your specific revenue goals — with projected ROI and timelines upfront.',
    color: '#e8a3a2',
  },
  {
    num: '03',
    iconType: 'execute',
    title: 'Precision Execution',
    description: 'Our specialists execute with speed and rigor. Weekly sprints. No wasted cycles. All efforts tracked to KPIs.',
    color: '#7ba7d4',
  },
  {
    num: '04',
    iconType: 'growth',
    title: 'Compound Growth',
    description: 'Assets accumulate. Rankings compound. ROAS improves. We optimize every lever for exponential trajectory.',
    color: '#595da1',
  },
]

function StepIcon({ type }) {
  const props = { width: '22', height: '22', viewBox: '0 0 22 22', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  switch (type) {
    case 'discover': return (
      <svg {...props}><path d="M11 2L13.09 8.26L20 9L14.45 13.14L16.18 20L11 16.77L5.82 20L7.55 13.14L2 9L8.91 8.26L11 2Z" /></svg>
    )
    case 'blueprint': return (
      <svg {...props}><rect x="2" y="3" width="18" height="16" rx="2" /><path d="M8 3V19" /><path d="M2 10H8" /></svg>
    )
    case 'execute': return (
      <svg {...props}><path d="M5 3L19 11L5 19V3Z" /></svg>
    )
    case 'growth': return (
      <svg {...props}><path d="M2 17L8 11L12 15L20 5" /><path d="M14 5H20V11" /></svg>
    )
    default: return null
  }
}

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a981b0 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-brand-accent" />
            How We Work
          </span>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-brand">
            The Day One{' '}
            <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 font-body text-white/55 text-lg max-w-lg mx-auto leading-brand">
            A proven four-stage system that transforms your digital presence into a revenue engine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {STEPS.map((step, i) => (
            <ProcessCard key={step.num} step={step} index={i} />
          ))}
        </div>

        <div className="mt-16 glass-card-lg p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #595da1 0%, #a981b0 50%, #e8a3a2 100%)' }}
          />
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-cta border border-brand-cta/20 mb-4">
            Ready to start?
          </span>
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-brand mb-4">
            Your Day One starts today.
          </h3>
          <p className="font-body text-white/55 mb-8 max-w-md mx-auto leading-brand">
            Book a strategy session and get a full competitive analysis on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" id="process-cta-btn" className="btn-cta">
              Start Growing Today
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#results" id="process-results-btn" className="btn-ghost">
              See Results First
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessCard({ step }) {
  return (
    <div className="glass-card p-8 flex gap-6 group hover:scale-[1.02] transition-all duration-400 cursor-pointer">
      <div className="flex-shrink-0">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${step.color}15`, border: `1px solid ${step.color}25` }}
        >
          <span style={{ color: step.color }}>
            <StepIcon type={step.iconType} />
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-body text-xs text-white/20 number-accent font-semibold">{step.num}</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-white tracking-brand mb-3">{step.title}</h3>
        <p className="font-body text-sm text-white/55 leading-brand">{step.description}</p>
      </div>
    </div>
  )
}
