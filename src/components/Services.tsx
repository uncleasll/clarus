import type { Copy } from '../i18n'

const icons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

export default function Services({ t }: { t: Copy }) {
  return (
    <section id="services" className="page-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-up">
          <div className="premium-badge bg-primary/10 text-primary">
            {t.services.badge}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.services.text}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => (
            <div
              key={i}
              className="premium-card bg-white/90 rounded-2xl border border-border p-7 group shadow-sm backdrop-blur"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  {icons[i].icon}
                </div>
                <span className="font-display text-3xl font-bold text-gray-100 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-navy mb-2">{s[0]}</h3>
              <p className="text-muted text-sm leading-relaxed">{s[1]}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[1.75rem] bg-navy p-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl shadow-navy/20 animate-fade-up animation-delay-200">
          {t.services.results.map((text, i) => (
            <div key={text} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">{i + 1}</span>
              <span className="text-white/80 text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
