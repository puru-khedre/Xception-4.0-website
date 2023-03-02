import React from "react";
import NavLinks from "./NavLinks";

const Navbar = ({ className }) => {
  return (
    <div
      className={`${className} font-navbar text-[#290505] top-0 left-0 right-0 p-10 flex flex-row items-center justify-between`}
    >
      <div className="text-5xl font-semibold">
        <h1>Xception 4.0</h1>
      </div>
      <div className="flex flex-row items-center gap-4 text-2xl">
        <NavLinks name={"Home"} current />
        <NavLinks name={"Sponcers"} />
        <NavLinks name={"Events"} />
        <NavLinks name={"Merchandise"} />
        <NavLinks name={"About"} />
        <NavLinks name={"About Us"} />
      </div>
    </div>
  );
};

export default Navbar;
