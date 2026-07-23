const highlights = [
  "Built a golf course booking and membership management system with a Filament CMS and PayMongo payment integration, structured as a monorepo and deployed as two independent apps on Cloudways.",
  "Engineered a large-scale distribution and claim-tracking system serving 170k+ beneficiary records across 52 locations, with a live dashboard, a public claim-status portal, and real-time deduplication logic for data finalized only at go-live.",
  "Led development of a volunteer management platform with scoped event access and reporting, then took over solo ownership of its second phase, adding multi-day scheduling, modernizing public pages, and resolving inherited technical debt.",
  "Took over solo ownership of a health patient management system's later phases, replacing synchronous bulk PDF generation with queued background jobs and fixing N+1 query issues, plus adding 2FA/SMS OTP-secured patient portals.",

  
]

const stack = [
  { label: "Languages", items: "PHP, TypeScript, JavaScript, CSS" },
  { label: "Frameworks", items: "Laravel, React, Tailwind" },
  { label: "Tools", items: "AWS, DigitalOcean, Cloudways, Docker, GitHub, Postman" },
]

function About() {
  return (
    <section className="py-20 px-8 max-w-4xl mx-auto" id="about">
      <h2 className="font-heading text-4xl font-bold text-deep-green text-center mb-8">
        About
      </h2>
      <p className="font-body text-charcoal text-lg mb-10 text-center">
        Software Engineer with 7 years designing and building Laravel applications,
        internal tools, and web systems across multiple domains.
      </p>
      <p className="font-body text-xs uppercase tracking-[0.2em] text-sage text-center mb-6">
        Recent Highlights
        </p>
      <ul>
        {highlights.map((point, i) => (
          <li
            key={point}
            className="flex gap-6 py-5 border-b border-stone/40 last:border-b-0"
          >
            <span className="font-heading text-lg font-bold text-sage shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="font-body text-charcoal leading-relaxed">
              {point}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-stone/40">
        {stack.map((group) => (
          <div key={group.label}>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-sage mb-2">
              {group.label}
            </p>
            <p className="font-body text-charcoal text-justify">{group.items}</p>
          </div>
        ))}
      </div>

      <p className="font-body text-sm text-charcoal/60 text-center mt-12 italic">
       Fun fact: when I'm not shipping code, I'm chasing a new PR on a run, riding motorcycles, or mixing fountain pen inks.
      </p>
    </section>
  )
}

export default About