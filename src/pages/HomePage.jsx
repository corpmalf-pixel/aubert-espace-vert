import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const proofItems = [
  ['4,9/5 sur 210 avis', 'Parmi les mieux notés de la région'],
  ['Devis & déplacement', '100% gratuits'],
  ['Paiement en plusieurs fois', 'Sans frais'],
  ['Intervention rapide', 'et efficace'],
]

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content">
        <p className="kicker">ENTRETIEN & AMÉNAGEMENT</p>
        <h1 className="hero-title">Des jardins soignés,<br />toute l’année.</h1>
        <div className="hero-line" />
        <p className="hero-copy">Entretien, élagage, taille, tonte, plantations… Aubert Espace Vert prend soin de vos espaces extérieurs depuis 1989.</p>
        <div className="cta-row">
          <NavLink className="primary-btn" to="/reservation">Demander un devis gratuit <span>→</span></NavLink>
          <NavLink className="secondary-btn" to="/services">Découvrir nos services</NavLink>
        </div>
        <div className="proof-grid">
          {proofItems.map(([title, subtitle]) => (
            <article className="proof-item" key={title}><strong>{title}</strong><span>{subtitle}</span></article>
          ))}
        </div>
      </section>
    </main>
  )
}
