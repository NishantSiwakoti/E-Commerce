import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaArrowRight,
} from "react-icons/fa";

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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl sm:max-w-md md:max-w-lg lg:max-w-sm">
      {/* Image Section */}
      <Link to={`/product/${id}`} aria-label={`View details for ${title}`}>
        <div className="relative h-64 sm:h-72 md:h-80">
          <img
            className="w-full h-full object-contain bg-gray-100"
            src={image}
            alt={`${title} Image`}
          />
          {cutPrice && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg sm:text-sm md:px-3 md:py-1.5">
              {Math.round(((cutPrice - price) / cutPrice) * 100)}% OFF
            </span>
          )}
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg sm:text-sm md:px-3 md:py-1.5">
            {brand}
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-4 space-y-2 md:space-y-3">
        <Link to={`/product/${id}`}>
          <h2 className="text-lg font-semibold text-gray-800 truncate hover:text-orange-500 transition sm:text-xl">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-500 sm:text-base">{category}</p>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600 sm:text-xl">
              Rs.{price}
            </p>
            {cutPrice && (
              <p className="text-xs text-gray-500 line-through sm:text-sm">
                Rs.{cutPrice}
              </p>
            )}
          </div>
        </div>
        <p className="text-gray-600 mt-1 text-sm truncate sm:mt-2 sm:text-base">
          {description}
        </p>
        <div className="mt-2 flex items-center space-x-1">
          {renderStars(rating)}
          <span className="text-gray-600 ml-2 text-sm sm:text-base">
            ({rating})
          </span>
        </div>

        {/* Buttons Section */}
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
          <button
            className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-600 transition duration-300 sm:px-6 sm:py-3"
            onClick={() => alert("Buy Now clicked!")}
          >
            <FaArrowRight />
            <span>Buy Now</span>
          </button>
          {isAddedToCart ? (
            <Link
              to="/mycart"
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300 sm:px-6 sm:py-3"
            >
              <FaShoppingCart />
              <span>Go to Cart</span>
            </Link>
          ) : (
            <button
              className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition duration-300 sm:px-6 sm:py-3"
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
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
