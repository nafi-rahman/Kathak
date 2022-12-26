import React from 'react';
import portfolio from '../../data/portfolio';
import PortfolioItem from './portfolioItem';
import img1 from '/assets/p1.jpg';
import img2 from '/assets/renu.jpg';
import img3 from '/assets/docu.jpg';
import img4 from '/assets/deyall.jpg';
import img5 from '/assets/bandarban.jpg';
import img6 from '/assets/kaptai.jpg';
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
                 title={"Stone Bricks"}
                 stack={"As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. "}
              />
        </Link>
        <Link to="/portfolio/project2">
        <PortfolioItem 
                 imgUrl={img2}
                 title={"Renu ke Renu"}
                 stack={"As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. "}
              />
        </Link>
        <Link to="/portfolio/project3">
        <PortfolioItem 
                 imgUrl={img3}
                 title={"Amader Pathshala Documentry"}
                 stack={"As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. "}
              />
        </Link>
        <Link to="/portfolio/project4">
        <PortfolioItem 
                 imgUrl={img4}
                 title={"Deyal"}
                 stack={"As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. "}
              />
        </Link>
        <Link to="/portfolio/project5">
        <PortfolioItem 
                 imgUrl={img5}
                 title={"Terminal Website"}
                 stack={"As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. "}
              />
        </Link>
        <Link to="/portfolio/project6">
        <PortfolioItem 
                 imgUrl={img6}
                 title={"Terminal Website"}
                 stack={"As a film studio we have chosen to create such art with social impacts. To us, creating a film is more than a part of entertainment. "}
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