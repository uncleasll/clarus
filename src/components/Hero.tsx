import type { Copy } from '../i18n'
import type { Route } from '../App'

export default function Hero({ t, navigate }: { t: Copy; navigate: (route: Route) => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.12),transparent_34%),linear-gradient(180deg,#f8fafc_0%,#ffffff_52%,#f8fafc_100%)]">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(to right, #dbe3ef 1px, transparent 1px), linear-gradient(to bottom, #dbe3ef 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, black, transparent 78%)',
        }}
      />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-24 pt-36 sm:pt-40 grid lg:grid-cols-[1.02fr_0.98fr] gap-14 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/15 bg-primary/10 text-primary text-xs font-bold mb-6 tracking-wide uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-navy leading-[1.02] tracking-tight text-balance mb-6">
            {t.hero.titleA} <span className="text-primary">{t.hero.titleB}</span> {t.hero.titleC}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-9 max-w-2xl">{t.hero.text}</p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold transition-all hover:-translate-y-0.5 hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              {t.hero.primary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-white text-navy font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-navy/5"
            >
              {t.hero.secondary}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold text-muted animate-fade-up animation-delay-200">
            {['Tax compliance', 'Payroll', '1C / 1UZ', 'Audit'].map((item) => (
              <span key={item} className="rounded-full border border-border bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 max-w-xl divide-x divide-border rounded-2xl border border-border bg-white/85 p-5 shadow-lg shadow-navy/5 backdrop-blur animate-fade-up animation-delay-400">
            {t.hero.stats.map((s) => (
              <div key={s[1]} className="px-3 first:pl-0">
                <div className="font-display text-2xl sm:text-3xl font-bold text-navy">{s[0]}</div>
                <div className="text-xs sm:text-sm text-muted mt-1">{s[1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-float-soft">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/5 border border-primary/10 rotate-2" />
          <div className="absolute -right-3 top-8 hidden rounded-2xl border border-border bg-white/90 p-4 shadow-xl shadow-navy/10 backdrop-blur sm:block">
            <div className="text-[11px] font-bold uppercase tracking-wide text-muted">Risk score</div>
            <div className="mt-1 font-display text-2xl font-bold text-primary">Low</div>
          </div>
          <div className="relative rounded-[1.75rem] bg-white/95 border border-border shadow-2xl shadow-navy/10 p-6 sm:p-7 backdrop-blur">
            <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-3/4 rounded-full bg-primary animate-shimmer" />
            </div>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.hero.report}</div>
                  <div className="text-xs text-muted">{t.hero.period}</div>
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">+24.5%</span>
            </div>

            <div className="flex items-end gap-2 h-40 mb-6 rounded-2xl bg-gray-50 border border-border p-4">
              {[42, 66, 52, 78, 70, 92].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-primary/15 overflow-hidden">
                  <div className="mt-auto w-full rounded-t-md bg-primary animate-bar-rise" style={{ height: `${h}%`, opacity: i === 5 ? 1 : 0.35, animationDelay: `${i * 80}ms` }} />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-4">
                <div className="text-xs text-muted">{t.hero.revenue}</div>
                <div className="font-display font-bold text-2xl text-navy">+24.5%</div>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
                <div className="text-xs font-semibold text-primary">{t.hero.growth}</div>
                <div className="mt-1 h-2 rounded-full bg-primary/10">
                  <div className="h-2 w-4/5 rounded-full bg-primary" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {['Tax reports', 'Payroll accounting', 'Management reports'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-border bg-white px-3 py-2 text-xs">
                  <span className="font-semibold text-navy">{item}</span>
                  <span className="font-bold text-primary">{index === 0 ? 'Filed' : 'Ready'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 sm:-left-4 bg-white border border-border shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-xs">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-navy">{t.hero.filed}</div>
              <div className="text-xs text-muted">{t.hero.filedSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
