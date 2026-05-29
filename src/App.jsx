const navItems = ['Accueil', 'À propos', 'Services', 'Nos réalisations', 'Horaires', 'Contact']

const sideCards = [
  {
    icon: '◷',
    title: 'Réponse rapide',
    text: 'Nous vous répondons sous 24h ouvrées.',
  },
  {
    icon: '⌘',
    title: 'Devis personnalisé',
    text: 'Un devis clair et détaillé, adapté à vos besoins.',
  },
  {
    icon: '◌',
    title: 'Sans engagement',
    text: 'Demande 100% gratuite et sans engagement.',
  },
]

export default function App() {
  return (
    <main className="contact-page">
      <section className="contact-frame">
        <div className="contact-bg" />
        <div className="contact-photo" />
        <div className="contact-overlay" />

        <header className="contact-header">
          <nav className="contact-nav">
            {navItems.map((item, index) => (
              <a key={item} href="#" className={index === 5 ? 'active' : ''}>
                {item}
              </a>
            ))}
          </nav>

          <a className="top-cta" href="#">Demander un devis <span>→</span></a>
        </header>

        <section className="contact-layout">
          <div className="contact-left">
            <p className="section-kicker">DEMANDE DE DEVIS GRATUIT</p>
            <h1>
              Parlez-nous de votre projet,
              <br />
              nous nous occupons du <em>reste.</em>
            </h1>
            <p className="intro-text">
              Remplissez le formulaire ci-dessous et recevez
              <br />
              une réponse personnalisée sous 24h.
            </p>

            <form className="quote-form">
              <div className="double-grid">
                <label>
                  <span>Nom complet <em>*</em></span>
                  <input type="text" placeholder="Votre nom" />
                </label>

                <label>
                  <span>Email <em>*</em></span>
                  <input type="email" placeholder="votre.email@exemple.com" />
                </label>

                <label>
                  <span>Téléphone <em>*</em></span>
                  <input type="tel" placeholder="06 12 34 56 78" />
                </label>

                <label>
                  <span>Adresse du projet</span>
                  <input type="text" placeholder="Ville, code postal" />
                </label>
              </div>

              <label>
                <span>Type de projet <em>*</em></span>
                <div className="select-wrap">
                  <select defaultValue="">
                    <option value="" disabled>Sélectionnez un type de projet</option>
                    <option>Entretien de jardin</option>
                    <option>Élagage</option>
                    <option>Taille de haies</option>
                    <option>Aménagement</option>
                  </select>
                  <i>⌄</i>
                </div>
              </label>

              <label>
                <span>Budget estimatif</span>
                <div className="select-wrap">
                  <select defaultValue="">
                    <option value="" disabled>Sélectionnez une fourchette</option>
                    <option>Moins de 500€</option>
                    <option>500€ – 1500€</option>
                    <option>1500€ – 3000€</option>
                    <option>3000€ et plus</option>
                  </select>
                  <i>⌄</i>
                </div>
              </label>

              <label>
                <span>Décrivez votre projet <em>*</em></span>
                <textarea rows="5" placeholder="Parlez-nous de vos idées, vos besoins, vos envies..." />
              </label>

              <div className="upload-block">
                <p>Souhaitez-vous ajouter des photos ? (optionnel)</p>
                <div className="upload-drop">
                  <div className="upload-icon">⇪</div>
                  <strong>Glissez vos fichiers ici ou cliquez pour parcourir</strong>
                  <span>Formats acceptés : JPG, PNG (max. 10 Mo)</span>
                </div>
              </div>

              <label className="checkbox-row">
                <input type="checkbox" />
                <span>J’accepte d’être contacté(e) par Aubert Espace Vert concernant ma demande de devis.</span>
              </label>

              <button type="button" className="submit-btn">
                <span>Envoyer ma demande</span>
                <b>→</b>
              </button>

              <div className="privacy-row">
                <div className="privacy-icon">◌</div>
                <p>Vos données sont confidentielles et ne seront jamais partagées.</p>
              </div>
            </form>
          </div>

          <aside className="contact-right">
            {sideCards.map((card) => (
              <article className="side-card" key={card.title}>
                <div className="icon-circle">{card.icon}</div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </article>
            ))}
          </aside>
        </section>
      </section>
    </main>
  )
}
