import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="header">
      {/* Website name (left side) */}
      <Link to="/">
        <a className="website-name">EasyBuy</a>
      </Link>

      {/* Navigation links (center) */}
      <nav className="navigation lg:flex justify-between items-center space-x-4">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/products">
          <a>Products</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>
        <Link to="/contact">
          <a>Contact</a>
        </Link>
      </nav>

      {/* Icons (right side) */}
      <div className="icons">
        <IoIosSearch />
        <IoCartOutline />
        <CgProfile />
      </div>

      {/* Hamburger menu for small screens */}
      <button className="hamburger-menu lg:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
            />
          ) : (
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu (collapse on large screens) */}
      <nav className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/products">
          <a>Products</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>
        <Link to="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
