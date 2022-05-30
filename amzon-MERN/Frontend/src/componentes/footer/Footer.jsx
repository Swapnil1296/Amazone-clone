import {Divider} from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="back__totop">
        <p>back to top</p>
      </div>
      <div className="footer__content">
        <div className="content__one">
          <h3>Get to Know Us</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Press release</p>
          <p>amazon cares</p>
          <p>gift a smile</p>
          <p>amazon science</p>
        </div>
        <div className="content__one">
          <h3>connect with us</h3>
          <p>facebook</p>
          <p>twitter</p>
          <p>instagram</p>
        </div>
        <div className="content__one">
          <h3>make money with us</h3>
          <p>sell on amazon</p>
          <p>sell under amazon accelerator</p>
          <p>amazon global selling</p>
          <p>become a affiliate</p>
          <p>fulfilment by amazon</p>
          <p>advertise your products</p>
          <p>amazon pay on merchants</p>
        </div>
        <div className="content__one">
          <h3>let us help you</h3>
          <p>COVID-19 and amazon</p>
          <p>your account</p>
          <p>return centre</p>
          <p>100% purchase protection</p>
          <p>amazon app download</p>
          <p>amazon assistant download</p>
          <p>help</p>
        </div>
      </div>
      <Divider />
      <div className="footer__city">
        <div className="footer__city__one">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="image"
          />
          <select name="" id="">
            <option value="">English</option>
          </select>
        </div>
        <div className="footer__city__two">
          <p>australia</p>
          <p>brazil</p>
          <p>canada</p>
          <p>china</p>
          <p>france</p>
          <p>germany</p>
          <p>italy</p>
          <p>japan</p>
          <p>mexico</p>
          <p>netherlands</p>
          <p>poland</p>
          <p>singapore</p>
          <p>spain</p>
          <p>turky</p>
          <p>united arab emirates</p>
          <p>united kingdom</p>
          <p>united states</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
