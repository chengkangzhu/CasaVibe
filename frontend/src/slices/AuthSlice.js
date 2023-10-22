import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
	user: null,
    token: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		setSignin: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		setSignout: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { setSignin, setSignout } = authSlice.actions;
