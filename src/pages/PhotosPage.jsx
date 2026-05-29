import NavHeader from '../components/NavHeader'

const filters = ['Tous', 'Entretien', 'Élagage', 'Aménagement', 'Plantations']
const photos = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

export default function PhotosPage() {
  return (
    <main className="gallery-page">
      <section className="gallery-frame">
        <div className="gallery-bg" />
        <div className="gallery-overlay" />
        <NavHeader className="gallery-header" />

        <section className="gallery-hero">
          <div>
            <p className="section-kicker">NOS PHOTOS</p>
            <h1>L’expertise <em>en images.</em></h1>
            <div className="accent-line" />
            <p className="hero-text">Découvrez en photos la qualité de nos réalisations<br />et le soin que nous apportons à chaque détail.</p>
          </div>
          <div className="filter-row">
            {filters.map((filter, index) => (
              <a href="#" key={filter} className={index === 0 ? 'filter-pill active' : 'filter-pill'}>{filter}</a>
            ))}
          </div>
        </section>

        <section className="photo-grid">
          {photos.map((tone) => (
            <article className={`photo-card ${tone}`} key={tone}><div className="photo-image" /></article>
          ))}
        </section>

        <section className="bottom-panel">
          <div className="panel-left"><div className="icon-circle">⌔</div><div><h2>Un projet en tête ?</h2><p>Inspirez-vous de nos réalisations et parlons du vôtre.</p></div></div>
          <a className="panel-cta" href="/reservation">Demander un devis <span>→</span></a>
        </section>
      </section>
    </main>
  )
}
