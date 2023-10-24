import React, { useState } from "react"; 
//icons
import { BsFillPersonFill } from "react-icons/bs";

//components
import AuthPopup from "./AuthPopup";

const ProfileIcon = () => { 
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
