import React from "react";
import AppStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Dowload App for Android and IOS </p>
        <img src={playStore} alt="playstore" />
        <img src={AppStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>EasyBuy</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2024 &copy; Hamidstech </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
        <a href="">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
