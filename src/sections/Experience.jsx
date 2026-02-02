export default function Experience({ items, copy }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__head">
          <h2>{copy?.title ?? 'Experiencia profesional'}</h2>
          <p>
            {copy?.subtitle ??
              'Añade aquí tu experiencia real. Esto es un ejemplo de timeline (placeholder) para que lo edites.'}
          </p>
        </div>

        <ol className="timeline" aria-label={copy?.ariaLabel ?? 'Experiencia'}>
          {items.map((it) => (
            <li className="timeline__item" key={`${it.role}-${it.date}`}> 
              <div className="timeline__meta">
                <span className="timeline__role">{it.role}</span>
                <span className="timeline__date">{it.date}</span>
              </div>
              <div className="timeline__card">
                <h3>{it.company}</h3>
                <p>{it.desc}</p>
                {Array.isArray(it.bullets) && it.bullets.length > 0 ? (
                  <ul className="bullets">
                    {it.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
