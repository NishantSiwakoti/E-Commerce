import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/cart");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Payment Failed!
        </h1>
        <p className="text-gray-700 mb-4">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          You will be redirected to your cart shortly.
        </p>
        <button
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;
