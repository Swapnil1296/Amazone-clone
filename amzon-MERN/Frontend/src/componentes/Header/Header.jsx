import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";








const Header = () => {
  return (
    <div className="header">
      <NavLink to ="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="image"
        />
      </NavLink>
      <div className="header_option">
        <LocationOnOutlinedIcon className="header__locationIcon" />
      </div>
      <div className="header_option">
        <span className="header_optionLineOne">Hello</span>
        <span className="header_optionLinetwo">Select your address</span>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* logo */}

        <SearchIcon className="header_searchIcon" id="icon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <NavLink to="/login" className="header_optionLinetwo">
            Sign In
          </NavLink>
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
          <Badge badgeContent={4} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </div>
        <div className="header__avatar">
          <Avatar sx={{width: 24, height: 24}} />
        </div>
      </div>
      {/* slider */}
      <div className="header-slider"></div>
    </div>
  );
};

export default Header;
