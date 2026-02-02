export default function Skills({ groups, copy }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__head">
          <h2>{copy?.title ?? 'Skills'}</h2>
          <p>{copy?.subtitle ?? 'Una mezcla de frontend, tooling y entrega de producto.'}</p>
        </div>

        <div className="skillGrid">
          {groups.map((g) => (
            <section className="skillGroup" aria-label={g.label} key={g.label}>
              <h3 className="skillGroup__title">{g.label}</h3>
              <div className="skills">
                {g.items.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
