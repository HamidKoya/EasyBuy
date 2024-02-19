import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";





const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          {/* Hamburger menu */}
          <button
            className="text-white text-xl mr-4 focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <span className="text-white text-3xl font-bold">EasyBuy</span>
        </div>

        {/* Center */}
        <div className="text-white text-lg hidden lg:flex justify-center flex-1">
          <NavLink to="/" className="mr-4 hover:text-gray-400" activeClassName="text-gray-400">Home</NavLink>
          <NavLink to="/product" className="mr-4 hover:text-gray-400" activeClassName="text-gray-400">Product</NavLink>
          <NavLink to="/about" className="mr-4 hover:text-gray-400" activeClassName="text-gray-400">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400" activeClassName="text-gray-400">Contact</NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black px-4 py-2 mr-4 rounded-md focus:outline-none"
          />
        
          <NavLink to="#" className="text-white text-xl mr-4">
          <FaCartShopping />
            
          </NavLink>
          <NavLink to="#" className="text-white text-xl">
          <CgProfile />
          
          </NavLink>
        </div>
      </div>

      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <NavLink to="/" className="block text-white p-2">Home</NavLink>
          <NavLink to="/product" className="block text-white p-2">Product</NavLink>
          <NavLink to="/about" className="block text-white p-2">About</NavLink>
          <NavLink to="/contact" className="block text-white p-2">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
