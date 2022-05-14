import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../CSSfiles/Product.css";
const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useState("");

  const addToBasket = () => {
    // dispatch the item into the data layer
    
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
     
      <div className="product_info">
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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Product;
