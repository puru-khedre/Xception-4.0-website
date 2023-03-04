import { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import NavLinks from "./NavLinks";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";

const Navbar = ({ className }) => {
  const scrollPosition = useScrollPosition();
  const [isNavigationOpen, setIsNavigationOpen] = useState();
  return (
    <div
      className={`${className} font-navbar md:p-11 p-4 z-40 text-[#290505] flex flex-row items-center justify-between w-full transition-all ${
        scrollPosition > 0 &&
        "py-4 md:py-3 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#633d2c] shadow-md"
      }`}
    >
      <div className="text-2xl md:text-5xl font-semibold">
        <h1>Xception 4.0</h1>
      </div>
      <div className="hidden md:flex flex-row items-center gap-4 text-2xl">
        <NavLinks name={"Home"} current />
        <NavLinks name={"Sponcers"} />
        <NavLinks name={"Events"} />
        <NavLinks name={"Merchandise"} />
        <NavLinks name={"About Us"} />
      </div>
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsNavigationOpen(true)}
      >
        <GoThreeBars />
      </button>
      <div
        className={`${
          !isNavigationOpen && "hidden"
        } absolute flex flex-row justify-between items-start gap-4 p-4 w-screen h-screen inset-0 transition-all backdrop-filter backdrop-blur-lg bg-opacity-50 `}
        onClick={() => setIsNavigationOpen(false)}
      >
        <div
          className={`rounded-lg h-max w-max relative right-full transition-all py-4 px-6 ${
            isNavigationOpen && "!right-0"
          } !bg-[url('/images/bg.png')] bg-full flex flex-col gap-2 text-xl text-semibold text-theme-dark shadow-2xl`}
        >
          <a>Home</a>
          <a>Sponcers</a>
          <a>Events</a>
          <a>Merchandise</a>
          <a>About Us</a>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsNavigationOpen(false)}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
