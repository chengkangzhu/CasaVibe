import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/ProductSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
	reducer: {
		products: productSlice.reducer,
		cart: cartSlice.reducer,
	},
});
