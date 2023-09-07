import React from "react";

//icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//images
import bathroom from "../img/navbar/bathroom.jpg"
import bedroom from "../img/navbar/bedroom.jpg"
import dinning_room from "../img/navbar/dinning_room.jpg"
import kitchen from "../img/navbar/kitchen.jpg"
import living_room from "../img/navbar/living_room.jpg"
import home_office from "../img/navbar/home_office.jpg"

const RoomPopup = () => {
	return (
		<div className="room_popup">
			<a href="#">Room <MdOutlineKeyboardArrowDown size={16} className="icon" /></a>
        <div className="room_container shadow_300" >
          <a href="#" className="h7 md"><img src={bathroom} alt="bathroom" />Bathroom</a>
          <a href="#" className="h7 md"><img src={bedroom} alt="bedroom" />Bedroom</a>
          <a href="#" className="h7 md"><img src={dinning_room} alt="dinning_room" />Dinning</a>
          <a href="#" className="h7 md"><img src={kitchen} alt="kitchen" />Kitchen</a>
          <a href="#" className="h7 md"><img src={living_room} alt="living_room" />Living room</a>
          <a href="#" className="h7 md"><img src={home_office} alt="home office" />Home office</a>
        </div> 
		</div>
	);
};

export default RoomPopup;
