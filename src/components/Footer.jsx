import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              About HamroMart
            </h3>
            <p className="text-sm text-gray-400">
              HamroMart is your trusted e-commerce platform offering
              high-quality products at affordable prices. Shop with us for a
              seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/foryou" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/mycart" className="hover:text-white">
                  My Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-gray-400">Address: Kathmandu, Nepal</p>
            <p className="text-sm text-gray-400">Phone: +977-123-456789</p>
            <p className="text-sm text-gray-400">
              Email: support@hamromart.com
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HamroMart. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
