import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
      setShowSearchInput(false);
    }
  };

  const handleCartClick = () => {
    navigate("/mycart");
  };

  return (
    <header className="bg-orange-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="/"
          className="md:text-3xl text-2xl font-bold text-white flex items-center"
        >
          Hamro<span className="text-blue-600">Mart</span>
        </a>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 mx-6">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for Products, Brands and More"
            />
          </form>
        </div>

        {/* Icons and Menu */}
        <div className="flex items-center space-x-4">
          {/* Search Icon (Mobile) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setShowSearchInput(!showSearchInput)}
          >
            <FaSearch className="text-2xl hover:text-blue-300" />
          </button>

          {/* User/Login */}
          <div className="hidden lg:flex items-center space-x-2 cursor-pointer hover:scale-105 transition transform">
            <FaUser className="text-white text-2xl" />
            <span className="text-white font-semibold">Login</span>
          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer hover:scale-105 transition transform"
            onClick={handleCartClick}
          >
            <FaShoppingCart className="text-white text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearchInput && (
        <div className="lg:hidden p-4 bg-orange-400">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for Products, Brands and More"
            />
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-orange-400">
          <div className="p-4 space-y-4">
            {/* Login */}
            <div className="flex items-center space-x-2 text-white">
              <FaUser className="text-2xl" />
              <span className="font-semibold">Login</span>
            </div>
            {/* Cart */}
            <div
              className="flex items-center space-x-2 text-white"
              onClick={handleCartClick}
            >
              <FaShoppingCart className="text-2xl" />
              <span className="font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="bg-blue-600 text-xs text-white rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
