import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-max border relative">
      <img src="/images/bg.png" className="w-full " />
      <Navbar className="absolute" />
    </div>
  );
};

export default Hero;
