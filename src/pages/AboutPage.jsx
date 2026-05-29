import NavHeader from '../components/NavHeader'
const values = [
  ['Passion', 'Le goût du travail bien fait et l’amour des beaux jardins.'],
  ['Confiance', 'Une relation de proximité basée sur l’écoute et la transparence.'],
  ['Qualité', 'Des prestations soignées rigoureusement, respectueuses et durables.'],
]
const timeline = [
  ['1989', 'Création de l’entreprise'],
  ['2005', 'Reprise par le fils'],
  ["Aujourd'hui", 'Plus de 30 ans d’expérience'],
]
export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">NOTRE HISTOIRE</p>
          <h1 className="hero-title">Une entreprise familiale<br />depuis plus de 30 ans.</h1>
          <div className="hero-line" />
          <p className="hero-copy">Fondée en 1989, l’entreprise a été reprise en 2005 avec la même exigence : un service de proximité, un travail propre et une vraie régularité terrain.</p>
        </div>
        <div className="glass-card padded">
          <div className="page-grid three-col">
            {values.map(([title, text]) => <article key={title}><strong>{title}</strong><span className="muted">{text}</span></article>)}
          </div>
        </div>
        <div className="glass-card padded" style={{gridColumn:'1 / -1'}}>
          <div className="page-grid three-col">
            {timeline.map(([year, text]) => <article key={year}><strong>{year}</strong><span className="muted">{text}</span></article>)}
          </div>
        </div>
      </section>
    </main>
  )
}
