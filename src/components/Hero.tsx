import headshot from '../assets/josh-headshot.jpg'

function Hero(){
    return(
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 bg-cream px-8 md:px-16 max-w-6xl mx-auto">
      {/* Details */}
        <div className="max-w-xl">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-sage mb-4">
            Software Engineer
        </p>
        <h1 className="font-heading text-6xl md:text-7xl font-bold text-deep-green leading-[0.95] tracking-tight">
            Joshua Cabatan
        </h1>
        <p className="font-body text-charcoal mt-6 text-lg leading-relaxed">
            7 years building web apps. Currently expanding into React to build Pacer, a running app that's part training log, part game.
        </p>
        </div>

      {/* Profile Image */}
      <img
        src={headshot}
        alt="Joshua Cabatan"
       className="w-40 md:w-72 h-40 md:h-72 rounded-2xl object-cover border-4 border-deep-green"
      />
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage animate-bounce">
        <span className="font-body text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span>↓</span>
    </div>
    </section>
    )
}

export default Hero