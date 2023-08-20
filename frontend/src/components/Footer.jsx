import React from "react";

//image
import app_store_image from "../img/footer/app_store_button.png"
import google_play_image from "../img/footer/google_play_button.png"
import payment_partners from "../img/footer/payment_partners.png"

//icon
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";


const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="left">
					<h4 className="h4 sb">CasaVibe</h4>
          <p className="p3">Easy & reliable online buying and selling site</p>
          <h5 className="sb h5">Download our app</h5>
          <div className="button_container">
            <button><img src={app_store_image} alt="download button for app store" /></button>
            <button><img src={google_play_image} alt="download button for app store" /></button>
          </div>
				</div>
        <div className="right">
          <div className="list_container">
            <h5 className="h5 sb">Company</h5>
            <a href="#" className="h7 rg">About Us</a>
            <a href="#" className="h7 rg">Career</a>
            <a href="#" className="h7 rg">Privacy Policy</a>
            <a href="#" className="h7 rg">Blogs</a>
            <a href="#" className="h7 rg">Flash Sale</a>
            <a href="#" className="h7 rg">Affiliates</a>
          </div>
          <div className="list_container">
            <h5 className="h5 sb">Buyer</h5>
            <a href="#" className="h7 rg">How to shop</a>
            <a href="#" className="h7 rg">Payment method</a>
            <a href="#" className="h7 rg">Track Buyer Orders</a>
            <a href="#" className="h7 rg">Free Shipping</a>
            <a href="#" className="h7 rg">Returns & Funds</a>
            <a href="#" className="h7 rg">Guarantee</a>
          </div>
          <div className="list_container">
            <h5 className="h5 sb">Contact us</h5>
            <a href="#" className="h7 md contact"><HiPhone />(123) 456 7890</a>
            <a href="#" className="h7 md contact"><MdEmail />hello@emmable.com</a>
            <a href="#" className="h7 md contact"><AiFillShop />Monday – Friday: 09.00 - 16.00 WIB</a>
            <div className="social_media_container">
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="twtiter icon" /></a>
              <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-128/free-facebook-35-83440.png" alt="facebook icon" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/640px-LinkedIn_icon_circle.svg.png" alt="linkedin icon" /></a>
            </div>
          </div>
        </div>
			</div>
      <div className="footer__bottom">
          <span className="h7 rg">© 2022 All rights reserved. Designed by Designspace.</span>
          <div className="payment_container">
            <span className="h7 md">Accepted Payments</span>
            <img src={payment_partners} alt="payment partners" />
          </div>
      </div>
		</div>
	);
};

export default Footer;
