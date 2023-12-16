import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; 
import { useNavigate } from "react-router-dom"; //


const Searchbar = () => {
	const [searchKeyword, setSearchKeyword] = useState(""); 
	const navigate = useNavigate();

	const handleSearch = () => {
		if (!searchKeyword.trim()) {
			return;
		}

		//when triggered search,navigate and scroll to top
		navigate("/shop/" + searchKeyword.toLowerCase());
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		}); 
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="searchbar">
			<input
				type="text"
				className="h7 rg"
				placeholder="Search in CasaVibe"
				value={searchKeyword}
				onChange={(e) => setSearchKeyword(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<AiOutlineSearch
				size={24}
				className="icon purple"
				onClick={handleSearch}
			/>
		</div>
	);
};

export default Searchbar;
