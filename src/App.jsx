const services = [
  {
    title: 'Entretien de jardin',
    text: 'Un entretien régulier, propre et rigoureux pour garder un jardin net, sain et agréable toute l’année.',
  },
  {
    title: 'Élagage des arbres',
    text: 'Des interventions techniques et sécurisées pour préserver vos arbres et protéger votre propriété.',
  },
  {
    title: 'Taille de haies',
    text: 'Des haies denses, équilibrées et parfaitement tenues, quelle que soit leur hauteur.',
  },
  {
    title: 'Tonte de pelouse',
    text: 'Une pelouse entretenue au bon rythme pour un rendu propre qui valorise immédiatement l’extérieur.',
  },
  {
    title: 'Désherbage',
    text: 'Des extérieurs plus nets, plus sains et plus lisibles grâce à une suppression ciblée des mauvaises herbes.',
  },
  {
    title: 'Plantation de fleurs et d’arbustes',
    text: 'Des végétaux adaptés à votre terrain et à vos envies pour donner plus de vie et de caractère au jardin.',
  },
]

const highlights = [
  '4,9/5 sur 210 avis',
  'Déplacement et devis 100% gratuits',
  'Assurance professionnelle',
  'Paiement en plusieurs fois sans frais',
  'Carte bancaire acceptée',
  'Intervention rapide et urgence possible',
]

const works = [
  'Remise en état de jardins privés',
  'Taille de haies et structuration d’espaces',
  'Élagage et sécurisation des arbres',
  'Entretiens saisonniers réguliers',
]

