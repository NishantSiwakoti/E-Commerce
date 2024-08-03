import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <Link to={`/product/${id}`}>
        <div className="relative h-64 transform transition duration-300 hover:scale-105">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={`${title} Image`}
          />
          {/* Discount Badge */}
          {cutPrice && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.round(((cutPrice - price) / cutPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <Link to={`/product/${id}`}>
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
        </Link>

        {/* Category, Brand, and Pricing */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            {/* Category */}
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
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => alert("Buy Now clicked!")}
          >
            Buy Now
          </button>
          <button
            className="px-2 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => alert("Add to Cart clicked!")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  price: PropTypes.number.isRequired,
  cutPrice: PropTypes.number,
  description: PropTypes.string,
  rating: PropTypes.number,
  brand: PropTypes.string,
};

ProductCard.defaultProps = {
  category: "",
  cutPrice: null,
  description: "",
  rating: 0,
  brand: "",
};

export default ProductCard;
