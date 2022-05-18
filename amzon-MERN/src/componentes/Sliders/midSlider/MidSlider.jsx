import React from 'react'
import './midSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import  {sliderData} from './slidesData'
import { Divider } from '@mui/material';
const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 4,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
};
const MidSlider = (data) => {
    // geting data from home component
     
    const slidesData=data.data
    // console.log("slidesData:", slidesData);
  return (
    <div className="products_section">
      <div className="products_deal">
        <h2>Today's Deal</h2>
        <button className="view_btn">View All</button>
      </div>
      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {slidesData.map((e, i) => {
          return (
            <div className="products_items" key={i}>
              <div className="product_img">
                <img src={e.image} alt="product" />
              </div>
              <p className="products_name">{e.discount}</p>
              <p className="products_offer" style={{color: "#  007185"}}>
                {e.tag}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MidSlider
