import React from 'react'

const Right = () => {
  return (
    <div className="right_buy">
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery.</p> 
        <p>Select this option at checkout. Details</p>
        <h3>
          Subtotal (3 items):<strong> ₹4,084.00</strong>
              </h3>
              <button className='rightbuy_btn'>Process to buy</button>
              <div className="emi">
                  Emi available
              </div>
      </div>
    </div>
  );
}

export default Right
