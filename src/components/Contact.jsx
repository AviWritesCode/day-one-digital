import { useState } from 'react'
import Reveal from './Reveal'

export default function Contact({ view = 'desktop' }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', goal: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const isDesktop = view === 'desktop'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section 
      id="contact" 
      className={isDesktop ? "relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden" : "relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden"}
    >
      <div className={`section-container relative z-10 w-full ${isDesktop ? 'h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-24 px-6 lg:px-24 pt-[var(--nav-height)]' : 'max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-center gap-12'}`}>
        
        {/* Left: Content */}
        <div className={isDesktop ? "max-w-xl text-center lg:text-left" : "max-w-xl text-center"}>
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-cta border border-brand-cta/20 mb-6">
              <span className="w-1 h-1 rounded-full bg-brand-cta animate-pulse" />
              Get Started
            </span>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-brand leading-none mb-6">
              Ready to <br /> <span className="text-gradient">Grow?</span>
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-body text-white/55 text-base lg:text-lg leading-brand mb-8 max-w-md mx-auto lg:mx-0">
              Book a strategy call. We'll audit your digital presence and present a roadmap — no strings attached.
            </p>
          </Reveal>

          <div className={`grid grid-cols-2 gap-4 lg:gap-6 max-w-sm ${isDesktop ? 'mx-auto lg:mx-0' : 'mx-auto'}`}>
            {[
              { icon: '✦', label: 'Free SEO Audit' },
              { icon: '✦', label: '90-Day Roadmap' },
              { icon: '✦', label: 'Senior Experts' },
              { icon: '✦', label: 'ROI Focused' },
            ].map((item, i) => (
              <Reveal key={i} delay={400 + i * 100}>
                <div className="flex items-center gap-3">
                  <span className="text-brand-accent text-xl">{item.icon}</span>
                  <span className="font-body text-[10px] lg:text-sm text-white/70 uppercase tracking-widest">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: Form - Fly in from right */}
        <div className="relative">
          <Reveal delay={500} className="relative z-10">
            <div 
              className="glass-card-lg p-5 lg:p-7 w-full max-w-[380px] lg:w-[440px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)]"
              style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-4" aria-label="Contact form">
                  <h3 className="font-heading text-lg lg:text-xl font-semibold text-white tracking-brand">
                    Strategy Call
                  </h3>

                  <div className="grid gap-2.5 lg:gap-3">
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      <FormField id="contact-name" label="Name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                      <FormField id="contact-email" label="Email" name="email" type="email" placeholder="jane@co.com" value={form.email} onChange={handleChange} required />
                    </div>

                    <FormField id="contact-company" label="Website" name="company" type="text" placeholder="yoursite.com" value={form.company} onChange={handleChange} />

                    <div>
                      <label className="block font-body text-[8px] lg:text-[9px] text-white/40 uppercase tracking-widest mb-1" htmlFor="contact-goal">
                        Goal
                      </label>
                      <select
                        id="contact-goal"
                        name="goal"
                        value={form.goal}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl font-body text-xs text-white outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all appearance-none"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <option value="" style={{ background: '#0a0a1a' }}>Select goal…</option>
                        <option value="seo" style={{ background: '#0a0a1a' }}>SEO Rankings</option>
                        <option value="paid" style={{ background: '#0a0a1a' }}>Paid Media</option>
                        <option value="content" style={{ background: '#0a0a1a' }}>Content Strategy</option>
                        <option value="cro" style={{ background: '#0a0a1a' }}>Conversion Rates</option>
                      </select>
                    </div>

                    <button id="contact-submit-btn" type="submit" className="btn-cta w-full justify-center mt-1 h-11 text-xs lg:text-sm">
                      Get My Free Roadmap
                    </button>
                  </div>

                  <p className="font-body text-[8px] text-white/20 text-center uppercase tracking-widest">
                    Response within 24 hours
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-brand-cta/20 border border-brand-cta/30">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14L11 20L23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Sent!</h3>
                  <p className="font-body text-white/55">
                    We'll reach out to you within one business day.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}

function FormField({ id, label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block font-body text-[9px] text-white/50 uppercase tracking-wider mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2.5 rounded-xl font-body text-xs text-white placeholder-white/25 outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
      />
    </div>
  )
}
