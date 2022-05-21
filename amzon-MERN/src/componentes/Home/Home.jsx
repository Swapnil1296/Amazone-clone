import React from "react";
import "./Home.css";
import Product from "../HomeProducts/HomePoducts";
import SingleImage from "../singleCardonHome/SingleImage";
import HeadSlider from "../Sliders/HeadSlider/HeadSlider";
import MidSlider from "../Sliders/midSlider/MidSlider";
import {dataOne} from "../data/slidersdata";
import {dataTwo} from "../data/slidersdata";
const Home = () => {
  // data to send midslider component;

  return (
    <div className="home">
      <div className="home_container">
        <div className="home__image">
          <HeadSlider />
        </div>
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
            <SingleImage
              title="Up to 70% off | Clearance store"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
              tolink="See more"
            />
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
        <div className="midslide__home">
          <MidSlider  data={dataOne} />
        </div>
        <div className="midslide__home">
          <MidSlider title="Today's Deal" data={dataTwo} />
        </div>
        <div className="home__row">
          <Product
            header="Cookware & dining"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
            title1="Gas stoves"
            title2="Cookware"
            title3="Kitchen storage"
            title4="Tableware"
            tolink="See more"
          />
          <Product
            header="Electronics devices for home office"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
            title1="Smartwatches & fitness trackers"
            title2="Tablets"
            title3="Laptops"
            title4="Monitors"
            tolink=" See all"
          />
          <div className="singleImge__div">
            <SingleImage
              title="Save 10% with less effort"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/SnS/X-site/2022winter/XCM_Manual_ORIGIN_1402790_2138292_4419909_IN_SNS_GW_Spring_379x304_1X._SY304_CB624224587_.jpg"
              tolink="Subscribe & save"
            />
          </div>

          <Product
            header="Clothing for all"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC_01._SY116_CB651157265_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC_02._SY116_CB651157265_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC2_01._SY116_CB651157265_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC2_02._SY116_CB651157265_.jpg"
            title1="Kurtas | Upto 70% off"
            title2="Sarees | Upto 70% off"
            title3="T-shirts | Up to 70% off"
            title4="Jeans | Up to 70% off"
            tolink=" See all "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
