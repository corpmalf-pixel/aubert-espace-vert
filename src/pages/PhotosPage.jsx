import NavHeader from '../components/NavHeader'
const photos = Array.from({length: 8}, (_, i) => i + 1)
export default function PhotosPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content">
        <p className="kicker">NOS PHOTOS</p>
        <h1 className="hero-title">L’expertise <em>en images.</em></h1>
        <div className="hero-line" />
        <p className="hero-copy">Galerie prête à recevoir les vraies photos. Pour l’instant, plus aucun bloc cassé ni mise en page incohérente.</p>
        <div className="page-grid four-col" style={{marginTop:32}}>
          {photos.map((n) => <div className="glass-card padded" key={n}><div className="placeholder-image big-image" /></div>)}
        </div>
      </section>
    </main>
  )
}
