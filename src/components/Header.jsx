import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
      setShowSearchInput(false); // Hide the search input after submission
    }
  };

  return (
    <header className="bg-orange-400 shadow-md relative">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-5">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold text-white">
            Hamro<span className="text-blue-500">Mart</span>
          </a>
        </div>
        <div className="flex-1 mx-4 hidden lg:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-white-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-white-500"
              placeholder="Search for Products, Brands and More"
            />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center space-x-2 lg:hidden">
            {/* Search icon for mobile */}
            <button onClick={() => setShowSearchInput(!showSearchInput)}>
              <FaSearch className="text-[#005f61] text-2xl" />
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <FaUser className="text-white-500 text-2xl" />
            <span className="text-white-600">Login</span>
          </div>
          <div className="relative flex items-center space-x-2">
            <FaShoppingCart className="text-[#005f61] text-2xl relative">
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </FaShoppingCart>
          </div>
          <div className="lg:hidden text-2xl mt-1 md:mt-0">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <AiOutlineClose className="text-[#005f61]" />
              ) : (
                <AiOutlineMenu className="text-[#005f61]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {showSearchInput && (
        <div className="container mx-auto mt-4 p-4 lg:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Search for Products, Brands and More"
            />
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-[#005f61] text-2xl" />
                <span className="text-[#005f61]">Login</span>
              </div>
              <div className="relative flex items-center space-x-2">
                <FaShoppingCart className="text-[#005f61] text-2xl relative">
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </FaShoppingCart>
                <span className="text-[#005f61] font-semibold">Cart</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
