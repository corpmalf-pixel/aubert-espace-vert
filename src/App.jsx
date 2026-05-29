const navItems = ['Accueil', 'À propos', 'Services', 'Nos réalisations', 'Horaires', 'Contact']

const schedule = [
  ['Lundi', '08:00 – 18:00'],
  ['Mardi', '08:00 – 18:00'],
  ['Mercredi', '08:00 – 18:00'],
  ['Jeudi', '08:00 – 18:00'],
  ['Vendredi', '08:00 – 18:00'],
  ['Samedi', '09:00 – 13:00', true],
  ['Dimanche', 'Fermé'],
]

export default function App() {
  return (
    <main className="hours-page">
      <section className="hours-frame">
        <div className="hours-bg" />
        <div className="hours-photo" />
        <div className="hours-overlay" />

        <header className="hours-header">
          <div className="logo-block">
            <span className="logo-title">AUBERT</span>
            <span className="logo-subtitle">ESPACE VERT</span>
          </div>

          <nav className="hours-nav">
            {navItems.map((item, index) => (
              <a key={item} href="#" className={index === 4 ? 'active' : ''}>
                {item}
              </a>
            ))}
          </nav>

          <a className="top-cta" href="#">Demander un devis <span>→</span></a>
        </header>

        <section className="hours-layout">
          <div className="hours-left">
            <p className="section-kicker">NOS HORAIRES</p>
            <h1>
              Toujours disponibles
              <br />
              pour vos <em>espaces verts.</em>
            </h1>
            <div className="accent-line" />
            <p className="intro-text">
              Notre équipe est à votre écoute toute la semaine
              <br />
              pour concrétiser vos projets d’aménagement et d’entretien.
            </p>

            <div className="info-stack">
              <article className="info-card">
                <div className="icon-circle">◷</div>
                <div>
                  <h2>Interventions flexibles</h2>
                  <p>Des créneaux adaptés à vos besoins, du lundi au samedi.</p>
                </div>
              </article>

              <article className="info-card">
                <div className="icon-circle">⌘</div>
                <div>
                  <h2>Devis et conseils</h2>
                  <p>Nos experts répondent à vos demandes pendant nos heures d’ouverture.</p>
                </div>
              </article>
            </div>

            <a className="hero-btn" href="#">Demander un devis <span>→</span></a>
          </div>

          <div className="hours-right">
            <section className="schedule-card">
              <div className="schedule-head">
                <div className="icon-ring">◷</div>
                <h2>Horaires d’ouverture</h2>
              </div>

              <div className="schedule-list">
                {schedule.map(([day, value, accent]) => (
                  <div className="schedule-row" key={day}>
                    <span>{day}</span>
                    <strong className={accent ? 'highlight' : value === 'Fermé' ? 'closed' : ''}>{value}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="contact-strip">
              <div className="contact-left">
                <div className="icon-circle small">⌁</div>
                <div>
                  <h3>Urgence ou demande spécifique ?</h3>
                  <p>Contactez-nous, nous intervenons rapidement.</p>
                </div>
              </div>
              <a href="tel:0612345678" className="phone-link">06 12 34 56 78</a>
            </section>
          </div>
        </section>
      </section>
    </main>
  )
}
