import { useState } from 'react'

const ARTICLES = [
  {
    tag: 'SEO Strategy',
    date: 'Apr 2026',
    title: 'Why Technical SEO is the Highest-Leverage Investment in 2026',
    excerpt: 'Core Web Vitals now directly influence ranking potential. Here is the systematic approach we use to maximize every crawl budget dollar.',
    readTime: '8 min read',
    color: '#a981b0',
  },
  {
    tag: 'Paid Media',
    date: 'Mar 2026',
    title: 'The Attribution Crisis: How to Actually Measure Your ROAS',
    excerpt: 'Last-click attribution is lying to you. Here is the multi-touch model that reveals true paid media performance across the full funnel.',
    readTime: '11 min read',
    color: '#e8a3a2',
  },
  {
    tag: 'Content Strategy',
    date: 'Mar 2026',
    title: 'Topical Authority: The Framework That Moves Rankings in 90 Days',
    excerpt: 'Isolated content pieces rarely rank. Building a topical cluster around your core revenue themes is what earns domain authority.',
    readTime: '7 min read',
    color: '#7ba7d4',
  },
]

const FAQ = [
  {
    q: 'How quickly will I see results?',
    a: 'SEO results typically compound from months 3–6. Paid media can generate returns within weeks. We set clear milestones upfront so you always know what to expect and when.',
  },
  {
    q: 'Do you work with specific industries?',
    a: 'We specialize in B2B SaaS, e-commerce, professional services, and high-growth consumer brands. We take on a limited number of clients per quarter to maintain elite execution quality.',
  },
  {
    q: 'What makes Day One Digital different from other agencies?',
    a: 'We tie every deliverable to revenue impact. No vanity reports — only outcomes. Our team operates as embedded growth partners, not external contractors.',
  },
  {
    q: 'What is included in the free SEO audit?',
    a: 'Our audit covers technical health, content gaps, competitor positioning, keyword opportunities, and a 90-day priority roadmap — all customized to your specific goals.',
  },
]

export default function Insights() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="insights" className="py-24 lg:py-32 relative overflow-hidden">
      <hr className="divider mb-0" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #595da1 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="section-container relative z-10 pt-24">
        {/* Articles */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-4">
                <span className="w-1 h-1 rounded-full bg-brand-accent" />
                Insights
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white tracking-brand">
                Signal Over Noise
              </h2>
            </div>
            <a href="#" id="view-all-insights" className="hidden lg:flex btn-ghost text-sm px-5 py-2.5">
              View all
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {ARTICLES.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-brand">
              Common Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="divider mt-24" />
    </section>
  )
}

function ArticleCard({ article }) {
  return (
    <article className="glass-card p-7 flex flex-col gap-4 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 rounded-full text-xs font-semibold font-body" style={{ background: `${article.color}15`, color: article.color, border: `1px solid ${article.color}25` }}>
          {article.tag}
        </span>
        <span className="font-body text-xs text-white/30">{article.date}</span>
      </div>
      <h3 className="font-heading text-lg font-semibold text-white tracking-brand leading-snug group-hover:text-gradient transition-all duration-300">
        {article.title}
      </h3>
      <p className="font-body text-sm text-white/50 leading-brand flex-1">{article.excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-white/8">
        <span className="font-body text-xs text-white/30">{article.readTime}</span>
        <div className="flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
          <span className="font-body text-xs font-semibold" style={{ color: article.color }}>Read</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke={article.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </article>
  )
}

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300">
      <button
        id={`faq-item-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-body font-semibold text-white/85 group-hover:text-white transition-colors duration-200 pr-4">
          {item.q}
        </span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ background: isOpen ? 'rgba(169,129,176,0.2)' : 'rgba(255,255,255,0.05)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 2V12M2 7H12" stroke={isOpen ? '#a981b0' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p className="px-6 pb-6 font-body text-sm text-white/55 leading-brand">{item.a}</p>
      </div>
    </div>
  )
}
