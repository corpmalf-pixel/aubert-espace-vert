import NavHeader from '../components/NavHeader'
const projects = ['Jardin contemporain', 'Terrasse élégante', 'Éclairage paysager', 'Massifs fleuris', 'Entretien régulier', 'Aménagement complet']
export default function WorksPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content">
        <p className="kicker">NOS RÉALISATIONS</p>
        <h1 className="hero-title">Des espaces verts pensés<br />pour <em>durer.</em></h1>
        <div className="hero-line" />
        <p className="hero-copy">Une grille simple et cohérente pour présenter les projets, en attendant les vraies photos terrain.</p>
        <div className="page-grid three-col" style={{marginTop:32}}>
          {projects.map((title) => <article className="glass-card padded" key={title}><div className="placeholder-image big-image" /><h3>{title}</h3><span className="muted">Val d’Oise (95)</span></article>)}
        </div>
      </section>
    </main>
  )
}
