import React from "react";
import Carousel from "react-material-ui-carousel";
import "./HeadSlider.css";

const data = [
  "https://m.media-amazon.com/images/I/71Infb2eWwL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81eCjIs+p3L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81fYC11Y-XL._SX3000_.jpg",
];

const HeadSlider = () => {
  return (
    <>
      <Carousel
        className="carasousel"
        autoPlay={true}
        infiniteLoop={true}
        indicators={false}
        navButtonsAlwaysVisible={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        navButtonsProps={{
          style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0, 
            marginTop: -150,
            height: "108px",
          },
        }}
      >
        {data.map((image, i) => {
          return (
            <>
              <img src={image} alt="image" key={i} className="banner_img" />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default HeadSlider;
