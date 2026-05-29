const navItems = ['Accueil', 'À propos', 'Services', 'Nos travaux', 'Horaires', 'Contact']

const proofItems = [
  ['4,9/5 sur 210 avis', 'Parmi les mieux notés de la région'],
  ['Devis & déplacement', '100% gratuits'],
  ['Paiement en plusieurs fois', 'Sans frais'],
  ['Intervention rapide', 'et efficace'],
  ['Assurance', 'professionnelle'],
  ['Tarifs au forfait', 'imbattables'],
]

export default function App() {
  return (
    <main className="landing-page">
      <section className="hero-frame">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <header className="hero-header">
          <div className="logo-block">
            <span className="logo-title">AUBERT</span>
            <span className="logo-subtitle">ESPACE VERT</span>
          </div>

          <nav className="hero-nav">
            {navItems.map((item, index) => (
              <a key={item} href="#" className={index === 0 ? 'active' : ''}>
                {item}
              </a>
            ))}
          </nav>

          <a className="hero-top-cta" href="#">Demander un devis</a>
        </header>

        <div className="hero-content">
          <p className="hero-kicker">ENTRETIEN & AMÉNAGEMENT</p>

          <h1>
            Des jardins
            <br />
            soignés, toute
            <br />
            l’année.
          </h1>

          <div className="hero-divider" />

          <p className="hero-description">
            Entretien, élagage, taille, tonte, plantations…
            <br />
            Aubert Espace Vert prend soin de vos espaces
            <br />
            extérieurs depuis 1989.
          </p>

          <div className="hero-actions">
            <a className="hero-btn primary" href="#">Demander un devis gratuit</a>
            <a className="hero-btn secondary" href="#">Découvrir nos services</a>
          </div>
        </div>

        <section className="proof-bar">
          {proofItems.map(([title, subtitle]) => (
            <article className="proof-item" key={title}>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