const gallery = [
  'Massifs nettoyés et remis en valeur',
  'Haies retravaillées avec finition nette',
  'Pelouses entretenues avec rendu homogène',
  'Espaces extérieurs clarifiés et structurés',
  'Arbustes plantés pour créer du relief',
  'Interventions techniques sécurisées',
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">AE</span>
          <div>
            <strong>Aubert Espace Vert</strong>
            <p>Entreprise familiale depuis 1989</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#apropos">À propos</a>
          <a href="#travaux">Nos travaux</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="cta cta-nav" href="#reservation">Demander un devis</a>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Espaces verts · Cergy · Val-d’Oise</p>
            <h1>Un extérieur propre, net et rassurant, entretenu par une entreprise familiale reconnue.</h1>
            <p className="hero-text">
              Aubert Espace Vert intervient autour de Cergy dans un rayon de 60 km pour l’entretien de
              jardin, la taille de haies, l’élagage, la tonte et la plantation, avec une grande réactivité
              et un devis 100% gratuit.
            </p>

            <div className="hero-actions">
              <a className="cta" href="#reservation">Obtenir un devis gratuit</a>
              <a className="cta secondary" href="#services">Voir les services</a>
            </div>

            <div className="proof-band">
              <span>4,9/5 sur 210 avis</span>
              <span>Devis et déplacement gratuits</span>
              <span>Intervention rapide</span>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="metric-card">
              <p className="metric-label">Zone d’intervention</p>
              <strong>60 km autour de Cergy</strong>
              <span>95 · 92 · 93 · 78 · 60 · 27</span>
            </div>
            <div className="metric-card accent-card">
              <p className="metric-label">Disponibilité</p>
              <strong>Prise de rendez-vous rapide</strong>
              <span>Urgence possible selon besoin</span>
            </div>
          </aside>
        </section>

        <section className="section trust-strip">
          {highlights.map((item) => (
            <div className="trust-item" key={item}>{item}</div>
          ))}
        </section>

        <section className="section split" id="apropos">
          <div>
            <p className="section-tag">À propos</p>
            <h2>Une entreprise transmise, un savoir-faire qui reste proche du terrain.</h2>
            <p>
              Fondée en 1989, Aubert Espace Vert s’est construite sur une logique simple : intervenir vite,
              travailler proprement et laisser un résultat visible dès la fin du chantier. En 2005, l’activité
              est reprise par le fils, avec la même exigence de sérieux et de proximité.
            </p>
            <p>
              Le site doit refléter cette posture : une entreprise locale, humaine, rassurante, mais plus nette
              et plus crédible que le standard visuel habituel du secteur.
            </p>
          </div>

          <div className="timeline-card">
            <div>
              <span>1989</span>
              <p>Création de l’entreprise familiale</p>
            </div>
            <div>
              <span>2005</span>
              <p>Transmission père → fils</p>
            </div>
            <div>
              <span>Aujourd’hui</span>
              <p>Interventions rapides, forte note client, image plus premium et plus claire</p>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <div>
              <p className="section-tag">Services</p>
              <h2>Des prestations utiles, claires et pensées pour garder un extérieur propre toute l’année.</h2>
            </div>
            <p>
              Chaque service est présenté de manière simple, avec un bénéfice direct pour le client : propreté,
              sécurité, régularité, gain de temps et valorisation de la propriété.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-index">Service</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section showcase" id="travaux">
          <div className="section-head">
            <div>
              <p className="section-tag">Nos travaux</p>
              <h2>Des réalisations qui doivent montrer le sérieux, pas juste occuper de l’espace.</h2>
            </div>
            <p>
              En attendant les vraies photos du projet, la structure est prête pour accueillir une galerie de
              chantiers et de résultats avant / après.
            </p>
          </div>

          <div className="works-grid">
            {works.map((item, index) => (
              <div className="work-card" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section info-band" id="horaires">
          <div className="hours-card">
            <p className="section-tag">Horaires</p>
            <h2>Des horaires larges pour faciliter la prise de contact.</h2>
            <ul>
              <li><strong>Lundi – Vendredi</strong><span>8h00 – 21h00</span></li>
              <li><strong>Samedi</strong><span>8h30 – 20h30</span></li>
            </ul>
          </div>

          <div className="practical-card">
            <p className="section-tag">Infos pratiques</p>
            <h2>Intervention locale, contact rapide, devis sans engagement.</h2>
            <p>12 Rue de la Bastide, 95800 Cergy</p>
            <p>06 26 67 72 70 · aubertteddy613@gmail.com</p>
            <p>Facebook : facebook.com/aubertespacevert</p>
          </div>
        </section>

        <section className="section reservation" id="reservation">
          <div className="reservation-copy">
            <p className="section-tag">Réservation / Devis</p>
            <h2>Expliquez votre besoin, on vous rappelle rapidement.</h2>
            <p>
              Le formulaire est volontairement simple pour limiter la friction : besoin, localisation, coordonnées,
              et demande de rappel. La logique ici est d’obtenir un premier contact facile.
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Nom / prénom" />
            <input type="tel" placeholder="Téléphone" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Ville / secteur" />
            <select defaultValue="">
              <option value="" disabled>Service recherché</option>
              <option>Entretien de jardin</option>
              <option>Élagage des arbres</option>
              <option>Taille de haies</option>
              <option>Tonte de pelouse</option>
              <option>Désherbage</option>
              <option>Plantation</option>
            </select>
            <textarea rows="5" placeholder="Décrivez votre besoin"></textarea>
            <button className="cta" type="button">Demander mon devis gratuit</button>
            <p className="form-note">Déplacement gratuit · Réponse rapide · Sans engagement</p>
          </form>
        </section>

        <section className="section" id="galerie">
          <div className="section-head">
            <div>
              <p className="section-tag">Galerie photo</p>
              <h2>Une structure prête à accueillir les vraies photos du terrain.</h2>
            </div>
            <p>
              Dès que tu m’envoies les photos, je pourrai transformer cette base en galerie réelle cohérente avec le niveau premium du site.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-tile" key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <strong>Aubert Espace Vert</strong>
          <p>Entreprise familiale · Cergy · Interventions locales</p>
        </div>
        <div>
          <p>06 26 67 72 70</p>
          <p>aubertteddy613@gmail.com</p>
        </div>
        <div>
          <p>12 Rue de la Bastide, 95800 Cergy</p>
          <p>Devis et déplacement gratuits</p>
        </div>
      </footer>
    </div>
  )
}
