import React from "react";
import Slider from "react-slick";


export default function AnimateTest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }  
  return (
      
        <>
          <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="bg-black">
          <h1>1</h1>
            
          </div>
          <div>
            
             <h2>2</h2>
            
          </div>
          <div>
            <h3>3</h3>
          </div>
          
        </Slider>
      </div>    
        </>
    )
}