import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//icons
import { BsFillPersonFill } from "react-icons/bs";

//components
import PopupMenu from "./PopupMenu";
import { useDispatch, useSelector } from "react-redux";
import { setSignout } from "../slices/AuthSlice";

const ProfileIcon = () => {
	const [showMenu, setShowMenu] = useState(false);
	const isAuth = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignOut = () => {
		dispatch(setSignout());
		setShowMenu(false);
		navigate("/");
		toast.success("Signed out successfully. See you next time!");
	};

	return (
		<div
			className="profile_popup"
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<BsFillPersonFill size={24} className="icon " />
			{isAuth ? (
				<PopupMenu showMenu={showMenu} className="profile_menu">
					<h5 className="h5 md">Your Account</h5>
					<Link to="/profile">
						<span onClick={() => setShowMenu(false)}>Account</span>
					</Link>
					<Link to="/cart">
						<span onClick={() => setShowMenu(false)}>Cart</span>
					</Link>
					<Link to="/order">
						<span onClick={() => setShowMenu(false)}>
							Order Status
						</span>
					</Link>
					<Link to="/wishlist">
						<span onClick={() => setShowMenu(false)}>
							Wishlist & Recently viewed
						</span>{" "}
					</Link>
					<span onClick={handleSignOut}>Sign out</span>
				</PopupMenu>
			) : (
				<PopupMenu showMenu={showMenu} className="auth_menu">
					<Link to="/signin">
						{" "}
						<span onClick={() => setShowMenu(false)}>
							Sign in
						</span>{" "}
					</Link>
					<Link to="/signup">
						{" "}
						<span onClick={() => setShowMenu(false)}>
							Sign up
						</span>{" "}
					</Link>
				</PopupMenu>
			)}
		</div>
	);
};

export default ProfileIcon;
