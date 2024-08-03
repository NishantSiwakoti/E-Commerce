import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Products";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  // Settings for the main hero carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Settings for the product carousel
  const productCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Categories for the category bar
  const categories = [
    "Electronics",
    "Fashion",
    "Sports",
    "Toys",
    "Mobiles",
    "Travel",
    "Furniture",
    "Beauty",
    "Appliances",
  ];

  // Image paths for the hero carousel
  const images = ["src/assets/1.png", "src/assets/2.png", "src/assets/3.png"];

  // Filter top deals from the products list
  const topDeals = products.filter((product) => product.cutPrice);

  // Function to get random products
  const getRandomProducts = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get 10 random products
  const randomProducts = getRandomProducts(products, 10);

  return (
    <section className="bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Category Bar */}
        <div className="mb-4 m-3 overflow-x-auto md:justify-center bg-white whitespace-nowrap py-8 rounded-md flex">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-block min-w-[120px] mx-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 cursor-pointer transition duration-300"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Hero Carousel */}
        <div className="carousel mx-auto w-full px-2 mb-8">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-full"
              >
                <img
                  className="rounded-lg w-full h-[150px] md:h-[400px] object-cover"
                  src={img}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Top Deals Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold m-5 lg:ml-16">Top Deals</h2>
          <NavLink to="/topdeals">
            <button className="border-2 bg-white text-orange-400 border-orange-400 px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition duration-300">
              See More
            </button>
          </NavLink>
        </div>

        {/* Top Deals Carousel */}
        <div className="top-deals-carousel mx-auto w-full px-2 mb-8">
          <Slider {...productCarouselSettings}>
            {topDeals.map((product) => (
              <NavLink key={product.id} to={`/product/${product.id}`}>
                <div className="p-4 bg-white rounded-lg shadow-md m-2">
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
                  />
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>

        {/* For You Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold m-5 lg:ml-16">For You</h2>
          <NavLink to="/foryou">
            <button className="border-2 bg-white text-orange-400 border-orange-400 px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition duration-300">
              See More
            </button>
          </NavLink>
        </div>

        {/* For You Grid */}
        <div className="for-you-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full px-2 mb-8">
          {randomProducts.map((product) => (
            <div className="p-4 bg-white rounded-lg shadow-md">
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
