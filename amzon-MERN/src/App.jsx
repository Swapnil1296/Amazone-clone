import React from "react";
import Navbar from "./componentes/TopNav/Navbar";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;
