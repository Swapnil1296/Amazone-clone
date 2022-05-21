import React from "react";
import "./SingleImage.css";

// for single image card of homepage

const SingleImage = ({title, image, tolink}) => {
  return (
    <div>
      <div className="product__single">
        <div className="single__product__title">
          <p>{title}</p>
        </div>
        <div className="single__product__card">
          <img src={image} alt="image" />
        </div>
        <p className="single__link">{tolink}</p>
      </div>
    </div>
  );
};

export default SingleImage;
