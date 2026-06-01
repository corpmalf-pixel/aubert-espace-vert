import NavHeader from '../components/NavHeader'
const schedule = [['Lun - Ven','8h - 18h'],['Sam','8h - 12h30']]
export default function HoursPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" /><div className="page-overlay" />
      <NavHeader className="page-header" />
      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">NOS HORAIRES</p>
          <h1 className="hero-title">Toujours disponibles<br />pour vos <em>espaces verts.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">Des horaires larges pour faciliter la prise de contact et la planification des interventions.</p>
        </div>
        <div className="glass-card padded">
          <h3>Horaires d’ouverture</h3>
          <div className="list-rows">
            {schedule.map(([day, hours]) => <div className="row-item" key={day}><div className="icon-dot">◷</div><div><strong>{day}</strong><span className="muted">{hours}</span></div></div>)}
          </div>
        </div>
      </section>
    </main>
  )
}
