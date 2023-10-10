import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {
	pdp: {  },
};

export const productSlice = createSlice({
	name: "product",
	initialState: productInitialState,
	reducers: {
		updatePdp: (state, action) => {
			state.pdp = action.payload;
		},
	},
});

export const { updatePdp } = productSlice.actions;
