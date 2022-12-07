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

        </>
    )
}