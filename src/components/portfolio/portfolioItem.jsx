import React from 'react';





function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      
      
      <motion.a href={link} class="group relative block bg-black">
<img
            src={imgUrl}
            alt="portfolio" 
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-neutral-100">
    {title}
    </p>

    <p class="text-2xl font-bold text-white">...</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
        {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
        </p>
      </div>
    </div>
  </div>
</motion.a>
   )
}

export default PortfolioItem;