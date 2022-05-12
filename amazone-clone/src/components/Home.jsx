import React from "react";

import "../CSSfiles/Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51x7nrGlOrL._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51aoe6r1ibL._SX323_BO1,204,203,200_.jpg"
            price={99.99}
            rating={5}
          ></Product>
          <Product></Product>
        </div>
        <div className="home__row">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div className="home__row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
