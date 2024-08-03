import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold text-orange-500">
            HamroMart
          </a>
        </div>
        <div className="flex-1 mx-4 hidden lg:block">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
            <input
              type="text"
              className="w-full bg-gray-100 py-2 pl-10 pr-4 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Search for Products, Brands and More"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2">
            <FaUser className="text-orange-500 text-2xl" />
            <span className="text-orange-600">Login</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-orange-500 text-2xl" />
            <span className="hidden lg:block text-orange-600">Cart</span>
          </div>

          <div className="lg:hidden text-2xl mt-1 md:mt-0">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-orange-500 text-2xl" />
                <span className="text-orange-600">Login</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="text-orange-500 text-2xl" />
                <span className="text-orange-600">Cart</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
