import { useEffect, useState } from 'react'
import type { Route } from '../App'
import { languages, type Copy, type Lang } from '../i18n'

const navRoutes: { route: Route; index: number }[] = [
  { route: '/about', index: 0 },
  { route: '/services', index: 1 },
  { route: '/projects', index: 2 },
  { route: '/blog', index: 3 },
]

type Props = {
  t: Copy
  lang: Lang
  route: Route
  setLang: (lang: Lang) => void
  navigate: (route: Route) => void
}

export default function Navbar({ t, lang, route, setLang, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navLinks = navRoutes.map((item) => ({ ...item, label: t.nav[item.index] }))
  const currentLanguage = languages.find((item) => item.code === lang)?.label ?? 'UZ'

  const go = (nextRoute: Route) => {
    setOpen(false)
    navigate(nextRoute)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 animate-fade-down">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-border bg-white/95 shadow-xl shadow-navy/10 backdrop-blur-xl'
            : 'border-white/70 bg-white/85 shadow-lg shadow-navy/5 backdrop-blur-xl'
        }`}
      >
        <button type="button" onClick={() => go('/')} className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            C
          </span>
          <span className="text-left">
            <span className="block font-display text-xl font-bold tracking-tight text-navy">{t.brand}</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:block">
              Accounting office
            </span>
          </span>
        </button>

        <nav className="hidden items-center rounded-2xl bg-gray-100/80 p-1 lg:flex">
          {navLinks.map((item) => {
            const active = route === item.route
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => go(item.route)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                  active ? 'bg-white text-navy shadow-sm' : 'text-muted hover:bg-white/70 hover:text-navy'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <select
              value={lang}
              onChange={(event) => setLang(event.target.value as Lang)}
              className="h-11 appearance-none rounded-xl border border-border bg-white pl-4 pr-9 text-sm font-bold text-navy outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              aria-label="Language"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <button
            type="button"
            onClick={() => go('/contact')}
            className="inline-flex h-11 items-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-primary/30"
          >
            {t.cta}
          </button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-navy shadow-sm md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy/30 p-4 backdrop-blur-sm md:hidden">
          <div className="flex h-full flex-col rounded-3xl border border-border bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <button type="button" onClick={() => go('/')} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white">C</span>
                <span className="font-display text-xl font-bold text-navy">{t.brand}</span>
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-navy"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-5 rounded-2xl border border-border bg-gray-50 p-2">
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setLang(item.code)}
                      className={`rounded-xl px-3 py-3 text-sm font-bold transition-colors ${
                        lang === item.code ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                {navLinks.map((item) => {
                  const active = route === item.route
                  return (
                    <button
                      key={item.route}
                      type="button"
                      onClick={() => go(item.route)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left text-base font-bold transition-colors ${
                        active ? 'border-primary/20 bg-primary/10 text-primary' : 'border-border bg-white text-navy'
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-border p-4">
              <button
                type="button"
                onClick={() => go('/contact')}
                className="flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20"
              >
                {t.cta} · {currentLanguage}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
