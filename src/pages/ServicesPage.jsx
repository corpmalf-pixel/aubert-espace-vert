import NavHeader from '../components/NavHeader'
const services = [
  'Entretien de jardin', 'Élagage des arbres', 'Taille de haies', 'Tonte de pelouse', 'Désherbage', 'Plantation de fleurs et d’arbustes'
]
export default function ServicesPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content">
        <p className="kicker">NOS SERVICES</p>
        <h1 className="hero-title">Des prestations complètes<br />pour un jardin impeccable.</h1>
        <div className="hero-line" />
        <p className="hero-copy">Entretien, tailles, plantations et interventions techniques : une base claire, propre et fidèle à la logique du site.</p>
        <div className="page-grid two-col" style={{marginTop:32}}>
          {services.map((title) => (
            <article className="glass-card padded" key={title}>
              <div className="placeholder-image" />
              <h3>{title}</h3>
              <p className="muted">Contenu de service en place, à enrichir ensuite avec les vrais visuels.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
