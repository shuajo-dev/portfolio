function Contact() {
  return (
    <section className="py-20 px-8 bg-deep-green text-cream text-center">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-stone mb-4">
        Always Open to Opportunities
        </p>
        <h2 className="font-heading text-4xl font-bold mb-8">
        Say Hello
        </h2>
      <div className="flex justify-center gap-8 font-body">
        <a
          href="mailto:joshua.cabatan@proton.me"
          className="underline hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-deep-green rounded"
        >
          joshua.cabatan@proton.me
        </a>
        <a
          href="https://github.com/shuajo-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-deep-green rounded"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shuajo/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sage transition-colors focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-deep-green rounded"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact