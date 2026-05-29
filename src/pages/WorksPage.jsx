import NavHeader from '../components/NavHeader'

const filters = ['Tous les projets', 'Jardins privés', 'Terrasses & patios', 'Éclairage extérieur', 'Plantations', 'Entretien']
const projects = [
  ['Jardin contemporain', 'Cergy, Val-d’Oise (95)', 'Jardins privés', 'one'],
  ['Terrasse élégante', 'Pontoise, Val-d’Oise (95)', 'Terrasses & patios', 'two'],
  ['Éclairage paysager', 'Osny, Val-d’Oise (95)', 'Éclairage extérieur', 'three'],
  ['Massifs fleuris', 'Vauréal, Val-d’Oise (95)', 'Plantations', 'four'],
  ['Entretien régulier', 'Neuville-sur-Oise, Val-d’Oise (95)', 'Entretien', 'five'],
  ['Aménagement complet', 'Eragny, Val-d’Oise (95)', 'Jardins privés', 'six'],
]

export default function WorksPage() {
  return (
    <main className="works-page">
      <section className="works-frame">
        <div className="works-bg" />
        <div className="works-overlay" />
        <NavHeader className="works-header" />

        <section className="works-hero">
          <p className="section-kicker">NOS RÉALISATIONS</p>
          <h1>Des espaces verts<br />pensés pour <em>durer.</em></h1>
          <p className="hero-text">
            Chaque projet est unique. Découvrez une sélection de nos<br />
            réalisations, conçues avec passion et savoir-faire.
          </p>
        </section>

        <section className="works-toolbar">
          <div className="filter-row">
            {filters.map((filter, index) => (
              <a key={filter} href="#" className={index === 0 ? 'filter-pill active' : 'filter-link'}>{filter}</a>
            ))}
          </div>
          <a href="#" className="sort-pill">Trier par</a>
        </section>

        <section className="projects-grid">
          {projects.map(([title, location, tag, tone]) => (
            <article className={`project-card ${tone}`} key={title}>
              <div className="project-image" />
              <div className="project-shade" />
              <div className="project-copy">
                <div>
                  <h2>{title}</h2>
                  <p>{location}</p>
                </div>
                <span className="project-tag">{tag}</span>
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
          <a href="/reservation" className="panel-cta">Demander un devis</a>
        </section>
      </section>
    </main>
  )
}
