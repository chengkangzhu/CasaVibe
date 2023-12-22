import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const shopGridInitialState = {
	bestSelling: [],
	grid: [],
	notFound: false,
	filtering : false, 
};
 

//dispatch(fetchData({keyWord='', filter=''}))
export const fetchData = createAsyncThunk(
	"shopGrid/fetchData",
	async ({ keyWord, filter = false }, { dispatch }) => {

		console.log("send new request");

		//ensure it's not blanks
		if (!keyWord.trim()) {
			return;
		}


		//logics for sending the request
		try {

			//when there is a filter parameter
			if (filter !== false) {
				dispatch(filterShopGrid("filtering"));
			} else {
				dispatch(updateShopGrid([]));
			}

			//make the url and add filter if there is filter argument passed in
			let url = `${process.env.REACT_APP_API_URL}/product/search/${keyWord}`;
			
			if (typeof filter === "string") url += `/${filter}`;


			//send the request 
			const response = await axios.get(url);


			//handle the request
			if (response.data.length === 0) {
				//set not found to true
				dispatch(toggleNotFound(true));
			} else {

				if (filter !== false) {
					//if it's filter then only update the grid 
					dispatch(filterShopGrid(response.data));
				} else {
					//if not update everything
					dispatch(updateShopGrid(response.data));
				}
			}

		} catch (error) {
			if (error.response.status === 429)  toast.error( "Too many requests. Please slow down and refresh or try again ." );
			console.error("Error fetching data:", error);
		}
	}
);
 
export const shopGridSlice = createSlice({
	name: "shopGrid",
	initialState: shopGridInitialState,
	reducers: {
		updateShopGrid: (state, action) => { 
			state.notFound = false
			state.filtering =  false;
			if (action.payload.length === 0) {
				state.bestSelling = [];
				state.grid = [];
			} else if (action.payload.length < 40) { 
				state.grid = action.payload;
			} else { 
				state.bestSelling = action.payload.slice(0, 10);
				state.grid = action.payload.slice(10);
			}
		},
		filterShopGrid: (state, action) => {
			if (action.payload === "filtering"){ 
				state.filtering =  true;
			}else if (action.payload.length === 0) {
				state.grid = [];
			} else {
				state.grid = action.payload;
				state.notFound = false;
				state.filtering =  false;
			}
		},
		toggleNotFound: (state,action) =>{
			state.notFound = action.payload;
		},
		toggleFiltering:(state,action)=> {
			state.filtering = action.payload
		},
		toggleLoading : (state,action) =>{
			state.loading = action.payload
		}
	},
});

export const { updateShopGrid, filterShopGrid ,toggleNotFound} =
	shopGridSlice.actions;
