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

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="section-container relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-6">
            <span className="w-1 h-1 rounded-full bg-brand-accent" />
            What We Do
          </span>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-brand leading-tight">
            Every Service Built for{' '}
            <span className="text-gradient">Revenue</span>
          </h2>
          <p className="mt-6 font-body text-white/55 text-lg max-w-xl mx-auto leading-brand">
            No fluff. No vanity metrics. Every engagement is tied to business outcomes and bottom-line growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} />
          ))}
        </div>
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
