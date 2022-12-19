import React from "react";
import FancyText from "../sections/FancyText";
import Portfolio from "../portfolio/portfolio";
import Carousel from "../sections/Carousel";
import { motion,AnimatePresence } from 'framer-motion'
export default function Portfoliop() {
    return (
        <>
        <section className="bg-center bg-cover h-96 sm:h-128 md:h-192 lg:h-256 xl:h-320" style={{backgroundImage: 'url("/assets/kathakP.jpg")'}}>
  <div className="flex items-center justify-center h-full">
    <div className="text-slate-900 text-center">
    </div>
  </div>
</section>
      <div className=" grid-cols-2 grid-flow-row bg-[#205C6C] h-screen relative flex items-center justify-center">
<p class="w-1/2 text-neutral-200 text-xl font-Source">
Do you know, the process behind the creation of art is sometimes more dramatic and more artistic than the project itself? How do individuals with totally different creative preferences come together and share the same vision and how they work like organs of a human body in order to make the body move and do something extraordinary that wasn’t possible if any of  the organs would fail? <br></br>
<br></br>
We want to thank all the hard working and talented individuals who worked relentlessly hard day and night to make these visions come true on a screen. And we promise you, in a world where even the strongest do often fall, you will never have to walk alone.
  </p>
  
  
        <svg className="w-full h-16 absolute bottom-0 left-0 right-0" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fafafa">
          <path d="M0 100 C 60 0 70 0 150 100 Z" />
        </svg>
      </div>
  
  <section class="overflow-hidden bg-neutral-50 text-[#205C6C] py-10">
  
  <div class="bg-neutral-50 h-64 flex flex-col items-center justify-center">
  
  <h1 className="text-5xl lg:text-5xl md:text-4xl  sm:text-3xl xs:2xl font-bold mt-10 font-playfair">Here is some of our work</h1>

</div>
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
  
    <Portfolio/>
  </div>
  
  <div className="py-10"></div>
</section>


      
        </>
    );
}