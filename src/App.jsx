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
import Portfolioproj1 from './components/PortfolioPage/portfolioProject1'
import Portfolioproj2 from './components/PortfolioPage/portfolioProject2'
import Portfolioproj3 from './components/PortfolioPage/portfolioProject3'
import Portfolioproj4 from './components/PortfolioPage/portfolioProject4'
import Portfolioproj5 from './components/PortfolioPage/portfolioProject5'
import Portfolioproj6 from './components/PortfolioPage/portfolioProject6'
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
        <Route path='/portfolio/project1' element={<Portfolioproj1/>}/>
        <Route path='/portfolio/project2' element={<Portfolioproj2/>}/>
        <Route path='/portfolio/project3' element={<Portfolioproj3/>}/>
        <Route path='/portfolio/project4' element={<Portfolioproj4/>}/>
        <Route path='/portfolio/project5' element={<Portfolioproj5/>}/>
        <Route path='/portfolio/project6' element={<Portfolioproj6/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
