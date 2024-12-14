import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../assets/Products";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "../context/CartContext";
import SimilarProducts from "../components/SimilarProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);
  const { addToCart, cartItems } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (product) {
      document.title = `${product.title} | HamroMart`;
    } else {
      document.title = "Product not found | HamroMart";
    }
  }, [id, product]);

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
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-6 rounded-lg shadow-lg gap-6">
          {/* Product Images */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              interval={3000}
              showStatus={false}
              swipeable
            >
              {product.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 lg:w-3/5 mt-4 md:mt-0 md:pl-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 text-md md:text-lg mb-4 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-gray-900 mr-2">
                Rs. {product.price}
              </span>
              {product.cutPrice && (
                <span className="text-lg line-through font-medium text-gray-500 ml-2">
                  Rs. {product.cutPrice}
                </span>
              )}
              {product.cutPrice && (
                <span className="ml-4 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                  {Math.round(
                    ((product.cutPrice - product.price) / product.cutPrice) *
                      100
                  )}
                  % OFF
                </span>
              )}
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`h-5 w-5 rounded-full ${
                      i < product.rate ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.rate} stars)</span>
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
                className={`text-lg font-bold ${
                  product.quantity > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.quantity > 0
                  ? `${product.quantity} in stock`
                  : "Out of stock"}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="bg-orange-500 rounded-xl hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6 transition duration-300 shadow-lg">
                Buy Now
              </button>
              {isAddedToCart ? (
                <Link
                  to="/mycart"
                  className="bg-blue-500 rounded-xl hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 transition duration-300 shadow-lg"
                >
                  Go to Cart
                </Link>
              ) : (
                <button
                  className="bg-green-500 rounded-xl hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 transition duration-300 shadow-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <SimilarProducts
          products={products}
          currentProductId={product.id}
          currentCategory={product.category}
        />
      </div>
    </section>
  );
};

export default ProductDetail;
