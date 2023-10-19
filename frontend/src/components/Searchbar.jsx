import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //

//redux
import { useDispatch } from "react-redux";
import { toggleShowRoom, fetchData } from "../slices/shopGridSlice";

const Searchbar = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSearch = () => {
		if (!searchKeyword.trim()) {
			return;
		}

		navigate("/search/" + searchKeyword.toLowerCase());
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
		dispatch(toggleShowRoom(false));
		dispatch(fetchData(searchKeyword));
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
