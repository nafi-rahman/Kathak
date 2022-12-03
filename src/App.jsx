import React from 'react'
import NavBar from './components/nav/NavBar'
import Footer from './components/sections/footer'
import { Route,Routes, Router } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/aboutus'
import Contact from './components/pages/contact'
import Portfoliop from './components/pages/Portfoliop'
function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfoliop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
