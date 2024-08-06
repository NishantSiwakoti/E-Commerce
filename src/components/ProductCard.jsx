import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({
  id,
  title,
  image,
  category,
  price,
  cutPrice,
  description,
  rating,
  brand,
}) => {
  const { addToCart } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      image,
      category,
      price,
      cutPrice,
      description,
      rating,
      brand,
    });
    setIsAddedToCart(true);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/product/${id}`}>
        <div className="relative h-64 transform transition duration-300 hover:scale-105">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={`${title} Image`}
          />
          {cutPrice && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.round(((cutPrice - price) / cutPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">Rs.{price}</p>
            {cutPrice && (
              <p className="text-sm text-gray-500 line-through">
                Rs.{cutPrice}
              </p>
            )}
          </div>
        </div>
        <p className="text-gray-600 mt-2 truncate text-ellipsis overflow-hidden whitespace-nowrap">
          {description}
        </p>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500">
            {"★".repeat(Math.floor(rating))}
          </span>
          <span className="text-gray-600 ml-2">({rating})</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={() => alert("Buy Now clicked!")}
          >
            Buy Now
          </button>
          {isAddedToCart ? (
            <Link
              to="/mycart"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Cart
            </Link>
          ) : (
            <button
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cutPrice: PropTypes.number,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
};

export default ProductCard;
