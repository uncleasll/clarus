import type { Copy } from '../i18n'

type DocumentItem = {
  title: string
  href: string
}

type CategorySummary = {
  title: string
  text: string
  count: string
  href: string
}

const legalDocuments: DocumentItem[] = [
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

const accountingStandards: DocumentItem[] = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 19, 20, 21, 22, 23, 24].map((number) => ({
  title: `${number}-sonli BHMS`,
  href: `/documents/bhms/bhms-${number}.pdf`,
}))

function CategoryCard({ item }: { item: CategorySummary }) {
  return (
    <a href={item.href} className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-primary/30">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-primary">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
          </svg>
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-bold text-muted">{item.count}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-navy transition-colors group-hover:text-primary">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
    </a>
  )
}

function DocumentRow({ item, t }: { item: DocumentItem; t: Copy }) {
  return (
    <li className="flex flex-col gap-4 border-b border-border px-4 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth={2.1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h6l4 4v14H7zM13 3v5h5" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="truncate font-semibold text-navy">{item.title}</h4>
          <div className="mt-1 text-xs font-bold uppercase tracking-wide text-muted">PDF</div>
        </div>
      </div>

      <div className="flex shrink-0 gap-2">
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-white px-3 text-sm font-bold text-navy transition-colors hover:border-primary/30 hover:text-primary"
        >
          {t.documents.view}
        </a>
        <a
          href={item.href}
          download
          className="inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
        >
          {t.documents.download}
        </a>
      </div>
    </li>
  )
}

function DocumentGroup({ id, title, text, items, t }: { id: string; title: string; text: string; items: DocumentItem[]; t: Copy }) {
  return (
    <section id={id} className="mb-10 scroll-mt-28 rounded-[1.5rem] border border-border bg-white shadow-sm">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="px-5 pt-5 sm:px-6 sm:pt-6">
          <h3 className="font-display text-2xl font-bold text-navy">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{text}</p>
        </div>
        <span className="mx-5 w-fit rounded-full border border-border bg-gray-50 px-3 py-1 text-xs font-bold text-muted sm:mx-6">
          {items.length} PDF
        </span>
      </div>
      <ul>
        {items.map((item) => (
          <DocumentRow key={item.href} item={item} t={t} />
        ))}
      </ul>
    </section>
  )
}

function TemplatePlaceholder({ t }: { t: Copy }) {
  return (
    <section id="templates" className="mb-12 scroll-mt-28 rounded-[1.5rem] border border-dashed border-border bg-white p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-navy">{t.documents.templatesTitle}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{t.documents.templatesText}</p>
        </div>
        <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-muted">
          {t.documents.comingSoon}
        </span>
      </div>
    </section>
  )
}

export default function Documents({ t }: { t: Copy }) {
  const summaries: CategorySummary[] = [
    { title: t.documents.legalTitle, text: t.documents.legalSummary, count: `${legalDocuments.length} PDF`, href: '#legal' },
    { title: t.documents.bhmsTitle, text: t.documents.bhmsSummary, count: `${accountingStandards.length} PDF`, href: '#bhms' },
    { title: t.documents.templatesTitle, text: t.documents.templatesSummary, count: t.documents.comingSoon, href: '#templates' },
  ]

  return (
    <section id="documents" className="page-section bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-border pb-8 md:flex-row md:items-end animate-fade-up">
          <div>
            <div className="premium-badge bg-primary/10 text-primary">{t.documents.badge}</div>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy md:text-5xl">{t.documents.title}</h2>
          </div>
          <p className="max-w-md text-muted md:text-right">{t.documents.text}</p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {summaries.map((item) => (
            <CategoryCard key={item.title} item={item} />
          ))}
        </div>

        <DocumentGroup id="legal" title={t.documents.legalTitle} text={t.documents.legalText} items={legalDocuments} t={t} />
        <DocumentGroup id="bhms" title={t.documents.bhmsTitle} text={t.documents.bhmsText} items={accountingStandards} t={t} />
        <TemplatePlaceholder t={t} />
      </div>
    </section>
  )
}
