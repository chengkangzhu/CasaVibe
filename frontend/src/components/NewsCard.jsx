import React from "react";

const NewsCard = ({ imageSrc, alt, title, date, description }) => {
	return (
		<div className="news_card">
			<img src={imageSrc} alt={alt} />
			<h4 className="h4 md">{title}</h4>
			<p className="h7 md">{date}</p>
			<p className="p3">{description}</p>
		</div>
	);
};

export default NewsCard;
