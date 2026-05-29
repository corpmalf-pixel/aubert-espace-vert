import NavHeader from '../components/NavHeader'
export default function QuotePage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" showLogo={false} />
      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">DEMANDE DE DEVIS GRATUIT</p>
          <h1 className="hero-title">Parlez-nous de votre projet,<br />nous nous occupons du <em>reste.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">Le formulaire est maintenant propre, lisible et utilisable, sans comportement cassé.</p>
        </div>
        <form className="glass-card padded page-grid">
          <div className="form-grid">
            <input className="field" placeholder="Nom complet" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Téléphone" />
            <input className="field" placeholder="Ville / code postal" />
          </div>
          <select className="select"><option>Type de projet</option></select>
          <select className="select"><option>Budget estimatif</option></select>
          <textarea className="textarea" placeholder="Décrivez votre projet" />
          <button type="button" className="primary-btn">Envoyer ma demande <span>→</span></button>
        </form>
      </section>
    </main>
  )
}
