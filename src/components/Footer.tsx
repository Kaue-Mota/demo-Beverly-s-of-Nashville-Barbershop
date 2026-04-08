export default function Footer() {
  return (
    <footer className="bg-[#111] border-t-2 border-[#CC0000] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div
          className="text-lg font-bold"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Beverly's <span className="text-[#CC0000]">of Nashville</span> Barbershop
        </div>

        <a
          href="tel:+16153643956"
          className="text-[#CC0000] hover:text-white transition-colors text-lg font-bold"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          (615) 364-3956
        </a>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Beverly's of Nashville Barbershop. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
