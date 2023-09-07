import React from "react";


//components
import Searchbar from "./Searchbar";
import CartPopup from "./CartPopup";
import ProfileIcon from "./ProfileIcon";
import RoomPopup from "./RoomPopup";

//icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__top">
				<div className="logo sb">CasaVibe</div>
        <Searchbar />
        <CartPopup />
        <ProfileIcon />
			</div>
      <div className="navbar__bottom ">
        <div className="left h7 md">
          <RoomPopup />
          <div className="product_dropdown">Product <MdOutlineKeyboardArrowDown size={16} className="icon"/></div>
          <div className="collections_dropdown">Collections </div>
          <div className="contact_dropdown">Contact </div>
        </div>
        <div className="right h7 md">
          <a href="#" className="store_location"><MdLocationOn size={16} className="icon"/> Store Location</a>
          <a href="#" className="track_order">Track your order</a>
        </div>
      </div>
		</nav>
	);
};

export default Navbar;
