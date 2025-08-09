import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemCount = 3;
  const isLoggedIn = true;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🍔</span>
            <span className="font-bold text-orange-600 text-xl">My Food</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center text-[16px] font-medium">
            <Link to="/" className="text-gray-700 hover:text-orange-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">
              Contact
            </Link>
            <Link
              to="/instamart"
              className="text-gray-700 hover:text-orange-600"
            >
              Instamart
            </Link>

            {/* Cart with Badge */}
            <div className="relative">
              <Link to="/cart" className="text-gray-700 hover:text-orange-600">
                Cart
              </Link>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>

            <button className="ml-4 px-4 py-1 bg-orange-600 text-white rounded hover:bg-orange-700">
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xl text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-orange-600">
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-orange-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-orange-600"
          >
            Contact
          </Link>
          <Link
            to="/instamart"
            className="block text-gray-700 hover:text-orange-600"
          >
            Instamart
          </Link>
          <div className="relative">
            <Link
              to="/cart"
              className="block text-gray-700 hover:text-orange-600"
            >
              Cart
            </Link>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
