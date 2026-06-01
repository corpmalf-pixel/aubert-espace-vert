import { NavLink } from 'react-router-dom'

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
          <span className="logo-title">AUBERT</span>
          <span className="logo-subtitle">ESPACE VERT</span>
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
