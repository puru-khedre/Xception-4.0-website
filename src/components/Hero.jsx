import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-max border border-emerald-400 bg-emerald-200 relative">
      <img src="/images/bg.png" className="w-full " />
      <Navbar className="absolute" />
    </div>
  );
};

export default Hero;
