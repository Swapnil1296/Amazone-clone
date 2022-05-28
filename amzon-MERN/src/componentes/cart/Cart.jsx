import {Divider} from "@mui/material";
import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://m.media-amazon.com/images/I/91CHNl8yG4L._UY741_.jpg"
            alt=""
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <p>Visit the American Tourister Store</p>
          <h3>American Tourister Casual Backpack</h3>
          <Divider />
          <p className="mrp">M.R.P.: ₹2,300.00</p>
          <p>
            Deal Price: <span style={{color: "#B12704"}}>₹999.00</span>
          </p>
          <p>
            You Save: <span style={{color: "#B12704"}}>₹1,301.00 </span>(57%)
          </p>
          <div className="discount_box">
            <h5> Save Extra with 3 offers</h5>
            <Divider />
            <p>
              <span>Bank Offer (3)</span>: 10% Instant Discount up to INR 500 on
              Kotak Bank Cards. Minimum purchase value INR 2000 See AllBank
              Offer (3): 10% Instant Discount up to INR 500 on Kotak Bank Cards.
              Minimum purchase value INR 2…<span>See All</span>
            </p>
            <Divider />
            <p>
              <span>No Cost EMI</span>: Avail No Cost EMI on select cards for
              orders above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select
              cards for orders above ₹3000 Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
