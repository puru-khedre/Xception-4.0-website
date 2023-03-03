import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="w-full py-3 backdrop-filter backdrop-blur-sm bg-opacity-60 bg-theme-light shadow-md">
      <div className="w-9/12 mx-auto flex flex-col gap-2 md:gap-0 md:flex-row text-theme-xdark font-navbar text-lg justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-theme-dark text-2xl">
            Xception 4.0, 2023
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            dolor maiores culpa corrupti accusantium consectetur eaque mollitia
            repellendus neque! Accusantium
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
            ducimus animi. Cupiditate perferendis rerum veritatis?
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="text-navbar text-2xl text-theme-dark">
              Social links
            </h3>
            <SocialLinks
              icon={<FaFacebookSquare e className="text-theme-dark text-xl" />}
              name="Facebook"
            />
            <SocialLinks
              icon={<FaInstagramSquare className="text-theme-dark text-xl" />}
              name="Instagram"
            />
            <SocialLinks
              icon={<FaTwitterSquare className="text-theme-dark text-xl" />}
              name="Instagram"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-navbar text-2xl text-theme-dark">
              Important links
            </h3>
            <a className="hover:underline" href="/">
              Home
            </a>
            <a className="hover:underline" href="/sponcers">
              Sponcers
            </a>
            <a className="hover:underline" href="/events">
              Events
            </a>
            <a className="hover:underline" href="/merchandise">
              Merchandise
            </a>
            <a className="hover:underline" href="/aboutUs">
              AboutUs
            </a>
          </div>
        </div>
      </div>
      <img
        src="/images/line.svg"
        className="rotate-180 object-cover w-10/12 mx-auto my-2"
      />
    </div>
  );
};

export default Footer;
