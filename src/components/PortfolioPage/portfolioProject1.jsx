import React, { useState, useEffect } from "react";
import img1 from "/assets/stonebricks/hero1.jpg";
import img2 from "/assets/stonebricks/hero2.jpg";
import img3 from "/assets/stonebricks/hero3.jpg";

export default function Portfolioproj1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* First Section with Image and Text */}
      <div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
        <div className="flex items-center justify-center h-full text-3xl font-bold text-neutral-50">
          <h1 className="font-palyfair xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">Stone Bricks Ltd commercial</h1>
        </div>
      </div>

      {/* Second Section with Image and Text */}
      <div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${img2})`, transform: 'scaleX(-1)' }}>
        <div className="flex flex-col items-start justify-center h-full text-3xl font-bold text-neutral-50 pl-20" style={{ transform: 'scaleX(-1)' }}>
          <h1 className="w-1/3 font-source font-light xl:text-xl lg:text-xl md:text-lg sm:text-md">Stone Bricks Ltd is a eco-friendly brick manufacturing company. A sister company of Jamuna group. We were hired to make a promotional documentary on them. It was a project we had to work immensely hard on. It was hot inside the klin and we had to shoot inside of the factory. Thanks to our brilliant team, we finished the shooting in 2 days and ultimately handed over the first draft of project to them in 6 days.</h1>
        </div>
      </div>

      {/* Third Section with Image and Modal Trigger */}
<div className="h-screen w-full bg-center bg-cover" style={{ backgroundImage: `url(${img3})` }}>
  <div className="flex items-center justify-center h-full text-3xl font-bold text-white rounded-lg">
    <button 
      className="inline-block rounded-full border border-[#205C6C] p-3 text-[#205C6C] hover:bg-[#205C6C] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      onClick={openModal}
    >
      <span className="sr-only"> Download </span>
      <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
</div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <p>Direct viewing options have been revoked from the website for copyright issues. If you are interested in viewing this work, please contact the studio or the artists.</p>
            <button onClick={closeModal} className="mt-4 bg-gray-200 p-2 rounded">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
