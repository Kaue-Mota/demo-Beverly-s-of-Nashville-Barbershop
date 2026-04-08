const reviews = [
  {
    initial: 'D',
    name: 'Dumisani W.',
    body: 'Jan hooked me up — great job on my hair and beard. Great atmosphere, very hospitable. Make this your spot.',
  },
  {
    initial: 'J',
    name: 'Joe',
    body: 'Cecil is a fantastic barber, clearly enjoys what he does. Did a great job taking my hair from 9 inches to a shorter style. Will definitely be back.',
  },
  {
    initial: 'R',
    name: 'Randy B.',
    body: "Cecil is professional, courteous and punctual. He listens and does all he can to ensure you're satisfied. Highly recommend.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-dark-mid">
      <div className="section-inner">
        <p className="section-label">What Clients Say</p>
        <h2 className="section-title">Real Reviews</h2>
        <div className="section-divider" />

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-body">&ldquo;{r.body}&rdquo;</p>
              <div className="review-footer">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-source">Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
