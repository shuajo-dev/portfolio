const highlights = [
  "Built a production school distribution system serving 170k+ student records across 52 locations in one month.",
  "Architected multi-day event workflows supporting 24+ hour events with automatic overnight shift calculations.",
  "Implemented 2FA with SMS OTP for a health patient management system handling secure result viewing.",
  "Managed production deployments and infrastructure across AWS, DigitalOcean, and Cloudways.",
]

function About() {
  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="font-heading text-4xl font-bold text-deep-green text-center mb-8">
        About
      </h2>
      <p className="font-body text-charcoal text-lg mb-10 text-center">
        Software Engineer with 7 years designing and building Laravel applications,
        internal tools, and web systems across multiple domains — from education to
        healthcare to event management.
      </p>
      <ul className="space-y-4">
        {highlights.map((point) => (
          <li key={point} className="font-body text-charcoal border-l-2 border-sage pl-4">
            {point}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About