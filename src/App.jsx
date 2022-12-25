import React from 'react'
import NavBar from './components/nav/NavBar'
import Footer from './components/sections/footer'
import { Route,Routes, Router } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/aboutus'
import Contact from './components/pages/contact'
import Portfoliop from './components/pages/Portfoliop'
import Modal from './components/sections/modal'
import Modalfilm from './components/sections/modalFilm'
import Modalshort from './components/sections/modalShort'
import PortfolioPage from './components/portfolio/portfoliopage'
function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfoliop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/modalFilm' element={<Modalfilm/>}/>
        <Route path='/modalShort' element={<Modalshort/>}/>
        <Route path="/project/:projectId" element={<PortfolioPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
