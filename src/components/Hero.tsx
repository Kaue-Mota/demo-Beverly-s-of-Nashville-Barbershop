import BarberPole from './BarberPole'
import heroBg from '../assets/hero.png'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.94 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.5z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
    >
      {/* Dark overlay — separate from the image so cover only applies to the photo */}
      <div className="hero-overlay" aria-hidden="true" />
      {/* Decorative stripes + glow on top */}
      <div className="hero-stripes" aria-hidden="true" />

      <div className="hero-inner">
        {/* Text */}
        <div className="hero-text hero-animate">
          <div className="hero-badge">
            Nashville, TN · Est. Since Day One
          </div>

          <h1 className="hero-title">
            Nashville's<br />
            <span className="hero-title-accent">Neighborhood</span><br />
            Barbershop
          </h1>

          <p className="hero-subtitle">
            Classic cuts, clean fades, and hot towel shaves on Nolensville Pike.
            Walk in or call ahead — barbers Jan &amp; Cecil are ready for you.
          </p>

          <div className="hero-live-badge">
            <span className="live-dot" />
            Barbers Jan &amp; Cecil — serving Nashville daily
          </div>

          <div className="hero-ctas">
            <a href="tel:+16153643956" className="btn-primary">
              <PhoneIcon />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=3306+Nolensville+Pk+Nashville+TN+37211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <PinIcon />
              Get Directions
            </a>
          </div>

          <p className="hero-address">
            📍 3306 Nolensville Pike, Nashville TN 37211
          </p>
        </div>

        {/* Barber Pole — full height of hero, positioned absolutely */}
        <div className="hero-pole-fullheight hero-animate" style={{ animationDelay: '0.5s' }}>
          <BarberPole fullHeight />
        </div>
      </div>
    </section>
  )
}
