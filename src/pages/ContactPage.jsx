import NavHeader from '../components/NavHeader'

const contactItems = [
  ['◔', '06 12 34 56 78', 'Du lundi au samedi de 8h à 18h'],
  ['✉', 'aubertespacevert95@gmail.com', 'Réponse sous 24h'],
  ['⌖', '78 rue de la Brande,\n95690 Cergy', ''],
  ['◎', '@aubert_espace_vert', 'Suivez-nous sur Instagram'],
]
const proofItems = [
  ['⌂', 'Devis et déplacement\ngratuits'],
  ['⬒', 'Réponse rapide\nsous 24h'],
  ['✺', 'Travail de qualité\net soigné'],
  ['◑', 'À votre service\ntoute l’année'],
]

export default function ContactPage() {
  return (
    <main className="contact-direct-page">
      <section className="contact-direct-frame">
        <div className="contact-direct-bg" />
        <div className="contact-direct-photo" />
        <div className="contact-direct-overlay" />
        <NavHeader className="contact-direct-header" />

        <section className="contact-direct-layout">
          <div className="contact-left-column">
            <p className="section-kicker">CONTACTEZ-NOUS</p>
            <h1>Contactez-nous,<br />nous sommes <em>à votre écoute.</em></h1>
            <p className="intro-text">Vous avez un projet d’aménagement ou d’entretien<br />de vos espaces verts ? Remplissez le formulaire de demande<br />de devis ou contactez-nous directement.</p>

            <div className="contact-list">
              {contactItems.map(([icon, title, text]) => (
                <article className="contact-row" key={title}>
                  <div className="icon-circle">{icon}</div>
                  <div>
                    <h2>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h2>
                    {text ? <p>{text}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="contact-right-column">
            <section className="map-card">
              <div className="map-surface">
                <span className="city city-1">Cergy-le-Haut</span>
                <span className="city city-2">Pontoise</span>
                <span className="city city-3">Eragny</span>
                <span className="city city-4">Jouy-le-Moutier</span>
                <span className="city city-5">Neuville-sur-Oise</span>
                <span className="city city-6">Osny</span>
                <div className="map-pin"><div className="pin-head" /><div className="pin-core" /><strong>Cergy</strong></div>
              </div>
            </section>

            <section className="proof-strip">
              {proofItems.map(([icon, text]) => (
                <article className="proof-card" key={text}><div className="proof-icon">{icon}</div><p>{text.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p></article>
              ))}
            </section>
          </div>
        </section>

        <section className="bottom-panel">
          <div className="panel-left"><div className="icon-circle large">◑</div><div><h2>Prêt à donner vie à votre projet ?</h2><p>Contactez-nous dès maintenant pour en parler.</p></div></div>
          <a className="panel-cta" href="/reservation">Demander un devis <span>→</span></a>
        </section>
      </section>
    </main>
  )
}
