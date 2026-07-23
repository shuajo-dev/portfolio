function Contact() {
  return (
    <section className="py-20 px-8 bg-deep-green text-cream text-center" id="contact">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-stone mb-4">
        Always Open to Opportunities
      </p>
      <h2 className="font-heading text-4xl font-bold mb-8">
        Say Hello
      </h2>
      <a
        href="mailto:joshua.cabatan@proton.me?subject=Portfolio%20Inquiry"
        className="inline-flex items-center gap-2 font-body text-base font-medium bg-cream text-deep-green px-6 py-3 rounded-full hover:bg-sage hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green"
      >
        joshua.cabatan@proton.me
      </a>
      <div className="flex justify-center flex-wrap gap-6 mt-8 font-body text-sm text-cream/70">
        <a
          href="https://github.com/shuajo-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green rounded"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shuajo/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green rounded"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact