import React from "react";
import HeroSection from "../sections/HeroSection";
import FancyText from "../sections/FancyText";
import Portfolio from "../portfolio/portfolio";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FancyText/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}