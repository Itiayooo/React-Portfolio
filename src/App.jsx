import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero-section/hero-section'
import AboutMe from './components/about-me/about-me'
import Services from './components/services/services'
import Projects from './components/projects/projects'
import Testimonials from './components/testimonials/testimonials'
import Design from './components/lets-design/lets-design'
import Footer from './components/footer/footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>        
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Services />
        <Projects />
        <Testimonials />
        <Design />
        <Footer />
      </div>  
    </>
  )
}

export default App
