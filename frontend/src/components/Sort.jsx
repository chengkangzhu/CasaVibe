import React, { useState } from "react";
import { useParams } from "react-router-dom";

//icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//component
import PopupMenu from "./PopupMenu";

//redux
import { useDispatch } from "react-redux";
import { fetchData} from "../slices/shopGridSlice";

const Sort = () => {
	const [sortMethod, setSortMethod] = useState("Best match");
	const [showMenu, setShowMenu] = useState(false);
	const dispatch = useDispatch();

	//get the searchkeyword from the path
	const { type } = useParams();

	const handleChangeSort = async (sortType) => {
		setSortMethod(sortType.name);
		setShowMenu(false);

		//send a new request to the slice and the slice will and make request to the backend , get back new sorted products and update the shopgrid
		dispatch(fetchData({keyWord: type, filter: `sort=${sortType.id}`}))
	};

	const sortArr = [
		{
			id: "RELEVANCE",
			name: "Best match",
			eventAction: "sort_by_relevance",
			selected: true,
		},
		{
			id: "PRICE_LOW_TO_HIGH",
			name: "Price: low to high",
			eventAction: "sort_by_price_low",
			selected: false,
		},
		{
			id: "PRICE_HIGH_TO_LOW",
			name: "Price: high to low",
			eventAction: "sort_by_price_high",
			selected: false,
		},
		{
			id: "NEWEST",
			name: "Newest",
			eventAction: "sort_by_newest",
			selected: false,
		},
		{
			id: "MOST_POPULAR",
			name: "Most popular",
			eventAction: "sort_by_most_popular",
			selected: false,
		},
	];

	return (
		<div
			className="sort"
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<button className={`sort__button shape_outline h7 rg`}>
				{" "}
				Sort by:&nbsp;&nbsp;{sortMethod}{" "}
				<MdOutlineKeyboardArrowDown size={24} className="icon" />
			</button>

			<PopupMenu showMenu={showMenu} className="sort__menu">
				{sortArr.map((item, index) => (
					<span key={index} onClick={() => handleChangeSort(item)}>
						{item.name}
					</span>
				))}
			</PopupMenu>
		</div>
	);
};

export default Sort;
