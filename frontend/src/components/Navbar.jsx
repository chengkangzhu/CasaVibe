import React from "react";
import { Link } from "react-router-dom";


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
				<Link to="/" className="logo sb">CasaVibe</Link>
        <Searchbar />
        <CartPopup />
        <ProfileIcon />
			</div>
      <div className="navbar__bottom ">
        <div className="left h7 md">
          <RoomPopup />
          <div className="product_dropdown inactive_cursor">Product <MdOutlineKeyboardArrowDown size={16} className="icon"/></div> 
          <div className="contact_dropdown inactive_cursor">Contact </div>
        </div>
        <div className="right h7 md">
          <Link to="/location" className="store_location"><MdLocationOn size={16} className="icon"/> Store Location</Link>
          <span className="track_order inactive_cursor">Track your order</span>
        </div>
      </div>
		</nav>
	);
};

export default Navbar;
