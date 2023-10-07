import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {
	pdp: {
		id: "s39535548",
		name: "LISABO / KRYLBO",
		price: {
			currency: "USD",
			currentPrice: 609.99,
			discounted: false,
		},
		measurement: '55 1/8 "',
		typeName: "Table and 4 chairs",
		image: "https://www.ikea.com/us/en/images/products/lisabo-krylbo-table-and-4-chairs-ash-veneer-tonerud-blue__1232010_pe916327_s5.jpg",
		contextualImageUrl:
			"https://www.ikea.com/us/en/images/products/lisabo-krylbo-table-and-4-chairs-ash-veneer-tonerud-blue__1232009_pe916328_s5.jpg",
		imageAlt:
			'LISABO / KRYLBO Table and 4 chairs, ash veneer/Tonerud blue, 55 1/8 "',
		url: "https://www.ikea.com/us/en/p/lisabo-krylbo-table-and-4-chairs-ash-veneer-tonerud-blue-s39535548/",
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
				name: "Dining sets",
				key: "19145",
			},
			{
				name: "Dining sets up to 4 seats",
				key: "36212",
			},
		],
		variants: [
			{
				id: "s09259702",
				name: "LISABO / ODGER",
				price: {
					currency: "USD",
					currentPrice: 749.99,
					discounted: false,
				},
				measurement: '55 1/8x30 3/4 "',
				typeName: "Table and 4 chairs",
				image: "https://www.ikea.com/us/en/images/products/lisabo-odger-table-and-4-chairs-black-beige__0737980_pe741295_s5.jpg",
				contextualImageUrl:
					"https://www.ikea.com/us/en/images/products/lisabo-odger-table-and-4-chairs-black-beige__0871356_pe674065_s5.jpg",
				imageAlt:
					'LISABO / ODGER Table and 4 chairs, black/beige, 55 1/8x30 3/4 "',
				url: "https://www.ikea.com/us/en/p/lisabo-odger-table-and-4-chairs-black-beige-s09259702/",
			},
			{
				id: "s39297118",
				name: "LISABO / RÖNNINGE",
				price: {
					currency: "USD",
					currentPrice: 709.99,
					discounted: false,
				},
				measurement: '55 1/8x30 3/4 "',
				typeName: "Table and 4 chairs",
				image: "https://www.ikea.com/us/en/images/products/lisabo-roenninge-table-and-4-chairs-ash-veneer-birch__0701527_pe724140_s5.jpg",
				contextualImageUrl:
					"https://www.ikea.com/us/en/images/products/lisabo-roenninge-table-and-4-chairs-ash-veneer-birch__0872466_pe724141_s5.jpg",
				imageAlt:
					'LISABO / RÖNNINGE Table and 4 chairs, ash veneer/birch, 55 1/8x30 3/4 "',
				url: "https://www.ikea.com/us/en/p/lisabo-roenninge-table-and-4-chairs-ash-veneer-birch-s39297118/",
			},
			{
				id: "s09297290",
				name: "LISABO / TOSSBERG",
				price: {
					currency: "USD",
					currentPrice: 1029.99,
					discounted: false,
				},
				measurement: '55 1/8x30 3/4 "',
				typeName: "Table and 4 chairs",
				image: "https://www.ikea.com/us/en/images/products/lisabo-tossberg-table-and-4-chairs-black-metal-black-gray__1127015_pe875962_s5.jpg",
				contextualImageUrl:
					"https://www.ikea.com/us/en/images/products/lisabo-tossberg-table-and-4-chairs-black-metal-black-gray__0661881_pe711653_s5.jpg",
				imageAlt:
					'LISABO / TOSSBERG Table and 4 chairs, black/metal black/gray, 55 1/8x30 3/4 "',
				url: "https://www.ikea.com/us/en/p/lisabo-tossberg-table-and-4-chairs-black-metal-black-gray-s09297290/",
			},
			{
				id: "s49481795",
				name: "LISABO / KARLPETTER",
				price: {
					currency: "USD",
					currentPrice: 549.99,
					discounted: false,
				},
				measurement: '55 1/8x30 3/4 "',
				typeName: "Table and 4 chairs",
				image: "https://www.ikea.com/us/en/images/products/lisabo-karlpetter-table-and-4-chairs-black-gunnared-medium-grey-black__1106915_pe868878_s5.jpg",
				contextualImageUrl:
					"https://www.ikea.com/us/en/images/products/lisabo-karlpetter-table-and-4-chairs-black-gunnared-medium-grey-black__1106914_pe868879_s5.jpg",
				imageAlt:
					'LISABO / KARLPETTER Table and 4 chairs, black/Gunnared medium grey black, 55 1/8x30 3/4 "',
				url: "https://www.ikea.com/us/en/p/lisabo-karlpetter-table-and-4-chairs-black-gunnared-medium-grey-black-s49481795/",
			},
			{
				id: "s99440745",
				name: "LISABO / ODGER",
				price: {
					currency: "USD",
					currentPrice: 749.99,
					discounted: false,
				},
				measurement: '55 1/8 "',
				typeName: "Table and 4 chairs",
				image: "https://www.ikea.com/us/en/images/products/lisabo-odger-table-and-4-chairs-ash-veneer-red__1038455_pe839689_s5.jpg",
				contextualImageUrl:
					"https://www.ikea.com/us/en/images/products/lisabo-odger-table-and-4-chairs-ash-veneer-red__1057886_pe849040_s5.jpg",
				imageAlt:
					'LISABO / ODGER Table and 4 chairs, ash veneer/red, 55 1/8 "',
				url: "https://www.ikea.com/us/en/p/lisabo-odger-table-and-4-chairs-ash-veneer-red-s99440745/",
			},
			{
				id: "s19385535",
				name: "LISABO / LISABO",
				price: {
					currency: "USD",
					currentPrice: 589.99,
					discounted: false,
				},
				measurement: '55 1/8x30 3/4 "',
				typeName: "Table and 4 chairs",
				image: "https://www.ikea.com/us/en/images/products/lisabo-lisabo-table-and-4-chairs-black-black__0921115_pe787669_s5.jpg",
				contextualImageUrl:
					"https://www.ikea.com/us/en/images/products/lisabo-lisabo-table-and-4-chairs-black-black__1221248_pe913675_s5.jpg",
				imageAlt:
					'LISABO / LISABO Table and 4 chairs, black/black, 55 1/8x30 3/4 "',
				url: "https://www.ikea.com/us/en/p/lisabo-lisabo-table-and-4-chairs-black-black-s19385535/",
			},
		],
	},
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
export default productSlice.reducer;
