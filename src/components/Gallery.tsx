import cut1 from '../assets/images/529862907_1321226870005135_5936371059663540321_n.jpg'
import cut2 from '../assets/images/529230912_1321226923338463_718557306019829871_n.jpg'
import cut3 from '../assets/images/530751392_1321226890005133_4113771752891963485_n.jpg'
import cut4 from '../assets/images/529718975_1321226943338461_93342150321565443_n.jpg'
import cut5 from '../assets/images/490745350_1219444520183371_5707712643227717230_n.jpg'
import cut6 from '../assets/images/490924927_1219444623516694_8279315145252397328_n.jpg'
import cut7 from '../assets/images/490748750_1219444586850031_204144644685336664_n.jpg'
import cut8 from '../assets/images/484315196_1187219836739173_1579769091065748041_n.jpg'
import cut9 from '../assets/images/483562287_1187219570072533_2232523802387922129_n.jpg'

// Barbershop interior — replace with a real photo of Beverly's when available
const SHOP_IMG = 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=85'

const cuts = [cut1, cut2, cut3, cut4, cut5, cut6, cut7, cut8, cut9]

export default function Gallery() {
  return (
    <section id="gallery" className="section-dark">
      <div className="section-inner">
        <p className="section-label">Our Work</p>
        <h2 className="section-title">Gallery</h2>
        <div className="section-divider" />

        {/* Shop feature image */}
        <div className="gallery-feature">
          <img
            src={SHOP_IMG}
            alt="Beverly's of Nashville Barbershop — interior"
            className="gallery-feature-img"
          />
          <div className="gallery-feature-overlay">
            <p className="gallery-feature-label">Beverly's of Nashville</p>
            <p className="gallery-feature-sub">3306 Nolensville Pike</p>
          </div>
        </div>

        {/* Cuts grid */}
        <div className="gallery-grid">
          {cuts.map((src, i) => (
            <div key={i} className="gallery-item">
              <img
                src={src}
                alt={`Beverly's of Nashville — cut ${i + 1}`}
                className="gallery-item-img"
                loading="lazy"
              />
              <div className="gallery-item-hover">
                <span className="gallery-item-icon">✂️</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
