import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const shopGridInitialState = {
	bestSelling: [],
	grid: [],
	notFound: false,
	showRoom: false, 
	filtering : false, 
};

//accept a argument for filter, if filter exist then send a different request, but only change the shop grid
// export const fetchData = createAsyncThunk(
// 	"shopGrid/fetchData",
// 	async (keyWord, { dispatch }) => {
// 		if (!keyWord.trim()) {
// 			return;
// 		}

// 		//send the request to backend and update the slice
// 		try {
// 			dispatch(updateShopGrid([]));
// 			const response = await axios.get(
// 				`${process.env.REACT_APP_API_URL}/product/search/${keyWord}`
// 			);
// 			if (response.data.length === 0) {
// 				dispatch(updateShopGrid("not found"));
// 			} else {
// 				dispatch(updateShopGrid(response.data));
// 			}
// 		} catch (error) {
// 			if (error.response.status === 429) {
// 				toast.error(
// 					"Too many requests. Please slow down and refresh or try again ."
// 				);
// 			}
// 			console.error("Error fetching data:", error);
// 		}
// 	}
// );

export const fetchData = createAsyncThunk(
	"shopGrid/fetchData",
	async ({ keyWord, filter = false }, { dispatch }) => {
		console.log("requesting new");
		if (!keyWord.trim()) {
			return;
		}

		try {
			if (filter !== false) {
				dispatch(updateShopGridOnly("filtering"));
			} else {
				dispatch(updateShopGrid([]));
			}

			let url = `${process.env.REACT_APP_API_URL}/product/search/${keyWord}`;
			if (typeof filter === "string") {
				url += `/${filter}`;
			}
			const response = await axios.get(url);
			if (response.data.length === 0) {
				dispatch(updateShopGrid("not found"));
			} else {
				if (filter !== false) {
					dispatch(updateShopGridOnly(response.data));
				} else {
					dispatch(updateShopGrid(response.data));
				}
			}
		} catch (error) {
			if (error.response.status === 429) {
				toast.error(
					"Too many requests. Please slow down and refresh or try again ."
				);
			}
			console.error("Error fetching data:", error);
		}
	}
);

// export const fetchCategory = createAsyncThunk(
// 	"shopGrid/fetchCategory",
// 	async (categoryKey, { dispatch }) => {
// 		try {
// 			dispatch(updateShopGrid([]));
// 			const response = await axios.get( `${process.env.REACT_APP_API_URL}/product/category/${categoryKey}` );

// 			if (response.data.length === 0) {
// 				dispatch(updateShopGrid("not found"));
// 			} else {
// 				dispatch(updateShopGrid(response.data));
// 			}
// 		} catch (error) {
// 			if (error.response.status === 429) {
// 				toast.error(
// 					"Too many requests. Please slow down and try again."
// 				);
// 			}
// 			console.error("Error fetching data:", error);
// 		}
// 	}
// );

export const shopGridSlice = createSlice({
	name: "shopGrid",
	initialState: shopGridInitialState,
	reducers: {
		updateShopGrid: (state, action) => {
			if (action.payload === "not found") {
				state.notFound = true;
			} else if (action.payload === "too much request") {
				// state.tooMuchRequest = true
			} else {
				if (action.payload.length === 0) {
					state.bestSelling = [];
					state.grid = [];
				} else if (action.payload.length < 40) {
					state.grid = action.payload;
					state.notFound = false;
				} else {
					state.bestSelling = action.payload.slice(0, 10);
					state.grid = action.payload.slice(10);
					state.notFound = false;
				}
			}
		},
		updateShopGridOnly: (state, action) => {
			if (action.payload === "filtering"){ 
				state.filtering =  true;
			}else if (action.payload.length < 40) {
				state.grid = action.payload;
				state.notFound = false;
				state.filtering =  false;
			} else {
				state.grid = action.payload;
				state.notFound = false;
				state.filtering =  false;
			}
		},
		toggleShowRoom: (state, action) => {
			state.showRoom = action.payload;
		},
	},
});

export const { updateShopGrid, toggleShowRoom, updateShopGridOnly } =
	shopGridSlice.actions;
