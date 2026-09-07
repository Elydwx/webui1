import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Edge from './components/Edge.jsx'
import Contact from './components/Contact.jsx'
import { useMotion } from './hooks/useReveal.js'

export default function App() {
  useMotion()

  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Works />
        <Edge />
        <Contact />
      </main>
    </div>
  )
}
