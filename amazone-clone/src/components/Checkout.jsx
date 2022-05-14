import React from 'react'
import '../CSSfiles/Checkout.css'

import Subtotal from './Subtotal'

const Checkout = () => {
    return (
      <div className="checkout">
        <div className="checkout__left">
          {/* banner image */}
          <img className="checkout__ad" src="" alt="" />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
          </div>
        </div>
        {/* for total amout and other stuff */}
        <div className="checkout__right">
          <Subtotal></Subtotal>
        </div>
      </div>
    );
}

export default Checkout
