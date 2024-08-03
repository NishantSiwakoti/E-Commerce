import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Products";

const TopDeals = () => {
  const topDeals = products.filter((product) => product.cutPrice);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
          Top Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {topDeals.map((product) => (
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

export default TopDeals;
