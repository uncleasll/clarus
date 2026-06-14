import type { Copy } from '../i18n'

const categoryColors = ['bg-blue-50 text-blue-700', 'bg-slate-100 text-slate-700', 'bg-green-50 text-green-700']
const author = 'Xolisa Kamoliddinovna'

export default function Blog({ t }: { t: Copy }) {
  return (
    <section id="blog" className="page-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-panel mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-up">
          <div>
            <div className="premium-badge bg-primary/10 text-primary">
              {t.blog.badge}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">{t.blog.title}</h2>
          </div>
          <p className="text-muted max-w-sm md:text-right">{t.blog.text}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.blog.posts.map((p, i) => (
            <article
              key={p[1]}
              className="premium-card bg-white/90 rounded-2xl border border-border overflow-hidden group shadow-sm backdrop-blur"
            >
              <div className="h-1.5 bg-primary" />
              <div className="p-7">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[i]}`}>
                    {p[0]}
                  </span>
                  <span className="text-xs text-muted whitespace-nowrap">{p[4]}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-navy leading-snug mb-3 group-hover:text-primary transition-colors">
                  {p[1]}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">{p[2]}</p>
                <div className="mb-5 flex items-center gap-3 rounded-2xl bg-gray-50 px-3 py-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    XK
                  </span>
                  <div>
                    <div className="text-xs font-bold text-navy">{author}</div>
                    <div className="text-[11px] font-medium text-muted">Clarus accounting expert</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{p[3]}</span>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1">
                    {t.blog.read}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
