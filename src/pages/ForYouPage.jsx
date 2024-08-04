import React from "react";
import { products } from "../assets/Products";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

const ForYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouPage;
