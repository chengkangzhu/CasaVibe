import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/ProductSlice.js";
import { cartSlice } from "../src/slices/cartSlice";
import { shopGridSlice } from "../src/slices/shopGridSlice";
import { authSlice } from "../src/slices/authSlice";
import { wishlistSlice } from "../src/slices/wishlistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		products: productSlice.reducer,
		cart: cartSlice.reducer,
		grid: shopGridSlice.reducer,
		auth: authSlice.reducer,
		wishlist: wishlistSlice.reducer,
	})
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);
