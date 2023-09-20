import React  from "react";

import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

const Rating = ({ rating, reviews }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating.toFixed(1).split(".")[1] > 4;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);


	return (
		<div className="rating">
			{[...Array(fullStars)].map((e,index) => (<ImStarFull className="star" key={index} />))}
			{hasHalfStar && <ImStarHalf className="star" />}
      		 {[...Array(emptyStars)].map((e,index)=> (<ImStarEmpty className="star"  key={index} />))}
			<p className="h7 rg ">
				{rating.toFixed(1)} ({reviews} reviews)
			</p>
		</div>
	);
};

export default Rating;
