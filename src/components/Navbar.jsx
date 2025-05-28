import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", to: "/", type: "route" },
    { label: "About", hash: "#about", to: "/", type: "hash" },
    { label: "Services", to: "/services", type: "route" },
    { label: "Certification", to: "/Certification", type: "route" },
    { label: "Features", hash: "#features", to: "/", type: "hash" },
    { label: "FAQs", hash: "#faqs", to: "/", type: "hash" },
    { label: "Contact", hash: "#contact", to: "/", type: "hash" },
  ];

  const handleHashClick = (to, hash) => {
    setMenuOpen(false);
    if (location.pathname !== to) {
      navigate(to + hash);
    } else {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveHash(hash);
      }
    }
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setActiveHash("");
    }
  };

  // Watch for location change and update active hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setActiveHash(location.hash);
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      setActiveHash("");
    }
  }, [location]);

  const isActive = ({ type, to, hash }) => {
    if (type === "route") return location.pathname === to && !location.hash;
    if (type === "hash") return location.pathname === to && activeHash === hash;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1440px] h-[113.19px] mx-auto flex justify-between items-center px-6 md:px-20">
        {/* Logo */}
        <button onClick={handleHomeClick} className="flex items-center">
          <img
            src="/logo.png"
            alt="QuanteraAI Logo"
            className="h-12 w-auto md:h-14 object-contain"
          />
        </button>

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          style={{ color: "#000000" }}
          className={`flex-col md:flex-row md:flex md:space-x-4 font-medium font-robotoslab
            absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent
            shadow-md md:shadow-none transition-all duration-300 ease-in-out 
            ${menuOpen ? "flex" : "hidden"} md:flex text-center md:text-left`}
        >
          {navLinks.map(({ label, to, type, hash }, idx) => {
            const active = isActive({ type, to, hash });

            const baseClasses =
              "block px-6 py-3 md:py-0 transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1363C6] hover:to-[#14183E]";
            const activeClasses =
              "text-transparent bg-clip-text bg-gradient-to-r from-[#1363C6] to-[#14183E] font-semibold";

            if (label === "Home") {
              return (
                <button
                  key={idx}
                  onClick={handleHomeClick}
                  className={`${baseClasses} ${active ? activeClasses : "text-[#000000]"}`}
                >
                  {label}
                </button>
              );
            }

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
            }

            if (type === "hash") {
              return (
                <button
                  key={idx}
                  onClick={() => handleHashClick(to, hash)}
                  className={`${baseClasses} ${active ? activeClasses : "text-[#000000]"}`}
                >
                  {label}
                </button>
              );
            }

            return null;
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
