import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
	items: [
		{
			id: "s59272715",
			name: "TULLSTA",
			price: {
				currency: "USD",
				currentPrice: 299,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/tullsta-armchair-nordvalla-light-green__0602731_pe680497_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/tullsta-armchair-nordvalla-light-green__0869028_pe680495_s5.jpg",
			imageAlt: "TULLSTA Armchair, Nordvalla light green",
			url: "https://www.ikea.com/us/en/p/tullsta-armchair-nordvalla-light-green-s59272715/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Chairs",
					key: "fu002",
				},
				{
					name: "Armchairs & accent chairs",
					key: "fu006",
				},
				{
					name: "Armchairs",
					key: "16239",
				},
				{
					name: "Fabric armchairs",
					key: "10687",
				},
			],
			variants: [],
		},

		{
			id: "s19499966",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 949,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/uppland-sofa-hillared-dark-blue__0779496_pe759538_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-sofa-hillared-dark-blue__1241945_pe919989_s5.jpg",
			imageAlt: "UPPLAND Sofa, Hillared dark blue",
			url: "https://www.ikea.com/us/en/p/uppland-sofa-hillared-dark-blue-s19499966/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Sofas & sectionals",
					key: "fu003",
				},
				{
					name: "Fabric sofas",
					key: "10661",
				},
				{
					name: "Three-seat sofas",
					key: "10670",
				},
			],
			variants: [],
		},
	],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addToCart: (state, action) => {
			state.items.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter((item) => {
				return item.id !== action.payload.id;
			});
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
