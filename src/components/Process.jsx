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

import Reveal from './Reveal'

export default function Process({ view = 'desktop' }) {
  const isDesktop = view === 'desktop'
  return (
    <section 
      id="process" 
      className={isDesktop ? "relative h-screen w-[100vw] flex-shrink-0 flex items-center justify-center overflow-hidden" : "relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden"}
    >
      <div className={`section-container relative z-10 w-full ${isDesktop ? 'h-full flex flex-col justify-center px-10 lg:px-20 pt-[var(--nav-height)]' : 'max-w-screen-xl mx-auto px-6 flex flex-col justify-center'}`}>
        
        <div className={`mb-8 relative z-20 ${isDesktop ? '' : 'px-4'}`}>
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-6">
              <span className="w-1 h-1 rounded-full bg-brand-accent" />
              The Flow
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white tracking-brand leading-tight">
              Day <span className="text-gradient">One</span> <br /> Process
            </h2>
          </Reveal>
        </div>

        {/* Horizontal Flow Container */}
        <div className={`relative w-full flex-1 flex flex-col justify-center ${isDesktop ? 'min-h-0' : 'mt-12'}`}>
          
          {/* Animated Connector Line - Simplified for responsiveness */}
          {isDesktop && (
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 flex items-center justify-center">
              <svg className="w-full h-[100px]" preserveAspectRatio="none">
                <path
                  d="M 0 50 C 250 50, 250 20, 500 50 S 750 80, 1000 50"
                  fill="none"
                  stroke="url(#flowGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a981b0" />
                    <stop offset="100%" stopColor="#e8a3a2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}

          {/* Flow Cards */}
          <div className={`grid ${isDesktop ? 'grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6' : 'grid-cols-1 md:grid-cols-2 gap-6'} relative z-10 w-full px-4 items-center justify-center mx-auto`}>
            {STEPS.map((step, i) => {
              const offsets = isDesktop ? ['-15px', '15px', '-15px', '15px'] : ['0px', '0px', '0px', '0px'] // Minimal vertical offsets
              
              return (
                <div 
                  key={step.num}
                  className={isDesktop ? "w-full max-w-[240px] mx-auto" : "w-full"}
                  style={{ transform: `translateY(${offsets[i]})` }}
                >
                  <Reveal delay={200 + i * 150}>
                    <ProcessCard step={step} />
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessCard({ step }) {
  return (
    <div className="glass-card p-5 lg:p-6 flex flex-col gap-3 lg:gap-4 group hover:scale-[1.05] transition-all duration-500 cursor-pointer relative z-10">
      <div className="flex items-center justify-between">
        <div
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `${step.color}15`, border: `1px solid ${step.color}25` }}
        >
          <span style={{ color: step.color }} className="scale-90 lg:scale-100">
            <StepIcon type={step.iconType} />
          </span>
        </div>
        <span className="font-body text-[10px] text-white/20 number-accent font-bold">{step.num}</span>
      </div>
      <div>
        <h3 className="font-heading text-base lg:text-lg font-semibold text-white tracking-brand mb-1 lg:mb-2">{step.title}</h3>
        <p className="font-body text-[11px] lg:text-xs text-white/55 leading-brand">{step.description}</p>
      </div>
    </div>
  )
}
