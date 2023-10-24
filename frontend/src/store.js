import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/ProductSlice";
import { cartSlice } from "./slices/cartSlice";
import { shopGridSlice } from "./slices/shopGridSlice";
import { authSlice } from "./slices/AuthSlice";

export const store = configureStore({
	reducer: {
		products: productSlice.reducer,
		cart: cartSlice.reducer,
		grid: shopGridSlice.reducer,
		auth:authSlice.reducer,
	},
});
