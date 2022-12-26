import React from "react";
import img1 from "/assets/stonebricks/hero1.jpg"
import img2 from "/assets/stonebricks/hero2.jpg"
import img3 from "/assets/stonebricks/hero3.jpg"
import { useEffect } from "react";

export default function Portfolioproj1(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
        <>
<div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-neutral-50">
    <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">Stone Bricks Ltd commercial </h1>
  </div>
</div>


<div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${img2})`,transform: 'scaleX(-1)' }}>
  <div className="flex flex-col items-start justify-center h-full text-3xl font-bold text-neutral-50 pl-20"style={{transform: 'scaleX(-1)'}}>
  {/* <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">STONE BRICKS</h1> */}
  <h1 className="w-1/3 font-source font-light xl:text-xl lg:text-xl md:text-lg sm:text-md">Stone Bricks Ltd is a eco-friendly brick manufacturing company. A sister company of Jamuna group. We were hired to make a promotional documentary on them. It was a project we had to work immensely hard on. It was hot inside the klin and we had to shoot inside of the factory. Thanks to our brilliant team, we finished the shooting in 2 days and ultimately handed over the first draft of  project to them in 6 days.</h1>
  </div>
</div>

<div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg">
  <a className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="https://drive.google.com/file/d/1RcHIL7__KrTru7GL372f9J4mBd0P_Xv6/view?usp=share_link">
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