import React from "react";

//image
import app_store_image from "../img/footer/app_store_button.png";
import google_play_image from "../img/footer/google_play_button.png";
import payment_partner1 from "../img/footer/payment_partner (1).png";
import payment_partner2 from "../img/footer/payment_partner (2).png";
import payment_partner3 from "../img/footer/payment_partner (3).png";
import payment_partner4 from "../img/footer/payment_partner (4).png";
import payment_partner5 from "../img/footer/payment_partner (5).png";

//icon
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="left">
					<div>
						<h4 className="h4 sb">CasaVibe</h4>
						<p className="p3">
							Easy & reliable online buying and selling site
						</p>
					</div>
					<div>
						<h5 className="sb h5">Download our app</h5>
						<div className="button_container">
							<button>
								<img
									src={app_store_image}
									alt="download button for app store"
									className="inactive_cursor"
								/>
							</button>
							<button>
								<img
									src={google_play_image}
									alt="download button for app store"
									className="inactive_cursor"
								/>
							</button>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="list_container">
						<h5 className="h5 sb">Company</h5>
						<span  className="h7 rg inactive_cursor" >
							About Us
						</span>
						<span  className="h7 rg inactive_cursor" >
							Career
						</span>
						<span  className="h7 rg inactive_cursor" >
							Privacy Policy
						</span>
						<span  className="h7 rg inactive_cursor" >
							Blogs
						</span>
						<span  className="h7 rg inactive_cursor" >
							Flash Sale
						</span>
						<span  className="h7 rg inactive_cursor" >
							Affiliates
						</span>
					</div>
					<div className="list_container">
						<h5 className="h5 sb">Buyer</h5>
						<span  className="h7 rg inactive_cursor">
							How to shop
						</span>
						<span  className="h7 rg inactive_cursor">
							Payment method
						</span>
						<span  className="h7 rg inactive_cursor">
							Track Buyer Orders
						</span>
						<span  className="h7 rg inactive_cursor">
							Free Shipping
						</span>
						<span  className="h7 rg inactive_cursor">
							Returns & Funds
						</span>
						<span  className="h7 rg inactive_cursor">
							Guarantee
						</span>
					</div>
					<div className="list_container">
						<h5 className="h5 sb">Contact us</h5>
						<span href="tel:(123)4567890" className="h7 md contact">
							<HiPhone />
							(123) 456 7890
						</span>
						<span href="mailto:hello@CasaVibe.com" className="h7 md contact">
							<MdEmail />
							hello@CasaVibe.com
						</span>
						<span  className="h7 md contact inactive_cursor">
							<AiFillShop />
							Monday – Friday: 09.00 - 16.00 WIB
						</span>
						<div className="social_media_container">
							<span >
								<img
									src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
									alt="twtiter icon"
								/>
							</span>
							<span >
								<img
									src="https://cdn.iconscout.com/icon/free/png-128/free-facebook-35-83440.png"
									alt="facebook icon"
								/>
							</span>
							<span >
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/640px-LinkedIn_icon_circle.svg.png"
									alt="linkedin icon"
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<span className="h7 rg">
					© 2022 All rights reserved. Designed by Designspace.
				</span>
				<div className="payment_container">
					<span className="h7 md">Accepted Payments</span>
					<div className="payment_partners">
						<img src={payment_partner1} alt="payment partner 1" />
						<img src={payment_partner2} alt="payment partner 2" />
						<img src={payment_partner3} alt="payment partner 3" />
						<img src={payment_partner4} alt="payment partner 4" />
						<img src={payment_partner5} alt="payment partner 5" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
