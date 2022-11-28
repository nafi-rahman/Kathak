import React from 'react'
import NavBar from './components/nav/NavBar'
import HeroSection from './components/sections/HeroSection'
import FancyText from './components/sections/FancyText'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/sections/Contact'
import Carousel from './components/sections/Carousel'
import Footer from './components/sections/footer'
function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <FancyText/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
