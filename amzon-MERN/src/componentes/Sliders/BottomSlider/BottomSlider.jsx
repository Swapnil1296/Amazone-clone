import {Divider} from "@mui/material";
import React from "react";
import "./BottomSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
const BottomSlider = (data) => {
    const slidesData = data.data.history;
    // console.log(slidesData);
  return (
    <div className="bottom__slider">
      <Divider />
      <div className="bottom__title">
        <h3>Customers who viewed items in your browsing history also viewed</h3>
      </div>
      <Divider />
      {/* slider goes here */}
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        
          {slidesData.map((e, i) => (
            <div className="bottom__container" key={i}>
              <div className="bottom__img" key={i}>
                <img src={e.url} alt="imga" />
              </div>
              <div className="bottom__detail">
                <p className="img__description">{e.description}</p>
                <span>{e.rating}</span>
                <p className="bottom__price">{e.price}</p>
                <p className="bottom__delivery">{e.delivery}</p>
              </div>
            </div>
          ))}
        
      </Carousel>
      <Divider/>
    </div>
  );
};

export default BottomSlider;
