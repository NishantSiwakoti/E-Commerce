import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Products";
import { useEffect } from "react";

const TopDeals = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const topDeals = products.filter((product) => product.cutPrice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
          Top Deals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topDeals.map((product) => (
            <div className="p-4 bg-white rounded-lg shadow-md" key={product.id}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
