import React from "react";

const Footer = () => {
  return (
    <div className="w-full backdrop-filter backdrop-blur-sm bg-opacity-60 bg-theme-light shadow-md">
      <div className="w-10/12 mx-auto flex flex-row text-theme-xdark font-navbar text-lg">
        <div className="p-4">
          <ul>
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="/sponcers">Sponcers</a>
            </li>
            <li className="hover:underline">
              <a href="/events">Events</a>
            </li>
            <li className="hover:underline">
              <a href="/merchandise">Merchandise</a>
            </li>
            <li className="hover:underline">
              <a href="/aboutUs">AboutUs</a>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
