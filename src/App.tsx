import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import EasterEgg from './components/EasterEgg'

function App() {
  

  return (
     <div className="bg-cream text-charcoal min-h-screen">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <EasterEgg />
    </div>
  )
}

export default App
