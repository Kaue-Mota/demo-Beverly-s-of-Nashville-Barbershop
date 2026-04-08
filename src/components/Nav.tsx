export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16"
      style={{
        background: 'rgba(26,26,26,0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid #CC0000',
      }}
    >
      <div
        className="text-xl font-bold tracking-wide"
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        Beverly's <span className="text-[#CC0000]">of Nashville</span>
      </div>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {[
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'Reviews', href: '#testimonials' },
          { label: 'Find Us', href: '#findus' },
        ].map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-xs font-medium tracking-widest uppercase text-gray-200 hover:text-[#CC0000] transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="tel:+16153643956"
            className="text-xs font-bold tracking-widest uppercase text-white bg-[#CC0000] hover:bg-[#C44D03] px-4 py-2 rounded transition-colors"
          >
            Call Now
          </a>
        </li>
      </ul>
    </nav>
  )
}
