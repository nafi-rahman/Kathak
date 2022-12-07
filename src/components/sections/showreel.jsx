import React from "react";
import ShowreelItem from "./showreelItem";
import showreel from "../../data/showreel";

export default function Showreel() {
    
    return (
        <>
        <div className="grid grid-rows-3 grid-flow-col gap-4 py-10 bg-white">
        <div className="row-span-1"></div>
        <div className="row-span-3"> <h1 className="text-center">TEST</h1> </div>
        <div className="row-span-1"></div>
        </div>
         
        <div className="grid grid-rows-3 grid-flow-col gap-4 py-10 bg-white">
        <div className="row-span-1"></div>
            <div className="row-span-3 p-10 bg-black">
                {showreel.map(item => (
                    <ShowreelItem
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
            <div className="row-span-1"></div>
        </div>
        </>

    )
}