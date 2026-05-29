const navItems = ['Accueil', 'À propos', 'Services', 'Nos réalisations', 'Horaires', 'Contact']

const filters = ['Tous les projets', 'Jardins privés', 'Terrasses & patios', 'Éclairage extérieur', 'Plantations', 'Entretien']

const projects = [
  {
    title: 'Jardin contemporain',
    location: 'Cergy, Val-d’Oise (95)',
    tag: 'Jardins privés',
    tone: 'one',
  },
  {
    title: 'Terrasse élégante',
    location: 'Pontoise, Val-d’Oise (95)',
    tag: 'Terrasses & patios',
    tone: 'two',
  },
  {
    title: 'Éclairage paysager',
    location: 'Osny, Val-d’Oise (95)',
    tag: 'Éclairage extérieur',
    tone: 'three',
  },
  {
    title: 'Massifs fleuris',
    location: 'Vauréal, Val-d’Oise (95)',
    tag: 'Plantations',
    tone: 'four',
  },
  {
    title: 'Entretien régulier',
    location: 'Neuville-sur-Oise, Val-d’Oise (95)',
    tag: 'Entretien',
    tone: 'five',
  },
  {
    title: 'Aménagement complet',
    location: 'Eragny, Val-d’Oise (95)',
    tag: 'Jardins privés',
    tone: 'six',
  },
]

export default function App() {
  return (
    <main className="works-page">
      <section className="works-frame">
        <div className="works-bg" />
        <div className="works-overlay" />

        <header className="works-header">
          <div className="logo-block">
            <span className="logo-title">AUBERT</span>
            <span className="logo-subtitle">ESPACE VERT</span>
          </div>

          <nav className="works-nav">
            {navItems.map((item, index) => (
              <a key={item} href="#" className={index === 3 ? 'active' : ''}>
                {item}
              </a>
            ))}
          </nav>

          <a className="top-cta" href="#">Demander un devis</a>
        </header>

        <section className="works-hero">
          <p className="section-kicker">NOS RÉALISATIONS</p>
          <h1>
            Des espaces verts
            <br />
            pensés pour <em>durer.</em>
          </h1>
          <p className="hero-text">
            Chaque projet est unique. Découvrez une sélection de nos
            <br />
            réalisations, conçues avec passion et savoir-faire.
          </p>
        </section>

        <section className="works-toolbar">
          <div className="filter-row">
            {filters.map((filter, index) => (
              <a key={filter} href="#" className={index === 0 ? 'filter-pill active' : 'filter-link'}>
                {filter}
              </a>
            ))}
          </div>

          <a href="#" className="sort-pill">Trier par</a>
        </section>

        <section className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-image" />
              <div className="project-shade" />
              <div className="project-copy">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.location}</p>
                </div>
                <span className="project-tag">{project.tag}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="bottom-cta-panel">
          <div className="panel-left">
            <div className="leaf-icon">◌</div>
            <div>
              <h3>Un projet en tête ?</h3>
              <p>Discutons de vos idées et créons ensemble un extérieur qui vous ressemble.</p>
            </div>
          </div>

          <a href="#" className="panel-cta">Demander un devis</a>
        </section>
      </section>
    </main>
  )
}
