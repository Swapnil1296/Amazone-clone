import {Divider} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./cart.css";
import axios from "axios";

const Cart = () => {
  const {id} = useParams();
  // console.log(id);
  const [inData, setInData] = useState([]);
  // console.log("In Data:", inData);

  // to get data acc to id;
  const getData = async () => {
    const res = await fetch(`http://localhost:8080/getproducts/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    // console.log("data is:",data);
    if (res.status !== 201) {
      console.log("NO data to show error 201");
    } else {
      // console.log("data is:", data);
      setInData(data);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  // user add to cart;

  const addtocart = async (id) => {
    console.log(id);
    const check = await fetch(`http://localhost:8080/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inData,
      }),
      credentials: "include",
    });
    // console.log(check);
    const data1 = await check.json();
    // console.log(data1 +  'ok');

    if (check.status !== 201) {
      alert("no data available");
    } else {
      console.log("cart add ho gya hain");
      // setAccount(data1);
      // history.push("/buynow");
    }
  };
  return (
    <div className="cart_section">
      {inData &&
        Object.keys(inData).length && ( // this mehod shows if there is any data. imp to write unless not work
          <div className="cart_container" key={inData.id}>
            <div className="left_cart">
              <img src={inData.detailUrl} alt="cartImage" />
              <div className="cart_btn">
                <button
                  className="cart_btn1"
                  onClick={() => addtocart(inData.id)}
                >
                  Add to Cart
                </button>
                <button className="cart_btn2">Buy Now</button>
              </div>
            </div>
            <div className="right_cart">
              <p>{inData.title.shortTitle}</p>
              <h3>{inData.title.longTitle}</h3>
              <Divider />
              <p className="mrp">M.R.P.:₹{inData.price.mrp}</p>
              <p>
                Deal Price:
                <span style={{color: "#B12704"}}>₹{inData.price.cost}.00</span>
              </p>
              <p>
                You Save:
                <span style={{color: "#B12704"}}>
                  ₹{inData.price.mrp - inData.price.cost}
                </span>
                ({inData.price.discount})
              </p>
              <div className="discount_box">
                <h5> Save Extra with 3 offers</h5>
                <Divider />
                <p>
                  <span>Bank Offer (3)</span>: 10% Instant Discount up to INR
                  500 on Kotak Bank Cards. Minimum purchase value INR 2000 See
                  AllBank Offer (3): 10% Instant Discount up to INR 500 on Kotak
                  Bank Cards. Minimum purchase value INR 2…<span>See All</span>
                </p>
                <Divider />
                <p>
                  <span>No Cost EMI</span>: Avail No Cost EMI on select cards
                  for orders above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI
                  on select cards for orders above ₹3000 Details
                </p>
              </div>
              <p className="description">
                About the Iteam :
                <span
                  style={{
                    color: "#565959",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.4px",
                  }}
                >
                  {inData.description}
                </span>
              </p>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cart;
