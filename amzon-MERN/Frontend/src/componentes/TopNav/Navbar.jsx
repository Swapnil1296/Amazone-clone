import React from 'react'
import './Navbar.css'
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <MenuIcon />
          <p>All</p>

          <p>Mobiles</p>
          <NavLink to ="/bestseller">
            <p>Best Sellers</p>
          </NavLink>
          <p>Fashion</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
            alt="navdata"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar
