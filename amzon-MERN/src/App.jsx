import React from "react";
import Navbar from "./componentes/TopNav/Navbar";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import SignIn from "./componentes/SignUpSignIN/SignIn";
import SignUp from "./componentes/SignUpSignIN/SignUp";
import { Routes,Route } from "react-router-dom";
import Cart from "./componentes/cart/Cart";
import BuyNow from "./componentes/buyNow/BuyNow";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproduct/:id" element={<Cart />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;
