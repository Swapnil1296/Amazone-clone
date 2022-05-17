import React from "react";
import "./SingleImage.css";



// for single image card of homepage


const SingleImage = () => {
  return (
    <div>
      <div className="product__single">
        <div className="single__product__title">
          <p>Up to 70% off | Clearance store</p>
        </div>
        <div className="single__product__card">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            alt=""
          />
        </div>
        <p className="single__link">See more</p>
      </div>
    </div>
  );
};

export default SingleImage;
