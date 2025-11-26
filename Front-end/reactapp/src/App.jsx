import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import SubNavbar from "./Components/SubNavbar";
import Sidebar from "./Components/Sidebar";
import HeaderImages from "./Components/HeaderImages";
import Marquee from "./Components/Marquee";
import ScrollCarousel from "./Components/ScrollCarousel";
import Carosoul from "./Components/Carosoul";
import Stickers from "./Components/Stickers";
import FutureBands from "./Components/FutureBands";
import BigSticker from "./Components/BigSticker";
import Footer from "./Components/Footer";
import References from "./Components/References";
import SubheaderImages from "./Components/SubheaderImages";
import ProductCard from "./Components/ProductCard";
import ProductDetails from "./Components/ProductDetails";
import CartDetails from "./Components/CartDetails";
import Login from "./Components/Login";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
 
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <div className="with-navbar-spacing">
                <HeaderImages />
              </div>

              <Marquee />
              <ScrollCarousel />
              <Carosoul />
              <FutureBands />
              <Stickers />
              <BigSticker />
              <Footer />
              <References />
            </>
          }
        />

     
        <Route
          path="/search"
          element={
            <>
              <SubNavbar />

              <div className="with-subnavbar-spacing">
                <SubheaderImages />
              </div>

              <div className="search-layout">
                <Sidebar />
                <div className="search-products">
                  <ProductCard />
                </div>
              </div>
            </>
          }
        />
 
        <Route
          path="/product/:id"
          element={
            <>
              <SubNavbar />

              <div className="with-subnavbar-spacing">
                <SubheaderImages />
              </div>

              <ProductDetails />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
            <SubNavbar/>
              <Login />
              <References />
            </>
          }
        />

        <Route
          path="/cart/:id"
          element={
            <>
              <SubNavbar />
              <CartDetails />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
