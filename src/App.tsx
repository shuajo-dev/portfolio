import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import EasterEgg from './components/EasterEgg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
     <div className="bg-cream text-charcoal min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <EasterEgg />
        <Footer />
    </div>
  )
}

export default App
