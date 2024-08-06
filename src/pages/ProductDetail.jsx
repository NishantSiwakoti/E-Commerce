import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../assets/Products";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);
  const { addToCart, cartItems } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (cartItems.some((item) => item.id === id)) {
      setIsAddedToCart(true);
    }
  }, [cartItems, id]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, image: product.images[0] });
    setIsAddedToCart(true);
  };

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
              interval={2000}
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
              {product.description.split(". ").slice(0, 2).join(". ")}.
            </p>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-gray-900 mr-2">
                Rs.{product.price}
              </span>
              {product.cutPrice && (
                <span className="text-lg line-through font-medium text-gray-500 ml-2 relative">
                  Rs.{product.cutPrice}
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
            <div className="flex space-x-4">
              <button className="bg-orange-400 rounded-xl hover:bg-orange-500 text-white text-lg font-semibold py-2 px-4 transition duration-300">
                Buy Now
              </button>
              {isAddedToCart ? (
                <Link
                  to="/mycart"
                  className="bg-blue-500 rounded-xl hover:bg-blue-600 text-white text-lg font-semibold py-2 px-4 transition duration-300"
                >
                  Go to Cart
                </Link>
              ) : (
                <button
                  className="bg-green-500 rounded-xl hover:bg-green-600 text-white text-lg font-semibold py-2 px-4 transition duration-300"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
