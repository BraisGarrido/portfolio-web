export default function Hero({ onNav, copy }) {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{copy?.eyebrow ?? 'Fullstack · Mobile · QA'}</p>
          <h1>
            {copy?.titlePrefix ?? 'Hola, soy'} <span className="accent">Brais Garrido</span>
          </h1>
          <p className="lead">
            {copy?.lead ??
              'Desarrollo aplicaciones Android escalables combinando automatización de testing y visión full-cycle del software.'}
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects" onClick={(e) => (e.preventDefault(), onNav('projects'))}>
              {copy?.ctaProjects ?? 'Explorar proyectos'}
            </a>
            <a className="btn btn--ghost" href="#contact" onClick={(e) => (e.preventDefault(), onNav('contact'))}>
              {copy?.ctaContact ?? 'Hablemos'}
            </a>
          </div>

          <ul className="hero__highlights" aria-label={copy?.highlightsLabel ?? 'Puntos clave'}>
            {(Array.isArray(copy?.highlights) && copy.highlights.length > 0
              ? copy.highlights
              : [
                  'Kotlin, Jetpack Compose, MVVM y Clean architecture para apps escalables.',
                  'Testing automatizado y frameworks reutilizables orientados a valor.',
                  'APIs REST, Spring Boot y foco en rendimiento y estabilidad.',
                ]
            ).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="codeArt" role="presentation">
            <div className="terminal">
              <div className="terminal__bar">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
                <span className="terminal__title">~/portfolio</span>
              </div>
              <div className="terminal__body" role="presentation">
                <div className="line">
                  <span className="prompt">$</span> {copy?.terminal?.command ?? 'javac HelloWorld.java && java HelloWorld'}
                </div>
                <div className="line mutedLine">{copy?.terminal?.status ?? 'building…'}</div>
                <div className="line okLine">{copy?.terminal?.ok ?? '✓ Hello, world!'}</div>

                <div className="spacer" aria-hidden="true" />

                <div className="code">
                  <div className="codeLine">
                    <span className="tok tok--kw">public</span> <span className="tok tok--kw">class</span>{' '}
                    <span className="tok tok--id">HelloWorld</span> <span className="tok tok--br">{'{'}</span>
                  </div>
                  <div className="codeLine indent">
                    <span className="tok tok--kw">public</span> <span className="tok tok--kw">static</span>{' '}
                    <span className="tok tok--kw">void</span>{' '}
                    <span className="tok tok--fn">main</span>
                    <span className="tok tok--br">(</span>
                    <span className="tok tok--id">String</span>
                    <span className="tok tok--br">[]</span>{' '}
                    <span className="tok tok--id">args</span>
                    <span className="tok tok--br">)</span>{' '}
                    <span className="tok tok--br">{'{'}</span>
                  </div>
                  <div className="codeLine indent indent2">
                    <span className="tok tok--id">System</span>
                    <span className="tok">.</span>
                    <span className="tok tok--id">out</span>
                    <span className="tok">.</span>
                    <span className="tok tok--fn">println</span>
                    <span className="tok tok--br">(</span>
                    <span className="tok tok--str">"Hello, world!"</span>
                    <span className="tok tok--br">)</span>
                    <span className="tok">;</span>
                    <span className="cursor" />
                  </div>
                  <div className="codeLine indent">
                    <span className="tok tok--br">{'}'}</span>
                  </div>
                  <div className="codeLine">
                    <span className="tok tok--br">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
