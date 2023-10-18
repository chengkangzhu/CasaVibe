import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //

//redux
import { useDispatch } from "react-redux";
import { updateShopGrid } from "../slices/shopGridSlice";

const Searchbar = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	async function fetchData() {
		if (!searchKeyword) return; // prevent empty searches
		try {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant",
			});
			dispatch(updateShopGrid([]));
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/product/search/${searchKeyword}`
			);
			if (response.data.length === 0) {
				dispatch(updateShopGrid("not found"));
			} else {
				dispatch(updateShopGrid(response.data));
			}
			navigate("/shop/ "); // navigate to /shop
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			fetchData();
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
				onClick={fetchData}
			/>
		</div>
	);
};

export default Searchbar;
