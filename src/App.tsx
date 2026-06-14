import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { copy, type Lang } from './i18n'

export type Route = '/' | '/about' | '/services' | '/projects' | '/blog' | '/contact'

const routes: Route[] = ['/', '/about', '/services', '/projects', '/blog', '/contact']

function getRoute(): Route {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return routes.includes(path as Route) ? (path as Route) : '/'
}

export default function App() {
  const [lang, setLang] = useState<Lang>('uz')
  const [route, setRoute] = useState<Route>(getRoute)
  const t = copy[lang]

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((nextRoute: Route) => {
    if (nextRoute === route) return
    window.history.pushState({}, '', nextRoute)
    setRoute(nextRoute)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [route])

  const page = useMemo(() => {
    switch (route) {
      case '/about':
        return <About t={t} />
      case '/services':
        return <Services t={t} />
      case '/projects':
        return <Projects t={t} />
      case '/blog':
        return <Blog t={t} />
      case '/contact':
        return <Contact t={t} />
      default:
        return <Hero t={t} navigate={navigate} />
    }
  }, [navigate, route, t])

  return (
    <>
      <Navbar t={t} lang={lang} route={route} setLang={setLang} navigate={navigate} />
      <main>{page}</main>
      <Footer t={t} navigate={navigate} />
    </>
  )
}
