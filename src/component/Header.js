import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between uppercase lg:px-20 px-2 bg-violet-200">
      <h1 className="font-bold lg:text-lg text-base p-2">
        car rental <span className="text-sm">@</span>premium
      </h1>
      <div className="lg:hidden">
        <button className="px-3 py-2" onClick={toggleMenu}>
          <AiOutlineMenu />
        </button>
        {isMenuOpen && (
          <div className="absolute mt-1 right-0 w-44 bg-gray-200 shadow-lg rounded-lg">
            <ul className="py-2 px-3 text-xs">
              <li className="my-1">
                <NavLink to="/">home</NavLink>
              </li>
              <li className="my-1">
                <AnchorLink href="#rental-details">rental details</AnchorLink>
              </li>
              <li className="my-1">
                <AnchorLink href="#choose-us">why choose us</AnchorLink>
              </li>
              <li className="my-1">
                <AnchorLink href="#how-works">How it works</AnchorLink>
              </li>
              <button className="mx-3 uppercase">sign up</button>
              <button className="uppercase bg-blue-600 px-2 py-1 rounded text-white">
                sign in
              </button>
            </ul>
          </div>
        )}
      </div>
      <nav className="p-2 hidden lg:block">
        <NavLink
          to="/"
          className={`mx-3 ${({ isActive }) =>
            isActive ? "active" : undefined}`}
        >
          home
        </NavLink>
        <AnchorLink
          href="#rental-details"
          className={`mx-3 ${({ isActive }) =>
            isActive ? "active" : undefined}`}
        >
          rental details
        </AnchorLink>
        <AnchorLink
          href="#choose-us"
          className={`mx-3 ${({ isActive }) =>
            isActive ? "active" : undefined}`}
        >
          why choose us
        </AnchorLink>
        <AnchorLink
          href="#how-works"
          className={`mx-3 ${({ isActive }) =>
            isActive ? "active" : undefined}`}
        >
          How it works
        </AnchorLink>
        <button className="mx-3 uppercase">sign up</button>
        <button className="uppercase bg-blue-600 px-3 py-2 rounded text-white">
          sign in
        </button>
      </nav>
    </div>
  );
};

export default Header;
