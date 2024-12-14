import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Products";
import { NavLink } from "react-router-dom";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

import catImg1 from "../assets/beauty.png";
import catImg2 from "../assets/electronics.png";
import catImg3 from "../assets/fashion.png";
import catImg4 from "../assets/fur.png";
import catImg5 from "../assets/sports.png";
import catImg6 from "../assets/toys.png";
import catImg7 from "../assets/travel.png";
import catImg8 from "../assets/phones.png";

const HeroSection = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const productCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const categories = [
    { name: "Electronics", image: catImg2 },
    { name: "Fashion", image: catImg3 },
    { name: "Sports", image: catImg5 },
    { name: "Toys", image: catImg6 },
    { name: "Mobiles", image: catImg8 },
    { name: "Travel", image: catImg7 },
    { name: "Furniture", image: catImg4 },
    { name: "Beauty", image: catImg1 },
  ];

  const images = [img1, img2, img3];
  const topDeals = products.filter((product) => product.cutPrice);
  const forYouProducts = products.slice(0, 10);

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-gray-200 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Category Bar */}
        <div className="category-bar mb-8 py-6 mt-2 bg-white shadow-lg rounded-xl flex justify-around flex-wrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card flex flex-col items-center cursor-pointer group"
              aria-label={category.name}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10"
                />
              </div>
              <span className="mt-3 text-gray-700 group-hover:text-orange-500 text-sm font-semibold transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* Hero Carousel */}
        <div className="carousel w-full mb-12">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-full overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                  Discover Amazing Deals!
                </div> */}
              </div>
            ))}
          </Slider>
        </div>

        {/* Top Deals Section */}
        <div className="section-header flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Top Deals
          </h2>
          <NavLink to="/topdeals">
            <button className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all">
              See More
            </button>
          </NavLink>
        </div>
        <div className="top-deals-carousel mb-12">
          <Slider {...productCarouselSettings} className="gap-x-4">
            {topDeals.map((product) => (
              <div key={product.id} className="px-2">
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
          </Slider>
        </div>

        {/* For You Section */}
        <div className="section-header flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            For You
          </h2>
          <NavLink to="/foryou">
            <button className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all">
              See More
            </button>
          </NavLink>
        </div>
        <div className="for-you-carousel mb-12">
          <Slider {...productCarouselSettings} className="gap-x-4">
            {forYouProducts.map((product) => (
              <div key={product.id} className="px-2">
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
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
