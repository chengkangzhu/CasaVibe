import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//images
import bathroom from "../img/navbar/bathroom.jpg";
import bedroom from "../img/navbar/bedroom.jpg";
import dining_room from "../img/navbar/dinning_room.jpg";
import kitchen from "../img/navbar/kitchen.jpg";
import living_room from "../img/navbar/living_room.jpg";
import home_office from "../img/navbar/home_office.jpg";

//component
import PopupMenu from "./PopupMenu";

const RoomPopup = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleRoomClick = () => {
		setShowMenu(false);
	};

	return (
		<div className="room_popup">
			<span onMouseEnter={() => setShowMenu(true)}>
				Room <MdOutlineKeyboardArrowDown size={16} className="icon" />
			</span>
			<PopupMenu showMenu={showMenu} className="room_menu">
				<Link
					to="/shop/Bedroom"
					className="h7 md"
					onClick={handleRoomClick}
				>
					<img src={bedroom} alt="Bedroom" />
					Bedroom
				</Link>
				<Link
					to="/shop/Dining Room"
					className="h7 md"
					onClick={handleRoomClick}
				>
					<img src={dining_room} alt="Dining Room" />
					Dining Room
				</Link>
				<Link
					to="/shop/Kitchen"
					className="h7 md"
					onClick={handleRoomClick}
				>
					<img src={kitchen} alt="Kitchen" />
					Kitchen
				</Link>
				<Link
					to="/shop/Living Room"
					className="h7 md"
					onClick={handleRoomClick}
				>
					<img src={living_room} alt="Living Room" />
					Living Room
				</Link>
				<Link
					to="/shop/Home Office"
					className="h7 md"
					onClick={handleRoomClick}
				>
					<img src={home_office} alt="Home Office" />
					Home Office
				</Link>
				<Link
					to="/shop/Bathroom"
					className="h7 md"
					onClick={handleRoomClick}
				>
					<img src={bathroom} alt="Bathroom" />
					Bathroom
				</Link>
			</PopupMenu>
		</div>
	);
};

export default RoomPopup;
