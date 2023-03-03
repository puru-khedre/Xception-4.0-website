import { useScrollPosition } from "../hooks/useScrollPosition";
import NavLinks from "./NavLinks";

const Navbar = ({ className }) => {
  const scrollPosition = useScrollPosition();
  const [navigationOpen, setIsNavigationOpen] = false;
  return (
    <div
      className={`${className} font-navbar p-11 z-40 text-[#290505] flex flex-row items-center justify-between w-full transition-all ${
        scrollPosition > 0 &&
        "py-3 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#633d2c] shadow-md"
      }`}
    >
      <div className="text-2xl md:text-5xl font-semibold">
        <h1>Xception 4.0</h1>
      </div>
      <div className="flex flex-row items-center gap-4 text-2xl">
        <NavLinks name={"Home"} current />
        <NavLinks name={"Sponcers"} />
        <NavLinks name={"Events"} />
        <NavLinks name={"Merchandise"} />
        <NavLinks name={"About Us"} />
      </div>
      <div className="absolute w-screen h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 inset-0"></div>
    </div>
  );
};

export default Navbar;
