import { NavLink } from 'react-router-dom'
import logoAubert from '../assets/logo-aubert.png'

const items = [
  ['Accueil', '/accueil'],
  ['À propos', '/a-propos'],
  ['Services', '/services'],
  ['Nos réalisations', '/nos-realisations'],
  ['Horaires', '/horaires'],
  ['Contact', '/contact'],
]

export default function NavHeader({ className = '', ctaLabel = 'Demander un devis', ctaTo = '/reservation', showLogo = true }) {
  return (
    <header className={className}>
      {showLogo ? (
        <div className="logo-block">
          <img src={logoAubert} alt="Aubert Espace Vert" className="site-logo" />
        </div>
      ) : <div />}

      <nav className="site-nav">
        {items.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <NavLink to={ctaTo} className="top-cta">{ctaLabel} <span>→</span></NavLink>
    </header>
  )
}
