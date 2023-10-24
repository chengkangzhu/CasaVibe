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
			quantity: 1,
			liked: false,
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
			quantity: 1,
			liked: true,
		},
	],
	orderSummary: {
		subtotal: 0,
		tax: 0,
		grandTotal: 0,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		initCart: (state) => {
			state.orderSummary = updateOrderSummary(state);
		},
		addToCart: (state, action) => {
			const isItemDuplicate = state.items.some(
				(item) => item.id === action.payload.id
			);

			if (!isItemDuplicate) {
				// If the item doesn't exist, add it to the cart
				state.items.push(action.payload);

				state.orderSummary = updateOrderSummary(state);
			} else if (isItemDuplicate) {
				state.items.map((item, index) => {
					if (item.id === action.payload.id) {
						state.items[index].quantity += action.payload.quantity;
					}
					state.orderSummary = updateOrderSummary(state);
					return null
				});
			}
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter((item) => {
				return item.id !== action.payload.id;
			});
			state.orderSummary = updateOrderSummary(state);
		},
		incrementQuantity: (state, action) => {
			state.items = state.items.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);

			state.orderSummary = updateOrderSummary(state);
		},
		decrementQuantity: (state, action) => {
			state.items = state.items.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: item.quantity - 1 }
					: item
			);

			state.orderSummary = updateOrderSummary(state);
		},
		toggleLike: (state, action) => {
			state.items = state.items.map((item) =>
				item.id === action.payload.id
					? { ...item, liked: !item.liked }
					: item
			);
		}, 
	},
});

const updateOrderSummary = (state) => {
	const subtotal = parseFloat(
		state.items
			.reduce((sum, item) => {
				return sum + item.quantity * item.price.currentPrice;
			}, 0)
			.toFixed(2)
	);

	const tax = parseFloat((subtotal * 0.09).toFixed(2));
	const total = parseFloat((subtotal + tax).toFixed(2));

	return {
		subtotal,
		tax,
		total,
	};
};

export const {
	initCart,
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
	toggleLike, 
} = cartSlice.actions;
