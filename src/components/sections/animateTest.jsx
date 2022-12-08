import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateTest() {
    return (
        <>
            <motion.h1 className="font-bold text-4xl font-source-sans-pro"
                animate={{x: 100, opacity: 1}}
            >
              WHERES RECOGNITION OF 
            </motion.h1>
            <motion.h1 className="font-bold text-4xl font-playfair"
                animate={{x: 100, opacity: 1}}
            >
              WHERES RECOGNITION OF 
            </motion.h1>

            <motion.p className=" font-source-sans-pro"
                animate={{x: 100, opacity: 1}}
            >
              WHERES RECOGNITION OF 
            </motion.p>
            <motion.p className=" font-playfair"
                animate={{x: 100, opacity: 1}}
            >
              WHERES RECOGNITION OF 
            </motion.p>




            <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-3xl text-center">
        
        <Box></Box>
  
        <Box2></Box2>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
        </>
    )
}