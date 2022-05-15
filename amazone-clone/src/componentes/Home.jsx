import React from "react";
import "../components.css/Home.css";
import Product from "./Product";
import SingleImage from "./SingleImage";

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
            header="Upgrade your home | Amazon Brands & more"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Appliances_1x._SY116_CB627444559_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
            title1="Smart LED TVs"
            title2="Appliances"
            title3="Furniture"
            title4="Kitchen Producst"
            tolink="Explore more"
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
            tolink="Visit store"
          />
          <div className="singleImge__div">
            <SingleImage />
          </div>

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
            tolink="See all offers"
          />
        </div>
        <div className="home__row">
          <Product
            header="Amazon Pay | Pay utility bills fast & conveniently"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Electricity_186x116._SY116_CB646259375_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/LPG_186x116._SY116_CB646259375_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/Broadband_186x116._SY116_CB646259375_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/FEBGTM/PCrevised/DTH_186x116._SY116_CB628894454_.jpg"
            title1="Electricity bill"
            title2="LPG gas cylinder"
            title3="Broadband bill"
            title4="DTH recharge"
            tolink="Explore more frome Amazon Pay"
          />
          <Product
            header="Up to 60% off | Styles for Women"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg"
            title1="Women's clothing"
            title2="Footwear+Handbags"
            title3="Watches"
            title4="Fashion jewellery"
            tolink=" See all offers"
          />
          <Product
            header="Up to 60% off | Styles for men"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg"
            title1="Clothing"
            title2="Footwear"
            title3="Watches"
            title4="Bags & luggage"
            tolink=" See all offers"
          />
          <Product
            header="Shop by Category"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
            title1="Fresh"
            title2="Mobiles"
            title3="Fashion"
            title4="Electronics"
            tolink=" See more"
          />
        </div>

        <div className="home__row">{/* <Product></Product> */}</div>
      </div>
    </div>
  );
};

export default Home;
