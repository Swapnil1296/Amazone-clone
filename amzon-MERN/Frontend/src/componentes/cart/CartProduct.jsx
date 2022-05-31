import React from 'react'

const CartProduct = ({ products }) => {
    console.log(products);
  return (
    <div>
      {/* <div className="cart_container">
        <div className="left_cart">
          <img src={inData.detailUrl} alt="cartImage" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
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
          <p className="description">
            About the Iteam :{" "}
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
      </div> */}
    </div>
  );
}

export default CartProduct
