import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "#home", to: "/", type: "route" },
    { label: "About", href: "#about" },
    { label: "Services", to: "/services", type: "route" },
    { label: "Our Team", href: "#ourteam" },
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  const isActive = ({ type, to, href }) => {
    if (type === "route") {
      return location.pathname === to;
    } else if (href) {
      return location.pathname === "/" && window.location.hash === href;
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1440px] h-[113.19px] mx-auto flex justify-between items-center px-6 md:px-20">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="QuanteraAI Logo"
            className="h-12 w-auto md:h-14 object-contain"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Responsive Nav (shared for desktop & mobile) */}
        <nav
          style={{ color: "#000000" }}
          className={`flex-col md:flex-row md:flex md:space-x-4 font-medium font-robotoslab
            absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent
            shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              menuOpen ? "flex" : "hidden"
            } md:flex`}
        >
          {navLinks.map(({ label, href, to, type }, idx) => {
            const active = isActive({ type, to, label, href });

            const baseClasses =
              "block px-6 py-3 md:py-0 transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1363C6] hover:to-[#14183E]";
            const activeClasses =
              "text-transparent bg-clip-text bg-gradient-to-r from-[#1363C6] to-[#14183E] font-semibold";

            if (type === "route") {
              return (
                <Link
                  key={idx}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`${baseClasses} ${active ? activeClasses : "text-[#000000]"}`}
                >
                  {label}
                </Link>
              );
            } else {
              return (
                <a
                  key={idx}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`${baseClasses} ${active ? activeClasses : ""}`}
                >
                  {label}
                </a>
              );
            }
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
