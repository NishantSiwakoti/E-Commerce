import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import empty from "../assets/empty.png";

const MyCartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    // Scroll to the top of the page whenever the component is rendered
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16">
            <img
              src={empty}
              alt="Empty Cart"
              className="w-3/5 md:w-1/4 mb-6 rounded-3xl"
            />
            <p className="text-xl font-semibold text-gray-800">
              Your cart is empty
            </p>
            <p className="text-gray-600 text-center mt-2">
              Looks like you haven’t made any choices yet.
            </p>
            <NavLink to="/" className="mt-6">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        ) : (
          <div className="grid grid-cols-1 m-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-4 relative hover:shadow-2xl transition duration-300"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                  {item.cutPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {Math.round(
                        ((item.cutPrice - item.price) / item.cutPrice) * 100
                      )}{" "}
                      % OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <Link to={`/product/${item.id}`}>
                    <h2 className="text-lg font-bold text-gray-800 truncate">
                      {item.title}
                    </h2>
                  </Link>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-gray-800 text-lg font-semibold">
                        Rs.{item.price}
                      </p>
                      {item.cutPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          Rs.{item.cutPrice}
                        </p>
                      )}
                    </div>
                    <Link
                      to={`/product/${item.id}`}
                      className="text-blue-500 text-sm hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
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
    </div>
  );
};

export default MyCartPage;
