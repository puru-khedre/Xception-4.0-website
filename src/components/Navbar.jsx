import { useScrollPosition } from "../hooks/useScrollPosition";
import NavLinks from "./NavLinks";

const Navbar = ({ className }) => {
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={`${className} font-navbar p-11 z-50 text-[#290505] flex flex-row items-center justify-between w-full transition-all ${
        scrollPosition > 0 &&
        "py-3 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#633d2c] shadow-md"
      }`}
    >
      <div className="text-5xl font-semibold">
        <h1>Xception 4.0</h1>
      </div>
      <div className="flex flex-row items-center gap-4 text-2xl">
        <NavLinks name={"Home"} current />
        <NavLinks name={"Sponcers"} />
        <NavLinks name={"Events"} />
        <NavLinks name={"Merchandise"} />
        <NavLinks name={"About Us"} />
      </div>
    </div>
  );
};

export default Navbar;
