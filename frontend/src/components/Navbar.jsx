import React from "react";
import { Link } from "react-router-dom";

//components
import Searchbar from "./Searchbar";
import CartPopup from "./CartPopup";
import ProfileIcon from "./ProfileIcon";
import RoomPopup from "./RoomPopup";

//icons
import { MdLocationOn } from "react-icons/md";
import ProductPopup from "./ProductPopup";
import ContactPopup from "./ContactPopup";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__top">
				<Link to="/" className="logo sb">
					CasaVibe
				</Link>
				<Searchbar />
				<CartPopup />
				<ProfileIcon />
			</div>
			<div className="navbar__bottom ">
				<div className="left h7 md">
					<RoomPopup />
					<ProductPopup />
					<Link to="/about">About</Link>
					<ContactPopup /> 
				</div>
				<div className="right h7 md">
					<Link to="/location">
						<MdLocationOn size={16} className="icon" /> Store
						Location
					</Link>
					<Link to="/orders" className="track_order ">
						Track your order
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
