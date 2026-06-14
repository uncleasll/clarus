import type { Copy } from '../i18n'

const icons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function About({ t }: { t: Copy }) {
  return (
    <section id="about" className="page-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-panel grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="premium-badge bg-navy/5 text-navy">
              {t.about.badge}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              {t.about.title}
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-muted leading-relaxed mb-10">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.advantages.map((a, i) => (
                <div key={a[0]} className="premium-card flex gap-3 rounded-2xl border border-border bg-gray-50/60 p-4">
                  <div className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center">
                    {icons[i].icon}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{a[0]}</div>
                    <div className="text-xs text-muted mt-0.5 leading-relaxed">{a[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 animate-fade-up animation-delay-200">
            <div className="premium-card rounded-2xl border border-border p-7 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-2">{t.about.mission}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            <div className="premium-card rounded-2xl border border-border p-7 bg-navy text-white">
              <h3 className="font-display font-bold text-xl mb-2">{t.about.future}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t.about.futureText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
