import React, {useState} from "react";

import "./Product.css";

const Product = ({
  header,
  title2,
  title3,
  title4,
  title1,
  image1,
  image2,
  image3,
  image4,
  tolink
}) => {
  return (
    <div className="product">
     

      <div className="product__title">
        <p>{header}</p>
      </div>
      <div className="product__card__container">
        <div className="product__element__container">
          <img src={image1} alt="" />
          <p>{title1}</p>
        </div>
        <div className="product__element__container">
          <img src={image2} alt="" />
          <p>{title2}</p>
        </div>
        <div className="product__element__container">
          <img src={image3} alt="" />
          <p>{title3}</p>
        </div>
        <div className="product__element__container">
          <img src={image4} alt="" />
          <p>{title4}</p>
        </div>
      </div>
      <p className="product__link">{ tolink}</p>
    </div>
  );
};

export default Product;
