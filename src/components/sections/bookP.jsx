import React from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

export default function Bookp() {
    
    return (
        <div className="grid grid-rows-2  bg-[#83aab4] pt-20">
    
        <div className="grid grid-row-2 gap-4 place-content-center h-48">
            <h1 className="tracing-widest text-5xl font-playfair text-[#0e191f] text-center">B&nbsp;O&nbsp;O&nbsp;K&nbsp;&nbsp; A &nbsp;&nbsp;P&nbsp;R&nbsp;O&nbsp;J&nbsp;E&nbsp;C&nbsp;T&nbsp;</h1>
            <h1 className="tracing-widest text-5xl font-playfair text-[#0e191f] text-center">W&nbsp;I&nbsp;T&nbsp;H&nbsp;&nbsp; K&nbsp;A&nbsp;T&nbsp;H&nbsp;A&nbsp;K</h1>
            <br></br>
        </div>  
        <motion.a className="w-full relative block overflow-hidden  bg-[url('/assets/documentary.jpg')] bg-cover bg-center bg-no-repeat"
            whileHover={{ scale: 1.01,opacity: 0.9 }}
        >
        <Link to="/modal">
        <div className="relative bg-[#0e191f] bg-opacity-40 p-8 pt-40 text-white">
          <h3 className="text-4xl font-bold text-center font-playfair">D&nbsp;O&nbsp;C&nbsp;U&nbsp;M&nbsp;E&nbsp;N&nbsp;T&nbsp;A&nbsp;R&nbsp;Y</h3>
        </div>
        </Link>
      </motion.a>
      
      <Link to="/modalFilm">
      <motion.a href="#" className="w-full relative block overflow-hidden  bg-[url('/assets/fiction.jpg')] bg-cover bg-center bg-no-repeat"
         whileHover={{ scale: 1.01,opacity: 0.9 }}
      >
        
        <div className="relative bg-[#0e191f] bg-opacity-40 p-8 pt-40 text-white">
          <h3 className="text-4xl font-bold text-center font-playfair">F&nbsp;I&nbsp;C&nbsp;T&nbsp;I&nbsp;O&nbsp;N</h3>
          
        </div>
      </motion.a>
      </Link>

      <Link to="/modalShort">
      <motion.a href="#" className="w-full relative block overflow-hidden  bg-[url('/assets/commercial.jpg')] bg-cover bg-center bg-no-repeat"
         whileHover={{ scale: 1.01,opacity: 0.9 }}
      >
        
        <div className="relative bg-[#0e191f] bg-opacity-40 p-8 pt-40 text-white">
          <h3 className="text-4xl font-bold text-center font-playfair">C&nbsp;O&nbsp;M&nbsp;M&nbsp;E&nbsp;R&nbsp;C&nbsp;I&nbsp;A&nbsp;L</h3>
          
        </div>
      </motion.a>
      </Link>
        </div>
        
    );
}