import { useEffect, useState } from 'react'

import Footer from './components/Footer'
import Topbar from './components/Topbar'
import { CONTACT_LINKS, EXPERIENCE, PROJECTS, SECTIONS, SKILL_GROUPS } from './data/site'
import { getInitialLocale, t } from './data/i18n'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  const [active, setActive] = useState('home')
  const [locale, setLocale] = useState(() => getInitialLocale())
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
  })
  const [resolvedTheme, setResolvedTheme] = useState('light')

  const copy = t(locale)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
  }, [locale])

  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-color-scheme: dark)')

    const apply = () => {
      const systemIsDark = Boolean(mql?.matches)
      const resolved = theme === 'system' ? (systemIsDark ? 'dark' : 'light') : theme
      setResolvedTheme(resolved)
      document.documentElement.dataset.theme = resolved
      document.documentElement.style.colorScheme = resolved
    }

    apply()

    if (!mql) return
    const onChange = () => {
      if (theme === 'system') apply()
    }

    if (mql.addEventListener) mql.addEventListener('change', onChange)

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange)
      else mql.removeListener(onChange)
    }
  }, [theme])

  const toggleTheme = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  useEffect(() => {
    const onScroll = () => {
      const midpoint = window.scrollY + window.innerHeight * 0.35
      let current = SECTIONS[0]?.id ?? 'home'
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (!el) continue
        if (midpoint >= el.offsetTop) current = s.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNav = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <Topbar
        active={active}
        sections={SECTIONS.map((s) => ({
          ...s,
          label:
            locale === 'en'
              ? ({
                  home: 'Home',
                  about: 'About',
                  experience: 'Experience',
                  projects: 'Projects',
                  skills: 'Skills',
                  contact: 'Contact',
                }[s.id] ?? s.label)
              : s.label,
        }))}
        onNav={onNav}
        resolvedTheme={resolvedTheme}
        toggleTheme={toggleTheme}
        locale={locale}
        toggleLocale={toggleLocale}
        copy={copy}
      />

      <main>
        <Hero onNav={onNav} copy={copy.hero} />
        <About copy={copy.about} />
        <Experience items={EXPERIENCE} copy={copy.experience} />
        <Projects projects={PROJECTS} copy={copy.projects} />
        <Skills groups={SKILL_GROUPS} copy={copy.skills} />
        <Contact links={CONTACT_LINKS} copy={copy.contact} />
      </main>

      <Footer onNav={onNav} copy={copy.footer} />
    </div>
  )
}

export default App
