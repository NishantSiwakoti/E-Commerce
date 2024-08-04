import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Products";

const SearchPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q")?.toLowerCase();
    if (query) {
      const results = products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query)
      );
      setFilteredProducts(results);
    }
  }, [location.search]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-orange-400 mb-5">
        Search Results
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
              <ProductCard
                id={product.id}
                title={product.title}
                image={product.images[0]}
                category={product.category}
                price={product.price}
                cutPrice={product.cutPrice}
                description={product.description}
                rating={product.rate}
                brand={product.brand}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
