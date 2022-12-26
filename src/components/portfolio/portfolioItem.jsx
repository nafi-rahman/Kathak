import React from 'react';
import { motion } from 'framer-motion';




function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      
      
      <motion.a  whileHover={{scale: 1.02}} href="#" className="group relative block bg-black">
<img
            src={imgUrl}
            alt="portfolio" 
    class="absolute inset-0 h-full w-full object-cover  opacity-75 transition-opacity group-hover:opacity-50 "
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-wide text-neutral-50 font-playfair h-12">
    {title}
    </p>


    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white h-12 mb-10">
       
        <p className="mt-4 text-sm text-neutral-50 font-Source">
          {stack}
        </p>
            
        </p>
      </div>
    </div>
  </div>
</motion.a>
   )
}

export default PortfolioItem;