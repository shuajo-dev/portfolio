function Footer(){

    const year = new Date().getFullYear()

    return (
        <footer className="py-8 px-8 bg-deep-green text-cream/60 border-t border-cream/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between font-body text-xs">
            <p>© {year} Joshua Cabatan</p>
            <a
            href="#"
            className="hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deep-green rounded"
            >
            Back to top
            </a>
        </div>
        </footer>
    )

}

export default Footer