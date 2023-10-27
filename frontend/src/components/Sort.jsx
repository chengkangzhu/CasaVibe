import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import PopupMenu from "./PopupMenu";

const Sort = () => {
	const [sortMethod, setSortMethod] = useState("Price: Low to High");
	const [showMenu, setShowMenu] = useState(false);

	const handleChangeSort = (method) => {
		setSortMethod(method);
		setShowMenu(false); // Close the menu when a sorting option is clicked
	};
 
	return (
		<div
			className="sort"
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<button className={`sort__button shape_outline h7 rg`}>
				Sort by:&nbsp;&nbsp;{sortMethod}{" "}
				<MdOutlineKeyboardArrowDown size={24} className="icon" />
			</button>
			<PopupMenu showMenu={showMenu} className="sort__menu" >
				<span onClick={() => handleChangeSort("Best Match")}>
					Best Match
				</span>
				<span onClick={() => handleChangeSort("Best Sellers")}>
					Best Sellers
				</span>
				<span onClick={() => handleChangeSort("Price - Low to High")}>
					Price - Low to High
				</span>
				<span onClick={() => handleChangeSort("Price - High to Low")}>
					Price - High to Low
				</span>
				<span onClick={() => handleChangeSort("Customer Ratings")}>
					Customer Ratings
				</span>
			</PopupMenu>
		</div>
	);
};

export default Sort;
