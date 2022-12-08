import React from "react";
import ShowreelItem from "./showreelItem";
import showreel from "../../data/showreel";

export default function Showreel() {
    
    return (
        <>
        <div className="grid grid-rows-3 grid-flow-col gap-4 py-10 bg-[#eaebeb]">
        <div className="row-span-1"></div>
        <div className="row-span-3"> 
        <h3 className="text-4xl font-bold text-center font-playfair text-[#33636c]">H&nbsp;E&nbsp;L&nbsp;L&nbsp;O&nbsp;,&nbsp;&nbsp;W&nbsp;A&nbsp;N&nbsp;N&nbsp;A&nbsp;&nbsp;&nbsp;K&nbsp;N&nbsp;O&nbsp;W&nbsp;&nbsp;U&nbsp;S&nbsp;?</h3>
        </div>
        <div className="row-span-1"></div>
        </div>
         
        <div className="grid grid-rows-3 grid-flow-col gap-4 py-10 bg-[#eaebeb]">
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