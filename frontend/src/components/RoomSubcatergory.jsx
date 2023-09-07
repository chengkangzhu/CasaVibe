import React from "react";

//imgs
import room_subcat1 from "../img/shop/room_subcat (1).png"
import room_subcat2 from "../img/shop/room_subcat (2).png"
import room_subcat3 from "../img/shop/room_subcat (3).png"
import room_subcat4 from "../img/shop/room_subcat (4).png"
import room_subcat5 from "../img/shop/room_subcat (5).png"

console.log(room_subcat1)

//components

const RoomSubcatergory = ({ room }) => {
	return (
        <div className="room_subcatergory">
			<h2 className="h2 sb">{room}</h2>
            <div className="furniture_container h7 md">
                <a href="#"><img src={room_subcat1} alt="furniture type 1" />Tv cabinet</a>
                <a href="#"><img src={room_subcat2} alt="furniture type 2" />Table</a>
                <a href="#"><img src={room_subcat3} alt="furniture type 3" />Chair</a>
                <a href="#"><img src={room_subcat4} alt="furniture type 4" />Sofa</a>
                <a href="#"><img src={room_subcat5} alt="furniture type 5" />Sofa Recliner</a>
            </div>
		</div>
	);
};

export default RoomSubcatergory;
