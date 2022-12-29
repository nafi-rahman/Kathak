import React from 'react';
import PortfolioItem from './portfolioItem';
import img1 from '/assets/p1.jpg';
import img2 from '/assets/renu.jpg';
import img3 from '/assets/docu.jpg';
import img4 from '/assets/deyall.jpg';
import img5 from '/assets/bograa.jpg';
import img6 from '/assets/unicef.jpg';
import { Link } from 'react-router-dom';

function Portfolio() {
   return (

      <section className="bg-white-900 ">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-3xl text-center">
       
        
        <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
           
        <Link to="/portfolio/project1">
        <PortfolioItem 
                 imgUrl={img1}
                 title={"Stone Bricks Ltd commercial"}
                 genre={"Genre: Commercial"}
                 date = {"Date: 2021"}
              />
        </Link>
        <Link to="/portfolio/project2">
        <PortfolioItem 
                 imgUrl={img2}
                 title={"Renu ke Renu"}
                 genre={"Fiction/ philosophical/ Drama  "}
                 date = {"Date: 2021"}

              />
        </Link>
        <Link to="/portfolio/project3">
        <PortfolioItem 
                 imgUrl={img3}
                 title={"Amader Pathshala"}
                 genre={"Genre: Documenrary"}
                 date = {"Date: 2019"}
              />
        </Link>
        <Link to="/portfolio/project4">
        <PortfolioItem 
                 imgUrl={img4}
                 title={"Deyale Mutiben na"}
                 genre={"Genre: Comedy/ Satire/ Fiction"}
                 date = {"Date: 2019"}
              />
        </Link>
        <Link to="/portfolio/project5">
        <PortfolioItem 
                 imgUrl={img5}
                 title={"Amra korbo joy "}
                 genre={"Genre: Documentary"}
                 date = {"Date: 2018"}
              />
        </Link>
        <Link to="/portfolio/project6">
        <PortfolioItem 
                 imgUrl={img6}
                 title={"The CSSR project"}
                 genre={"Genre: Educational "}
                 date = {"Date: 2022"}
              />
        </Link>
        
              
        </div>
     </div>
      </div>
    </div>
  </section>
   )
}

export default Portfolio;