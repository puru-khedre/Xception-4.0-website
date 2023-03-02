const NavLinks = ({ current, name }) => {
  return (
    <a
      className={` ${
        current && "bg-red-900 bg-opacity-50"
      } relative px-3 py-2 rounded-md group`}
    >
      <span className="absolute top-1/2 left-1/2 h-full w-0 -translate-x-1/2 -translate-y-1/2 rounded-md bg-red-900 opacity-0 transition-all group-hover:w-full group-hover:opacity-100" />
      <span className="relative group-hover:text-white">{name}</span>
    </a>
  );
};

export default NavLinks;
