import React from "react";
import { Link } from "react-router-dom";

//imgs
import bedroom_bed from "../img/room_category/bedroom_bed.jpg";
import bedroom_bedding from "../img/room_category/bedroom_bedding.jpg";
import bedroom_closet from "../img/room_category/bedroom_closet.jpg";
import bedroom_lamp from "../img/room_category/bedroom_lamp.jpg";
import bedroom_nightstand from "../img/room_category/bedroom_nightstand.jpg";

import dining_chair from "../img/room_category/dining_chair.jpg";
import dining_rug from "../img/room_category/dining_rug.jpg";
import dining_table from "../img/room_category/dining_table.jpg";
import dining_wall_decor from "../img/room_category/dining_wall_decor.jpg";
import dining_wine_rack from "../img/room_category/dining_wine_rack.jpg";

import kitchen_cabinet from "../img/room_category/kitchen_cabinet.jpg";
import kitchen_counter_top from "../img/room_category/kitchen_counter_top.jpg";
import kitchen_island from "../img/room_category/kitchen_island.jpg";
import kitchen_wall_storage from "../img/room_category/kitchen_wall_storage.jpg";

import living_tv_cabinet from "../img/room_category/living_tv_cabinet.jpg";
import living_armchair from "../img/room_category/living_armchair.jpg";
import living_bookshelf from "../img/room_category/living_bookshelf.jpg";
import living_ceiling_light from "../img/room_category/living_ceiling_light.jpg";
import living_mat from "../img/room_category/living_mat.jpg";
import living_sofa from "../img/room_category/living_sofa.jpg";

import office_desk from "../img/room_category/office_desk.jpg";
import office_desk_chair from "../img/room_category/office_desk_chair.jpg";
import office_desk_lamp from "../img/room_category/office_desk_lamp.jpg";
import office_drawer from "../img/room_category/office_drawer.jpg";
import office_monitor_stand from "../img/room_category/office_monitor_stand.avif";
import office_paper_organizer from "../img/room_category/office_paper_organizer.jpg";

import bathroom_cabinet from "../img/room_category/bathroom_cabinet.jpg";
import bathroom_laundry_basket from "../img/room_category/bathroom_laundry_basket.jpg";
import bathroom_mirror from "../img/room_category/bathroom_mirror.jpg";
import bathroom_sink from "../img/room_category/bathroom_sink.jpg";
import bathroom_towel_rack from "../img/room_category/bathroom_towel_rack.jpg";

//components

const RoomSubcatergory = ({ room }) => {
	const categoryImgs = {
		Bedroom: {
			Bed: bedroom_bed,
			Bedding: bedroom_bedding,
			Closet: bedroom_closet,
			Lamp: bedroom_lamp,
			Nightstand: bedroom_nightstand,
		},
		"Dining Room": {
			"Dining chair": dining_chair,
			Rug: dining_rug,
			"Dining table": dining_table,
			"Wall decor": dining_wall_decor,
			"Wine rack": dining_wine_rack,
		},
		Kitchen: {
			Cabinet: kitchen_cabinet,
			"Counter top": kitchen_counter_top,
			"Kitchen island": kitchen_island,
			"Wall storage": kitchen_wall_storage,
		},
		"Living Room": {
			"Tv cabinet": living_tv_cabinet,
			Armchair: living_armchair,
			Bookshelf: living_bookshelf,
			"Ceiling light": living_ceiling_light,
			Mat: living_mat,
			Sofa: living_sofa,
		},
		"Home Office": {
			Desk: office_desk,
			Chair: office_desk_chair,
			"Desk Lamp": office_desk_lamp,
			Drawer: office_drawer,
			"Monitor stand": office_monitor_stand,
			"Paper organizer": office_paper_organizer,
		},
		Bathroom: {
			Cabinet: bathroom_cabinet,
			"Laundry basket": bathroom_laundry_basket,
			Mirror: bathroom_mirror,
			Sink: bathroom_sink,
			"Towel rack": bathroom_towel_rack,
		},
	};

	return (
		<div className="room_subcatergory">
			<h2 className="h2 sb">{room}</h2>
			<div className="furniture_container h7 md">
				{categoryImgs[room] &&
					Object.entries(categoryImgs[room]).map(([key, value]) => (
						<Link to={"/shop/" + key.toLowerCase()}>
							<span>
								<img key={key} src={value} alt={key} />
								{key}
							</span>{" "}
						</Link>
					))}
			</div>
		</div>
	);
};

export default RoomSubcatergory;
