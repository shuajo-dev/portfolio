import headshot from '../assets/josh-headshot.jpg'

function Hero(){
    return(
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-cream px-8">
      {/* Details */}
      <div className="max-w-xl">
        <h1 className="font-heading text-5xl font-bold text-deep-green">
          Joshua Cabatan
        </h1>
        <p className="font-body text-xl text-sage mt-2">
          Software Engineer
        </p>
        <p className="font-body text-charcoal mt-6">
        7 years building web apps. Currently expanding into React to build Pacer, a running app that's part training log, part game.
        </p>

      </div>

      {/* Profile Image */}
      <img
        src={headshot}
        alt="Joshua Cabatan"
        className="w-64 h-64 rounded-full object-cover border-4 border-deep-green"
      />
    </section>
    )
}

export default Hero