import NavHeader from '../components/NavHeader'

const services = [
  ['01', 'Entretien de jardin', 'Tonte, désherbage, arrosage, fertilisation... Un entretien régulier et rigoureux pour que votre jardin reste impeccable en toute saison.', 'mower'],
  ['02', 'Élagage des arbres', 'Taille d’éclaircissage, taille sanitaire, abattage, démontage en hauteur. Des interventions sécurisées pour préserver vos arbres et protéger votre propriété.', 'tree'],
  ['03', 'Taille de haies', 'Taille d’entretien, de formation ou de réduction. Vos haies restent denses, nettes et bien délimitées, quelle que soit leur hauteur ou leur essence.', 'hedge'],
  ['04', 'Tonte de pelouse', 'Une pelouse tondue régulièrement, au bon niveau, pour un rendu propre et soigné qui valorise immédiatement votre espace extérieur.', 'grass'],
  ['05', 'Désherbage', 'Suppression manuelle ou traitement des mauvaises herbes pour libérer vos massifs, allées et pelouses — et laisser la place aux végétaux que vous avez choisis.', 'weed'],
  ['06', 'Plantation de fleurs et d’arbustes', 'Conseils, sélection et mise en terre de végétaux adaptés à votre sol et à vos envies. Pour un jardin qui prend vie et du caractère au fil des saisons.', 'flowers'],
]

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-frame">
        <div className="services-bg" />
        <div className="services-overlay" />
        <NavHeader className="services-header" />

        <section className="hero-copy">
          <p className="section-kicker">NOS SERVICES</p>
          <h1>Des prestations complètes<br />pour un jardin impeccable.</h1>
          <p className="hero-text">
            Entretien régulier, tailles, plantations ou aménagements,<br />
            nous mettons notre savoir-faire à votre service pour<br />
            sublimer vos extérieurs.
          </p>
        </section>

        <section className="services-board">
          {services.map(([number, title, text, tone]) => (
            <article className="service-row" key={number}>
              <div className={`service-image ${tone}`} />
              <div className="service-info">
                <div className="service-headline">
                  <span className="service-number">{number}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text}</p>
              </div>
              <a href="#" className="service-btn">En savoir plus</a>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
