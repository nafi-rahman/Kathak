import React from "react";
import img1 from "/assets/amader/hero1.jpg"
import img2 from "/assets/amader/hero2.jpg"
import img3 from "/assets/amader/hero3.jpg"

export default function Portfolioproj3(){
    return(
        <>
<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white">
    {/* <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">STONE BRICKS</h1> */}
  </div>
</div>

<div className="h-screen bg-center bg-cover transform-flip-x" style={{ backgroundImage: `url(${img2})` }}>
  <div className="flex flex-col items-start justify-center h-full text-3xl font-bold text-neutral-50 pl-20" >
  <h1 className="w-1/3 font-playfair font-bold text-sm xl:text-xl lg:text-xl md:text-lg sm:text-md">Amader Pathshala</h1><br></br>
  <h1 className="w-1/3 font-source font-light text-sm xl:text-lg lg:text-lg md:text-md sm:text-sm">This is one of the first projects we worked on. We didn't get any fund for this project. This was a voluntary work from us as we were trying to learn the filmmaking process better. This is a documentary on a school that is trying to help the street children to get quality education.  

We shot this documentary with whatever we had. We made our own lights with holders, energy bulbs and aluminium foils and used a cannon 800D photo camera which one of our cinematographer owned.</h1>
  </div>
</div>

<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg	">
  <a className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="https://drive.google.com/file/d/1yOy4sJKvSnTqnoIYbZvky96XZKs97T8R/view">
        <span className="sr-only"> Download </span>
        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
  </div>
</div>



        </>
    )
}