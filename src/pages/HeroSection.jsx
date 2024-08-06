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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
    <section className="bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Category Bar */}
        <div className="mb-4 m-3 overflow-x-auto bg-white whitespace-nowrap py-8 rounded-md flex ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[120px] mx-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 cursor-pointer transition duration-300 flex flex-col items-center"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 mb-2"
              />
              <span>{category.name}</span>
            </div>
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
              <div key={product.id} className="">
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
                  className="mx-4 my-4"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold m-5 lg:ml-16">For You</h2>
          <NavLink to="/foryou">
            <button className="border-2 bg-white text-orange-400 border-orange-400 px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition duration-300">
              See More
            </button>
          </NavLink>
        </div>
        <div className="for-you-carousel mx-auto w-full px-2 mb-8">
          <Slider {...productCarouselSettings}>
            {forYouProducts.map((product) => (
              <div key={product.id} className="m-2">
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
                  className="mx-4 my-4"
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
