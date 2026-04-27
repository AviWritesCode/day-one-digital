import { useState } from 'react'
import Reveal from './Reveal'

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

export default function Insights({ view = 'desktop' }) {
  const [modalData, setModalData] = useState(null)
  const isDesktop = view === 'desktop'

  const openModal = (type, data) => {
    setModalData({ type, data })
  }

  return (
    <section 
      id="insights" 
      className={isDesktop ? "relative h-screen w-[100vw] flex-shrink-0 flex items-center justify-center overflow-hidden" : "relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden"}
    >
      <div className={`section-container relative z-10 w-full ${isDesktop ? 'h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-10 lg:px-20 justify-center pt-[var(--nav-height)]' : 'max-w-screen-xl mx-auto px-6 flex flex-col gap-12'}`}>
        
        {/* Header (Left, Vertically Centered) */}
        <div className={isDesktop ? "lg:w-[30%] flex flex-col justify-center text-left shrink-0" : "w-full flex flex-col items-center text-center md:items-start md:text-left"}>
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-accent border border-brand-accent/20 mb-4">
              <span className="w-1 h-1 rounded-full bg-brand-accent" />
              Intelligence
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-brand leading-[1.1]">
              Signal <br /> Over <br /> <span className="text-gradient">Noise</span>
            </h2>
          </Reveal>
          <Reveal delay={300}>
             <p className={`font-body text-white/50 text-sm mt-6 leading-relaxed ${isDesktop ? 'max-w-xs' : 'max-w-xl mx-auto md:mx-0'}`}>
               Proprietary frameworks and answers to the most critical growth questions.
             </p>
          </Reveal>
        </div>

        {/* Content (Right, Vertically Centered) */}
        <div className={isDesktop ? "lg:w-[70%] flex flex-col justify-center gap-6 h-full py-4" : "w-full flex flex-col gap-8"}>
          
          {/* Articles - Wider, less tall */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ARTICLES.map((article, i) => (
              <Reveal key={`article-${i}`} delay={300 + i * 150}>
                <div className="w-full" onClick={() => openModal('article', article)}>
                  <ArticleCard article={article} />
                </div>
              </Reveal>
            ))}
          </div>

          {/* FAQ - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQ.map((item, i) => (
              <Reveal key={`faq-${i}`} delay={500 + i * 150}>
                <div className="w-full h-full">
                  <FaqItem
                    item={item}
                    index={i}
                    onToggle={() => openModal('faq', { ...item, index: i })}
                  />
                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Unified Modal */}
        {modalData && (
          <div 
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl"
            onClick={() => setModalData(null)}
          >
            <div 
              className="glass-card !bg-[#0f172a] p-8 lg:p-12 max-w-2xl w-full rounded-[2.5rem] animate-swoosh relative overflow-visible border-white/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] min-h-[400px] flex flex-col justify-center border"
              onClick={e => e.stopPropagation()}
            >
              {/* Top Accent Bar */}
              <div 
                className="absolute top-0 left-0 w-full h-1 opacity-50"
                style={{ background: modalData.type === 'faq' ? 'var(--brand-accent)' : modalData.data.color }}
              />
              
              <button 
                onClick={() => setModalData(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="flex flex-col gap-6 lg:gap-8">
                {modalData.type === 'faq' ? (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-body text-xs font-bold">
                        Q
                      </span>
                      <span className="font-body text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                        Question {modalData.data.index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-4xl font-bold text-white tracking-brand leading-tight">
                      {modalData.data.q}
                    </h3>
                    <div className="h-px w-full bg-gradient-to-r from-brand-accent/30 via-transparent to-transparent" />
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <p className="font-body text-base lg:text-lg text-white/80 leading-relaxed">
                        {modalData.data.a}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1 rounded-full text-[10px] font-bold font-body uppercase tracking-widest" style={{ background: `${modalData.data.color}20`, color: modalData.data.color, border: `1px solid ${modalData.data.color}30` }}>
                        {modalData.data.tag}
                      </span>
                      <span className="font-body text-[10px] text-white/30 tracking-widest">{modalData.data.date}</span>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-4xl font-bold text-white tracking-brand leading-tight">
                      {modalData.data.title}
                    </h3>
                    <div className="h-px w-full bg-white/10" />
                    <p className="font-body text-base lg:text-lg text-white/70 leading-relaxed">
                      {modalData.data.excerpt}
                    </p>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mt-4">
                       <p className="font-body text-sm text-white/40 italic">
                         Note: This is a full-length case study preview. Our clients receive deep-dive reports monthly including these frameworks and full implementation guides.
                       </p>
                    </div>
                  </>
                )}
                
                <div className="flex justify-end mt-4">
                  <button 
                    onClick={() => setModalData(null)}
                    className="px-10 py-3.5 rounded-full bg-white text-black font-body text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-500 shadow-xl"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

function ArticleCard({ article }) {
  return (
    <article className="glass-card p-5 lg:p-6 flex flex-col gap-2 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer justify-center min-h-[140px]">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-body uppercase tracking-wider truncate" style={{ background: `${article.color}15`, color: article.color, border: `1px solid ${article.color}25` }}>
            {article.tag}
          </span>
          <span className="font-body text-[9px] text-white/30 flex-shrink-0">{article.date}</span>
        </div>
        <h3 className="font-heading text-sm lg:text-base font-semibold text-white tracking-brand leading-tight group-hover:text-gradient transition-all duration-300 line-clamp-3">
          {article.title}
        </h3>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/8">
        <span className="font-body text-[9px] text-white/30 uppercase tracking-widest">{article.readTime}</span>
        <div className="flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
          <span className="font-body text-[10px] font-semibold" style={{ color: article.color }}>Read</span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke={article.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </article>
  )
}

function FaqItem({ item, index, onToggle }) {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex flex-col justify-center gap-1.5 p-4 text-left group"
      >
        <div>
          <span className="font-body text-[9px] text-white/30 font-bold uppercase tracking-widest block mb-1.5">
            Q {index + 1}
          </span>
          <span className="font-body text-xs lg:text-sm font-semibold text-white/85 group-hover:text-white transition-colors duration-200 leading-tight line-clamp-2">
            {item.q}
          </span>
        </div>
        <div className="flex items-center gap-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity mt-1">
          <span className="text-[9px] font-bold uppercase tracking-widest">Answer</span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 6H11M11 6L7 2M11 6L7 10" />
          </svg>
        </div>
      </button>
    </div>
  )
}
