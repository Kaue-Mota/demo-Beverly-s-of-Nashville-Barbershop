const stats = [
  { number: '5★', label: 'Google Rating' },
  { number: '2', label: 'Expert Barbers' },
  { number: '7', label: 'Days a Week' },
]

export default function About() {
  return (
    <section id="about" className="section-dark">
      <div className="section-inner">
        <p className="section-label">Our Story</p>
        <h2 className="section-title">
          Community First,{' '}
          <span style={{ color: '#CC0000' }}>Always</span>
        </h2>
        <div className="section-divider" />

        <div className="about-layout">
          {/* Text block */}
          <div className="about-text-col">
            <p className="about-body">
              Beverly's of Nashville is a welcoming, community barbershop on Nolensville Pike. Our barbers Jan and Cecil take pride in every cut — from classic fades to hot towel shaves.
            </p>
            <p className="about-body">
              Hospitable, professional, and always focused on making you look your best. Whether it's your first visit or your hundredth, you'll leave looking sharp and feeling great.
            </p>

            {/* Stats */}
            <div className="stats-row">
              {stats.map((s) => (
                <div key={s.label} className="stat-block">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote panel */}
          <div className="about-quote-panel">
            <div className="about-quote-mark">&ldquo;</div>
            <p className="about-quote-text">
              Our barbers take pride in every single cut. You'll always leave looking sharp.
            </p>
            <div className="about-quote-footer">
              <div className="about-quote-line" />
              <span className="about-quote-name">Jan &amp; Cecil</span>
              <span className="about-quote-role">Beverly's Barbershop</span>
            </div>

            {/* Barber names */}
            <div className="barbers-list">
              <div className="barber-chip">✂️ Jan</div>
              <div className="barber-chip">✂️ Cecil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
