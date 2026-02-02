export default function Projects({ projects, copy }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head">
          <h2>{copy?.title ?? 'Proyectos'}</h2>
          <p>{copy?.subtitle ?? 'Ejemplos (placeholder). Sustituye por tus repos y demos.'}</p>
        </div>
        <div className="cards cards--2">
          {projects.map((p) => (
            <a
              className="project projectLink"
              key={p.title}
              href={p.repoUrl}
              onClick={(e) => {
                if (p.repoUrl === '#') e.preventDefault()
              }}
              target={p.repoUrl?.startsWith('http') ? '_blank' : undefined}
              rel={p.repoUrl?.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={`${p.title} · ${copy?.ariaOpenRepo ?? 'abrir repositorio'}`}
            >
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="tags" aria-label={copy?.ariaTech ?? 'Tecnologías'}>
                  {p.tags.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project__cta" aria-hidden="true">
                <span className="project__ctaText">{copy?.ctaRepo ?? 'Ver repo'}</span>
                <span className="project__ctaArrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
