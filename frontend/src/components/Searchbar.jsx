import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Searchbar = () => {
	const [searchKeyword, setSearchKeyword] = useState("");

	async function handleSearch() {
		if (!searchKeyword) return; // prevent empty searches
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/product/search/${searchKeyword}`
			);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

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
