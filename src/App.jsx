const navItems = ['Accueil', 'À propos', 'Services', 'Nos travaux', 'Horaires', 'Contact']

const values = [
  {
    number: '01',
    title: 'Passion',
    text: 'Le goût du travail bien fait et l’amour des beaux jardins.',
  },
  {
    number: '02',
    title: 'Confiance',
    text: 'Une relation de proximité basée sur l’écoute et la transparence.',
  },
  {
    number: '03',
    title: 'Qualité',
    text: 'Des prestations soignées rigoureusement, respectueuses et durables.',
  },
]

const timeline = [
  {
    year: '1989',
    title: 'Création de l’entreprise',
    text: 'Monsieur Aubert fonde l’entreprise Aubert Espace Vert avec la volonté de proposer un service de qualité.',
  },
  {
    year: '2005',
    title: 'Reprise par le fils',
    text: 'La passion se transmet et l’entreprise poursuit son développement avec de nouvelles compétences.',
  },
  {
    year: "Aujourd'hui",
    title: 'Plus de 30 ans d’expérience',
    text: 'Un savoir-faire reconnu dans un rayon de 60 km autour de Cergy pour embellir vos extérieurs au quotidien.',
  },
]

export default function App() {
  return (
    <main className="about-page">
      <section className="about-frame">
        <div className="about-bg" />
        <div className="about-overlay" />

        <header className="about-header">
          <div className="logo-block">
            <span className="logo-title">AUBERT</span>
            <span className="logo-subtitle">ESPACE VERT</span>
          </div>

          <nav className="about-nav">
            {navItems.map((item, index) => (
              <a key={item} href="#" className={index === 1 ? 'active' : ''}>
                {item}
              </a>
            ))}
          </nav>

          <a className="top-cta" href="#">Demander un devis</a>
        </header>

        <div className="about-grid">
          <section className="story-panel">
            <p className="section-kicker">NOTRE HISTOIRE</p>
            <h1>
              Une entreprise familiale
              <br />
              depuis plus de 30 ans.
            </h1>
            <p className="story-text">
              Fondée en 1989 par Monsieur Aubert, notre entreprise familiale
              <br />
              a été reprise par son fils en 2005, avec la même passion et le
              <br />
              même engagement : offrir des prestations de qualité et un
              <br />
              service de proximité.
            </p>

            <div className="value-grid">
              {values.map((value, index) => (
                <article className="value-card" key={value.number}>
                  <span className="value-number">{value.number}</span>
                  <h2>{value.title}</h2>
                  <p>{value.text}</p>
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
              {timeline.map((item, index) => (
                <div className="timeline-step" key={item.year}>
                  <div className="timeline-pill">{item.year}</div>
                  {index < timeline.length - 1 ? <span className="timeline-connector" /> : null}
                </div>
              ))}
            </div>

            <div className="timeline-content-grid">
              {timeline.map((item) => (
                <article className="timeline-copy" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="zone-card">
            <div className="zone-icon">⌖</div>
            <div>
              <h3>Notre zone d'intervention</h3>
              <p>
                Rayon de 60 km autour de Cergy
                <br />
                Val d’Oise (95) et départements :
                <br />
                92, 93, 78, 60, 27
              </p>
            </div>
            <a href="#" className="zone-btn">Voir la carte</a>
          </aside>
        </section>
      </section>
    </main>
  )
}
