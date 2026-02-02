import { IconGitHub, IconLinkedIn, IconMail } from '../components/icons'

export default function Contact({ links, copy }) {
  const emailHref = links?.email?.includes('mailto:') ? links.email : `mailto:${links.email}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>{copy?.title ?? '¿Trabajamos juntos?'}</h2>
            <p>
              {copy?.subtitle ?? 'Escríbeme y cuéntame qué necesitas. Respondo rápido.'}
            </p>
          </div>
          <div className="cta__actions">
            <a className="iconBtn" href={links.linkedin} target="_blank" rel="noreferrer">
              <span className="srOnly">{copy?.srLinkedIn ?? 'LinkedIn'}</span>
              <IconLinkedIn />
            </a>
            <a className="iconBtn" href={links.github} target="_blank" rel="noreferrer">
              <span className="srOnly">{copy?.srGitHub ?? 'GitHub'}</span>
              <IconGitHub />
            </a>
            <a className="iconBtn iconBtn--primary" href={emailHref}>
              <span className="srOnly">{copy?.srEmail ?? 'Email'}</span>
              <IconMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
