export default function About({ copy }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__head">
          <h2>{copy?.title ?? 'Sobre mí'}</h2>
          <p>
            {copy?.intro ??
              'Soy desarrollador Android especializado en aplicaciones nativas con Kotlin y Jetpack Compose. Trabajo con foco en arquitectura limpia, calidad de código y automatización de testing, participando en todo el ciclo de desarrollo, desde el diseño técnico hasta la entrega al cliente.'}
          </p>
        </div>
        <div className="cards cards--3">
          <article className="card">
            <h3>{copy?.cards?.[0]?.title ?? 'Android & Arquitectura'}</h3>
            <p>
              {copy?.cards?.[0]?.text ??
                'Desarrollo de aplicaciones Android con Kotlin y Jetpack compose, aplicando MVVM y Clean Architecture para crear soluciones mantenibles, escalables y fácicles de evolucionar.'}
            </p>
          </article>
          <article className="card">
            <h3>{copy?.cards?.[1]?.title ?? 'Calidad y testing'}</h3>
            <p>
              {copy?.cards?.[1]?.text ??
                'Experiencia en testing automatizado con Selenium, JUnit y Cucmber, Diseño de frameworks reutilizables y test donde realmente aportan valor al producto.'}
            </p>
          </article>
          <article className="card">
            <h3>{copy?.cards?.[2]?.title ?? 'Visión full-cycle'}</h3>
            <p>
              {copy?.cards?.[2]?.text ??
                'Experiencia trabajando con APIs REST, backend en Spring Boot y despliegues con Docker, priorizando rendimiento, estabilidad y una buena experiencia de usuario.'}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
