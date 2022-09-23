import React from "react";
import Home from "./Home";
import Error from "./Error";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import { DataProvider } from "./context/DataContext";
import Payment from "./Payment";

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </DataProvider>
    </Router>
  );
};

export default App;
