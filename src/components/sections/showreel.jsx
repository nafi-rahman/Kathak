import React from "react";
import ShowreelItem from "./showreelItem";

export default function Showreel() {
    
    return (
        <div >
        <div className="grid grid-rows-3 grid-flow-col gap-4 p-10 bg-[#eaebeb]">
        <div className="row-span-1"></div>
        <div className="row-span-3"> 
        <h3 className="lg:text-4xl md:text-2xl sm:text-xl  font-bold text-center font-playfair text-[#33636c] py-5">A sample of what we do</h3>
        </div>
        <div className="row-span-1"></div>
        </div>
         
        <div className="grid grid-rows-3 grid-flow-col gap-4 py-10 bg-[#eaebeb]">
        <div className="row-span-1"></div>
            <div className="row-span-3 p-10 bg-black">
                
                    <ShowreelItem/>
                
            </div>
            
            <div className="row-span-1"></div>
            
        </div>
        <div/>
        </div>
    )
}