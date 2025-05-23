import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./ak.png";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="sticky top-0 z-30 backdrop-blur-md bg-black/60 text-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT: Logo & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Hamburger - Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileNav} className="text-white">
              {isMobileNavOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="bg-white rounded-full p-2">
            <img src={logo} alt="AK Logo" className="h-8 w-auto rounded-full" />
          </div>
        </div>

        {/* CENTER: Nav Links (Desktop Only) */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {["Home", "About", "Projects", "Blog", "Contact"].map((text, idx) => (
            <Link
              key={idx}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="hover:text-blue-300 transition"
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Search Input */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full px-3 py-1 border border-blue-200">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-black placeholder-gray-400 focus:outline-none w-24 md:w-40"
            />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-50
        ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="p-6 pt-20 space-y-4">
          {["Home", "About", "Projects", "Blog", "Contact"].map((text, idx) => (
            <Link
              key={idx}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              onClick={toggleMobileNav}
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
