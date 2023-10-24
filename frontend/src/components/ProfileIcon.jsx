import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//icons
import { BsFillPersonFill } from "react-icons/bs";

//components
import AuthPopup from "./AuthPopup";
import { useDispatch, useSelector } from "react-redux";
import { setSignout } from "../slices/AuthSlice";

const ProfileIcon = () => {
	const [showMenu, setShowMenu] = useState(false);
	const isAuth = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleSignOut = () =>{
		dispatch(setSignout());
		setShowMenu(false);
		navigate('/')
		toast.success("Signed out successfully. See you next time!")

	}

	return (
		<div
			className="profile_popup"
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<BsFillPersonFill size={24} className="icon " />
			{isAuth ? (
				<div
					className={`auth_menu shadow_300 h7 md ${
						showMenu ? "show" : ""
					}`}
				>
					<span
						onClick={handleSignOut}
					>
						Log out
					</span>
				</div>
			) : (
				<AuthPopup showMenu={showMenu} setShowMenu={setShowMenu} />
			)}
		</div>
	);
};

export default ProfileIcon;
