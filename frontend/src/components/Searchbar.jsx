import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
	return (
		<div className="searchbar">
			<input
				type="text"
				className="h7 rg"
				placeholder="Search in CasaVibe"
			/>
			<AiOutlineSearch size={24} className="icon purple"/>
		</div>
	);
};

export default Searchbar;
