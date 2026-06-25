import type { Copy } from '../i18n'

const recommendationHref = '/documents/recommendations/mikroton-tas-recommended.pdf'

export default function Projects({ t }: { t: Copy }) {
  return (
    <section id="projects" className="page-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-up">
          <div className="premium-badge bg-primary/10 text-primary">
            {t.projects.badge}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">{t.projects.title}</h2>
          <p className="text-muted max-w-xl mx-auto">{t.projects.text}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {t.projects.stats.map((s) => (
            <div key={s[1]} className="premium-card rounded-2xl border border-border bg-white/90 p-6 text-center shadow-sm backdrop-blur">
              <div className="font-display text-4xl font-bold text-primary mb-1">{s[0]}</div>
              <div className="text-sm text-muted">{s[1]}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {t.projects.testimonials.map((item) => (
            <div key={item[1]} className="premium-card rounded-2xl border border-border bg-white/90 p-7 flex flex-col shadow-sm backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <svg className="w-8 h-8 text-primary/25" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M12 7H6l-4 9v9h11V14H8l4-7zm18 0h-6l-4 9v9h11V14h-5l4-7z" />
                </svg>
                <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-green-700">
                  Verified
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-5 italic">"{item[0]}"</p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {item[1].split(' ').map((part) => part[0]).slice(0, 2).join('')}
                </span>
                <div>
                  <div className="font-semibold text-navy text-sm">{item[1]}</div>
                  <div className="text-xs text-muted mt-0.5">{item[2]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="premium-card overflow-hidden rounded-[1.75rem] border border-border bg-white/90 shadow-xl shadow-navy/5 backdrop-blur">
            <div className="h-1.5 bg-primary" />
            <div className="p-7 sm:p-8">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="premium-badge bg-primary/10 text-primary">{t.projects.featuredBadge}</div>
                  <h3 className="mt-4 font-display text-3xl font-bold text-navy">{t.projects.featuredTitle}</h3>
                </div>
                <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-green-700">
                  {t.projects.verified}
                </span>
              </div>

              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">{t.projects.featuredText}</p>

              <div className="mb-7 flex flex-wrap gap-2">
                {t.projects.featuredTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-bold text-navy">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={recommendationHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
                >
                  {t.projects.viewRecommendation}
                </a>
                <a
                  href={recommendationHref}
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-white px-5 text-sm font-bold text-navy transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {t.projects.downloadRecommendation}
                </a>
              </div>
            </div>
          </article>

          <aside className="rounded-[1.75rem] border border-border bg-gray-50 p-7 shadow-sm">
            <h3 className="mb-5 font-display text-xl font-bold text-navy">{t.projects.outcomesTitle}</h3>
            <div className="grid gap-3">
              {t.projects.outcomes.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="rounded-[1.75rem] bg-white/90 border border-border p-8 shadow-xl shadow-navy/5 backdrop-blur">
          <h3 className="font-display font-bold text-lg text-navy mb-5">{t.projects.sectorsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {t.projects.sectors.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-navy">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
