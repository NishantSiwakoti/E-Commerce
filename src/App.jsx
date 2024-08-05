import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/CartContext";
import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <CartProvider>
      <Allroutes />
      <ToastContainer autoClose={2000} />
    </CartProvider>
  );
}

export default App;
