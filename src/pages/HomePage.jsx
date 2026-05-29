import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const proofItems = [
  ['4,9/5 sur 210 avis', 'Parmi les mieux notés de la région'],
  ['Devis & déplacement', '100% gratuits'],
  ['Paiement en plusieurs fois', 'Sans frais'],
  ['Intervention rapide', 'et efficace'],
  ['Assurance', 'professionnelle'],
  ['Tarifs au forfait', 'imbattables'],
]

export default function HomePage() {
  return (
    <main className="landing-page">
      <section className="hero-frame home-page">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <NavHeader className="hero-header" />

        <div className="hero-content">
          <p className="hero-kicker">ENTRETIEN & AMÉNAGEMENT</p>
          <h1>Des jardins<br />soignés, toute<br />l’année.</h1>
          <div className="hero-divider" />
          <p className="hero-description">
            Entretien, élagage, taille, tonte, plantations…<br />
            Aubert Espace Vert prend soin de vos espaces<br />
            extérieurs depuis 1989.
          </p>
          <div className="hero-actions">
            <NavLink className="hero-btn primary" to="/reservation">Demander un devis gratuit</NavLink>
            <NavLink className="hero-btn secondary" to="/services">Découvrir nos services</NavLink>
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
