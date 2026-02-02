import { IconCodeMark, IconMoon, IconSun } from './icons'
import LocaleToggle from './LocaleToggle'

export default function Topbar({ active, sections, onNav, resolvedTheme, toggleTheme, locale, toggleLocale, copy }) {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <a className="brand" href="#home" onClick={(e) => (e.preventDefault(), onNav('home'))}>
          <span className="brand__mark" aria-hidden="true">
            <IconCodeMark />
          </span>
          <span className="brand__text">brais.dev</span>
        </a>

        <nav className="nav" aria-label={copy?.topbar?.navLabel ?? 'Navegación principal'}>
          {sections.map((s) => (
            <a
              key={s.id}
              className={`nav__link ${active === s.id ? 'is-active' : ''}`}
              href={`#${s.id}`}
              onClick={(e) => (e.preventDefault(), onNav(s.id))}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <LocaleToggle
            locale={locale}
            onToggle={toggleLocale}
            label={copy?.topbar?.localeToggleLabel ?? 'Cambiar idioma'}
          />
          <button
            className="iconBtn"
            type="button"
            onClick={toggleTheme}
            aria-label={copy?.topbar?.themeToggleLabel ?? 'Cambiar tema'}
          >
            {resolvedTheme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <a className="btn btn--ghost" href="#projects" onClick={(e) => (e.preventDefault(), onNav('projects'))}>
            {copy?.topbar?.ctaProjects ?? 'Ver proyectos'}
          </a>
          <a className="btn btn--primary" href="#contact" onClick={(e) => (e.preventDefault(), onNav('contact'))}>
            {copy?.topbar?.ctaContact ?? 'Contactar'}
          </a>
        </div>
      </div>
    </header>
  )
}
