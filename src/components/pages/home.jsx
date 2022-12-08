import React from "react";
import HeroSection from "../sections/HeroSection";
import FancyText from "../sections/FancyText";
import Portfolio from "../portfolio/portfolio";
import Contact from "../sections/Contact";
import Showreel from "../sections/showreel";
import Bookp from "../sections/bookP";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FancyText/>
      <Showreel/>
      <Bookp/>

    </div>
  );
}