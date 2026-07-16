function Contact() {
  return (
    <section className="py-20 px-8 bg-deep-green text-cream text-center">
      <h2 className="font-heading text-4xl font-bold mb-4">
        Get In Touch
      </h2>
      <p className="font-body text-stone mb-8">
        Always Open to opportunities
      </p>
      <div className="flex justify-center gap-8 font-body">
        <a
          href="mailto:joshua.cabatan@proton.me"
          className="underline hover:text-sage transition-colors"
        >
          joshua.cabatan@proton.me
        </a>
        <a
          href="https://github.com/shuajo-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sage transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shuajo/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sage transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact