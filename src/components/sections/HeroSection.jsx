import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 1.5 }
};

const Box = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
        <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Kathak studio</h1>
      <p className="mt-6 lg:text-lg text-white">Your ideas are our responsibility to bring alive</p>
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <div className="App">
    <section className="h-screen bg-cover bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900" >
  <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div className="max-w-2xl text-center">
      

      <Box></Box>

      <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        
      </div>
    </div>
  </div>
</section>
        
    </div>
  );
}