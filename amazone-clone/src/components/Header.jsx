import React from 'react'
import "../CSSfiles/Header.css"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://i.pinimg.com/564x/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.jpg"
        alt="image"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* logo */}
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLinetwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLinetwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header
