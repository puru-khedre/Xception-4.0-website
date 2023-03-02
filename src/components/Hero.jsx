import React from "react";

const Hero = () => {
  return (
    <div className="pt-36">
      <div className="flex flex-row gap-4 w-max mx-auto mt-16">
        <div>
          <img
            src="/images/Xception4.O_logo_cropped.jpg"
            className="object-cover w-72 h-72 rounded-xl overflow-hidden"
          />
        </div>
        <div className="text-[#4e3123]">
          <h1 className="text-[4.25rem] font-navbar">Xception 4.O</h1>
          <h2 className="font-majestic text-[36px]">
            "Samartha - Parampara: <br />
            Celebrating the Legacy of Technology"
          </h2>
          <div className="relative">
            <img src="/images/paper_piece.png" className="-z-10 absolute" />
            <h2 className="z-0 text-[#4e3123] absolute">
              March 31, 2023 - April 2, 2023
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
