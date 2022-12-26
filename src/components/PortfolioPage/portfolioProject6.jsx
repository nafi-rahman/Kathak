import React from "react";
import img1 from "/assets/unicef/hero1.jpg"
import img2 from "/assets/unicef/hero2.jpg"
import img3 from "/assets/unicef/hero3.jpg"

export default function Portfolioproj6(){
    return(
        <>
<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white">
    <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">The CSSR project</h1>
  </div>
</div>

<div className="h-screen bg-center bg-cover transform-flip-x" style={{ backgroundImage: `url(${img2})` }}>
  <div className="flex flex-col items-start justify-center h-full text-3xl font-bold text-neutral-50 pl-20 relative" >
  {/* <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">STONE BRICKS</h1> */}
  <div className="bg-black p-5 bg-opacity-60 mt-40" style={{position: 'absolute', top: 0, left: 0, right: 0, width: '50%',height:'60%'}}>
    <h1 className=" font-source font-light text-sm xl:text-lg lg:text-lg md:text-md sm:text-sm mt-0 xl:mt-10 lg:mt-10">CSSR (Covid 19 school sector response)  project was a project of Unicef and the Bangladesh government. It was a huge project where we had to shoot and edit almost 500 educational videos which were broadcasted at the same time in Shangshad TV (a government  TV channel). And all these in a time span of 4 months.  

We were shooting and editing four to five videos (each of 10 minutes) each day, which also contained animations. 

This is more than a project to us. This is the journey that ultimately curved us, the lazy people with imaginations into disciplined, hard working  professionals we are today.</h1>
  </div>
  </div>
</div>

<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg	">
  {/* <a className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="/download">
        <span className="sr-only"> Download </span>
        <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a> */}
  </div>
</div>
        </>
    )
}