import {Divider} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {id} = useParams("");
  const [inddata, setIndedata] = useState([]);

  console.log([inddata.shortTitle]);

  const getinddata = async () => {
    const res = await fetch(`http://localhost:8080/getproducts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (res.status !== 201) {
      alert("no data available");
    } else {
      // console.log("ind mila hain");
      setIndedata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);
  return (
    <div className="cart_section">
      {/* <div className="cart_container">
        <div className="left_cart">
          <img src={inddata.detailUrl} alt="cartImage" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <p>{inddata.title.shortTitle}</p>
          <h3>{inddata.title.longTitle}</h3>
          <Divider />
          <p className="mrp">M.R.P.:₹{inddata.price.mrp}</p>
          <p>
            Deal Price:
            <span style={{color: "#B12704"}}>₹{inddata.price.cost}.00</span>
          </p>
          <p>
            You Save:{" "}
            <span style={{color: "#B12704"}}>
              ₹{inddata.price.mrp - inddata.price.cost}
            </span>
            ({inddata.price.discount})
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
      </div> */}
    </div>
  );
};

export default Cart;
