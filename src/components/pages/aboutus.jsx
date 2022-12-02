import React from "react";
import Testimonial from "../sections/testimonial";


export default function About() {
  return (
    <>
<div class="relative h-screen overflow-hidden bg-indigo-900">
    <img src="https://images.unsplash.com/photo-1669872666457-d5a771c83715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="absolute object-cover w-full h-full"/>
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <div class="container relative z-10 flex items-center w-4/5 py-5 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
        <div class="relative z-10 flex flex-col items-center justify-between w-full">
            <p class="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
                Planet need you
            </p>
            <p class="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
                The first European to set eyes on the great river was a Spanish explorer, called De Soto, who came across the mouth of the river in 1541; yet it was not until over a century later that the Mississippi river began to take a significant place in the history of North America.
            </p>
            <a href="#" class="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900">
                Plant a tree
            </a>
        </div>
    </div>
    <br></br>
</div>
<Testimonial/>
</>


    );
}