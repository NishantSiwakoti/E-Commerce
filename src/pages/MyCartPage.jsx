import React from "react";
import { useCart } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import empty from "../assets/empty.png";

const MyCartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold text-orange-400 mb-4">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-8">
          <img
            src={empty}
            alt="Empty Cart"
            className="w-1/2 md:w-1/4 mb-4 rounded-3xl"
          />
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            Your cart is empty
          </p>
          <p className="text-base text-center md:text-base mt-2 text-gray-700">
            Looks like you've not made any choices.
          </p>
          <NavLink to="/">
            <button className="px-4 py-2 bg-orange-400 mt-5 text-white rounded-lg">
              Keep Shopping
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-orange-400 shadow-md rounded-lg overflow-hidden p-4 flex flex-col md:flex-row items-center md:items-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-52 h-w-52 rounded-lg object-contain md:w-56 md:h-w-56"
              />
              <div className="flex-1 ml-4 mt-4 md:mt-0">
                <Link to={`/product/${item.id}`}>
                  <h2 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h2>
                </Link>
                <div className="flex flex-col md:flex-row">
                  <p className="text-white text-xl">Rs.{item.price}</p>
                  <p className="text-white text-lg md:ml-4 line-through">
                    Rs.{item.cutPrice}
                  </p>
                </div>

                <div className="flex mt-4">
                  <button
                    className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 mr-2"
                    onClick={() => alert("Buy Now clicked!")}
                  >
                    Buy Now
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCartPage;
