import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import menu_icon from "../assets/menu_icon.svg";
import menu_black from "../assets/menu_black.svg";
import cross_icon from "../assets/cross_icon.svg";
import assets from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Routes where text should be black
  const whiteBgRoutes = [
    "/about",
    "/projects",
    "/team",
    "/threeDimensional",
    "/contact",
  ];
  const isWhiteBg = whiteBgRoutes.includes(location.pathname);

  const baseLinkStyles =
    "cursor-pointer hover:text-gray-400 transition-colors duration-200";
  const activeLinkStyles = isWhiteBg
    ? "text-black font-bold"
    : "text-white font-bold";
  const defaultTextColor = isWhiteBg ? "text-black" : "text-white";

  return (
    <div
      className={`absolute top-0 left-0 w-full z-10 ${
        isWhiteBg ? "shadow-md bg-blue-100" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 bg-transparent">
        <img
          src={assets.logo1}
          alt="Logo"
          className="max-w-[50px] max-h-[50px] rounded-full"
        />

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex gap-7 font-bold items-center ${defaultTextColor}`}
        >
          {["/", "/about", "/projects", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Projects", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${baseLinkStyles} ${isActive ? activeLinkStyles : ""}`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </ul>

        <button
          className={`hidden md:block px-8 py-2 rounded-full ml-[25px] font-semibold ${
            isWhiteBg ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Sign up
        </button>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={isWhiteBg ? menu_black : menu_icon}
          alt="Menu"
          className="md:hidden w-6 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-20 transition-all duration-300 bg-blue-100 ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        // style={{ backgroundColor: "" }}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>

        <ul className="flex flex-col items-center mt-5 gap-5 px-5 text-lg font-medium text-black">
          {["/", "/about", "/projects", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Projects", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setShowMobileMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block ${
                    isActive ? "text-black font-bold" : ""
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
