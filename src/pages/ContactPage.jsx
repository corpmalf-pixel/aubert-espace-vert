import NavHeader from '../components/NavHeader'
const infos = [
  ['Téléphone', '06 26 67 72 70'],
  ['Email', 'aubertteddy613@gmail.com'],
  ['Adresse', '12 Rue de la Bastide, 95800 Cergy'],
  ['Facebook', 'facebook.com/aubertespacevert'],
]
const proofs = ['Devis et déplacement gratuits', 'Réponse rapide', 'Travail soigné', 'Service toute l’année']
export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">CONTACTEZ-NOUS</p>
          <h1 className="hero-title">Contactez-nous,<br />nous sommes <em>à votre écoute.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">Les informations de contact sont maintenant propres et directement lisibles.</p>
          <div className="list-rows" style={{marginTop:28}}>
            {infos.map(([label, value]) => <div className="row-item" key={label}><div className="icon-dot">◌</div><div><strong>{label}</strong><span className="muted">{value}</span></div></div>)}
          </div>
        </div>
        <div className="page-grid">
          <div className="glass-card padded"><div className="map-box"><div className="map-pin" /></div></div>
          <div className="proof-grid">
            {proofs.map((item) => <article className="proof-item" key={item}><strong>{item}</strong></article>)}
          </div>
        </div>
      </section>
    </main>
  )
}
