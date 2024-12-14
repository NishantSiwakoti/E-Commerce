import React from "react";
import { Link } from "react-router-dom";

const SimilarProducts = ({ products, currentProductId, currentCategory }) => {
  const similarProducts = products.filter(
    (product) =>
      product.category === currentCategory && product.id !== currentProductId
  );

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center  font-bold text-orange-400 mb-4">
        Similar Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h3>
            <div className="text-gray-600 font-bold flex items-center space-x-2">
              {product.cutPrice ? (
                <>
                  <p className="text-red-600 font-bold">Rs.{product.price}</p>
                  <p className="line-through text-gray-500">
                    Rs.{product.cutPrice}
                  </p>
                </>
              ) : (
                <p>Rs.{product.price}</p>
              )}
            </div>
            <div className="flex items-center mt-2">
              <p className="text-yellow-500 text-sm font-medium">
                ⭐ {product.rate} / 5
              </p>
            </div>
          </Link>
        ))}
      </div>
      {similarProducts.length === 0 && (
        <p className="text-gray-600 mt-4">
          No similar products found in this category.
        </p>
      )}
    </div>
  );
};

export default SimilarProducts;
