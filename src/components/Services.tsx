const services = [
  {
    icon: '✂️',
    name: 'Haircut',
    desc: 'Precision cuts tailored to your style — classic to contemporary. Every time, every client.',
  },
  {
    icon: '🪒',
    name: 'Beard Trim',
    desc: 'Sharp lines, clean edges. We shape and groom your beard to complement your look.',
  },
  {
    icon: '💈',
    name: 'Fade',
    desc: 'Low, mid, or high — crisp fades that blend seamlessly and stay fresh.',
  },
  {
    icon: '🪥',
    name: 'Clean Shave',
    desc: 'Hot towel, straight razor, smooth finish. The classic barbershop shave done right.',
  },
  {
    icon: '📐',
    name: 'Shape Up',
    desc: 'Defined edges, clean hairlines. The perfect finish to keep your look sharp.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-dark-mid">
      <div className="section-inner">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Our Services</h2>
        <div className="section-divider" />

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.name} className="service-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="service-card-icon">{s.icon}</div>
              <div className="service-card-body">
                <h3 className="service-card-name">{s.name}</h3>
                <p className="service-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
