import logo  from "../assets/logo.png"

const links = [
    {href: '#projects', label: "Work"},
    {href: '#about', label: "About"},
    {href: '#contact', label: "Contact"},
]

function Navbar(){

    return(
       <nav className="sticky top-0 z-40 bg-cream/80 backdrop-blur-sm border-b border-stone/40">
            <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
                <a href="#" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-8"/>
                </a>

                <div className="flex gap-8 font-body text-sm">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-charcoal hover:text-deep-green hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded"

                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar