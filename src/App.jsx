const navItems = ['Accueil', 'À propos', 'Services', 'Nos travaux', 'Horaires', 'Contact']

const services = [
  {
    number: '01',
    title: 'Entretien de jardin',
    text: 'Tonte, désherbage, arrosage, fertilisation... Un entretien régulier et rigoureux pour que votre jardin reste impeccable en toute saison.',
    tone: 'mower',
  },
  {
    number: '02',
    title: 'Élagage des arbres',
    text: 'Taille d’éclaircissage, taille sanitaire, abattage, démontage en hauteur. Des interventions sécurisées pour préserver vos arbres et protéger votre propriété.',
    tone: 'tree',
  },
  {
    number: '03',
    title: 'Taille de haies',
    text: 'Taille d’entretien, de formation ou de réduction. Vos haies restent denses, nettes et bien délimitées, quelle que soit leur hauteur ou leur essence.',
    tone: 'hedge',
  },
  {
    number: '04',
    title: 'Tonte de pelouse',
    text: 'Une pelouse tondue régulièrement, au bon niveau, pour un rendu propre et soigné qui valorise immédiatement votre espace extérieur.',
    tone: 'grass',
  },
  {
    number: '05',
    title: 'Désherbage',
    text: 'Suppression manuelle ou traitement des mauvaises herbes pour libérer vos massifs, allées et pelouses — et laisser la place aux végétaux que vous avez choisis.',
    tone: 'weed',
  },
  {
    number: '06',
    title: 'Plantation de fleurs et d’arbustes',
    text: 'Conseils, sélection et mise en terre de végétaux adaptés à votre sol et à vos envies. Pour un jardin qui prend vie et du caractère au fil des saisons.',
    tone: 'flowers',
  },
]

export default function App() {
  return (
    <main className="services-page">
      <section className="services-frame">
        <div className="services-bg" />
        <div className="services-overlay" />

        <header className="services-header">
          <div className="logo-block">
            <span className="logo-title">AUBERT</span>
            <span className="logo-subtitle">ESPACE VERT</span>
          </div>

          <nav className="services-nav">
            {navItems.map((item, index) => (
              <a key={item} href="#" className={index === 2 ? 'active' : ''}>
                {item}
              </a>
            ))}
          </nav>

          <a className="top-cta" href="#">Demander un devis</a>
        </header>

        <section className="hero-copy">
          <p className="section-kicker">NOS SERVICES</p>
          <h1>
            Des prestations complètes
            <br />
            pour un jardin impeccable.
          </h1>
          <p className="hero-text">
            Entretien régulier, tailles, plantations ou aménagements,
            <br />
            nous mettons notre savoir-faire à votre service pour
            <br />
            sublimer vos extérieurs.
          </p>
        </section>

        <section className="services-board">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <div className={`service-image ${service.tone}`} />
              <div className="service-info">
                <div className="service-headline">
                  <span className="service-number">{service.number}</span>
                  <h2>{service.title}</h2>
                </div>
                <p>{service.text}</p>
              </div>
              <a href="#" className="service-btn">En savoir plus</a>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
