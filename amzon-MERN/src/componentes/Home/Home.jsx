import React from "react";
import "./Home.css";
import Product from "../HomeProducts/HomePoducts";
import SingleImage from "../singleCardonHome/SingleImage";
import HeadSlider from "../Sliders/HeadSlider/HeadSlider";
import MidSlider from "../Sliders/midSlider/MidSlider";
import {dataFive, dataFour, dataOne, dataSeven, dataSix, dataThree} from "../data/slidersdata";
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
            header="Top picks for your home"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            title1="ACs"
            title2="Refrigerators"
            title3="Microwaves"
            title4="Washing machines"
            tolink="See more"
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
          <MidSlider data={dataOne} />
        </div>
        <div className="midslide__home">
          <MidSlider data={dataTwo} />
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
        <div className="home__row">
          <div className="singleImge__div">
            <SingleImage
              title="Up to 50% off | Photography essentials"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/2022/Mar/GW/379x304_pc_card_._SY304_CB628025383_.jpg"
              tolink="See more"
            />
          </div>
          <Product
            header="Food, fitness and WFH essentials | Amazon"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/10.Granola-bars_186x116._SY116_CB668532477_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/2.WFH-essentials_186x116._SY116_CB668532477_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/21.Protein-supplements_186x116._SY116_CB668532477_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/22.Fitness-essentials1_186x116._SY116_CB668532477_.jpg"
            title1="Breakfast essentials"
            title2="WFH essentials"
            title3="Protein supplements"
            title4="Fitness essentials"
            tolink="See all offers"
          />
          <Product
            header="Up to 45% off | Shop by Pet"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg"
            title1="Dog supplies"
            title2="Cat supplies"
            title3="Birds & small animals"
            title4="Aquarium accessories"
            tolink=" See all deals"
          />

          <Product
            header="Stay protected | Masks, PPE kits & more from"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/mask_2_blue186x116._SY116_CB668519139_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/7.PPE-kit1_186x116._SY116_CB668519139_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/6.Sanitizers_186x116._SY116_CB668519139_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/4.-Vitamins1_186x116._SY116_CB668519139_.jpg"
            title1="Masks"
            title2="PPE kits & face shield"
            title3="Sanitizers"
            title4="Vitamins"
            tolink=" See all offers"
          />
        </div>
        <div className="midslide__home">
          <MidSlider data={dataThree} />
        </div>
        <div className="midslide__home">
          <MidSlider data={dataFour} />
        </div>
        <div className="banner__image">
          <img
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            alt="imga"
          />
        </div>
        <div className="home__row">
          <Product
            header="Birthday store"
            image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg"
            image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg"
            image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg"
            image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg"
            title1="Gift for men"
            title2="Gift for women"
            title3="Gift for boys"
            title4="Gift for girls"
            tolink="See more"
          />
          <div className="singleImge__div">
            <SingleImage
              title="Immunity boosters & everyday essentials |"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/PC_CC_379x304._SY304_CB668525590_.jpg"
              tolink="Explore more Indian brands"
            />
          </div>
          <div className="singleImge__div">
            <SingleImage
              title="Kitchen organizers from local shops"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/1_1x_ujhsg._SY304_CB627739742_.jpg"
              tolink="Visit the local shop store"
            />
          </div>
          <div className="singleImge__div">
            <SingleImage
              title="Mega Electronics Days | Explore more"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Mega_Electronics_Day/MSO/CC/D45798145_IN_PC-Electronics-Mega-Electronics-days_758x608_dbcc-10.5x._SY304_CB636913003_.jpg"
              tolink="See all deals"
            />
          </div>
        </div>
        <div className="midslide__home">
          <MidSlider data={dataFive} />
        </div>
        <div className="midslide__home">
          <MidSlider data={dataSix} />
        </div>
        <div className="midslide__home">
          <MidSlider data={dataSeven} />
        </div>
      </div>
    </div>
  );
};

export default Home;
