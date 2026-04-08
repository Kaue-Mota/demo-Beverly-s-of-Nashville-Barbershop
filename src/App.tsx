import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.94 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.5z" />
    </svg>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FindUs />
      </main>
      <Footer />

      {/* Floating Call Button — mobile only */}
      <a
        href="tel:+16153643956"
        className="float-call fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-2 bg-[#CC0000] text-white font-bold uppercase tracking-wide px-8 py-3.5 rounded-full shadow-[0_6px_24px_rgba(204,0,0,0.6)] whitespace-nowrap"
        style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1rem' }}
      >
        <PhoneIcon />
        Call Now — (615) 364-3956
      </a>
    </>
  )
}
