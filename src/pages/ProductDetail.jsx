// src/pages/ProductDetail.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/Products";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const similarProducts = products.filter(
    (prod) => prod.category === product.category && prod.id !== product.id
  );

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 rounded-lg shadow-lg gap-4">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 mt-4 md:mt-0 md:pl-6">
            <h1 className="text-2xl md:text-4xl font-bold text-orange-400 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 text-md md:text-lg mb-4 description-clamp">
              {product.description}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-gray-900 mr-2">
                Rs.{product.price}
              </span>
              {product.cutprice && (
                <span className="text-lg line-through text-gray-500">
                  Rs.{product.cutprice}
                </span>
              )}
            </div>
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
                {product.rate} ★
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-gray-700 mr-2">
                Category:
              </span>
              <span className="text-gray-600">{product.category}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-gray-700 mr-2">Brand:</span>
              <span className="text-gray-600">{product.brand}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-gray-700 mr-2">Stock:</span>
              <span
                className={`text-lg ${
                  product.quantity > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.quantity > 0
                  ? `${product.quantity} in stock`
                  : "Out of stock"}
              </span>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold py-2 px-4 rounded transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
              Similar Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProducts.map((prod) => (
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <ProductCard
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    image={prod.images[0]}
                    category={prod.category}
                    price={prod.price}
                    cutPrice={prod.cutprice}
                    description={prod.description}
                    rating={prod.rate}
                    brand={prod.brand}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
