import React from "react";

//imgs
import room_subcat1 from "../img/shop/room_subcat (1).png"
import room_subcat2 from "../img/shop/room_subcat (2).png"
import room_subcat3 from "../img/shop/room_subcat (3).png"
import room_subcat4 from "../img/shop/room_subcat (4).png"
import room_subcat5 from "../img/shop/room_subcat (5).png"
 

//components

const RoomSubcatergory = ({ room }) => {
	return (
        <div className="room_subcatergory">
			<h2 className="h2 sb">{room}</h2>
            <div className="furniture_container h7 md">
                <span><img src={room_subcat1} alt="furniture type 1" />Tv cabinet</span>
                <span><img src={room_subcat2} alt="furniture type 2" />Table</span>
                <span><img src={room_subcat3} alt="furniture type 3" />Chair</span>
                <span><img src={room_subcat4} alt="furniture type 4" />Sofa</span>
                <span><img src={room_subcat5} alt="furniture type 5" />Sofa Recliner</span>
            </div>
		</div>
	);
};

export default RoomSubcatergory;
