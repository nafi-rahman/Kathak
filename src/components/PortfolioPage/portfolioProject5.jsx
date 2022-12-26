import React from "react";
import img1 from "/assets/bogra/hero1.jpg"
import img2 from "/assets/bogra/hero2.jpg"
import img3 from "/assets/bogra/hero3.jpg"

export default function Portfolioproj5(){
    return(
        <>
<div className="h-screen bg-center bg-cover bg-black" style={{ backgroundImage: `url(${img1})`}}>
  
  <div className="flex items-center justify-center h-full text-3xl font-bold text-neutral-800">
    <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">Amra korbo joy </h1>
  </div>
</div>

<div className="h-screen bg-center bg-cover transform-flip-x" style={{ backgroundImage: `url(${img2})` }}>
  <div className="flex flex-col items-start justify-center h-full text-3xl font-bold text-neutral-800 pl-20 relative" >
  {/* <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">STONE BRICKS</h1> */}
  <div className="bg-white p-5 bg-opacity-60 mt-40" style={{position: 'absolute', top: 0, left: 0, right: 0, width: '50%',height:'70%'}}>
    <h1 className=" font-source font-light text-sm xl:text-lg lg:text-lg md:text-md sm:text-sm mt-0 xl:mt-10 lg:mt-10">This is the first project we ever worked in. It is a documentary on a school who is trying their best to create a quality education system for special children. 



This was a voluntary job as we were trying to learn the filmmaking process. With a heart filled of passion, one hundred taka per day decoration lights, a cannon 800D camera and a borrowed microphone we shot this project in two days. 

We stayed in 300 taka hotel room with no windows for that night and so on. But this project is a project that we may never will forget. This is the point we started our journey from. To us, This is and always will be the start of all the magical things that we witnessed through the journey and yet to witness.</h1>
  </div>
  </div>
</div>

<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg	">
  <a className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="https://drive.google.com/file/d/13dHeuRLjXeERlKJUwAp-a5vnN3eQD9SH/view">
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