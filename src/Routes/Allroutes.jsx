import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "../pages/HeroSection";
import TopDeals from "../pages/TopDeals";
import ForYouPage from "../pages/ForYouPage";
import ProductDetail from "../pages/ProductDetail";
import SearchPage from "../pages/SearchPage";
import Header from "../components/Header";
import MyCartPage from "../pages/MyCartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="topdeals" element={<TopDeals />} />
        <Route path="foryou" element={<ForYouPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mycart" element={<MyCartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
