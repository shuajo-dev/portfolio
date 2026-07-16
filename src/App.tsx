import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  

  return (
     <div className="bg-cream text-charcoal min-h-screen">
        <Hero />
        <Projects />
        <About />
    </div>
  )
}

export default App
