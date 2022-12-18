import React from 'react';
import portfolio from '../../data/portfolio';
import PortfolioItem from './portfolioItem';


function Portfolio() {
   return (

      <section className="bg-white-900 ">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-3xl text-center">
       
        
        <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
           {portfolio.map(project => (
              <PortfolioItem 
                 imgUrl={project.imgUrl}
                 title={project.title}
                 stack={project.stack}
                 link={project.link}
              />
           ))}
        </div>
     </div>
      </div>
    </div>
  </section>
   )
}

export default Portfolio;