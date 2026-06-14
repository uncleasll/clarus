import type { Copy } from '../i18n'
import type { Route } from '../App'

export default function Footer({ t, navigate }: { t: Copy; navigate: (route: Route) => void }) {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">C</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">{t.brand}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">{t.footer.text}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{t.footer.services}</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {t.footer.links.map((l) => (
                <li key={l}>
                  <button type="button" onClick={() => navigate('/services')} className="hover:text-white transition-colors text-left">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{t.footer.contact}</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>+998 97 460 32 31</li>
              <li>+998 95 142 42 44</li>
              <li>+998 97 266 04 04</li>
              <li className="pt-1 text-white/30">{t.footer.work}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{t.footer.rights}</p>
          <p className="text-white/20 text-xs">{t.footer.line}</p>
        </div>
      </div>
    </footer>
  )
}
