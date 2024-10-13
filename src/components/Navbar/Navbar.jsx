"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from 'next/navigation';
import "./Navbar.css"; // Additional styles

const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Sculptures",
    path: "/sculptures",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null); // Ref for navbar element
  const pathname = usePathname();

  // Handle clicks outside the navbar to close it
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNavbarOpen(false);
    }
  };

  // Effect to close navbar on outside click
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setNavbarOpen(false); // Hide menu on link click
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed mx-auto top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4 lg:py-6">
        {/* Brand Logo */}
        <Link
          href={"/"}
          className="font-serif text-2xl md:text-4xl text-black tracking-wide hover:text-[#9a3a9a] transition duration-300"
          onClick={handleLinkClick}
        >
          RESHAN ART
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-[#9a3a9a] hover:border-[#9a3a9a] transition duration-300"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-[#9a3a9a] hover:border-[#9a3a9a] transition duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              const isActive = pathname.startsWith(link.path);
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 sm:text-xl font-semibold transition duration-300 ${
                      isActive
                        ? "text-[#9a3a9a] border-b-2 border-[#9a3a9a]"
                        : "text-black hover:text-[#9a3a9a]"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Dropdown with Smooth Transition) */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          navbarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 bg-white shadow-lg transition duration-300">
          {navLinks.map((link, index) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <li key={index} className="w-full text-center">
                <Link
                  href={link.path}
                  onClick={handleLinkClick}
                  className={`block py-2 pl-3 pr-4 sm:text-xl font-semibold transition duration-300 ${
                    isActive
                      ? "text-[#9a3a9a] border-b-2 border-[#9a3a9a]"
                      : "text-black hover:text-[#9a3a9a]"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
