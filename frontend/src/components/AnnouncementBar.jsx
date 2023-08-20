import React from "react";

import { GoTriangleDown } from "react-icons/go";

const AnnouncementBar = () => {
	return (
		<div className="announcement_bar h8 md">
			<a href="tel:+1234567890">Support (00) 33 159 4720</a>
			<span>Free shipping worldwide. Orders over $200</span>
			<div className="language-and-currency">
				<div className="language">
					Eng <GoTriangleDown size={16} />
				</div>
				<div className="currency">
					USD <GoTriangleDown size={16} />
				</div>
			</div>
		</div>
	);
};

export default AnnouncementBar;
