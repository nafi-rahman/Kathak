import React from "react";
import { motion } from 'framer-motion';
import { useState } from "react";

export default function Vidsec() {
    const [isHovering, setIsHovering] = useState(false);
    return(
        <>
        <div className="h-64 w-full relative overflow-hidden bg-black">
      {/* This div will have a black background color and the video will be the background video */}
      <video
        className="absolute inset-0 object-cover object-center"
        autoPlay={false}
        loop={false}
        playsinline
        src="/assets/test.mp4"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovering ? 0 : 1 }}
        className="h-full w-full flex items-center justify-center text-white font-bold text-3xl hover:bg-black hover:text-white"
        onMouseEnter={() => {
          setIsHovering(true);
          video.play();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          video.pause();
        }}
      >
        My text
      </motion.div>
    </div>
        </>
    )
}