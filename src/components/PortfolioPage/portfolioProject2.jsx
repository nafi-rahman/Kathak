import React from "react";
import img1 from "/assets/renu/hero1.jpg"
import img2 from "/assets/renu/hero2.jpg"
import img3 from "/assets/renu/hero3.jpg"
import { useEffect } from "react";
export default function Portfolioproj2(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
        <>
<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-neutral-50">
    {/* <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">STONE BRICKS 2</h1> */}
  </div>
</div>

<div className="h-screen bg-center bg-cover transform-flip-x" style={{ backgroundImage: `url(${img2})`,transform: 'scaleX(-1)'  }}>
  <div className="flex flex-col items-start justify-center h-full font-Source text-3xl font-bold text-neutral-50 pl-20" style={{transform: 'scaleX(-1)'}}>
  {/* <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">STONE BRICKS</h1> */}
  <h1 className="w-1/3 font-source font-light text-sm xl:text-xl lg:text-xl md:text-lg sm:text-md">Renu ke Renu is the story of a middle age woman who one day finds a diary from the past in her cabinet. And she is amazed by the constrast of expectations from the past and the reality of her life now. Throughout the story she tries to meet the expectations from the past of being free, happy and liberated. In the process she questions the idea of liberty and takes inspiration from the guy who liberated the country once. 

Renu ke Renu is a project shot without any funds and we used neighbours, cha-wala mamas as actors for this. The film was shot for a film competition for the 100 years of Mujib. Unfortunately, the authorities never declared any winners. 

This is a project really close to our heart as through the process of writing, creating the film we ourselves too felt the freedom, the happiness that the protagonist of the film was seeking.</h1>
  </div>
</div>

<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg	">
  <a className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="https://drive.google.com/file/d/1vZYx7yVI6KiL3JeYaGgvKNupYLtKJqoK/view">
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