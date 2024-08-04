import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import { products } from "../assets/Products";

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images[0]}
              category={product.category}
              price={product.price}
              cutPrice={product.cutPrice}
              description={product.description}
              rating={product.rate}
              brand={product.brand}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
