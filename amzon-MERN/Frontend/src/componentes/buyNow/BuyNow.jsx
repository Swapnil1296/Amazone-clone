import {Divider} from "@mui/material";
import React from "react";
import "./buynow.css";
import Option from "./Option";
import SubTo from "./Option";
import Right from "./Right";
import SubTotal from "./SubTotal";
const BuyNow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />
          <div className="item_containert">
            <img
              src="https://m.media-amazon.com/images/I/91CHNl8yG4L._UY741_.jpg"
              alt=""
            />
            <div className="item_details">
              <h3>
                American Tourister 51 cms Black Casual Backpack (AMT Fizz SCH
                Bag 03)(33cms x 22cms x 51cms)
              </h3>
              <h3 className="diffrentprice">₹999.00</h3>
              <p className="unusuall">Usually dispatched in 8 days</p>
              <p>Eligible for FREE Shipping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                alt="logoimage"
              />
              <Option />
            </div>
            <h4 className="item_price">₹999.00</h4>
          </div>
          <Divider />
          <SubTotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default BuyNow;
