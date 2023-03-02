import { FaArrowDown } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";

const ScrollDownButton = () => {
  return (
    <div className="arrow bounce">
      {/* <a className="fa fa-arrow-down fa-2x" href="#"></a> */}
      <FaArrowDown fontWeight={"bold"} />
    </div>
  );
};

export default ScrollDownButton;
