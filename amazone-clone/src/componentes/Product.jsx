import React, {useState} from "react";

import "../components.css/Product.css";

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
}) => {
  return (
    <div className="product">
      {/* <div className="product_info">
         <p>{title}</p>
        <p className="product__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
           {Array(rating)
            .fill()
            .map((_, i) => (
              <StarBorderIcon></StarBorderIcon>
            ))} 
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51aoe6r1ibL._SX323_BO1,204,203,200_.jpg"
        alt=""
      />
      <button>Add To Basket</button>  */}

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
    </div>
  );
};

export default Product;
