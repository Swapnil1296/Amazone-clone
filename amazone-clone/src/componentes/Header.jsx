import React from "react";
import "../components.css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="image"
      />
      <div className="header_option">
        <LocationOnOutlinedIcon className="header__locationIcon" />
      </div>
      <div className="header_option">
        <span className="header_optionLineOne" >Hello</span>
        <span className="header_optionLinetwo">Select your address</span>
      </div>
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
          <AddShoppingCartIcon />
          <span className="header_optionLinetwo header_basketCount">0</span>
        </div>
      </div>
      {/* slider */}
      <div className="header-slider"></div>
    </div>
  );
};

export default Header;
