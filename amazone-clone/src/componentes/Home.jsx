import React from "react";
import "../components.css/Home.css";
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
          {/* <Product
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51aoe6r1ibL._SX323_BO1,204,203,200_.jpg"
            price={99.99}
            rating={5}
          ></Product> */}
          <Product
            header="Upgrade your home | Amazon Brands & more"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Appliances_1x._SY116_CB627444559_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
            title1="Smart LED TVs"
            title2="Appliances"
            title3="Furniture"
            title4="Kitchen Producst"
          />
          <Product
            header="Top rated, premium quality | Amazon Brands &..."
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Home_1x._SY116_CB627275939_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/DE_1x._SY116_CB627275939_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
            title1="Home Products"
            title2="Furniture"
            title3="Daily essentials"
            title4="Clothing essentials"
          />
          <Product
            header="Up to 70% off | Clearance store"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
          />
          <Product/>
        </div>
        <div className="home__row">
          {/* <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product> */}
        </div>
        <div className="home__row">{/* <Product></Product> */}</div>
      </div>
    </div>
  );
};

export default Home;
