import React from "react";
import img1 from "/assets/deyal/hero1.jpg"
import img2 from "/assets/deyal/hero2.jpg"
import img3 from "/assets/deyal/hero3.jpg"
import { useEffect } from "react";
export default function Portfolioproj4(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
        <>
<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white">
    <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">Deyale Mutiben na</h1>
  </div>
</div>

<div className="h-screen bg-center bg-cover transform-flip-x" style={{ backgroundImage: `url(${img2})`,transform: 'scaleX(-1)'  }}>
  <div className="flex flex-col items-start justify-center h-full text-3xl font-bold text-white pl-20" style={{transform: 'scaleX(-1)'}}>
  <h1 className="w-1/2 font-source font-light text-sm xl:text-xl lg:text-xl md:text-lg sm:text-sm mb-80 ">This short film was part of a awareness programme which was self funded by a student of ULAB. The film is a satirical protest against the patriarchal narratives of the society.This short film was shot in one day. All the actors of this film were from the theatres.</h1>
  </div>
</div>

<div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg	">
  <a className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="https://drive.google.com/file/d/1QxdmkmTTCMzQfs0lac-XYYXc00IkrueN/view">
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