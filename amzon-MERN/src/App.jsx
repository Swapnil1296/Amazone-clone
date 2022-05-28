import React from "react";
import Navbar from "./componentes/TopNav/Navbar";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import SignIn from "./componentes/SignUpSignIN/SignIn";
import SignUp from "./componentes/SignUpSignIN/SignUp";
import { Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;
