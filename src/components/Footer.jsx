export default function Footer({ onNav, copy }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} brais.dev · {copy?.madeWith ?? 'Hecho con React + Vite'}
        </p>
        <a className="link" href="#home" onClick={(e) => (e.preventDefault(), onNav('home'))}>
          {copy?.backToTop ?? 'Volver arriba'}
        </a>
      </div>
    </footer>
  )
}
