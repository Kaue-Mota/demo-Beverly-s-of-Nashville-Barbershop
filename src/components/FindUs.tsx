const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const hours = [
  { day: 'Mon',  time: '9AM – 5PM' },
  { day: 'Tue',  time: '9AM – 6PM' },
  { day: 'Wed',  time: '9AM – 6PM' },
  { day: 'Thu',  time: '9AM – 6PM' },
  { day: 'Fri',  time: '9AM – 6PM' },
  { day: 'Sat',  time: '9AM – 6PM' },
  { day: 'Sun',  time: '10:30AM – 4:30PM' },
]

const DAY_ABBR: Record<string, string> = {
  Sunday: 'Sun', Monday: 'Mon', Tuesday: 'Tue',
  Wednesday: 'Wed', Thursday: 'Thu', Friday: 'Fri', Saturday: 'Sat',
}

export default function FindUs() {
  const todayAbbr = DAY_ABBR[DAYS[new Date().getDay()]]

  return (
    <section id="findus" className="section-dark">
      <div className="section-inner">
        <p className="section-label">Visit Us</p>
        <h2 className="section-title">Find Us</h2>
        <div className="section-divider" />

        <div className="findus-layout">
          {/* Info panel */}
          <div className="findus-info">
            {/* Address + Phone */}
            <div className="info-cards-row">
              <div className="info-card">
                <span className="info-card-icon">📍</span>
                <div>
                  <div className="info-card-label">Address</div>
                  <div className="info-card-value">3306 Nolensville Pike<br />Nashville, TN 37211</div>
                </div>
              </div>
              <div className="info-card">
                <span className="info-card-icon">📞</span>
                <div>
                  <div className="info-card-label">Phone</div>
                  <a href="tel:+16153643956" className="info-card-value info-card-link">
                    (615) 364-3956
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="hours-block">
              <div className="info-card-label" style={{ marginBottom: '0.75rem' }}>Hours</div>
              <div className="hours-grid">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className={`hours-row${day === todayAbbr ? ' hours-row-today' : ''}`}
                  >
                    <span className="hours-day">{day}</span>
                    <span className="hours-time">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=3306+Nolensville+Pk+Nashville+TN+37211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.680702159303!2d-86.74261172419342!3d36.10127077245471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646f62ec28fdef%3A0x5a7f689d7070198a!2sBeverly's%20of%20Nashville%20Barbershop!5e0!3m2!1spt-BR!2sbr!4v1775676135300!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '340px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beverly's of Nashville Barbershop location"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
