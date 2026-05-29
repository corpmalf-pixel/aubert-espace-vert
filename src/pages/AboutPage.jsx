import NavHeader from '../components/NavHeader'

const values = [
  ['01', 'Passion', 'Le goût du travail bien fait et l’amour des beaux jardins.'],
  ['02', 'Confiance', 'Une relation de proximité basée sur l’écoute et la transparence.'],
  ['03', 'Qualité', 'Des prestations soignées rigoureusement, respectueuses et durables.'],
]

const timeline = [
  ['1989', 'Création de l’entreprise', 'Monsieur Aubert fonde l’entreprise Aubert Espace Vert avec la volonté de proposer un service de qualité.'],
  ['2005', 'Reprise par le fils', 'La passion se transmet et l’entreprise poursuit son développement avec de nouvelles compétences.'],
  ["Aujourd'hui", 'Plus de 30 ans d’expérience', 'Un savoir-faire reconnu dans un rayon de 60 km autour de Cergy pour embellir vos extérieurs au quotidien.'],
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-frame">
        <div className="about-bg" />
        <div className="about-overlay" />
        <NavHeader className="about-header" />

        <div className="about-grid">
          <section className="story-panel">
            <p className="section-kicker">NOTRE HISTOIRE</p>
            <h1>Une entreprise familiale<br />depuis plus de 30 ans.</h1>
            <p className="story-text">
              Fondée en 1989 par Monsieur Aubert, notre entreprise familiale<br />
              a été reprise par son fils en 2005, avec la même passion et le<br />
              même engagement : offrir des prestations de qualité et un<br />
              service de proximité.
            </p>

            <div className="value-grid">
              {values.map(([number, title, text], index) => (
                <article className="value-card" key={number}>
                  <span className="value-number">{number}</span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  {index < values.length - 1 ? <i className="value-divider" /> : null}
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="timeline-zone">
          <div className="timeline-panel">
            <p className="section-kicker">NOTRE PARCOURS</p>
            <div className="timeline-line">
              {timeline.map(([year], index) => (
                <div className="timeline-step" key={year}>
                  <div className="timeline-pill">{year}</div>
                  {index < timeline.length - 1 ? <span className="timeline-connector" /> : null}
                </div>
              ))}
            </div>
            <div className="timeline-content-grid">
              {timeline.map(([, title, text]) => (
                <article className="timeline-copy" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="zone-card">
            <div className="zone-icon">⌖</div>
            <div>
              <h3>Notre zone d'intervention</h3>
              <p>Rayon de 60 km autour de Cergy<br />Val d’Oise (95) et départements :<br />92, 93, 78, 60, 27</p>
            </div>
            <a href="#" className="zone-btn">Voir la carte</a>
          </aside>
        </section>
      </section>
    </main>
  )
}
