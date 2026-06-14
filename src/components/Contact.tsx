import { useState } from 'react'
import type { Copy } from '../i18n'

export default function Contact({ t }: { t: Copy }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="page-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-panel grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="premium-badge bg-primary/10 text-primary">
              {t.contact.badge}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-muted mb-10 leading-relaxed">
              {t.contact.text}
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: t.contact.phone,
                  value: '+998 97 460 32 31\n+998 95 142 42 44\n+998 97 266 04 04',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: t.contact.hours,
                  value: t.contact.hoursValue,
                },
              ].map((c) => (
                <div key={c.label} className="premium-card flex gap-4 rounded-2xl border border-border bg-gray-50/70 p-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">{c.label}</div>
                    <div className="text-navy text-sm font-medium whitespace-pre-line">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-border p-8 bg-white shadow-2xl shadow-navy/10 animate-fade-up animation-delay-200">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{t.contact.sent}</h3>
                <p className="text-muted text-sm">{t.contact.sentText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-navy mb-1">{t.contact.formTitle}</h3>
                <p className="text-sm text-muted mb-6">{t.contact.formText}</p>

                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">{t.contact.name}</label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.namePh}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">{t.contact.tel}</label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 000 00 00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">{t.contact.msg}</label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.msgPh}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-white font-semibold transition-all hover:-translate-y-0.5 hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/30"
                >
                  {t.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
