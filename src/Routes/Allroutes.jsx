import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "../pages/HeroSection";
import TopDeals from "../pages/TopDeals";
import ForYouPage from "../pages/ForYouPage";
import ProductDetail from "../pages/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="topdeals" element={<TopDeals />} />
        <Route path="foryou" element={<ForYouPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
