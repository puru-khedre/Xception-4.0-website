const ScrollDownButton = () => {
  return (
    <div className="arrow bounce m-auto absolute bottom-10 left-1/2 animate-mybounce">
      <a href="#about">
        <img
          src="/images/down-arrow.svg"
          className="w-16 h-16 relative right-1/2 rounded-full shadow-lg hover:cursor-pointer"
        />
      </a>
    </div>
  );
};

export default ScrollDownButton;
