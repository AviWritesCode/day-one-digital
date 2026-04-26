import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', goal: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(89,93,161,0.15) 0%, transparent 60%)' }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-widest text-brand-cta border border-brand-cta/20 mb-6">
              <span className="w-1 h-1 rounded-full bg-brand-cta animate-pulse" />
              Get Started
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white tracking-brand leading-tight mb-6">
              Ready to Turn<br />Day One Into{' '}
              <span className="text-gradient">Revenue?</span>
            </h2>
            <p className="font-body text-white/55 text-lg leading-brand mb-10">
              Book a strategy call. We'll audit your current digital presence, map your highest-leverage opportunities, and present a roadmap — no strings attached.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: '✦', label: 'Free audit & competitor analysis' },
                { icon: '✦', label: 'Custom 90-day revenue roadmap' },
                { icon: '✦', label: 'No long-term contracts required' },
                { icon: '✦', label: 'Direct access to senior strategists' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-brand-accent text-lg leading-none">{item.icon}</span>
                  <span className="font-body text-sm text-white/70">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card-lg p-8 lg:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Contact form">
                <h3 className="font-heading text-2xl font-semibold text-white tracking-brand mb-2">
                  Book Your Strategy Call
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField id="contact-name" label="Full Name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                  <FormField id="contact-email" label="Work Email" name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} required />
                </div>

                <FormField id="contact-company" label="Company / Website" name="company" type="text" placeholder="yoursite.com" value={form.company} onChange={handleChange} />

                <div>
                  <label className="block font-body text-xs text-white/50 uppercase tracking-wider mb-2" htmlFor="contact-goal">
                    Primary Goal
                  </label>
                  <select
                    id="contact-goal"
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl font-body text-sm text-white outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all appearance-none"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <option value="" style={{ background: '#192945' }}>Select a goal…</option>
                    <option value="seo" style={{ background: '#192945' }}>Improve organic search rankings</option>
                    <option value="paid" style={{ background: '#192945' }}>Launch or optimize paid ads</option>
                    <option value="content" style={{ background: '#192945' }}>Build content authority</option>
                    <option value="cro" style={{ background: '#192945' }}>Improve conversion rates</option>
                    <option value="full" style={{ background: '#192945' }}>Full-stack digital growth</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs text-white/50 uppercase tracking-wider mb-2" htmlFor="contact-message">
                    Tell us about your situation
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What's your biggest digital marketing challenge right now?"
                    className="w-full px-4 py-3.5 rounded-xl font-body text-sm text-white placeholder-white/25 outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  />
                </div>

                <button id="contact-submit-btn" type="submit" className="btn-cta w-full justify-center mt-2">
                  Book My Free Strategy Call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="font-body text-xs text-white/25 text-center">
                  No spam. We respond within 1 business day.
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(169,129,176,0.15)', border: '1px solid rgba(169,129,176,0.3)' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M5 14L11 20L23 8" stroke="#e8a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Request Received!</h3>
                <p className="font-body text-white/55 leading-brand max-w-xs">
                  We'll reach out to <strong className="text-brand-cta">{form.email}</strong> within one business day with your custom strategy session.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ id, label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block font-body text-xs text-white/50 uppercase tracking-wider mb-2" htmlFor={id}>
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
        className="w-full px-4 py-3.5 rounded-xl font-body text-sm text-white placeholder-white/25 outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
      />
    </div>
  )
}
