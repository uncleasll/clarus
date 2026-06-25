import type { Copy } from '../i18n'

type DocumentItem = {
  title: string
  href: string
}

const kodekslar: DocumentItem[] = [
  { title: 'Bojxona kodeksi', href: '/documents/kodekslar/bojxona-kodeksi.pdf' },
  { title: 'Oila kodeksi', href: '/documents/kodekslar/oila-kodeksi.pdf' },
  { title: 'Fuqarolik kodeksi 1-qism', href: '/documents/kodekslar/fuqarolik-kodeksi-1-qism.pdf' },
  { title: 'Fuqarolik kodeksi 2-qism', href: '/documents/kodekslar/fuqarolik-kodeksi-2-qism.pdf' },
  { title: 'Jinoyat kodeksi', href: '/documents/kodekslar/jinoyat-kodeksi.pdf' },
  { title: 'Ma’muriy javobgarlik to‘g‘risidagi kodeks', href: '/documents/kodekslar/mamuriy-javobgarlik-kodeksi.pdf' },
  { title: 'Mehnat kodeksi', href: '/documents/kodekslar/mehnat-kodeksi.pdf' },
  { title: 'Soliq kodeksi', href: '/documents/kodekslar/soliq-kodeksi.pdf' },
  { title: 'Yer kodeksi', href: '/documents/kodekslar/yer-kodeksi.pdf' },
]

const bhms: DocumentItem[] = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 19, 20, 21, 22, 23, 24].map((number) => ({
  title: `${number}-sonli BHMS`,
  href: `/documents/bhms/bhms-${number}.pdf`,
}))

function DocumentCard({ item, t }: { item: DocumentItem; t: Copy }) {
  return (
    <article className="premium-card rounded-2xl border border-border bg-white/90 p-5 shadow-sm backdrop-blur">
      <div className="mb-5 flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h6l4 4v14H7z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 3v5h5M9 14h6M9 17h4" />
          </svg>
        </span>
        <div className="min-w-0">
          <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted">PDF</div>
          <h3 className="font-display text-lg font-bold leading-snug text-navy">{item.title}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-white px-4 text-sm font-bold text-navy transition-colors hover:border-primary/30 hover:text-primary"
        >
          {t.documents.view}
        </a>
        <a
          href={item.href}
          download
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
        >
          {t.documents.download}
        </a>
      </div>
    </article>
  )
}

function DocumentGroup({ title, text, items, t }: { title: string; text: string; items: DocumentItem[]; t: Copy }) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-navy">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{text}</p>
        </div>
        <span className="w-fit rounded-full border border-border bg-white px-3 py-1 text-xs font-bold text-muted">
          {items.length} PDF
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <DocumentCard key={item.href} item={item} t={t} />
        ))}
      </div>
    </section>
  )
}

export default function Documents({ t }: { t: Copy }) {
  return (
    <section id="documents" className="page-section bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-panel mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end animate-fade-up">
          <div>
            <div className="premium-badge bg-primary/10 text-primary">{t.documents.badge}</div>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy md:text-5xl">{t.documents.title}</h2>
          </div>
          <p className="max-w-md text-muted md:text-right">{t.documents.text}</p>
        </div>

        <DocumentGroup title={t.documents.codesTitle} text={t.documents.codesText} items={kodekslar} t={t} />
        <DocumentGroup title={t.documents.bhmsTitle} text={t.documents.bhmsText} items={bhms} t={t} />
      </div>
    </section>
  )
}
