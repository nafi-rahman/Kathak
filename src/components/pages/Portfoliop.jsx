import React from "react";
import FancyText from "../sections/FancyText";
import Portfolio from "../portfolio/portfolio";
import Carousel from "../sections/Carousel";
import { motion,AnimatePresence } from 'framer-motion'
export default function Portfoliop() {
    return (
        <>
        <section className="bg-center bg-cover h-96" style={{backgroundImage: 'url("/assets/kathakP.jpg")'}}>
        <div className="flex items-center justify-center h-full">
          <div className="text-slate-900 text-center">
            {/* <h1 className="text-5xl font-bold mb-4">Welcome to my website</h1>
            <p className="text-xl mb-4">This is a section with a full width image as the background.</p> */}
            
          </div>
        </div>
      </section>
  <div className="h-96 w-full bg-center bg-no-repeat bg-cover bg-[#205C6C]">
  
    {/* This div will have a blue background color, and the image will be the background image */}
    <div
      className="h-full w-full flex items-center justify-center text-black font-bold text-3xl text-center"
      
    >
      <p class="w-1/2 text-neutral-200 text-xl font-Source">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et voluptate repellat, magni suscipit odio in perspiciatis similique fugit quidem! Eligendi, tempora dignissimos vitae asperiores consectetur porro incidunt aperiam non.
  </p>
    
    </div>
    
  </div>
  
  <section class="overflow-hidden bg-white text-gray-700 py-10">
  
  <div class="bg-white h-64 flex flex-col items-center justify-center">
  
  <h1 className="text-5xl lg:text-5xl md:text-4xl  sm:text-3xl xs:2xl font-bold mt-10 font-playfair">Here is some of our work</h1>

</div>
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
  
    <Portfolio/>
  </div>
  
  <div className="py-10"></div>
</section>

<div className="bg-blue-500 h-screen relative flex items-center justify-center">
<p class="w-1/2 text-neutral-200 text-xl font-Source">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et voluptate repellat, magni suscipit odio in perspiciatis similique fugit quidem! Eligendi, tempora dignissimos vitae asperiores consectetur porro incidunt aperiam non.
  </p>
        <svg className="w-full h-16 absolute bottom-0 left-0 right-0" viewBox="0 0 100 100" preserveAspectRatio="none" fill="white">
          <path d="M0 100 C 60 0 70 0 150 100 Z" />
        </svg>
      </div>
      

      
        </>
    );
}