import React from "react";
import { Link } from "react-router-dom";

const CatergoryBlock = ({ imageSrc, name }) => {
	return (
		<Link to={"/shop/" + name.toLowerCase()} className="catergory_block">
			<img src={imageSrc} alt="mirror" />
			<h6 className="h6 md">{name}</h6>
		</Link>
	);
};

export default CatergoryBlock;
