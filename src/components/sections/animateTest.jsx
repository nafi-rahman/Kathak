import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
          <div>
          <h1>1</h1>
            
          </div>
          <div>
            
              <img src="/public/assets/bandarban.jpg"></img>
            
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>    
        </>
    )
}