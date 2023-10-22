import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//icons
import { BsFillPersonFill } from "react-icons/bs";

//components
import AuthPopup from "./AuthPopup";

const ProfileIcon = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div
			className="profile_popup"
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<BsFillPersonFill size={24} className="icon " />
			<AuthPopup showMenu={showMenu} setShowMenu={setShowMenu} />
		</div>
	);
};

export default ProfileIcon;
