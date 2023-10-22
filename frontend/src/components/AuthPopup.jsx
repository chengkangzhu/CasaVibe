import React from "react";
import { Link } from "react-router-dom";

const AuthPopup = ({ showMenu, setShowMenu }) => {
	return (
		<div className={`auth_menu shadow_300 h7 md ${showMenu ? "show" : ""}`}>
			<Link to="/signin"><span onClick={() => setShowMenu(false)}>Sign in</span></Link>
			<Link to="/signup"><span onClick={() => setShowMenu(false)}>Sign up</span> </Link>
		</div>
	);
};

export default AuthPopup;
