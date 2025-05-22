import React, { useState } from "react";
import logo from "./ak.png"; // Ensure this path is correct

// If you have Heroicons installed, you can use them:
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="w-full p-3 border-b-2 border-blue-200 flex items-center justify-between">

      {/* 1. LEFT SECTION (Hamburger Icon on Mobile, Logo on Desktop) */}
      <div className="flex items-center">
        {/* Hamburger Icon (Visible on small screens, hidden on medium and up) */}
        <div className="md:hidden z-10">
          <button onClick={toggleMobileNav} className="text-white p-2 focus:outline-none">
            {/* Using simple SVG for hamburger/close icon */}
            {isMobileNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
            {/* Or if using Heroicons: */}
            {/* {isMobileNavOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />} */}
          </button>
        </div>

        {/* Desktop Logo (Hidden on small screens, visible on medium and up) */}
        <div className="hidden md:block bg-white rounded-3xl p-2 z-20">
          <img src={logo} className="rounded-xl h-8" alt="AK Logo" />
        </div>
      </div>


      {/* 2. CENTER SECTION (Desktop Navigation - Hidden on small screens, visible on medium and up) */}
      <div className="hidden md:flex text-xl text-white border-2 border-blue-200 rounded-full px-3">
        <a href="/" className="p-2 m-2 active:text-blue-500">Home</a>
        <a href="/about" className="p-2 m-2">About</a>
        <a href="/projects" className="p-2 m-2">Projects</a>
        <a href="/blog" className="p-2 m-2">Blog</a>
        <a href="/contact" className="p-2 m-2">Contact</a>
      </div>

      {/* 3. RIGHT SECTION (Mobile Logo + Search Box on Mobile, just Search Box on Desktop) */}
      {/* This div acts as a group for the elements on the right side */}
      <div className="flex items-center">
        {/* Mobile Logo (Visible on small screens, hidden on medium and up) */}
        {/* Added mr-2 for spacing between the logo and the search box */}
        <div className="md:hidden bg-white rounded-3xl p-2 z-20 mr-2">
          <img src={logo} className="rounded-xl h-8" alt="AK Logo" />
        </div>

        {/* Search Box (Always visible, but width adjusts based on screen size) */}
        <div className="border-2 border-amber-100 rounded-3xl text-blue-100">
          <input
            type="text"
            placeholder="Search..."
            className="m-1 p-2 bg-transparent text-white placeholder-blue-100 outline-none w-24 md:w-auto"
          />
        </div>
      </div>

      {/* 4. Mobile Navigation (Off-canvas sidebar - no changes to its behavior) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-10
          ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="p-4 pt-20 flex flex-col">
          <a href="/" className="p-3 text-white hover:bg-gray-700 block" onClick={toggleMobileNav}>Home</a>
          <a href="/about" className="p-3 text-white hover:bg-gray-700 block" onClick={toggleMobileNav}>About</a>
          <a href="/projects" className="p-3 text-white hover:bg-gray-700 block" onClick={toggleMobileNav}>Projects</a>
          <a href="/blog" className="p-3 text-white hover:bg-gray-700 block" onClick={toggleMobileNav}>Blog</a>
          <a href="/contact" className="p-3 text-white hover:bg-gray-700 block" onClick={toggleMobileNav}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;