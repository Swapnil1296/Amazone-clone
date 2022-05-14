import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";


import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Checkout from "./components/Checkout";

function App() {
  return (
    
      <div className="App">
        
      {/* <Header></Header>
      <Home></Home> */}
      {/* <Product></Product> */}
      <Checkout></Checkout>
        
      </div>
    
  );
}

export default App;
