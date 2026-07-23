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
                    <img src={logo} alt="Logo" className="h-12 w-12"/>
                </a>

                <div className="flex items-center gap-8 font-body text-sm">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-charcoal hover:text-deep-green hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded"

                        >
                            {link.label}
                        </a>
                    ))}
                        <a
                        href="https://drive.proton.me/urls/0J6JNYAM2W#o4pBAolgod0j"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium border border-deep-green text-deep-green px-4 py-1.5 rounded-full hover:bg-deep-green hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                        >
                        Download CV
                        </a>
                    
                </div>
               
            </div>
        </nav>
    )
}

export default Navbar