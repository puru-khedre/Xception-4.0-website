import ScrollDownButton from "./ScrollDownButton";
import ShineHoverAnimationPlaceholder from "./ShineHoverAnimationPlaceholder";

const Hero = () => {
  return (
    <div className="pt-36 h-screen">
      <div className="gap-5 w-8/12 mx-auto mt-16 grid grid-cols-[288px_1fr]">
        <div className="w-72 h-72">
          <ShineHoverAnimationPlaceholder>
            <img
              src="/images/Xception4.O_logo_cropped.jpg"
              className="object-cover rounded-xl overflow-hidden w-full h-full"
            />
          </ShineHoverAnimationPlaceholder>
        </div>
        <div className="text-[#4e3123]">
          <h1 className="text-[4.25rem] font-navbar hover:underline">
            Xception 4.O
          </h1>
          <h2 className="font-majestic text-[36px]">
            "Samartha - Parampara: <br />
            Celebrating the Legacy of Technology"
          </h2>
          <div className="w-4/6 relative mt-3">
            <h2 className="text-[#4e3123] font-navbar text-xl z-10 absolute left-4 transition-all hover:text-[23px] hover:left-4">
              March 31<sup>st</sup>, 2023 - April 2<sup>nd</sup>, 2023
            </h2>
            <div className="absolute z-0 rotate-[1deg] -top-3 opacity-90">
              <img
                src="/images/paper_piece.png"
                className="object-cover skew-x-[20deg] relative -left-4"
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollDownButton />
    </div>
  );
};

export default Hero;
