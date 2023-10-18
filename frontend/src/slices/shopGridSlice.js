import {  createSlice } from "@reduxjs/toolkit";

const shopGridInitialState = {
	bestSelling: [
		{
			id: "30360468",
			name: "MALM",
			price: {
				currency: "USD",
				currentPrice: 299.99,
				discounted: false,
			},
			measurement: '63x30 3/4 "',
			typeName: "6-drawer dresser",
			image: "https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white__0484884_pe621348_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/malm-6-drawer-dresser-white__0823861_pe775996_s5.jpg",
			imageAlt: 'MALM 6-drawer dresser, white, 63x30 3/4 "',
			url: "https://www.ikea.com/us/en/p/malm-6-drawer-dresser-white-30360468/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "10394718",
			name: "BRIMNES",
			price: {
				currency: "USD",
				currentPrice: 249.99,
				discounted: false,
			},
			measurement: '46x74 3/4 "',
			typeName: "Wardrobe with 3 doors",
			image: "https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-white__0176787_pe329567_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-white__0746976_pe744295_s5.jpg",
			imageAlt: 'BRIMNES Wardrobe with 3 doors, white, 46x74 3/4 "',
			url: "https://www.ikea.com/us/en/p/brimnes-wardrobe-with-3-doors-white-10394718/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Armoires & wardrobes",
					key: "19053",
				},
				{
					name: "Narrow wardrobes",
					key: "43631",
				},
			],
			variants: [
				{
					id: "90394719",
					name: "BRIMNES",
					price: {
						currency: "USD",
						currentPrice: 249.99,
						discounted: false,
					},
					measurement: '46x74 3/4 "',
					typeName: "Wardrobe with 3 doors",
					image: "https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-black__0428307_pe583468_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors-black__0746970_pe744296_s5.jpg",
					imageAlt:
						'BRIMNES Wardrobe with 3 doors, black, 46x74 3/4 "',
					url: "https://www.ikea.com/us/en/p/brimnes-wardrobe-with-3-doors-black-90394719/",
				},
			],
		},
		{
			id: "s69216757",
			name: "FRIHETEN",
			price: {
				currency: "USD",
				currentPrice: 899,
				discounted: true,
			},
			measurement: "",
			typeName: "Sleeper sectional,3 seat w/storage",
			image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray__0175610_pe328883_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray__1089881_pe861727_s5.jpg",
			imageAlt:
				"FRIHETEN Sleeper sectional,3 seat w/storage, Skiftebo dark gray",
			url: "https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray-s69216757/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [
				{
					id: "s59297565",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sectional,3 seat w/storage",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige__0690253_pe723174_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige__0690251_pe723175_s5.jpg",
					imageAlt:
						"FRIHETEN Sleeper sectional,3 seat w/storage, Hyllie beige",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige-s59297565/",
				},
				{
					id: "s69297560",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: true,
					},
					measurement: "",
					typeName: "Sleeper sectional,3 seat w/storage",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue__0690243_pe723167_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue__0690241_pe723168_s5.jpg",
					imageAlt:
						"FRIHETEN Sleeper sectional,3 seat w/storage, Skiftebo blue",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue-s69297560/",
				},
				{
					id: "s59297570",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sectional,3 seat w/storage",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray__0690261_pe723182_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray__0690259_pe723183_s5.jpg",
					imageAlt:
						"FRIHETEN Sleeper sectional,3 seat w/storage, Hyllie dark gray",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray-s59297570/",
				},
				{
					id: "s49216819",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: true,
					},
					measurement: "",
					typeName: "Sleeper sectional,3 seat w/storage",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black__0248337_pe386785_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black__0829726_pe600308_s5.jpg",
					imageAlt:
						"FRIHETEN Sleeper sectional,3 seat w/storage, Bomstad black",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black-s49216819/",
				},
			],
		},
		{
			id: "80275887",
			name: "KALLAX",
			price: {
				currency: "USD",
				currentPrice: 89.99,
				discounted: false,
			},
			measurement: '30 3/8x57 7/8 "',
			typeName: "Shelf unit",
			image: "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white__0644757_pe702939_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white__1051325_pe845148_s5.jpg",
			imageAlt: 'KALLAX Shelf unit, white, 30 3/8x57 7/8 "',
			url: "https://www.ikea.com/us/en/p/kallax-shelf-unit-white-80275887/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Sideboards, buffets & sofa tables",
					key: "30454",
				},
				{
					name: "Buffet tables, sideboard buffets & buffet cabinets",
					key: "10412",
				},
			],
			variants: [],
		},
		{
			id: "s59488621",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 899,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/uppland-sofa-karlshov-gray-beige__1194859_pe902109_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-sofa-karlshov-gray-beige__1194858_pe902108_s5.jpg",
			imageAlt: "UPPLAND Sofa, Karlshov gray-beige",
			url: "https://www.ikea.com/us/en/p/uppland-sofa-karlshov-gray-beige-s59488621/",
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
			variants: [
				{
					id: "s29337681",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-totebo-light-beige__0818573_pe774495_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-totebo-light-beige__0818572_pe774494_s5.jpg",
					imageAlt: "UPPLAND Sofa, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-totebo-light-beige-s29337681/",
				},
				{
					id: "s69322376",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-hallarp-beige__0818569_pe774497_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-hallarp-beige__0818568_pe774490_s5.jpg",
					imageAlt: "UPPLAND Sofa, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-hallarp-beige-s69322376/",
				},
				{
					id: "s19322374",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-hallarp-gray__0818567_pe774489_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-hallarp-gray__0818566_pe774488_s5.jpg",
					imageAlt: "UPPLAND Sofa, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-hallarp-gray-s19322374/",
				},
				{
					id: "s49322382",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-totebo-dark-turquoise__0818571_pe774493_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-totebo-dark-turquoise__0818570_pe774492_s5.jpg",
					imageAlt: "UPPLAND Sofa, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-totebo-dark-turquoise-s49322382/",
				},
				{
					id: "s19384116",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818565_pe774487_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818564_pe774486_s5.jpg",
					imageAlt: "UPPLAND Sofa, Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-blekinge-white-s19384116/",
				},
				{
					id: "s89324911",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-virestad-red-white__0818575_pe774491_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-virestad-red-white__0818574_pe774496_s5.jpg",
					imageAlt: "UPPLAND Sofa, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-virestad-red-white-s89324911/",
				},
			],
		},
		{
			id: "s49319214",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1699,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat",
			image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-gunnared-beige__0514363_pe639433_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-gunnared-beige__0778323_pe758890_s5.jpg",
			imageAlt: "FINNALA Sectional, 4-seat, with chaise/Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-with-chaise-gunnared-beige-s49319214/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s19319220",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-tallmyra-beige__0570254_pe666205_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-tallmyra-beige__0778326_pe758892_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat, with chaise/Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-with-chaise-tallmyra-beige-s19319220/",
				},
				{
					id: "s59319218",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-orrsta-black-blue__0514248_pe639365_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-orrsta-black-blue__0778325_pe758891_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat, with chaise/Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-with-chaise-orrsta-black-blue-s59319218/",
				},
				{
					id: "s79319222",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-tallmyra-black-gray__0570235_pe666180_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-tallmyra-black-gray__0778327_pe758897_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat, with chaise/Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-with-chaise-tallmyra-black-gray-s79319222/",
				},
				{
					id: "s99319216",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-gunnared-medium-gray__0514365_pe639438_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-gunnared-medium-gray__0778324_pe758893_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat, with chaise/Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-with-chaise-gunnared-medium-gray-s99319216/",
				},
				{
					id: "s29319432",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1649,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-dalstorp-multicolor__0725532_pe734919_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-with-chaise-dalstorp-multicolor__0782161_pe761110_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat, with chaise/Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-with-chaise-dalstorp-multicolor-s29319432/",
				},
			],
		},
		{
			id: "90243297",
			name: "LACK",
			price: {
				currency: "USD",
				currentPrice: 19.99,
				discounted: false,
			},
			measurement: '35 3/8x10 1/4x17 3/4 "',
			typeName: "TV unit",
			image: "https://www.ikea.com/us/en/images/products/lack-tv-unit-black__0644748_pe702932_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lack-tv-unit-black__1120653_pe873913_s5.jpg",
			imageAlt: 'LACK TV unit, black, 35 3/8x10 1/4x17 3/4 "',
			url: "https://www.ikea.com/us/en/p/lack-tv-unit-black-90243297/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "TV & media furniture",
					key: "10475",
				},
				{
					name: "TV stands & benches",
					key: "10810",
				},
			],
			variants: [],
		},
		{
			id: "60381737",
			name: "HEMNES",
			price: {
				currency: "USD",
				currentPrice: 319.99,
				discounted: true,
			},
			measurement: '63x37 3/8 "',
			typeName: "8-drawer dresser",
			image: "https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-dark-gray-stained__0519831_pe641793_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/hemnes-8-drawer-dresser-dark-gray-stained__0519832_pe641792_s5.jpg",
			imageAlt: 'HEMNES 8-drawer dresser, dark gray stained, 63x37 3/8 "',
			url: "https://www.ikea.com/us/en/p/hemnes-8-drawer-dresser-dark-gray-stained-60381737/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "70489011",
			name: "GLOSTAD",
			price: {
				currency: "USD",
				currentPrice: 149,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/glostad-loveseat-knisa-dark-gray__0950864_pe800736_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/glostad-loveseat-knisa-dark-gray__0950897_pe800737_s5.jpg",
			imageAlt: "GLOSTAD Loveseat, Knisa dark gray",
			url: "https://www.ikea.com/us/en/p/glostad-loveseat-knisa-dark-gray-70489011/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [],
		},
		{
			id: "s79440478",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 1449,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 5-seat corner",
			image: "https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tibbleby-beige-gray__1056106_pe848241_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tibbleby-beige-gray__1056105_pe848242_s5.jpg",
			imageAlt: "KIVIK Sectional, 5-seat corner, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-tibbleby-beige-gray-s79440478/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s89482868",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tresund-light-beige__1124072_pe874989_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tresund-light-beige__1124071_pe874988_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 5-seat corner, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-tresund-light-beige-s89482868/",
				},
				{
					id: "s09482867",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tresund-anthracite__1124074_pe874995_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-tresund-anthracite__1124073_pe874990_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 5-seat corner, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-tresund-anthracite-s09482867/",
				},
				{
					id: "s49443020",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-kelinge-gray-turquoise__1055829_pe848117_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-5-seat-corner-kelinge-gray-turquoise__1055828_pe848118_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 5-seat corner, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-5-seat-corner-kelinge-gray-turquoise-s49443020/",
				},
			],
		},
	],
	grid: [
		{
			id: "s49420504",
			name: "GURSKEN",
			price: {
				currency: "USD",
				currentPrice: 303.98,
				discounted: false,
			},
			measurement: "",
			typeName: "Bedroom furniture, set of 3",
			image: "https://www.ikea.com/us/en/images/products/gursken-bedroom-furniture-set-of-3-light-beige__1019128_pe831707_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/gursken-bedroom-furniture-set-of-3-light-beige__0939777_pe794666_s5.jpg",
			imageAlt: "GURSKEN Bedroom furniture, set of 3, light beige",
			url: "https://www.ikea.com/us/en/p/gursken-bedroom-furniture-set-of-3-light-beige-s49420504/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Bedroom furniture sets",
					key: "54992",
				},
			],
			variants: [],
		},
		{
			id: "90341151",
			name: "FRIHETEN",
			price: {
				currency: "USD",
				currentPrice: 749,
				discounted: true,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-skiftebo-dark-gray__0525504_pe644868_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-skiftebo-dark-gray__0829149_pe644867_s5.jpg",
			imageAlt: "FRIHETEN Sleeper sofa, Skiftebo dark gray",
			url: "https://www.ikea.com/us/en/p/friheten-sleeper-sofa-skiftebo-dark-gray-90341151/",
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
			variants: [
				{
					id: "40431719",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 849,
						discounted: true,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-hyllie-beige__0690274_pe723194_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-hyllie-beige__0690272_pe723195_s5.jpg",
					imageAlt: "FRIHETEN Sleeper sofa, Hyllie beige",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sofa-hyllie-beige-40431719/",
				},
				{
					id: "40431564",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: true,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-skiftebo-blue__0690280_pe723200_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-skiftebo-blue__0690278_pe723201_s5.jpg",
					imageAlt: "FRIHETEN Sleeper sofa, Skiftebo blue",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sofa-skiftebo-blue-40431564/",
				},
				{
					id: "20432084",
					name: "FRIHETEN",
					price: {
						currency: "USD",
						currentPrice: 849,
						discounted: true,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-hyllie-dark-gray__0690268_pe723188_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-sleeper-sofa-hyllie-dark-gray__0690265_pe723191_s5.jpg",
					imageAlt: "FRIHETEN Sleeper sofa, Hyllie dark gray",
					url: "https://www.ikea.com/us/en/p/friheten-sleeper-sofa-hyllie-dark-gray-20432084/",
				},
			],
		},
		{
			id: "s59389838",
			name: "PÄRUP",
			price: {
				currency: "USD",
				currentPrice: 799,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-gunnared-beige__1041908_pe841188_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-gunnared-beige__0950140_pe800160_s5.jpg",
			imageAlt: "PÄRUP Sofa with chaise, Gunnared beige",
			url: "https://www.ikea.com/us/en/p/paerup-sofa-with-chaise-gunnared-beige-s59389838/",
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
					name: "Sofas with chaise",
					key: "47388",
				},
			],
			variants: [
				{
					id: "s29389830",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-gunnared-dark-gray__1041909_pe841189_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-gunnared-dark-gray__1206461_ph178912_s5.jpg",
					imageAlt: "PÄRUP Sofa with chaise, Gunnared dark gray",
					url: "https://www.ikea.com/us/en/p/paerup-sofa-with-chaise-gunnared-dark-gray-s29389830/",
				},
				{
					id: "s79389842",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-vissle-gray__1041911_pe841191_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-vissle-gray__0950149_pe800169_s5.jpg",
					imageAlt: "PÄRUP Sofa with chaise, Vissle gray",
					url: "https://www.ikea.com/us/en/p/paerup-sofa-with-chaise-vissle-gray-s79389842/",
				},
				{
					id: "s19389835",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-vissle-dark-green__1041910_pe841190_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-sofa-with-chaise-vissle-dark-green__0950146_pe800166_s5.jpg",
					imageAlt: "PÄRUP Sofa with chaise, Vissle dark green",
					url: "https://www.ikea.com/us/en/p/paerup-sofa-with-chaise-vissle-dark-green-s19389835/",
				},
			],
		},
		{
			id: "80227797",
			name: "BYÅS",
			price: {
				currency: "USD",
				currentPrice: 189.99,
				discounted: false,
			},
			measurement: '63x16 1/2x17 3/4 "',
			typeName: "TV unit",
			image: "https://www.ikea.com/us/en/images/products/byas-tv-unit-high-gloss-white__0644411_pe702653_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/byas-tv-unit-high-gloss-white__0849938_pe560742_s5.jpg",
			imageAlt: 'BYÅS TV unit, high gloss white, 63x16 1/2x17 3/4 "',
			url: "https://www.ikea.com/us/en/p/byas-tv-unit-high-gloss-white-80227797/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "TV & media furniture",
					key: "10475",
				},
				{
					name: "TV stands & benches",
					key: "10810",
				},
			],
			variants: [],
		},
		{
			id: "70484594",
			name: "KOPPANG",
			price: {
				currency: "USD",
				currentPrice: 129.99,
				discounted: false,
			},
			measurement: '35 3/8x32 5/8 "',
			typeName: "3-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/koppang-3-drawer-chest-black-brown__0521771_pe642944_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/koppang-3-drawer-chest-black-brown__0778082_pe758828_s5.jpg",
			imageAlt: 'KOPPANG 3-drawer chest, black-brown, 35 3/8x32 5/8 "',
			url: "https://www.ikea.com/us/en/p/koppang-3-drawer-chest-black-brown-70484594/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "80213074",
			name: "MICKE",
			price: {
				currency: "USD",
				currentPrice: 99.99,
				discounted: true,
			},
			measurement: '41 3/8x19 5/8 "',
			typeName: "Desk",
			image: "https://www.ikea.com/us/en/images/products/micke-desk-white__0736018_pe740345_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/micke-desk-white__0851508_pe565256_s5.jpg",
			imageAlt: 'MICKE Desk, white, 41 3/8x19 5/8 "',
			url: "https://www.ikea.com/us/en/p/micke-desk-white-80213074/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "s79175978",
			name: "MALM",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "Queen",
			typeName: "High bed frame/2 storage boxes",
			image: "https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1154393_pe886042_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-white-luroey__1101597_pe866769_s5.jpg",
			imageAlt: "MALM High bed frame/2 storage boxes, white/Luröy, Queen",
			url: "https://www.ikea.com/us/en/p/malm-high-bed-frame-2-storage-boxes-white-luroey-s79175978/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Full, Queen and King beds",
					key: "16284",
				},
			],
			variants: [],
		},
		{
			id: "60366794",
			name: "SONGESAND",
			price: {
				currency: "USD",
				currentPrice: 299.99,
				discounted: false,
			},
			measurement: '63 3/8x31 7/8 "',
			typeName: "6-drawer dresser",
			image: "https://www.ikea.com/us/en/images/products/songesand-6-drawer-dresser-white__0552202_pe658935_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/songesand-6-drawer-dresser-white__0859171_pe658936_s5.jpg",
			imageAlt: 'SONGESAND 6-drawer dresser, white, 63 3/8x31 7/8 "',
			url: "https://www.ikea.com/us/en/p/songesand-6-drawer-dresser-white-60366794/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "s89150755",
			name: "HOLMSUND",
			price: {
				currency: "USD",
				currentPrice: 1199,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sectional, 3-seat",
			image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-nordvalla-beige__0727980_pe735984_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-nordvalla-beige__0829259_pe600211_s5.jpg",
			imageAlt: "HOLMSUND Sleeper sectional, 3-seat, Nordvalla beige",
			url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sectional-3-seat-nordvalla-beige-s89150755/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [
				{
					id: "s49228209",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sectional, 3-seat",
					image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-orrsta-light-blue__0728013_pe735994_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-orrsta-light-blue__0828573_pe648007_s5.jpg",
					imageAlt:
						"HOLMSUND Sleeper sectional, 3-seat, Orrsta light blue",
					url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sectional-3-seat-orrsta-light-blue-s49228209/",
				},
				{
					id: "s49228214",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sectional, 3-seat",
					image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-orrsta-light-white-gray__0728014_pe736010_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-orrsta-light-white-gray__0828607_pe648011_s5.jpg",
					imageAlt:
						"HOLMSUND Sleeper sectional, 3-seat, Orrsta light white-gray",
					url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sectional-3-seat-orrsta-light-white-gray-s49228214/",
				},
				{
					id: "s99150750",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sectional, 3-seat",
					image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-nordvalla-medium-gray__0727981_pe735985_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sectional-3-seat-nordvalla-medium-gray__0829250_pe600302_s5.jpg",
					imageAlt:
						"HOLMSUND Sleeper sectional, 3-seat, Nordvalla medium gray",
					url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sectional-3-seat-nordvalla-medium-gray-s99150750/",
				},
			],
		},
		{
			id: "30311307",
			name: "KOPPANG",
			price: {
				currency: "USD",
				currentPrice: 259.99,
				discounted: false,
			},
			measurement: '67 3/4x32 5/8 "',
			typeName: "6-drawer dresser",
			image: "https://www.ikea.com/us/en/images/products/koppang-6-drawer-dresser-black-brown__0430434_pe584637_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/koppang-6-drawer-dresser-black-brown__0778088_pe758832_s5.jpg",
			imageAlt: 'KOPPANG 6-drawer dresser, black-brown, 67 3/4x32 5/8 "',
			url: "https://www.ikea.com/us/en/p/koppang-6-drawer-dresser-black-brown-30311307/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "s29470236",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 549,
				discounted: false,
			},
			measurement: "",
			typeName: "1-seat sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tibbleby-beige-gray__1130878_pe877951_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tibbleby-beige-gray__1148199_ph184927_s5.jpg",
			imageAlt: "KIVIK 1-seat sleeper sofa, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tibbleby-beige-gray-s29470236/",
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
					name: "Chair beds",
					key: "16296",
				},
			],
			variants: [
				{
					id: "s09470242",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 649,
						discounted: false,
					},
					measurement: "",
					typeName: "1-seat sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tresund-light-beige__1130885_pe877959_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tresund-light-beige__1165835_pe890978_s5.jpg",
					imageAlt: "KIVIK 1-seat sleeper sofa, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tresund-light-beige-s09470242/",
				},
				{
					id: "s79470248",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 649,
						discounted: false,
					},
					measurement: "",
					typeName: "1-seat sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tresund-anthracite__1130883_pe877960_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-1-seat-sleeper-sofa-tresund-anthracite__1165827_pe890973_s5.jpg",
					imageAlt: "KIVIK 1-seat sleeper sofa, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-1-seat-sleeper-sofa-tresund-anthracite-s79470248/",
				},
			],
		},
		{
			id: "70512243",
			name: "LINANÄS",
			price: {
				currency: "USD",
				currentPrice: 499,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-dark-gray__1013908_pe829460_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-dark-gray__1013909_pe829463_s5.jpg",
			imageAlt: "LINANÄS Sofa, with chaise/Vissle dark gray",
			url: "https://www.ikea.com/us/en/p/linanaes-sofa-with-chaise-vissle-dark-gray-70512243/",
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
			variants: [
				{
					id: "60512234",
					name: "LINANÄS",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-beige__1013903_pe829455_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-beige__1013905_pe829459_s5.jpg",
					imageAlt: "LINANÄS Sofa, with chaise/Vissle beige",
					url: "https://www.ikea.com/us/en/p/linanaes-sofa-with-chaise-vissle-beige-60512234/",
				},
			],
		},
		{
			id: "10334753",
			name: "MACKAPÄR",
			price: {
				currency: "USD",
				currentPrice: 99.99,
				discounted: false,
			},
			measurement: '39 3/8x20 1/8 "',
			typeName: "Storage unit",
			image: "https://www.ikea.com/us/en/images/products/mackapaer-storage-unit-white__0710735_pe727753_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/mackapaer-storage-unit-white__0909515_pe696006_s5.jpg",
			imageAlt: 'MACKAPÄR Storage unit, white, 39 3/8x20 1/8 "',
			url: "https://www.ikea.com/us/en/p/mackapaer-storage-unit-white-10334753/",
			categoryPath: [
				{
					name: "Storage & organization",
					key: "st001",
				},
				{
					name: "Clothes & shoe organizers",
					key: "st005",
				},
				{
					name: "Shoe cabinets",
					key: "10456",
				},
			],
			variants: [],
		},
		{
			id: "s49501915",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 219,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-light-green__1192116_pe900864_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-light-green__1192115_pe900863_s5.jpg",
			imageAlt: "POÄNG Armchair, brown/Gunnared light green",
			url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-light-green-s49501915/",
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
			variants: [
				{
					id: "s09336022",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: true,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-light-beige__0571543_pe666957_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-light-beige__0840421_pe666960_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Knisa light beige",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-knisa-light-beige-s09336022/",
				},
				{
					id: "s59501991",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-beige__1192128_pe900849_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-beige__1192127_pe900871_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Gunnared beige",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-beige-s59501991/",
				},
				{
					id: "s09502144",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-blue__1192148_pe900888_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-blue__1192147_pe900887_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Gunnared blue",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-blue-s09502144/",
				},
				{
					id: "s19336026",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-anthracite__0497150_pe628977_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-anthracite__0837589_pe629093_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-hillared-anthracite-s19336026/",
				},
				{
					id: "s89388470",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-dark-gray__0937022_pe793528_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-dark-gray__0937023_pe793529_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Skiftebo dark gray",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-skiftebo-dark-gray-s89388470/",
				},
				{
					id: "s19387110",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-yellow__0936998_pe793510_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-yellow__0936999_pe793511_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Skiftebo yellow",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-skiftebo-yellow-s19387110/",
				},
			],
		},
		{
			id: "00547081",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 189,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover f 3-seat sofa w chaise lounge",
			image: "https://www.ikea.com/us/en/images/products/uppland-cover-f-3-seat-sofa-w-chaise-lounge-karlshov-beige-multicolor__1194855_pe902105_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-cover-f-3-seat-sofa-w-chaise-lounge-karlshov-beige-multicolor__1194799_pe902060_s5.jpg",
			imageAlt:
				"UPPLAND Cover f 3-seat sofa w chaise lounge, Karlshov beige/multicolor",
			url: "https://www.ikea.com/us/en/p/uppland-cover-f-3-seat-sofa-w-chaise-lounge-karlshov-beige-multicolor-00547081/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "UPPLAND covers",
					key: "50959",
				},
			],
			variants: [
				{
					id: "10472787",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-hallarp-beige__0818581_pe774503_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-hallarp-beige__0826813_pe776411_s5.jpg",
					imageAlt:
						"UPPLAND Cover for sofa, with chaise/Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-with-chaise-hallarp-beige-10472787/",
				},
				{
					id: "40485401",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 89,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-totebo-light-beige__0818587_pe774509_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-totebo-light-beige__0826817_pe776415_s5.jpg",
					imageAlt:
						"UPPLAND Cover for sofa, with chaise/Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-with-chaise-totebo-light-beige-40485401/",
				},
				{
					id: "30472786",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-hallarp-gray__0818579_pe774501_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-hallarp-gray__0826814_pe776412_s5.jpg",
					imageAlt:
						"UPPLAND Cover for sofa, with chaise/Hallarp gray",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-with-chaise-hallarp-gray-30472786/",
				},
				{
					id: "30472791",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 139,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-virestad-red-white__0818589_pe774504_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-virestad-red-white__0826818_pe776413_s5.jpg",
					imageAlt:
						"UPPLAND Cover for sofa, with chaise/Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-with-chaise-virestad-red-white-30472791/",
				},
				{
					id: "50472790",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 89,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-totebo-dark-turquoise__0818585_pe774507_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-totebo-dark-turquoise__0826816_pe776414_s5.jpg",
					imageAlt:
						"UPPLAND Cover for sofa, with chaise/Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-with-chaise-totebo-dark-turquoise-50472790/",
				},
				{
					id: "70487639",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 139,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-blekinge-white__0818577_pe774499_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-with-chaise-blekinge-white__0261000_pe404970_s5.jpg",
					imageAlt:
						"UPPLAND Cover for sofa, with chaise/Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-with-chaise-blekinge-white-70487639/",
				},
			],
		},
		{
			id: "80394456",
			name: "JOKKMOKK",
			price: {
				currency: "USD",
				currentPrice: 199.99,
				discounted: true,
			},
			measurement: "",
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/jokkmokk-table-and-4-chairs-black-brown__0574208_pe668154_s5.jpg",
			imageAlt: "JOKKMOKK Table and 4 chairs, black-brown",
			url: "https://www.ikea.com/us/en/p/jokkmokk-table-and-4-chairs-black-brown-80394456/",
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
			variants: [],
		},
		{
			id: "s69228473",
			name: "TROFAST",
			price: {
				currency: "USD",
				currentPrice: 79.99,
				discounted: true,
			},
			measurement: '39x17 3/8x22 "',
			typeName: "Storage combination with boxes",
			image: "https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0535774_pe649629_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0876101_pe649630_s5.jpg",
			imageAlt:
				'TROFAST Storage combination with boxes, white/white, 39x17 3/8x22 "',
			url: "https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-s69228473/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Nursery Furniture",
					key: "45780",
				},
				{
					name: "Toy storage",
					key: "20474",
				},
			],
			variants: [],
		},
		{
			id: "30366837",
			name: "SONGESAND",
			price: {
				currency: "USD",
				currentPrice: 149.99,
				discounted: false,
			},
			measurement: '32 1/4x31 7/8 "',
			typeName: "3-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/songesand-3-drawer-chest-white__0552190_pe658947_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/songesand-3-drawer-chest-white__0859031_pe658948_s5.jpg",
			imageAlt: 'SONGESAND 3-drawer chest, white, 32 1/4x31 7/8 "',
			url: "https://www.ikea.com/us/en/p/songesand-3-drawer-chest-white-30366837/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "s99440482",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 1849,
				discounted: false,
			},
			measurement: "",
			typeName: "Corner sectional, 5-seat w chaise",
			image: "https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-tibbleby-beige-gray__1056108_pe848243_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-tibbleby-beige-gray__1056107_pe848244_s5.jpg",
			imageAlt:
				"KIVIK Corner sectional, 5-seat w chaise, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-corner-sectional-5-seat-w-chaise-tibbleby-beige-gray-s99440482/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s19482876",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 2049,
						discounted: false,
					},
					measurement: "",
					typeName: "Corner sectional, 5-seat w chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-tresund-light-beige__1124082_pe875001_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-tresund-light-beige__1124081_pe875000_s5.jpg",
					imageAlt:
						"KIVIK Corner sectional, 5-seat w chaise, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-corner-sectional-5-seat-w-chaise-tresund-light-beige-s19482876/",
				},
				{
					id: "s39482875",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 2049,
						discounted: false,
					},
					measurement: "",
					typeName: "Corner sectional, 5-seat w chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-tresund-anthracite__1124080_pe874997_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-tresund-anthracite__1124079_pe874996_s5.jpg",
					imageAlt:
						"KIVIK Corner sectional, 5-seat w chaise, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-corner-sectional-5-seat-w-chaise-tresund-anthracite-s39482875/",
				},
				{
					id: "s69443024",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1899,
						discounted: false,
					},
					measurement: "",
					typeName: "Corner sectional, 5-seat w chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-kelinge-gray-turquoise__1055833_pe848119_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-corner-sectional-5-seat-w-chaise-kelinge-gray-turquoise__1055832_pe848120_s5.jpg",
					imageAlt:
						"KIVIK Corner sectional, 5-seat w chaise, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-corner-sectional-5-seat-w-chaise-kelinge-gray-turquoise-s69443024/",
				},
			],
		},
		{
			id: "70438371",
			name: "VINLIDEN",
			price: {
				currency: "USD",
				currentPrice: 140,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa",
			image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hakebo-dark-gray__0852787_pe780253_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hakebo-dark-gray__0852766_pe780245_s5.jpg",
			imageAlt: "VINLIDEN Cover for sofa, with chaise/Hakebo dark gray",
			url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-with-chaise-hakebo-dark-gray-70438371/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "VINLIDEN covers",
					key: "47443",
				},
			],
			variants: [
				{
					id: "70443773",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 140,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hakebo-beige__0852786_pe780251_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hakebo-beige__0852763_pe780242_s5.jpg",
					imageAlt:
						"VINLIDEN Cover for sofa, with chaise/Hakebo beige",
					url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-with-chaise-hakebo-beige-70443773/",
				},
				{
					id: "10455392",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 190,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hillared-anthracite__0515777_pe640035_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hillared-anthracite__0852769_pe780248_s5.jpg",
					imageAlt:
						"VINLIDEN Cover for sofa, with chaise/Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-with-chaise-hillared-anthracite-10455392/",
				},
				{
					id: "90443753",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 140,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hakebo-light-turquoise__0970904_pe811165_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-with-chaise-hakebo-light-turquoise__0938992_pe794370_s5.jpg",
					imageAlt:
						"VINLIDEN Cover for sofa, with chaise/Hakebo light turquoise",
					url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-with-chaise-hakebo-light-turquoise-90443753/",
				},
			],
		},
		{
			id: "s09010617",
			name: "KLIPPAN",
			price: {
				currency: "USD",
				currentPrice: 399,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/klippan-loveseat-vissle-gray__0239990_pe379591_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/klippan-loveseat-vissle-gray__0820948_pe709146_s5.jpg",
			imageAlt: "KLIPPAN Loveseat, Vissle gray",
			url: "https://www.ikea.com/us/en/p/klippan-loveseat-vissle-gray-s09010617/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s29251781",
					name: "KLIPPAN",
					price: {
						currency: "USD",
						currentPrice: 449,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/klippan-loveseat-kabusa-dark-gray__0562986_pe663639_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/klippan-loveseat-kabusa-dark-gray__0830009_pe709151_s5.jpg",
					imageAlt: "KLIPPAN Loveseat, Kabusa dark gray",
					url: "https://www.ikea.com/us/en/p/klippan-loveseat-kabusa-dark-gray-s29251781/",
				},
				{
					id: "s69399728",
					name: "KLIPPAN",
					price: {
						currency: "USD",
						currentPrice: 399,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/klippan-loveseat-vissle-yellow-green__0950910_pe800810_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/klippan-loveseat-vissle-yellow-green__0950913_pe800813_s5.jpg",
					imageAlt: "KLIPPAN Loveseat, Vissle yellow-green",
					url: "https://www.ikea.com/us/en/p/klippan-loveseat-vissle-yellow-green-s69399728/",
				},
			],
		},
		{
			id: "10178601",
			name: "MALM",
			price: {
				currency: "USD",
				currentPrice: 89.99,
				discounted: false,
			},
			measurement: '15 3/4x21 5/8 "',
			typeName: "2-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white-stained-oak-veneer__1154592_pe886219_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white-stained-oak-veneer__1154590_pe886216_s5.jpg",
			imageAlt:
				'MALM 2-drawer chest, white stained oak veneer, 15 3/4x21 5/8 "',
			url: "https://www.ikea.com/us/en/p/malm-2-drawer-chest-white-stained-oak-veneer-10178601/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "s09488609",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 1649,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat corner",
			image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-karlshov-gray-beige__1194819_pe902069_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-karlshov-gray-beige__1194818_pe902068_s5.jpg",
			imageAlt: "UPPLAND Sectional, 4-seat corner, Karlshov gray-beige",
			url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-karlshov-gray-beige-s09488609/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s29322397",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1649,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-hallarp-beige__0818595_pe774517_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-hallarp-beige__0818594_pe774516_s5.jpg",
					imageAlt: "UPPLAND Sectional, 4-seat corner, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-hallarp-beige-s29322397/",
				},
				{
					id: "s49337675",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-totebo-light-beige__0818601_pe774523_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-totebo-light-beige__0818600_pe774522_s5.jpg",
					imageAlt:
						"UPPLAND Sectional, 4-seat corner, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-totebo-light-beige-s49337675/",
				},
				{
					id: "s89322399",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-remmarn-light-gray__0818597_pe774519_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-remmarn-light-gray__0818596_pe774525_s5.jpg",
					imageAlt:
						"UPPLAND Sectional, 4-seat corner, Remmarn light gray",
					url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-remmarn-light-gray-s89322399/",
				},
				{
					id: "s89322403",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-totebo-dark-turquoise__0818599_pe774521_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-totebo-dark-turquoise__0818598_pe774520_s5.jpg",
					imageAlt:
						"UPPLAND Sectional, 4-seat corner, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-totebo-dark-turquoise-s89322403/",
				},
				{
					id: "s49384110",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-blekinge-white__0818591_pe774513_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-blekinge-white__0818590_pe774512_s5.jpg",
					imageAlt:
						"UPPLAND Sectional, 4-seat corner, Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-blekinge-white-s49384110/",
				},
				{
					id: "s79324916",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-virestad-red-white__0818603_pe774518_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sectional-4-seat-corner-virestad-red-white__0818602_pe774524_s5.jpg",
					imageAlt:
						"UPPLAND Sectional, 4-seat corner, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-sectional-4-seat-corner-virestad-red-white-s79324916/",
				},
			],
		},
		{
			id: "30381183",
			name: "KNARREVIK",
			price: {
				currency: "USD",
				currentPrice: 14.99,
				discounted: false,
			},
			measurement: '14 5/8x11 "',
			typeName: "Nightstand",
			image: "https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__0578634_pe669464_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",
			imageAlt: 'KNARREVIK Nightstand, black, 14 5/8x11 "',
			url: "https://www.ikea.com/us/en/p/knarrevik-nightstand-black-30381183/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "s99241265",
			name: "SONGESAND",
			price: {
				currency: "USD",
				currentPrice: 369,
				discounted: false,
			},
			measurement: "Full/Double",
			typeName: "Bed frame with 2 storage boxes",
			image: "https://www.ikea.com/us/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1151019_pe884760_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",
			imageAlt:
				"SONGESAND Bed frame with 2 storage boxes, white/Luröy, Full/Double",
			url: "https://www.ikea.com/us/en/p/songesand-bed-frame-with-2-storage-boxes-white-luroey-s99241265/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Full, Queen and King beds",
					key: "16284",
				},
			],
			variants: [],
		},
		{
			id: "50307936",
			name: "BALKARP",
			price: {
				currency: "USD",
				currentPrice: 249,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/balkarp-sleeper-sofa-vissle-gray__0366179_pe548633_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/balkarp-sleeper-sofa-vissle-gray__0366180_pe548634_s5.jpg",
			imageAlt: "BALKARP Sleeper sofa, Vissle gray",
			url: "https://www.ikea.com/us/en/p/balkarp-sleeper-sofa-vissle-gray-50307936/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [],
		},
		{
			id: "s09336022",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 119,
				discounted: true,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-light-beige__0571543_pe666957_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-knisa-light-beige__0840421_pe666960_s5.jpg",
			imageAlt: "POÄNG Armchair, brown/Knisa light beige",
			url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-knisa-light-beige-s09336022/",
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
			variants: [
				{
					id: "s59501991",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-beige__1192128_pe900849_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-beige__1192127_pe900871_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Gunnared beige",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-beige-s59501991/",
				},
				{
					id: "s09502144",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-blue__1192148_pe900888_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-blue__1192147_pe900887_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Gunnared blue",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-blue-s09502144/",
				},
				{
					id: "s19336026",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-anthracite__0497150_pe628977_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-hillared-anthracite__0837589_pe629093_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-hillared-anthracite-s19336026/",
				},
				{
					id: "s49501915",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-light-green__1192116_pe900864_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-gunnared-light-green__1192115_pe900863_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Gunnared light green",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-gunnared-light-green-s49501915/",
				},
				{
					id: "s89388470",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-dark-gray__0937022_pe793528_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-dark-gray__0937023_pe793529_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Skiftebo dark gray",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-skiftebo-dark-gray-s89388470/",
				},
				{
					id: "s19387110",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-yellow__0936998_pe793510_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-brown-skiftebo-yellow__0936999_pe793511_s5.jpg",
					imageAlt: "POÄNG Armchair, brown/Skiftebo yellow",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-brown-skiftebo-yellow-s19387110/",
				},
			],
		},
		{
			id: "s59305928",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 119,
				discounted: true,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-light-beige__0571500_pe666933_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-light-beige__0837298_pe666936_s5.jpg",
			imageAlt: "POÄNG Armchair, birch veneer/Knisa light beige",
			url: "https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-knisa-light-beige-s59305928/",
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
			variants: [
				{
					id: "s49305924",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-anthracite__0497120_pe628947_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-anthracite__0837219_pe629068_s5.jpg",
					imageAlt:
						"POÄNG Armchair, birch veneer/Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-hillared-anthracite-s49305924/",
				},
				{
					id: "s79305927",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: true,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-black__0571496_pe666929_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-knisa-black__0837326_pe666932_s5.jpg",
					imageAlt: "POÄNG Armchair, birch veneer/Knisa black",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-knisa-black-s79305927/",
				},
				{
					id: "s99305926",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-dark-blue__0497130_pe628957_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-dark-blue__0840367_pe629080_s5.jpg",
					imageAlt: "POÄNG Armchair, birch veneer/Hillared dark blue",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-hillared-dark-blue-s99305926/",
				},
				{
					id: "s79388461",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-skiftebo-dark-gray__0937014_pe793536_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-skiftebo-dark-gray__0937015_pe793537_s5.jpg",
					imageAlt: "POÄNG Armchair, birch veneer/Skiftebo dark gray",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-skiftebo-dark-gray-s79388461/",
				},
			],
		},
		{
			id: "s69322357",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 479,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/uppland-armchair-remmarn-light-gray__0818473_pe774430_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-armchair-remmarn-light-gray__0818472_pe774429_s5.jpg",
			imageAlt: "UPPLAND Armchair, Remmarn light gray",
			url: "https://www.ikea.com/us/en/p/uppland-armchair-remmarn-light-gray-s69322357/",
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
			variants: [
				{
					id: "s09322355",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 529,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/uppland-armchair-hallarp-beige__0818468_pe774420_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-armchair-hallarp-beige__0818470_pe774427_s5.jpg",
					imageAlt: "UPPLAND Armchair, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-armchair-hallarp-beige-s09322355/",
				},
				{
					id: "s99337673",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 429,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/uppland-armchair-totebo-light-beige__0818479_pe774414_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-armchair-totebo-light-beige__0818478_pe774413_s5.jpg",
					imageAlt: "UPPLAND Armchair, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-armchair-totebo-light-beige-s99337673/",
				},
				{
					id: "s59322353",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 529,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/uppland-armchair-hallarp-gray__0818467_pe774418_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-armchair-hallarp-gray__0818466_pe774425_s5.jpg",
					imageAlt: "UPPLAND Armchair, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/uppland-armchair-hallarp-gray-s59322353/",
				},
				{
					id: "s89322361",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 429,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/uppland-armchair-totebo-dark-turquoise__0818476_pe774411_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-armchair-totebo-dark-turquoise__0818475_pe774412_s5.jpg",
					imageAlt: "UPPLAND Armchair, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-armchair-totebo-dark-turquoise-s89322361/",
				},
				{
					id: "s89384108",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 479,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/uppland-armchair-blekinge-white__24278_pe109112_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-armchair-blekinge-white__0818462_pe774422_s5.jpg",
					imageAlt: "UPPLAND Armchair, Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-armchair-blekinge-white-s89384108/",
				},
				{
					id: "s59324917",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 479,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/uppland-armchair-virestad-red-white__0818482_pe774417_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-armchair-virestad-red-white__0818481_pe774416_s5.jpg",
					imageAlt: "UPPLAND Armchair, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-armchair-virestad-red-white-s59324917/",
				},
			],
		},
		{
			id: "s69306545",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 119,
				discounted: true,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-knisa-light-beige__0571514_pe666945_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-knisa-light-beige__0837314_pe666948_s5.jpg",
			imageAlt: "POÄNG Armchair, black-brown/Knisa light beige",
			url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-knisa-light-beige-s69306545/",
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
			variants: [
				{
					id: "s09502139",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-blue__1192156_pe900894_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-blue__1192155_pe900855_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Gunnared blue",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-gunnared-blue-s09502139/",
				},
				{
					id: "s29306547",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-hillared-dark-blue__0497145_pe628972_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-hillared-dark-blue__0840372_pe629090_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Hillared dark blue",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-hillared-dark-blue-s29306547/",
				},
				{
					id: "s89306549",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-hillared-anthracite__0497135_pe628962_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-hillared-anthracite__0837224_pe629083_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-hillared-anthracite-s89306549/",
				},
				{
					id: "s69388466",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-dark-gray__0937018_pe793540_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-dark-gray__0937019_pe793527_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Skiftebo dark gray",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-skiftebo-dark-gray-s69388466/",
				},
				{
					id: "s39501911",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-light-green__1192112_pe900861_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-light-green__1192111_pe900860_s5.jpg",
					imageAlt:
						"POÄNG Armchair, black-brown/Gunnared light green",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-gunnared-light-green-s39501911/",
				},
				{
					id: "s49387095",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-yellow__0936994_pe793506_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-yellow__0936995_pe793507_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Skiftebo yellow",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-skiftebo-yellow-s49387095/",
				},
			],
		},
		{
			id: "70078463",
			name: "PELLO",
			price: {
				currency: "USD",
				currentPrice: 79.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/pello-armchair-holmby-natural__38296_pe130209_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",
			imageAlt: "PELLO Armchair, Holmby natural",
			url: "https://www.ikea.com/us/en/p/pello-armchair-holmby-natural-70078463/",
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
			id: "10203610",
			name: "MALM",
			price: {
				currency: "USD",
				currentPrice: 169.99,
				discounted: false,
			},
			measurement: '47 1/4x16 1/8 "',
			typeName: "Dressing table",
			image: "https://www.ikea.com/us/en/images/products/malm-dressing-table-white__0805994_pe769781_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/malm-dressing-table-white__1154625_pe886239_s5.jpg",
			imageAlt: 'MALM Dressing table, white, 47 1/4x16 1/8 "',
			url: "https://www.ikea.com/us/en/p/malm-dressing-table-white-10203610/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "70182191",
			name: "RISÖR",
			price: {
				currency: "USD",
				currentPrice: 199.99,
				discounted: false,
			},
			measurement: '85x72 7/8 "',
			typeName: "Room divider",
			image: "https://www.ikea.com/us/en/images/products/risoer-room-divider-white-black__0107404_pe257072_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/risoer-room-divider-white-black__0380704_pe555584_s5.jpg",
			imageAlt: 'RISÖR Room divider, white/black, 85x72 7/8 "',
			url: "https://www.ikea.com/us/en/p/risoer-room-divider-white-black-70182191/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Room dividers",
					key: "46080",
				},
			],
			variants: [],
		},
		{
			id: "s39304680",
			name: "VINLIDEN",
			price: {
				currency: "USD",
				currentPrice: 949,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-dark-gray__0852766_pe780245_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-dark-gray__0852767_pe780250_s5.jpg",
			imageAlt: "VINLIDEN Sofa with chaise, Hakebo dark gray",
			url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hakebo-dark-gray-s39304680/",
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
					name: "Sofas with chaise",
					key: "47388",
				},
			],
			variants: [
				{
					id: "s09555566",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 989,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-light-turquoise-birch__0992133_pe819823_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-light-turquoise-birch__0975401_pe812762_s5.jpg",
					imageAlt:
						"VINLIDEN Sofa with chaise, Hakebo/light turquoise birch",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hakebo-light-turquoise-birch-s09555566/",
				},
				{
					id: "s29555570",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 1039,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hillared-anthracite-birch__0992133_pe819823_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hillared-anthracite-birch__0929100_pe790139_s5.jpg",
					imageAlt:
						"VINLIDEN Sofa with chaise, Hillared/anthracite birch",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hillared-anthracite-birch-s29555570/",
				},
				{
					id: "s69304674",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 949,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-beige__0852763_pe780242_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-beige__0852764_pe780243_s5.jpg",
					imageAlt: "VINLIDEN Sofa with chaise, Hakebo beige",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hakebo-beige-s69304674/",
				},
				{
					id: "s79555558",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 989,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-beige-birch__0992133_pe819823_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-beige-birch__0929098_pe790140_s5.jpg",
					imageAlt: "VINLIDEN Sofa with chaise, Hakebo/beige birch",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hakebo-beige-birch-s79555558/",
				},
				{
					id: "s89304692",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hillared-anthracite__0852769_pe780248_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hillared-anthracite__0852770_pe780249_s5.jpg",
					imageAlt: "VINLIDEN Sofa with chaise, Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hillared-anthracite-s89304692/",
				},
				{
					id: "s09304686",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 949,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-light-turquoise__0938992_pe794370_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-with-chaise-hakebo-light-turquoise__0938993_pe794369_s5.jpg",
					imageAlt:
						"VINLIDEN Sofa with chaise, Hakebo light turquoise",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-with-chaise-hakebo-light-turquoise-s09304686/",
				},
			],
		},
		{
			id: "80550885",
			name: "GAMMALBYN",
			price: {
				currency: "USD",
				currentPrice: 699,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/gammalbyn-sofa-gray__0868926_pe781434_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/gammalbyn-sofa-gray__0868927_pe781435_s5.jpg",
			imageAlt: "GAMMALBYN Sofa, gray",
			url: "https://www.ikea.com/us/en/p/gammalbyn-sofa-gray-80550885/",
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
			variants: [
				{
					id: "50556285",
					name: "GAMMALBYN",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/gammalbyn-sofa-beige__0868906_pe781416_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/gammalbyn-sofa-beige__0868907_pe781417_s5.jpg",
					imageAlt: "GAMMALBYN Sofa, beige",
					url: "https://www.ikea.com/us/en/p/gammalbyn-sofa-beige-50556285/",
				},
				{
					id: "10550884",
					name: "GAMMALBYN",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/gammalbyn-sofa-blue__0868912_pe781422_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/gammalbyn-sofa-blue__0891063_pe782234_s5.jpg",
					imageAlt: "GAMMALBYN Sofa, blue",
					url: "https://www.ikea.com/us/en/p/gammalbyn-sofa-blue-10550884/",
				},
				{
					id: "60550886",
					name: "GAMMALBYN",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/gammalbyn-sofa-red__0868918_pe781428_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/gammalbyn-sofa-red__0868919_pe781429_s5.jpg",
					imageAlt: "GAMMALBYN Sofa, red",
					url: "https://www.ikea.com/us/en/p/gammalbyn-sofa-red-60550886/",
				},
			],
		},
		{
			id: "10233532",
			name: "NOLMYRA",
			price: {
				currency: "USD",
				currentPrice: 54.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/nolmyra-chair-birch-veneer-gray__0152020_pe310348_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/nolmyra-chair-birch-veneer-gray__1096307_ph161211_s5.jpg",
			imageAlt: "NOLMYRA Chair, birch veneer/gray",
			url: "https://www.ikea.com/us/en/p/nolmyra-chair-birch-veneer-gray-10233532/",
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
			id: "s19319060",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1149,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/finnala-sofa-gunnared-beige__0514366_pe639439_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sofa-gunnared-beige__0787232_pe763195_s5.jpg",
			imageAlt: "FINNALA Sofa, Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sofa-gunnared-beige-s19319060/",
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
			variants: [
				{
					id: "s89319066",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-tallmyra-beige__0570251_pe666203_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-tallmyra-beige__0787235_pe763198_s5.jpg",
					imageAlt: "FINNALA Sofa, Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-tallmyra-beige-s89319066/",
				},
				{
					id: "s39319064",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-orrsta-black-blue__0514486_pe639504_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-orrsta-black-blue__0787231_pe763194_s5.jpg",
					imageAlt: "FINNALA Sofa, Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-orrsta-black-blue-s39319064/",
				},
				{
					id: "s49319068",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-tallmyra-black-gray__0570232_pe666195_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-tallmyra-black-gray__0787236_pe763192_s5.jpg",
					imageAlt: "FINNALA Sofa, Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-tallmyra-black-gray-s49319068/",
				},
				{
					id: "s79319062",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-gunnared-medium-gray__0514368_pe639441_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-gunnared-medium-gray__0787233_pe763196_s5.jpg",
					imageAlt: "FINNALA Sofa, Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-gunnared-medium-gray-s79319062/",
				},
				{
					id: "s69319406",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-dalstorp-multicolor__0725527_pe734920_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-dalstorp-multicolor__0725581_pe734959_s5.jpg",
					imageAlt: "FINNALA Sofa, Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-dalstorp-multicolor-s69319406/",
				},
			],
		},
		{
			id: "s99240770",
			name: "HOLMSUND",
			price: {
				currency: "USD",
				currentPrice: 1149,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-nordvalla-beige__0727984_pe735988_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-nordvalla-beige__0869003_pe600199_s5.jpg",
			imageAlt: "HOLMSUND Sleeper sofa, Nordvalla beige",
			url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sofa-nordvalla-beige-s99240770/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [
				{
					id: "s09240760",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-orrsta-light-blue__0727986_pe735990_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-orrsta-light-blue__0828705_pe647445_s5.jpg",
					imageAlt: "HOLMSUND Sleeper sofa, Orrsta light blue",
					url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sofa-orrsta-light-blue-s09240760/",
				},
				{
					id: "s89240775",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-nordvalla-medium-gray__0727985_pe735989_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-nordvalla-medium-gray__0834611_pe600340_s5.jpg",
					imageAlt: "HOLMSUND Sleeper sofa, Nordvalla medium gray",
					url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sofa-nordvalla-medium-gray-s89240775/",
				},
				{
					id: "s99240765",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-orrsta-light-white-gray__0727987_pe735991_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-sleeper-sofa-orrsta-light-white-gray__0830014_pe647663_s5.jpg",
					imageAlt: "HOLMSUND Sleeper sofa, Orrsta light white-gray",
					url: "https://www.ikea.com/us/en/p/holmsund-sleeper-sofa-orrsta-light-white-gray-s99240765/",
				},
			],
		},
		{
			id: "70407303",
			name: "BJÖRKSNÄS",
			price: {
				currency: "USD",
				currentPrice: 274.99,
				discounted: true,
			},
			measurement: '35 3/8x35 3/8 "',
			typeName: "5-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/bjoerksnaes-5-drawer-chest-birch__0598056_pe677425_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bjoerksnaes-5-drawer-chest-birch__0857331_pe677428_s5.jpg",
			imageAlt: 'BJÖRKSNÄS 5-drawer chest, birch, 35 3/8x35 3/8 "',
			url: "https://www.ikea.com/us/en/p/bjoerksnaes-5-drawer-chest-birch-70407303/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [
				{
					id: "50492038",
					name: "BJÖRKSNÄS",
					price: {
						currency: "USD",
						currentPrice: 274.99,
						discounted: true,
					},
					measurement: '35 3/8x35 3/8 "',
					typeName: "5-drawer chest",
					image: "https://www.ikea.com/us/en/images/products/bjoerksnaes-5-drawer-chest-black__0598052_pe677429_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bjoerksnaes-5-drawer-chest-black__0858420_pe677424_s5.jpg",
					imageAlt:
						'BJÖRKSNÄS 5-drawer chest, black, 35 3/8x35 3/8 "',
					url: "https://www.ikea.com/us/en/p/bjoerksnaes-5-drawer-chest-black-50492038/",
				},
			],
		},
		{
			id: "50293722",
			name: "LOTE",
			price: {
				currency: "USD",
				currentPrice: 34.99,
				discounted: false,
			},
			measurement: '21 5/8x24 3/8 "',
			typeName: "3-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/lote-3-drawer-chest-white__0651173_pe706785_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lote-3-drawer-chest-white__0365728_pe549520_s5.jpg",
			imageAlt: 'LOTE 3-drawer chest, white, 21 5/8x24 3/8 "',
			url: "https://www.ikea.com/us/en/p/lote-3-drawer-chest-white-50293722/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "s59305834",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 1349,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-viarp-beige-brown__0802732_pe768568_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-viarp-beige-brown__0802731_pe768570_s5.jpg",
			imageAlt:
				"SÖDERHAMN Sectional, 4-seat, with chaise/Viarp beige/brown",
			url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-viarp-beige-brown-s59305834/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s49449710",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1249,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-fridtuna-light-beige__1110843_pe870605_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-fridtuna-light-beige__1111000_pe870631_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, Fridtuna light beige",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-fridtuna-light-beige-s49449710/",
				},
				{
					id: "s59449615",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1249,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-fridtuna-dark-gray__1057801_pe848983_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-fridtuna-dark-gray__1057800_pe848984_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, Fridtuna dark gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-fridtuna-dark-gray-s59449615/",
				},
				{
					id: "s69452117",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-tonerud-gray__1057846_pe849023_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-tonerud-gray__1057845_pe849024_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-tonerud-gray-s69452117/",
				},
			],
		},
		{
			id: "s69320320",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 2299,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 5-seat corner",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-inseros-white__0577216_pe668695_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-inseros-white__0778891_pe759156_s5.jpg",
			imageAlt: "HÄRLANDA Sectional, 5-seat corner, Inseros white",
			url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-inseros-white-s69320320/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s39320331",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-sporda-natural__0577296_pe668757_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-sporda-natural__0778897_pe759158_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-sporda-natural-s39320331/",
				},
				{
					id: "s19320327",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-ljungen-medium-gray__0577274_pe668738_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-ljungen-medium-gray__0778895_pe759163_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, Ljungen medium gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-ljungen-medium-gray-s19320327/",
				},
				{
					id: "s29320322",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-ljungen-light-red__0852482_pe780102_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-ljungen-light-red__0852483_pe780105_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-ljungen-light-red-s29320322/",
				},
				{
					id: "s79320329",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-sporda-dark-gray__0577285_pe668746_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-sporda-dark-gray__0778896_pe759157_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-sporda-dark-gray-s79320329/",
				},
				{
					id: "s89320324",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-ljungen-light-green__0577260_pe668720_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-ljungen-light-green__0778894_pe759162_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-ljungen-light-green-s89320324/",
				},
			],
		},
		{
			id: "20498904",
			name: "LACK",
			price: {
				currency: "USD",
				currentPrice: 59.99,
				discounted: true,
			},
			measurement: '63x13 3/4x14 1/8 "',
			typeName: "TV unit",
			image: "https://www.ikea.com/us/en/images/products/lack-tv-unit-black-brown__0955264_pe803706_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lack-tv-unit-black-brown__0955265_pe803705_s5.jpg",
			imageAlt: 'LACK TV unit, black-brown, 63x13 3/4x14 1/8 "',
			url: "https://www.ikea.com/us/en/p/lack-tv-unit-black-brown-20498904/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "TV & media furniture",
					key: "10475",
				},
				{
					name: "TV stands & benches",
					key: "10810",
				},
			],
			variants: [],
		},
		{
			id: "80438356",
			name: "VINLIDEN",
			price: {
				currency: "USD",
				currentPrice: 120,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa",
			image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hakebo-dark-gray__0852787_pe780253_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hakebo-dark-gray__0852747_pe780236_s5.jpg",
			imageAlt: "VINLIDEN Cover for sofa, Hakebo dark gray",
			url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-hakebo-dark-gray-80438356/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "VINLIDEN covers",
					key: "47443",
				},
			],
			variants: [
				{
					id: "70443768",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 120,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hakebo-beige__0852786_pe780251_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hakebo-beige__0852744_pe780233_s5.jpg",
					imageAlt: "VINLIDEN Cover for sofa, Hakebo beige",
					url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-hakebo-beige-70443768/",
				},
				{
					id: "10455387",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 170,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hillared-anthracite__0515777_pe640035_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hillared-anthracite__0852750_pe780239_s5.jpg",
					imageAlt: "VINLIDEN Cover for sofa, Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-hillared-anthracite-10455387/",
				},
				{
					id: "90443748",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 120,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hakebo-light-turquoise__0970904_pe811165_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-cover-for-sofa-hakebo-light-turquoise__0938990_pe794368_s5.jpg",
					imageAlt: "VINLIDEN Cover for sofa, Hakebo light turquoise",
					url: "https://www.ikea.com/us/en/p/vinliden-cover-for-sofa-hakebo-light-turquoise-90443748/",
				},
			],
		},
		{
			id: "s59336109",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1184,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-gunnared-medium-gray__0579287_pe675175_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-gunnared-medium-gray__0826642_pe675153_s5.jpg",
			imageAlt: "FINNALA Sofa, with headrest/Gunnared medium gray",
			url: "https://www.ikea.com/us/en/p/finnala-sofa-with-headrest-gunnared-medium-gray-s59336109/",
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
			variants: [
				{
					id: "s79336113",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1234,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-tallmyra-beige__0579280_pe675176_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-tallmyra-beige__0826759_pe675146_s5.jpg",
					imageAlt: "FINNALA Sofa, with headrest/Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-headrest-tallmyra-beige-s79336113/",
				},
				{
					id: "s99336107",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1184,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-gunnared-beige__0579282_pe675178_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-gunnared-beige__0830426_pe675168_s5.jpg",
					imageAlt: "FINNALA Sofa, with headrest/Gunnared beige",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-headrest-gunnared-beige-s99336107/",
				},
				{
					id: "s19336111",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1184,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-orrsta-black-blue__0579284_pe675179_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-orrsta-black-blue__0826754_pe675156_s5.jpg",
					imageAlt: "FINNALA Sofa, with headrest/Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-headrest-orrsta-black-blue-s19336111/",
				},
				{
					id: "s29336115",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1234,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-tallmyra-black-gray__0579281_pe675177_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-tallmyra-black-gray__0826646_pe675147_s5.jpg",
					imageAlt: "FINNALA Sofa, with headrest/Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-headrest-tallmyra-black-gray-s29336115/",
				},
				{
					id: "s39336105",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1134,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-dalstorp-multicolor__0725525_pe734916_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-headrest-dalstorp-multicolor__0725579_pe734960_s5.jpg",
					imageAlt: "FINNALA Sofa, with headrest/Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-headrest-dalstorp-multicolor-s39336105/",
				},
			],
		},
		{
			id: "s29488627",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 1149,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-karlshov-gray-beige__1194855_pe902105_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-karlshov-gray-beige__1194854_pe902104_s5.jpg",
			imageAlt: "UPPLAND Sofa with chaise, Karlshov gray-beige",
			url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-karlshov-gray-beige-s29488627/",
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
			variants: [
				{
					id: "s59322386",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-hallarp-beige__0818581_pe774503_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-hallarp-beige__0818580_pe774502_s5.jpg",
					imageAlt: "UPPLAND Sofa with chaise, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-hallarp-beige-s59322386/",
				},
				{
					id: "s89337683",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-totebo-light-beige__0818587_pe774509_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-totebo-light-beige__0818586_pe774508_s5.jpg",
					imageAlt: "UPPLAND Sofa with chaise, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-totebo-light-beige-s89337683/",
				},
				{
					id: "s09322384",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-hallarp-gray__0818579_pe774501_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-hallarp-gray__0818578_pe774500_s5.jpg",
					imageAlt: "UPPLAND Sofa with chaise, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-hallarp-gray-s09322384/",
				},
				{
					id: "s39322392",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-totebo-dark-turquoise__0818585_pe774507_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-totebo-dark-turquoise__0818584_pe774506_s5.jpg",
					imageAlt: "UPPLAND Sofa with chaise, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-totebo-dark-turquoise-s39322392/",
				},
				{
					id: "s79384118",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-blekinge-white__0818577_pe774499_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-blekinge-white__0818576_pe774498_s5.jpg",
					imageAlt: "UPPLAND Sofa with chaise, Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-blekinge-white-s79384118/",
				},
				{
					id: "s69324912",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-virestad-red-white__0818589_pe774504_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-sofa-with-chaise-virestad-red-white__0818588_pe774510_s5.jpg",
					imageAlt: "UPPLAND Sofa with chaise, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-sofa-with-chaise-virestad-red-white-s69324912/",
				},
			],
		},
		{
			id: "20275814",
			name: "KALLAX",
			price: {
				currency: "USD",
				currentPrice: 59.99,
				discounted: false,
			},
			measurement: '30 3/8x30 3/8 "',
			typeName: "Shelf unit",
			image: "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white__0644753_pe702937_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white__1113779_pe871547_s5.jpg",
			imageAlt: 'KALLAX Shelf unit, white, 30 3/8x30 3/8 "',
			url: "https://www.ikea.com/us/en/p/kallax-shelf-unit-white-20275814/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Shelving units, bookcases & storage options",
					key: "st002",
				},
				{
					name: "Shelf units & cube storage",
					key: "11465",
				},
			],
			variants: [],
		},
		{
			id: "s29228470",
			name: "TROFAST",
			price: {
				currency: "USD",
				currentPrice: 84.79,
				discounted: true,
			},
			measurement: '39x17 3/8x22 "',
			typeName: "Storage combination with boxes",
			image: "https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0535760_pe649618_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0876190_pe649619_s5.jpg",
			imageAlt:
				'TROFAST Storage combination with boxes, white/white, 39x17 3/8x22 "',
			url: "https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-s29228470/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Nursery Furniture",
					key: "45780",
				},
				{
					name: "Toy storage",
					key: "20474",
				},
			],
			variants: [],
		},
		{
			id: "70486499",
			name: "TARVA",
			price: {
				currency: "USD",
				currentPrice: 107.99,
				discounted: true,
			},
			measurement: '29 7/8x36 1/4 "',
			typeName: "3-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/tarva-3-drawer-chest-pine__0540373_pe652931_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/tarva-3-drawer-chest-pine__0540375_pe652929_s5.jpg",
			imageAlt: 'TARVA 3-drawer chest, pine, 29 7/8x36 1/4 "',
			url: "https://www.ikea.com/us/en/p/tarva-3-drawer-chest-pine-70486499/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "80217524",
			name: "BJURSTA",
			price: {
				currency: "USD",
				currentPrice: 59.99,
				discounted: false,
			},
			measurement: '35 3/8x19 5/8 "',
			typeName: "Wall-mounted drop-leaf table",
			image: "https://www.ikea.com/us/en/images/products/bjursta-wall-mounted-drop-leaf-table-brown-black__0736621_pe740672_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bjursta-wall-mounted-drop-leaf-table-brown-black__0871184_pe614162_s5.jpg",
			imageAlt:
				'BJURSTA Wall-mounted drop-leaf table, brown-black, 35 3/8x19 5/8 "',
			url: "https://www.ikea.com/us/en/p/bjursta-wall-mounted-drop-leaf-table-brown-black-80217524/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Dining tables",
					key: "21825",
				},
				{
					name: "Wall-mounted tables",
					key: "25206",
				},
			],
			variants: [],
		},
		{
			id: "s09318339",
			name: "MORABO",
			price: {
				currency: "USD",
				currentPrice: 799,
				discounted: true,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-wood__0602122_pe680191_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-wood__0815942_pe773129_s5.jpg",
			imageAlt: "MORABO Sofa, Gunnared light green/wood",
			url: "https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-wood-s09318339/",
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
			variants: [
				{
					id: "s19416508",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-wood__0990602_pe819086_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-wood__0990603_pe819087_s5.jpg",
					imageAlt: "MORABO Sofa, Djuparp dark blue/wood",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-djuparp-dark-blue-wood-s19416508/",
				},
				{
					id: "s39416507",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-metal__0990600_pe819084_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-djuparp-dark-blue-metal__0990601_pe819085_s5.jpg",
					imageAlt: "MORABO Sofa, Djuparp dark blue/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-djuparp-dark-blue-metal-s39416507/",
				},
				{
					id: "s09318320",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-metal__0602115_pe680184_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-metal__0815939_pe773126_s5.jpg",
					imageAlt: "MORABO Sofa, Gunnared dark gray/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-gunnared-dark-gray-metal-s09318320/",
				},
				{
					id: "s29318338",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-metal__0602120_pe680189_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-light-green-metal__0815941_pe773128_s5.jpg",
					imageAlt: "MORABO Sofa, Gunnared light green/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-gunnared-light-green-metal-s29318338/",
				},
				{
					id: "s89318321",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0602117_pe680186_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-wood__0815940_pe773127_s5.jpg",
					imageAlt: "MORABO Sofa, Gunnared dark gray/wood",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-gunnared-dark-gray-wood-s89318321/",
				},
			],
		},
		{
			id: "s69299012",
			name: "BUSKBO",
			price: {
				currency: "USD",
				currentPrice: 279,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/buskbo-armchair-rattan-djupvik-white__0700959_pe723853_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/buskbo-armchair-rattan-djupvik-white__0822799_ph167442_s5.jpg",
			imageAlt: "BUSKBO Armchair, rattan/Djupvik white",
			url: "https://www.ikea.com/us/en/p/buskbo-armchair-rattan-djupvik-white-s69299012/",
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
					name: "Rattan armchairs",
					key: "20907",
				},
			],
			variants: [],
		},
		{
			id: "10135659",
			name: "MARIUS",
			price: {
				currency: "USD",
				currentPrice: 4.99,
				discounted: false,
			},
			measurement: '17 3/4 "',
			typeName: "Stool",
			image: "https://www.ikea.com/us/en/images/products/marius-stool-black__0727386_pe735638_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/marius-stool-black__0871991_pe595901_s5.jpg",
			imageAlt: 'MARIUS Stool, black, 17 3/4 "',
			url: "https://www.ikea.com/us/en/p/marius-stool-black-10135659/",
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
					name: "Stools",
					key: "22659",
				},
			],
			variants: [],
		},
		{
			id: "00407306",
			name: "HAUGA",
			price: {
				currency: "USD",
				currentPrice: 199.99,
				discounted: true,
			},
			measurement: '54 3/8x33 1/8 "',
			typeName: "6-drawer dresser",
			image: "https://www.ikea.com/us/en/images/products/hauga-6-drawer-dresser-white__0898785_pe782651_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/hauga-6-drawer-dresser-white__0931926_pe791316_s5.jpg",
			imageAlt: 'HAUGA 6-drawer dresser, white, 54 3/8x33 1/8 "',
			url: "https://www.ikea.com/us/en/p/hauga-6-drawer-dresser-white-00407306/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "s79387027",
			name: "LYCKSELE LÖVÅS",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-ransta-natural__0949712_pe799986_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-ransta-natural__0949714_pe799974_s5.jpg",
			imageAlt: "LYCKSELE LÖVÅS Sleeper sofa, Ransta natural",
			url: "https://www.ikea.com/us/en/p/lycksele-loevas-sleeper-sofa-ransta-natural-s79387027/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [
				{
					id: "s29387039",
					name: "LYCKSELE LÖVÅS",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-knisa-light-gray__0949707_pe799982_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-knisa-light-gray__0949708_pe799965_s5.jpg",
					imageAlt: "LYCKSELE LÖVÅS Sleeper sofa, Knisa light gray",
					url: "https://www.ikea.com/us/en/p/lycksele-loevas-sleeper-sofa-knisa-light-gray-s29387039/",
				},
				{
					id: "s69387122",
					name: "LYCKSELE LÖVÅS",
					price: {
						currency: "USD",
						currentPrice: 549,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-vansbro-dark-gray__0949727_pe799964_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-vansbro-dark-gray__0949728_pe799968_s5.jpg",
					imageAlt: "LYCKSELE LÖVÅS Sleeper sofa, Vansbro dark gray",
					url: "https://www.ikea.com/us/en/p/lycksele-loevas-sleeper-sofa-vansbro-dark-gray-s69387122/",
				},
				{
					id: "s29387124",
					name: "LYCKSELE LÖVÅS",
					price: {
						currency: "USD",
						currentPrice: 549,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-vansbro-bright-green__0949722_pe799973_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-vansbro-bright-green__0949723_pe799976_s5.jpg",
					imageAlt:
						"LYCKSELE LÖVÅS Sleeper sofa, Vansbro bright green",
					url: "https://www.ikea.com/us/en/p/lycksele-loevas-sleeper-sofa-vansbro-bright-green-s29387124/",
				},
				{
					id: "s19387148",
					name: "LYCKSELE LÖVÅS",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-tutstad-multicolor__0949717_pe799967_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/lycksele-loevas-sleeper-sofa-tutstad-multicolor__0949718_pe799963_s5.jpg",
					imageAlt: "LYCKSELE LÖVÅS Sleeper sofa, Tutstad multicolor",
					url: "https://www.ikea.com/us/en/p/lycksele-loevas-sleeper-sofa-tutstad-multicolor-s19387148/",
				},
			],
		},
		{
			id: "80525914",
			name: "PERSBOL",
			price: {
				currency: "USD",
				currentPrice: 199.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/persbol-armchair-black-tibbleby-beige-gray__1123955_pe874932_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/persbol-armchair-black-tibbleby-beige-gray__1174418_ph184756_s5.jpg",
			imageAlt: "PERSBOL Armchair, black/Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/persbol-armchair-black-tibbleby-beige-gray-80525914/",
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
					name: "Wooden armchairs",
					key: "700303",
				},
			],
			variants: [
				{
					id: "20525926",
					name: "PERSBOL",
					price: {
						currency: "USD",
						currentPrice: 199.99,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/persbol-armchair-birch-tibbleby-beige-gray__1123949_pe874927_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/persbol-armchair-birch-tibbleby-beige-gray__1174413_ph184766_s5.jpg",
					imageAlt: "PERSBOL Armchair, birch/Tibbleby beige/gray",
					url: "https://www.ikea.com/us/en/p/persbol-armchair-birch-tibbleby-beige-gray-20525926/",
				},
				{
					id: "40525925",
					name: "PERSBOL",
					price: {
						currency: "USD",
						currentPrice: 199.99,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/persbol-armchair-brown-red-tibbleby-beige-gray__1123961_pe874937_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/persbol-armchair-brown-red-tibbleby-beige-gray__1174422_ph184765_s5.jpg",
					imageAlt: "PERSBOL Armchair, brown-red/Tibbleby beige/gray",
					url: "https://www.ikea.com/us/en/p/persbol-armchair-brown-red-tibbleby-beige-gray-40525925/",
				},
			],
		},
		{
			id: "20483262",
			name: "VIHALS",
			price: {
				currency: "USD",
				currentPrice: 179,
				discounted: false,
			},
			measurement: '37 3/8x18 1/2x35 3/8 "',
			typeName: "Cabinet with sliding doors",
			image: "https://www.ikea.com/us/en/images/products/vihals-cabinet-with-sliding-doors-white__1035574_pe838109_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vihals-cabinet-with-sliding-doors-white__1048725_pe843880_s5.jpg",
			imageAlt:
				'VIHALS Cabinet with sliding doors, white, 37 3/8x18 1/2x35 3/8 "',
			url: "https://www.ikea.com/us/en/p/vihals-cabinet-with-sliding-doors-white-20483262/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Display & storage cabinets",
					key: "st003",
				},
				{
					name: "Dining room cabinets & cupboards",
					key: "10409",
				},
			],
			variants: [],
		},
		{
			id: "s19490107",
			name: "JÄTTEBO",
			price: {
				currency: "USD",
				currentPrice: 1720,
				discounted: false,
			},
			measurement: "",
			typeName: "2.5-seat mod sofa w chaise",
			image: "https://www.ikea.com/us/en/images/products/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-samsala-dark-yellow-green__1172569_pe893363_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-samsala-dark-yellow-green__1139912_pe880563_s5.jpg",
			imageAlt:
				"JÄTTEBO 2.5-seat mod sofa w chaise, left with headrest/Samsala dark yellow-green",
			url: "https://www.ikea.com/us/en/p/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-samsala-dark-yellow-green-s19490107/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s99490108",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 1720,
						discounted: false,
					},
					measurement: "",
					typeName: "2.5-seat mod sofa w chaise",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-samsala-gray-beige__1172570_pe893365_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-samsala-gray-beige__1139910_pe880562_s5.jpg",
					imageAlt:
						"JÄTTEBO 2.5-seat mod sofa w chaise, left with headrest/Samsala gray-beige",
					url: "https://www.ikea.com/us/en/p/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-samsala-gray-beige-s99490108/",
				},
				{
					id: "s89490095",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 1635,
						discounted: false,
					},
					measurement: "",
					typeName: "2.5-seat mod sofa w chaise",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-tonerud-gray__1172571_pe893364_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-tonerud-gray__1139914_pe880564_s5.jpg",
					imageAlt:
						"JÄTTEBO 2.5-seat mod sofa w chaise, left with headrest/Tonerud gray",
					url: "https://www.ikea.com/us/en/p/jaettebo-2-5-seat-mod-sofa-w-chaise-left-with-headrest-tonerud-gray-s89490095/",
				},
			],
		},
		{
			id: "s39502048",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 269,
				discounted: false,
			},
			measurement: "",
			typeName: "Rocking chair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-beige__1192268_pe900998_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-beige__1192267_pe900977_s5.jpg",
			imageAlt: "POÄNG Rocking chair, brown/Gunnared beige",
			url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-brown-gunnared-beige-s39502048/",
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
			variants: [
				{
					id: "s79502211",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 269,
						discounted: false,
					},
					measurement: "",
					typeName: "Rocking chair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-blue__1192295_pe901006_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-blue__1192294_pe900995_s5.jpg",
					imageAlt: "POÄNG Rocking chair, brown/Gunnared blue",
					url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-brown-gunnared-blue-s79502211/",
				},
				{
					id: "s59502127",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 269,
						discounted: false,
					},
					measurement: "",
					typeName: "Rocking chair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-dark-gray__1192283_pe900988_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-dark-gray__1192282_pe901002_s5.jpg",
					imageAlt: "POÄNG Rocking chair, brown/Gunnared dark gray",
					url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-brown-gunnared-dark-gray-s59502127/",
				},
				{
					id: "s39501968",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 269,
						discounted: false,
					},
					measurement: "",
					typeName: "Rocking chair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-light-green__1192298_pe901008_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-brown-gunnared-light-green__1192297_pe900997_s5.jpg",
					imageAlt: "POÄNG Rocking chair, brown/Gunnared light green",
					url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-brown-gunnared-light-green-s39501968/",
				},
			],
		},
		{
			id: "s89272714",
			name: "TULLSTA",
			price: {
				currency: "USD",
				currentPrice: 269,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/tullsta-armchair-lofallet-beige__0602718_pe680490_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/tullsta-armchair-lofallet-beige__0869044_pe680489_s5.jpg",
			imageAlt: "TULLSTA Armchair, Lofallet beige",
			url: "https://www.ikea.com/us/en/p/tullsta-armchair-lofallet-beige-s89272714/",
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
			variants: [
				{
					id: "s69284666",
					name: "TULLSTA",
					price: {
						currency: "USD",
						currentPrice: 299,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/tullsta-armchair-nordvalla-medium-gray__0386142_pe559174_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/tullsta-armchair-nordvalla-medium-gray__0837583_pe601029_s5.jpg",
					imageAlt: "TULLSTA Armchair, Nordvalla medium gray",
					url: "https://www.ikea.com/us/en/p/tullsta-armchair-nordvalla-medium-gray-s69284666/",
				},
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
				},
			],
		},
		{
			id: "30514791",
			name: "LACK",
			price: {
				currency: "USD",
				currentPrice: 9.99,
				discounted: false,
			},
			measurement: '13 3/4x13 3/4 "',
			typeName: "Side table",
			image: "https://www.ikea.com/us/en/images/products/lack-side-table-white__1057250_pe848800_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lack-side-table-white__1063541_ph182201_s5.jpg",
			imageAlt: 'LACK Side table, white, 13 3/4x13 3/4 "',
			url: "https://www.ikea.com/us/en/p/lack-side-table-white-30514791/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "60322130",
			name: "KULLEN",
			price: {
				currency: "USD",
				currentPrice: 49.99,
				discounted: false,
			},
			measurement: '13 3/4x19 1/4 "',
			typeName: "2-drawer chest",
			image: "https://www.ikea.com/us/en/images/products/kullen-2-drawer-chest-black-brown__0651177_pe706789_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kullen-2-drawer-chest-black-brown__0778036_pe758812_s5.jpg",
			imageAlt: 'KULLEN 2-drawer chest, black-brown, 13 3/4x19 1/4 "',
			url: "https://www.ikea.com/us/en/p/kullen-2-drawer-chest-black-brown-60322130/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Dressers & storage drawers",
					key: "st004",
				},
				{
					name: "Dressers & chests of drawers",
					key: "10451",
				},
			],
			variants: [],
		},
		{
			id: "10469493",
			name: "SMUSSLA",
			price: {
				currency: "USD",
				currentPrice: 39.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Bedside table/shelf unit",
			image: "https://www.ikea.com/us/en/images/products/smussla-bedside-table-shelf-unit-white__0931281_pe791191_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/smussla-bedside-table-shelf-unit-white__0931700_pe791204_s5.jpg",
			imageAlt: "SMUSSLA Bedside table/shelf unit, white",
			url: "https://www.ikea.com/us/en/p/smussla-bedside-table-shelf-unit-white-10469493/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "20266701",
			name: "BOSNÄS",
			price: {
				currency: "USD",
				currentPrice: 27.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Ottoman with storage",
			image: "https://www.ikea.com/us/en/images/products/bosnaes-ottoman-with-storage-ransta-black__0241131_pe381202_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bosnaes-ottoman-with-storage-ransta-black__1040486_ph161633_s5.jpg",
			imageAlt: "BOSNÄS Ottoman with storage, Ransta black",
			url: "https://www.ikea.com/us/en/p/bosnaes-ottoman-with-storage-ransta-black-20266701/",
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
					name: "Ottomans",
					key: "20926",
				},
				{
					name: "Fabric ottomans",
					key: "20927",
				},
			],
			variants: [],
		},
		{
			id: "s99319099",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1599,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-beige__0514360_pe639436_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-beige__0778309_pe758882_s5.jpg",
			imageAlt: "FINNALA Sofa, with chaise/Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-gunnared-beige-s99319099/",
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
			variants: [
				{
					id: "s49319105",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-beige__0570252_pe666204_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-beige__0778312_pe758888_s5.jpg",
					imageAlt: "FINNALA Sofa, with chaise/Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-tallmyra-beige-s49319105/",
				},
				{
					id: "s99319103",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-orrsta-black-blue__0514246_pe639388_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-orrsta-black-blue__0778311_pe758885_s5.jpg",
					imageAlt: "FINNALA Sofa, with chaise/Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-orrsta-black-blue-s99319103/",
				},
				{
					id: "s09319107",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-black-gray__0570233_pe666196_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-tallmyra-black-gray__0778313_pe758886_s5.jpg",
					imageAlt: "FINNALA Sofa, with chaise/Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-tallmyra-black-gray-s09319107/",
				},
				{
					id: "s39319101",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-medium-gray__0514362_pe639437_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-gunnared-medium-gray__0778310_pe758883_s5.jpg",
					imageAlt: "FINNALA Sofa, with chaise/Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-gunnared-medium-gray-s39319101/",
				},
				{
					id: "s09319428",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1549,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-dalstorp-multicolor__0725530_pe734922_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-dalstorp-multicolor__0725581_pe734959_s5.jpg",
					imageAlt: "FINNALA Sofa, with chaise/Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-dalstorp-multicolor-s09319428/",
				},
			],
		},
		{
			id: "s29393200",
			name: "BACKSÄLEN",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "",
			typeName: "1.5-seat armchair",
			image: "https://www.ikea.com/us/en/images/products/backsaelen-1-5-seat-armchair-blekinge-white__0951637_pe801292_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/backsaelen-1-5-seat-armchair-blekinge-white__0952118_pe801552_s5.jpg",
			imageAlt: "BACKSÄLEN 1.5-seat armchair, Blekinge white",
			url: "https://www.ikea.com/us/en/p/backsaelen-1-5-seat-armchair-blekinge-white-s29393200/",
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
			variants: [
				{
					id: "s99393211",
					name: "BACKSÄLEN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "1.5-seat armchair",
					image: "https://www.ikea.com/us/en/images/products/backsaelen-1-5-seat-armchair-katorp-natural__0951640_pe801295_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/backsaelen-1-5-seat-armchair-katorp-natural__0987365_pe817507_s5.jpg",
					imageAlt: "BACKSÄLEN 1.5-seat armchair, Katorp natural",
					url: "https://www.ikea.com/us/en/p/backsaelen-1-5-seat-armchair-katorp-natural-s99393211/",
				},
				{
					id: "s99393206",
					name: "BACKSÄLEN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "1.5-seat armchair",
					image: "https://www.ikea.com/us/en/images/products/backsaelen-1-5-seat-armchair-hallarp-gray__0951643_pe801298_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/backsaelen-1-5-seat-armchair-hallarp-gray__0951644_pe801299_s5.jpg",
					imageAlt: "BACKSÄLEN 1.5-seat armchair, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/backsaelen-1-5-seat-armchair-hallarp-gray-s99393206/",
				},
			],
		},
		{
			id: "s39278290",
			name: "KALLAX",
			price: {
				currency: "USD",
				currentPrice: 124.99,
				discounted: false,
			},
			measurement: '16 1/2x57 7/8 "',
			typeName: "Shelf unit with 2 inserts",
			image: "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-2-inserts-black-brown__0754390_pe747901_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-2-inserts-black-brown__0754391_pe747904_s5.jpg",
			imageAlt:
				'KALLAX Shelf unit with 2 inserts, black-brown, 16 1/2x57 7/8 "',
			url: "https://www.ikea.com/us/en/p/kallax-shelf-unit-with-2-inserts-black-brown-s39278290/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Shelving units, bookcases & storage options",
					key: "st002",
				},
				{
					name: "Shelf units & cube storage",
					key: "11465",
				},
			],
			variants: [],
		},
		{
			id: "s59482964",
			name: "EKEDALEN / EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 549,
				discounted: false,
			},
			measurement: '31 1/2/47 1/4 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-table-and-4-chairs-white-white-orrsta-light-gray__1111893_pe871008_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-table-and-4-chairs-white-white-orrsta-light-gray__1095638_pe863980_s5.jpg",
			imageAlt:
				'EKEDALEN / EKEDALEN Table and 4 chairs, white white/Orrsta light gray, 31 1/2/47 1/4 "',
			url: "https://www.ikea.com/us/en/p/ekedalen-ekedalen-table-and-4-chairs-white-white-orrsta-light-gray-s59482964/",
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
			variants: [],
		},
		{
			id: "s09482848",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 1299,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-anthracite__1124126_pe875027_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-anthracite__1124124_pe875028_s5.jpg",
			imageAlt: "KIVIK Sofa with chaise, Tresund anthracite",
			url: "https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-tresund-anthracite-s09482848/",
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
			variants: [
				{
					id: "s29482847",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-light-beige__1124123_pe875030_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tresund-light-beige__1124121_pe875025_s5.jpg",
					imageAlt: "KIVIK Sofa with chaise, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-tresund-light-beige-s29482847/",
				},
				{
					id: "s79440586",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tibbleby-beige-gray__1056147_pe848280_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tibbleby-beige-gray__1056146_pe848281_s5.jpg",
					imageAlt: "KIVIK Sofa with chaise, Tibbleby beige/gray",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-tibbleby-beige-gray-s79440586/",
				},
				{
					id: "s49443058",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-kelinge-gray-turquoise__1055847_pe848125_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-kelinge-gray-turquoise__1055846_pe848126_s5.jpg",
					imageAlt: "KIVIK Sofa with chaise, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-kelinge-gray-turquoise-s49443058/",
				},
			],
		},
		{
			id: "s19389468",
			name: "PÄRUP",
			price: {
				currency: "USD",
				currentPrice: 499,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-gray__1041907_pe841187_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-gray__0985836_pe816822_s5.jpg",
			imageAlt: "PÄRUP Sofa, Vissle gray",
			url: "https://www.ikea.com/us/en/p/paerup-sofa-vissle-gray-s19389468/",
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
			variants: [
				{
					id: "s29389463",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-beige__1041904_pe841184_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-beige__0950178_pe800193_s5.jpg",
					imageAlt: "PÄRUP Sofa, Gunnared beige",
					url: "https://www.ikea.com/us/en/p/paerup-sofa-gunnared-beige-s29389463/",
				},
				{
					id: "s49389476",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-dark-gray__1041905_pe841185_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-sofa-gunnared-dark-gray__0950180_pe800199_s5.jpg",
					imageAlt: "PÄRUP Sofa, Gunnared dark gray",
					url: "https://www.ikea.com/us/en/p/paerup-sofa-gunnared-dark-gray-s49389476/",
				},
				{
					id: "s69389475",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-dark-green__1041906_pe841186_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-dark-green__0950182_pe800197_s5.jpg",
					imageAlt: "PÄRUP Sofa, Vissle dark green",
					url: "https://www.ikea.com/us/en/p/paerup-sofa-vissle-dark-green-s69389475/",
				},
			],
		},
		{
			id: "s49097350",
			name: "INGO / IVAR",
			price: {
				currency: "USD",
				currentPrice: 259.99,
				discounted: false,
			},
			measurement: '47 1/4 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/ingo-ivar-table-and-4-chairs-pine__0737943_pe741269_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ingo-ivar-table-and-4-chairs-pine__1054550_pe847742_s5.jpg",
			imageAlt: 'INGO / IVAR Table and 4 chairs, pine, 47 1/4 "',
			url: "https://www.ikea.com/us/en/p/ingo-ivar-table-and-4-chairs-pine-s49097350/",
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
			variants: [],
		},
		{
			id: "30469265",
			name: "OMTÄNKSAM",
			price: {
				currency: "USD",
				currentPrice: 429,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/omtaenksam-armchair-gunnared-dark-gray__0634104_pe696303_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/omtaenksam-armchair-gunnared-dark-gray__0811486_pe771657_s5.jpg",
			imageAlt: "OMTÄNKSAM Armchair, Gunnared dark gray",
			url: "https://www.ikea.com/us/en/p/omtaenksam-armchair-gunnared-dark-gray-30469265/",
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
			id: "s29297190",
			name: "EKOLSUND",
			price: {
				currency: "USD",
				currentPrice: 429,
				discounted: false,
			},
			measurement: "",
			typeName: "Recliner",
			image: "https://www.ikea.com/us/en/images/products/ekolsund-recliner-gunnared-dark-gray__0709891_pe727153_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekolsund-recliner-gunnared-dark-gray__0779001_ph163114_s5.jpg",
			imageAlt: "EKOLSUND Recliner, Gunnared dark gray",
			url: "https://www.ikea.com/us/en/p/ekolsund-recliner-gunnared-dark-gray-s29297190/",
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
			variants: [
				{
					id: "s89297187",
					name: "EKOLSUND",
					price: {
						currency: "USD",
						currentPrice: 429,
						discounted: false,
					},
					measurement: "",
					typeName: "Recliner",
					image: "https://www.ikea.com/us/en/images/products/ekolsund-recliner-gunnared-light-brown-pink__0709905_pe727164_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/ekolsund-recliner-gunnared-light-brown-pink__0709911_pe727169_s5.jpg",
					imageAlt: "EKOLSUND Recliner, Gunnared light brown-pink",
					url: "https://www.ikea.com/us/en/p/ekolsund-recliner-gunnared-light-brown-pink-s89297187/",
				},
			],
		},
		{
			id: "70337819",
			name: "GLADOM",
			price: {
				currency: "USD",
				currentPrice: 19.99,
				discounted: true,
			},
			measurement: '17 1/2x20 5/8 "',
			typeName: "Tray table",
			image: "https://www.ikea.com/us/en/images/products/gladom-tray-table-white__0470732_pe612912_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/gladom-tray-table-white__0836821_pe709866_s5.jpg",
			imageAlt: 'GLADOM Tray table, white, 17 1/2x20 5/8 "',
			url: "https://www.ikea.com/us/en/p/gladom-tray-table-white-70337819/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "Coffee tables",
					key: "10716",
				},
			],
			variants: [],
		},
		{
			id: "20498937",
			name: "LACK",
			price: {
				currency: "USD",
				currentPrice: 49.99,
				discounted: true,
			},
			measurement: '47 1/4x13 3/4x14 1/8 "',
			typeName: "TV unit",
			image: "https://www.ikea.com/us/en/images/products/lack-tv-unit-black-brown__0955258_pe803699_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lack-tv-unit-black-brown__0955259_pe803701_s5.jpg",
			imageAlt: 'LACK TV unit, black-brown, 47 1/4x13 3/4x14 1/8 "',
			url: "https://www.ikea.com/us/en/p/lack-tv-unit-black-brown-20498937/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "TV & media furniture",
					key: "10475",
				},
				{
					name: "TV stands & benches",
					key: "10810",
				},
			],
			variants: [],
		},
		{
			id: "s19429596",
			name: "TROTTEN",
			price: {
				currency: "USD",
				currentPrice: 369.99,
				discounted: false,
			},
			measurement: '63x31 1/2 "',
			typeName: "Desk sit/stand",
			image: "https://www.ikea.com/us/en/images/products/trotten-desk-sit-stand-beige-anthracite__1020760_pe831986_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trotten-desk-sit-stand-beige-anthracite__1192516_pe901125_s5.jpg",
			imageAlt: 'TROTTEN Desk sit/stand, beige/anthracite, 63x31 1/2 "',
			url: "https://www.ikea.com/us/en/p/trotten-desk-sit-stand-beige-anthracite-s19429596/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "s19389166",
			name: "PÄRUP",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/paerup-loveseat-vissle-gray__1041903_pe841183_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/paerup-loveseat-vissle-gray__0985836_pe816822_s5.jpg",
			imageAlt: "PÄRUP Loveseat, Vissle gray",
			url: "https://www.ikea.com/us/en/p/paerup-loveseat-vissle-gray-s19389166/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s29389175",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 549,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/paerup-loveseat-gunnared-beige__1041900_pe841180_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-loveseat-gunnared-beige__1206457_ph188320_s5.jpg",
					imageAlt: "PÄRUP Loveseat, Gunnared beige",
					url: "https://www.ikea.com/us/en/p/paerup-loveseat-gunnared-beige-s29389175/",
				},
				{
					id: "s59389169",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 549,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/paerup-loveseat-gunnared-dark-gray__1041901_pe841181_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-loveseat-gunnared-dark-gray__0950107_pe800227_s5.jpg",
					imageAlt: "PÄRUP Loveseat, Gunnared dark gray",
					url: "https://www.ikea.com/us/en/p/paerup-loveseat-gunnared-dark-gray-s59389169/",
				},
				{
					id: "s79389168",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 449,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/paerup-loveseat-vissle-dark-green__1041902_pe841182_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-loveseat-vissle-dark-green__0986556_pe817203_s5.jpg",
					imageAlt: "PÄRUP Loveseat, Vissle dark green",
					url: "https://www.ikea.com/us/en/p/paerup-loveseat-vissle-dark-green-s79389168/",
				},
			],
		},
		{
			id: "s39306373",
			name: "NYHAMN",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-knisa-gray-beige__0767330_pe754069_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-knisa-gray-beige__0767327_pe754068_s5.jpg",
			imageAlt:
				"NYHAMN Sleeper sofa, with foam mattress/Knisa gray/beige",
			url: "https://www.ikea.com/us/en/p/nyhamn-sleeper-sofa-with-foam-mattress-knisa-gray-beige-s39306373/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [
				{
					id: "s79499987",
					name: "NYHAMN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-naggen-beige__1155297_pe886539_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-naggen-beige__1155296_pe886538_s5.jpg",
					imageAlt:
						"NYHAMN Sleeper sofa, with foam mattress/Naggen beige",
					url: "https://www.ikea.com/us/en/p/nyhamn-sleeper-sofa-with-foam-mattress-naggen-beige-s79499987/",
				},
				{
					id: "s89499996",
					name: "NYHAMN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-skartofta-red-brown__1155302_pe886553_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-skartofta-red-brown__1155301_pe886542_s5.jpg",
					imageAlt:
						"NYHAMN Sleeper sofa, with foam mattress/Skartofta red/brown",
					url: "https://www.ikea.com/us/en/p/nyhamn-sleeper-sofa-with-foam-mattress-skartofta-red-brown-s89499996/",
				},
				{
					id: "s19499990",
					name: "NYHAMN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-naggen-dark-gray__1155307_pe886547_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-naggen-dark-gray__1155306_pe886546_s5.jpg",
					imageAlt:
						"NYHAMN Sleeper sofa, with foam mattress/Naggen dark gray",
					url: "https://www.ikea.com/us/en/p/nyhamn-sleeper-sofa-with-foam-mattress-naggen-dark-gray-s19499990/",
				},
				{
					id: "s29499980",
					name: "NYHAMN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-skartofta-black-light-grey__1155312_pe886552_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/nyhamn-sleeper-sofa-with-foam-mattress-skartofta-black-light-grey__1155311_pe886551_s5.jpg",
					imageAlt:
						"NYHAMN Sleeper sofa, with foam mattress/Skartofta black/light grey",
					url: "https://www.ikea.com/us/en/p/nyhamn-sleeper-sofa-with-foam-mattress-skartofta-black-light-grey-s29499980/",
				},
			],
		},
		{
			id: "s49320260",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 1099,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-inseros-white__0577220_pe668688_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sofa-inseros-white__0787533_pe763265_s5.jpg",
			imageAlt: "HÄRLANDA Sofa, Inseros white",
			url: "https://www.ikea.com/us/en/p/haerlanda-sofa-inseros-white-s49320260/",
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
			variants: [
				{
					id: "s39320270",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-sporda-natural__0577300_pe668755_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-sporda-natural__0787539_pe763276_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-sporda-natural-s39320270/",
				},
				{
					id: "s19320266",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-ljungen-medium-gray__0577278_pe668739_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-ljungen-medium-gray__0787537_pe763275_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, Ljungen medium gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-ljungen-medium-gray-s19320266/",
				},
				{
					id: "s79320268",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-sporda-dark-gray__0577289_pe668745_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-sporda-dark-gray__0787538_pe763262_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-sporda-dark-gray-s79320268/",
				},
				{
					id: "s69320264",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-ljungen-light-green__0577264_pe668724_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-ljungen-light-green__0787536_pe763263_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-ljungen-light-green-s69320264/",
				},
				{
					id: "s09320262",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-ljungen-light-red__0852558_pe780165_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-ljungen-light-red__0852559_pe780166_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-ljungen-light-red-s09320262/",
				},
			],
		},
		{
			id: "s69304792",
			name: "LANEBERG / EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 549.99,
				discounted: false,
			},
			measurement: '51 1/8/74 3/4x31 1/2 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/laneberg-ekedalen-table-and-4-chairs-white-white-light-gray__0754618_pe747985_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/laneberg-ekedalen-table-and-4-chairs-white-white-light-gray__0798298_pe767217_s5.jpg",
			imageAlt:
				'LANEBERG / EKEDALEN Table and 4 chairs, white/white light gray, 51 1/8/74 3/4x31 1/2 "',
			url: "https://www.ikea.com/us/en/p/laneberg-ekedalen-table-and-4-chairs-white-white-light-gray-s69304792/",
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
					id: "s39304779",
					name: "LANEBERG / EKEDALEN",
					price: {
						currency: "USD",
						currentPrice: 549,
						discounted: false,
					},
					measurement: '51 1/8/74 3/4x31 1/2 "',
					typeName: "Table and 4 chairs",
					image: "https://www.ikea.com/us/en/images/products/laneberg-ekedalen-table-and-4-chairs-brown-black-light-gray__0747786_pe744725_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/laneberg-ekedalen-table-and-4-chairs-brown-black-light-gray__0747789_pe744726_s5.jpg",
					imageAlt:
						'LANEBERG / EKEDALEN Table and 4 chairs, brown/black light gray, 51 1/8/74 3/4x31 1/2 "',
					url: "https://www.ikea.com/us/en/p/laneberg-ekedalen-table-and-4-chairs-brown-black-light-gray-s39304779/",
				},
				{
					id: "s79482958",
					name: "LANEBERG / EKEDALEN",
					price: {
						currency: "USD",
						currentPrice: 549,
						discounted: false,
					},
					measurement: '51 1/8/74 3/4x31 1/2 "',
					typeName: "Table and 4 chairs",
					image: "https://www.ikea.com/us/en/images/products/laneberg-ekedalen-table-and-4-chairs-brown-black-dark-brown-orrsta-light-gray__1097710_pe865094_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/laneberg-ekedalen-table-and-4-chairs-brown-black-dark-brown-orrsta-light-gray__1097709_pe865095_s5.jpg",
					imageAlt:
						'LANEBERG / EKEDALEN Table and 4 chairs, brown-black dark brown/Orrsta light gray, 51 1/8/74 3/4x31 1/2 "',
					url: "https://www.ikea.com/us/en/p/laneberg-ekedalen-table-and-4-chairs-brown-black-dark-brown-orrsta-light-gray-s79482958/",
				},
			],
		},
		{
			id: "s89329188",
			name: "BESTÅ",
			price: {
				currency: "USD",
				currentPrice: 260,
				discounted: true,
			},
			measurement: '70 7/8x16 1/2x18 7/8 "',
			typeName: "TV unit",
			image: "https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown-lappviken-stubbarp-black-brown-clear-glass__0342058_pe531686_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown-lappviken-stubbarp-black-brown-clear-glass__0844015_pe591540_s5.jpg",
			imageAlt:
				'BESTÅ TV unit, black-brown/Lappviken/Stubbarp black-brown clear glass, 70 7/8x16 1/2x18 7/8 "',
			url: "https://www.ikea.com/us/en/p/besta-tv-unit-black-brown-lappviken-stubbarp-black-brown-clear-glass-s89329188/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "TV & media furniture",
					key: "10475",
				},
				{
					name: "TV stands & benches",
					key: "10810",
				},
			],
			variants: [],
		},
		{
			id: "s79502065",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 219,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-dark-gray__1192235_pe900961_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-dark-gray__1192234_pe900960_s5.jpg",
			imageAlt: "POÄNG Armchair, black-brown/Gunnared dark gray",
			url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-gunnared-dark-gray-s79502065/",
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
			variants: [
				{
					id: "s69306545",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: true,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-knisa-light-beige__0571514_pe666945_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-knisa-light-beige__0837314_pe666948_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Knisa light beige",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-knisa-light-beige-s69306545/",
				},
				{
					id: "s09502139",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-blue__1192156_pe900894_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-blue__1192155_pe900855_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Gunnared blue",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-gunnared-blue-s09502139/",
				},
				{
					id: "s89306549",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 189,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-hillared-anthracite__0497135_pe628962_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-hillared-anthracite__0837224_pe629083_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-hillared-anthracite-s89306549/",
				},
				{
					id: "s69388466",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-dark-gray__0937018_pe793540_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-dark-gray__0937019_pe793527_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Skiftebo dark gray",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-skiftebo-dark-gray-s69388466/",
				},
				{
					id: "s39501911",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 219,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-light-green__1192112_pe900861_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-gunnared-light-green__1192111_pe900860_s5.jpg",
					imageAlt:
						"POÄNG Armchair, black-brown/Gunnared light green",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-gunnared-light-green-s39501911/",
				},
				{
					id: "s49387095",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-yellow__0936994_pe793506_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-armchair-black-brown-skiftebo-yellow__0936995_pe793507_s5.jpg",
					imageAlt: "POÄNG Armchair, black-brown/Skiftebo yellow",
					url: "https://www.ikea.com/us/en/p/poaeng-armchair-black-brown-skiftebo-yellow-s49387095/",
				},
			],
		},
		{
			id: "s99291991",
			name: "SLÄKT",
			price: {
				currency: "USD",
				currentPrice: 429,
				discounted: false,
			},
			measurement: "Twin",
			typeName: "Bed frame w/storage+slatted bedbase",
			image: "https://www.ikea.com/us/en/images/products/slaekt-bed-frame-w-storage-slatted-bedbase-white__0648346_pe704865_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/slaekt-bed-frame-w-storage-slatted-bedbase-white__0737507_pe726512_s5.jpg",
			imageAlt: "SLÄKT Bed frame w/storage+slatted bedbase, white, Twin",
			url: "https://www.ikea.com/us/en/p/slaekt-bed-frame-w-storage-slatted-bedbase-white-s99291991/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Twin & single beds",
					key: "16285",
				},
			],
			variants: [],
		},
		{
			id: "70526914",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 109,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa cover",
			image: "https://www.ikea.com/us/en/images/products/kivik-sofa-cover-tibbleby-beige-gray__1056166_pe848291_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sofa-cover-tibbleby-beige-gray__1056144_pe848277_s5.jpg",
			imageAlt: "KIVIK Sofa cover, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-sofa-cover-tibbleby-beige-gray-70526914/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "KIVIK covers",
					key: "18705",
				},
			],
			variants: [
				{
					id: "60527551",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 209,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa cover",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-cover-tresund-light-beige__1124221_pe875085_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-cover-tresund-light-beige__1124111_pe875024_s5.jpg",
					imageAlt: "KIVIK Sofa cover, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-cover-tresund-light-beige-60527551/",
				},
				{
					id: "00526979",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 159,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa cover",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-cover-kelinge-gray-turquoise__1055820_pe848115_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-cover-kelinge-gray-turquoise__1055806_pe848110_s5.jpg",
					imageAlt: "KIVIK Sofa cover, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-cover-kelinge-gray-turquoise-00526979/",
				},
				{
					id: "80527526",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 209,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa cover",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-cover-tresund-anthracite__1124222_pe875084_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-cover-tresund-anthracite__1124113_pe875022_s5.jpg",
					imageAlt: "KIVIK Sofa cover, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-cover-tresund-anthracite-80527526/",
				},
			],
		},
		{
			id: "50512258",
			name: "SLATORP",
			price: {
				currency: "USD",
				currentPrice: 1499,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/slatorp-sofa-with-chaise-tallmyra-white-black__0818173_pe774336_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/slatorp-sofa-with-chaise-tallmyra-white-black__0818177_pe774338_s5.jpg",
			imageAlt: "SLATORP Sofa, with chaise/Tallmyra white/black",
			url: "https://www.ikea.com/us/en/p/slatorp-sofa-with-chaise-tallmyra-white-black-50512258/",
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
		{
			id: "80483805",
			name: "ALEX",
			price: {
				currency: "USD",
				currentPrice: 289.99,
				discounted: false,
			},
			measurement: '52x22 7/8 "',
			typeName: "Desk",
			image: "https://www.ikea.com/us/en/images/products/alex-desk-gray-turquoise__0977665_pe813728_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/alex-desk-gray-turquoise__0995565_pe821755_s5.jpg",
			imageAlt: 'ALEX Desk, gray-turquoise, 52x22 7/8 "',
			url: "https://www.ikea.com/us/en/p/alex-desk-gray-turquoise-80483805/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "s19278272",
			name: "KALLAX",
			price: {
				currency: "USD",
				currentPrice: 89.99,
				discounted: true,
			},
			measurement: '30 3/8x30 3/8 "',
			typeName: "Shelf unit with doors",
			image: "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-doors-white__0619558_pe689126_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kallax-shelf-unit-with-doors-white__0849165_pe689125_s5.jpg",
			imageAlt: 'KALLAX Shelf unit with doors, white, 30 3/8x30 3/8 "',
			url: "https://www.ikea.com/us/en/p/kallax-shelf-unit-with-doors-white-s19278272/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Shelving units, bookcases & storage options",
					key: "st002",
				},
				{
					name: "Shelf units & cube storage",
					key: "11465",
				},
			],
			variants: [],
		},
		{
			id: "40511532",
			name: "FRÖSLÖV",
			price: {
				currency: "USD",
				currentPrice: 1099,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/froesloev-sofa-hyllie-dark-gray__0995163_pe821607_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/froesloev-sofa-hyllie-dark-gray__0995164_pe821608_s5.jpg",
			imageAlt: "FRÖSLÖV Sofa, Hyllie dark gray",
			url: "https://www.ikea.com/us/en/p/froesloev-sofa-hyllie-dark-gray-40511532/",
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
			variants: [
				{
					id: "60511531",
					name: "FRÖSLÖV",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/froesloev-sofa-hyllie-beige__0995156_pe821600_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/froesloev-sofa-hyllie-beige__0995157_pe821601_s5.jpg",
					imageAlt: "FRÖSLÖV Sofa, Hyllie beige",
					url: "https://www.ikea.com/us/en/p/froesloev-sofa-hyllie-beige-60511531/",
				},
			],
		},
		{
			id: "s59440573",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 2149,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 6-seat",
			image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-tibbleby-beige-gray__1056156_pe848288_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-tibbleby-beige-gray__1132833_pe878318_s5.jpg",
			imageAlt: "KIVIK Sectional, 6-seat, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-tibbleby-beige-gray-s59440573/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s79443071",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 2199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 6-seat",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-kelinge-gray-turquoise__1055853_pe848131_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-kelinge-gray-turquoise__1055852_pe848132_s5.jpg",
					imageAlt: "KIVIK Sectional, 6-seat, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-kelinge-gray-turquoise-s79443071/",
				},
			],
		},
		{
			id: "s39227578",
			name: "HEMNES",
			price: {
				currency: "USD",
				currentPrice: 429,
				discounted: true,
			},
			measurement: "Twin",
			typeName: "Bed frame with 2 storage boxes",
			image: "https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-2-storage-boxes-dark-gray-stained-luroey__0580143_pe670074_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/hemnes-bed-frame-with-2-storage-boxes-dark-gray-stained-luroey__0860254_pe681428_s5.jpg",
			imageAlt:
				"HEMNES Bed frame with 2 storage boxes, dark gray stained/Luröy, Twin",
			url: "https://www.ikea.com/us/en/p/hemnes-bed-frame-with-2-storage-boxes-dark-gray-stained-luroey-s39227578/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Twin & single beds",
					key: "16285",
				},
			],
			variants: [],
		},
		{
			id: "s59491322",
			name: "MORABO",
			price: {
				currency: "USD",
				currentPrice: 1199,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-light-green-wood__1170141_pe892681_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-light-green-wood__1170138_pe892678_s5.jpg",
			imageAlt: "MORABO Sleeper sofa, Gunnared light green/wood",
			url: "https://www.ikea.com/us/en/p/morabo-sleeper-sofa-gunnared-light-green-wood-s59491322/",
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
			variants: [
				{
					id: "s69491326",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-dark-gray-metal__1170156_pe892692_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-dark-gray-metal__1170153_pe892689_s5.jpg",
					imageAlt: "MORABO Sleeper sofa, Gunnared dark gray/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sleeper-sofa-gunnared-dark-gray-metal-s69491326/",
				},
				{
					id: "s79491321",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-dark-gray-wood__1170121_pe892666_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-dark-gray-wood__1170118_pe892701_s5.jpg",
					imageAlt: "MORABO Sleeper sofa, Gunnared dark gray/wood",
					url: "https://www.ikea.com/us/en/p/morabo-sleeper-sofa-gunnared-dark-gray-wood-s79491321/",
				},
				{
					id: "s89491325",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-light-green-metal__1170126_pe892670_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sleeper-sofa-gunnared-light-green-metal__1170123_pe892693_s5.jpg",
					imageAlt: "MORABO Sleeper sofa, Gunnared light green/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sleeper-sofa-gunnared-light-green-metal-s89491325/",
				},
			],
		},
		{
			id: "90214285",
			name: "ADDE",
			price: {
				currency: "USD",
				currentPrice: 15,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/adde-chair-black__0728277_pe736167_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/adde-chair-black__1052582_pe846237_s5.jpg",
			imageAlt: "ADDE Chair, black",
			url: "https://www.ikea.com/us/en/p/adde-chair-black-90214285/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [],
		},
		{
			id: "70214192",
			name: "MALM",
			price: {
				currency: "USD",
				currentPrice: 249.99,
				discounted: false,
			},
			measurement: '59 1/2x25 5/8 "',
			typeName: "Desk with pull-out panel",
			image: "https://www.ikea.com/us/en/images/products/malm-desk-with-pull-out-panel-white__0735980_pe740314_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/malm-desk-with-pull-out-panel-white__0403679_pe565683_s5.jpg",
			imageAlt: 'MALM Desk with pull-out panel, white, 59 1/2x25 5/8 "',
			url: "https://www.ikea.com/us/en/p/malm-desk-with-pull-out-panel-white-70214192/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "40530917",
			name: "OLSERÖD",
			price: {
				currency: "USD",
				currentPrice: 39.99,
				discounted: false,
			},
			measurement: '20 7/8x19 5/8 "',
			typeName: "Side table",
			image: "https://www.ikea.com/us/en/images/products/olseroed-side-table-anthracite-dark-gray__1150823_pe884681_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/olseroed-side-table-anthracite-dark-gray__1157498_pe887720_s5.jpg",
			imageAlt:
				'OLSERÖD Side table, anthracite/dark gray, 20 7/8x19 5/8 "',
			url: "https://www.ikea.com/us/en/p/olseroed-side-table-anthracite-dark-gray-40530917/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "s49123405",
			name: "TROFAST",
			price: {
				currency: "USD",
				currentPrice: 75.19,
				discounted: true,
			},
			measurement: '39x17 3/8x22 "',
			typeName: "Storage combination with boxes",
			image: "https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0383745_pe558437_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trofast-storage-combination-with-boxes-white-white__0471479_pe613426_s5.jpg",
			imageAlt:
				'TROFAST Storage combination with boxes, white/white, 39x17 3/8x22 "',
			url: "https://www.ikea.com/us/en/p/trofast-storage-combination-with-boxes-white-white-s49123405/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Nursery Furniture",
					key: "45780",
				},
				{
					name: "Toy storage",
					key: "20474",
				},
			],
			variants: [],
		},
		{
			id: "s89440595",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 699,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/kivik-loveseat-tibbleby-beige-gray__1056142_pe848270_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-loveseat-tibbleby-beige-gray__1056141_pe848273_s5.jpg",
			imageAlt: "KIVIK Loveseat, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-loveseat-tibbleby-beige-gray-s89440595/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s29482828",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/kivik-loveseat-tresund-light-beige__1124105_pe875020_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-loveseat-tresund-light-beige__1124104_pe875016_s5.jpg",
					imageAlt: "KIVIK Loveseat, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-loveseat-tresund-light-beige-s29482828/",
				},
				{
					id: "s49482827",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/kivik-loveseat-tresund-anthracite__1124108_pe875017_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-loveseat-tresund-anthracite__1124107_pe875019_s5.jpg",
					imageAlt: "KIVIK Loveseat, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-loveseat-tresund-anthracite-s49482827/",
				},
				{
					id: "s59443048",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/kivik-loveseat-kelinge-gray-turquoise__1055797_pe848105_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-loveseat-kelinge-gray-turquoise__1055796_pe848107_s5.jpg",
					imageAlt: "KIVIK Loveseat, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-loveseat-kelinge-gray-turquoise-s59443048/",
				},
			],
		},
		{
			id: "s69440474",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 1399,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat corner",
			image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-tibbleby-beige-gray__1056088_pe848223_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-tibbleby-beige-gray__1056087_pe848224_s5.jpg",
			imageAlt: "KIVIK Sectional, 4-seat corner, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-corner-tibbleby-beige-gray-s69440474/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s59482860",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1549,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-tresund-light-beige__1124076_pe874993_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-tresund-light-beige__1124075_pe874992_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 4-seat corner, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-corner-tresund-light-beige-s59482860/",
				},
				{
					id: "s29443016",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1449,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-kelinge-gray-turquoise__1055748_pe848070_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-kelinge-gray-turquoise__1055747_pe848071_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 4-seat corner, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-corner-kelinge-gray-turquoise-s29443016/",
				},
				{
					id: "s79482859",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1549,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-tresund-anthracite__1124078_pe874991_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-corner-tresund-anthracite__1124077_pe874994_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 4-seat corner, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-corner-tresund-anthracite-s79482859/",
				},
			],
		},
		{
			id: "10474159",
			name: "PANGET",
			price: {
				currency: "USD",
				currentPrice: 249.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Storage bench",
			image: "https://www.ikea.com/us/en/images/products/panget-storage-bench-white__0836634_pe778563_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/panget-storage-bench-white__0885319_pe781935_s5.jpg",
			imageAlt: "PANGET Storage bench, white",
			url: "https://www.ikea.com/us/en/p/panget-storage-bench-white-10474159/",
			categoryPath: [
				{
					name: "Storage & organization",
					key: "st001",
				},
				{
					name: "Clothes & shoe organizers",
					key: "st005",
				},
				{
					name: "Shoe cabinets",
					key: "10456",
				},
			],
			variants: [
				{
					id: "70474161",
					name: "PANGET",
					price: {
						currency: "USD",
						currentPrice: 249.99,
						discounted: false,
					},
					measurement: "",
					typeName: "Storage bench",
					image: "https://www.ikea.com/us/en/images/products/panget-storage-bench-dark-gray-stained__0836630_pe778562_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/panget-storage-bench-dark-gray-stained__0885318_pe781934_s5.jpg",
					imageAlt: "PANGET Storage bench, dark gray/stained",
					url: "https://www.ikea.com/us/en/p/panget-storage-bench-dark-gray-stained-70474161/",
				},
			],
		},
		{
			id: "10487232",
			name: "LINNEBÄCK",
			price: {
				currency: "USD",
				currentPrice: 69.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/linnebaeck-chair-orrsta-olive-green__0933454_pe791910_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/linnebaeck-chair-orrsta-olive-green__0936414_pe793247_s5.jpg",
			imageAlt: "LINNEBÄCK Chair, Orrsta olive-green",
			url: "https://www.ikea.com/us/en/p/linnebaeck-chair-orrsta-olive-green-10487232/",
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
			id: "s49318323",
			name: "MORABO",
			price: {
				currency: "USD",
				currentPrice: 1199,
				discounted: true,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-dark-gray-wood__0602368_pe680306_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-dark-gray-wood__0816256_pe773406_s5.jpg",
			imageAlt: "MORABO Sofa, with chaise/Gunnared dark gray/wood",
			url: "https://www.ikea.com/us/en/p/morabo-sofa-with-chaise-gunnared-dark-gray-wood-s49318323/",
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
					name: "Sofas with chaise",
					key: "47388",
				},
			],
			variants: [
				{
					id: "s79416510",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1399,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-djuparp-dark-blue-wood__0990555_pe819047_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-djuparp-dark-blue-wood__0990557_pe819050_s5.jpg",
					imageAlt: "MORABO Sofa, with chaise/Djuparp dark blue/wood",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-with-chaise-djuparp-dark-blue-wood-s79416510/",
				},
				{
					id: "s99416509",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1399,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-djuparp-dark-blue-metal__0990552_pe819043_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-djuparp-dark-blue-metal__0990554_pe819055_s5.jpg",
					imageAlt:
						"MORABO Sofa, with chaise/Djuparp dark blue/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-with-chaise-djuparp-dark-blue-metal-s99416509/",
				},
				{
					id: "s69318322",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-dark-gray-metal__0602364_pe680296_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-dark-gray-metal__0816255_pe773405_s5.jpg",
					imageAlt:
						"MORABO Sofa, with chaise/Gunnared dark gray/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-with-chaise-gunnared-dark-gray-metal-s69318322/",
				},
				{
					id: "s69318341",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-light-green-wood__0602395_pe680328_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-light-green-wood__0816257_pe773407_s5.jpg",
					imageAlt:
						"MORABO Sofa, with chaise/Gunnared light green/wood",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-with-chaise-gunnared-light-green-wood-s69318341/",
				},
				{
					id: "s89318340",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: true,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-light-green-metal__0602391_pe680325_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-sofa-with-chaise-gunnared-light-green-metal__0816258_pe773401_s5.jpg",
					imageAlt:
						"MORABO Sofa, with chaise/Gunnared light green/metal",
					url: "https://www.ikea.com/us/en/p/morabo-sofa-with-chaise-gunnared-light-green-metal-s89318340/",
				},
			],
		},
		{
			id: "s79428805",
			name: "HOLMSTA / FRÖKNABO",
			price: {
				currency: "USD",
				currentPrice: 299,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/holmsta-froeknabo-armchair__1086019_pe860309_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/holmsta-froeknabo-armchair__1162724_pe889945_s5.jpg",
			imageAlt: "HOLMSTA / FRÖKNABO Armchair",
			url: "https://www.ikea.com/us/en/p/holmsta-froeknabo-armchair-s79428805/",
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
					name: "Rattan armchairs",
					key: "20907",
				},
			],
			variants: [],
		},
		{
			id: "s49319266",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 2849,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 5-seat corner",
			image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-gunnared-beige__0514336_pe639416_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-gunnared-beige__0787118_pe763151_s5.jpg",
			imageAlt:
				"FINNALA Sectional, 5-seat corner, with chaise/Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-with-chaise-gunnared-beige-s49319266/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s29319272",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-tallmyra-beige__0570246_pe666207_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-tallmyra-beige__0787121_pe763156_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, with chaise/Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-with-chaise-tallmyra-beige-s29319272/",
				},
				{
					id: "s69319270",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-orrsta-black-blue__0514236_pe639371_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-orrsta-black-blue__0787120_pe763157_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, with chaise/Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-with-chaise-orrsta-black-blue-s69319270/",
				},
				{
					id: "s09319268",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-gunnared-medium-gray__0514338_pe639423_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-gunnared-medium-gray__0787119_pe763160_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, with chaise/Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-with-chaise-gunnared-medium-gray-s09319268/",
				},
				{
					id: "s89319274",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-tallmyra-black-gray__0570227_pe666185_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-tallmyra-black-gray__0787122_pe763152_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, with chaise/Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-with-chaise-tallmyra-black-gray-s89319274/",
				},
				{
					id: "s09319447",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2749,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-dalstorp-multicolor__0725524_pe734915_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-with-chaise-dalstorp-multicolor__0787116_pe763149_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, with chaise/Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-with-chaise-dalstorp-multicolor-s09319447/",
				},
			],
		},
		{
			id: "s49485091",
			name: "JÄTTEBO",
			price: {
				currency: "USD",
				currentPrice: 1740,
				discounted: false,
			},
			measurement: "",
			typeName: "4.5-seat mod sofa",
			image: "https://www.ikea.com/us/en/images/products/jaettebo-4-5-seat-mod-sofa-samsala-dark-yellow-green__1109595_pe870086_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jaettebo-4-5-seat-mod-sofa-samsala-dark-yellow-green__1139955_pe880593_s5.jpg",
			imageAlt: "JÄTTEBO 4.5-seat mod sofa, Samsala dark yellow-green",
			url: "https://www.ikea.com/us/en/p/jaettebo-4-5-seat-mod-sofa-samsala-dark-yellow-green-s49485091/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s49485086",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 1740,
						discounted: false,
					},
					measurement: "",
					typeName: "4.5-seat mod sofa",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-4-5-seat-mod-sofa-samsala-gray-beige__1109597_pe870092_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-4-5-seat-mod-sofa-samsala-gray-beige__1139956_pe880595_s5.jpg",
					imageAlt: "JÄTTEBO 4.5-seat mod sofa, Samsala gray-beige",
					url: "https://www.ikea.com/us/en/p/jaettebo-4-5-seat-mod-sofa-samsala-gray-beige-s49485086/",
				},
				{
					id: "s99485079",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 1695,
						discounted: false,
					},
					measurement: "",
					typeName: "4.5-seat mod sofa",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-4-5-seat-mod-sofa-tonerud-gray__1109601_pe870088_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-4-5-seat-mod-sofa-tonerud-gray__1139957_pe880594_s5.jpg",
					imageAlt: "JÄTTEBO 4.5-seat mod sofa, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/jaettebo-4-5-seat-mod-sofa-tonerud-gray-s99485079/",
				},
			],
		},
		{
			id: "60416925",
			name: "KYRRE",
			price: {
				currency: "USD",
				currentPrice: 19.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Stool",
			image: "https://www.ikea.com/us/en/images/products/kyrre-stool-birch__0714153_pe729952_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kyrre-stool-birch__1053341_pe846927_s5.jpg",
			imageAlt: "KYRRE Stool, birch",
			url: "https://www.ikea.com/us/en/p/kyrre-stool-birch-60416925/",
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
					name: "Stools",
					key: "22659",
				},
			],
			variants: [],
		},
		{
			id: "s29420393",
			name: "SANDSBERG",
			price: {
				currency: "USD",
				currentPrice: 59.99,
				discounted: false,
			},
			measurement: '43 1/4x26 3/8 "',
			typeName: "Table",
			image: "https://www.ikea.com/us/en/images/products/sandsberg-table-black__1074348_pe856162_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sandsberg-table-black__1056658_pe848456_s5.jpg",
			imageAlt: 'SANDSBERG Table, black, 43 1/4x26 3/8 "',
			url: "https://www.ikea.com/us/en/p/sandsberg-table-black-s29420393/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Dining tables",
					key: "21825",
				},
				{
					name: "Up to 4 seats",
					key: "21826",
				},
			],
			variants: [],
		},
		{
			id: "s39440593",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 749,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/kivik-sofa-tibbleby-beige-gray__1056144_pe848277_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sofa-tibbleby-beige-gray__1056143_pe848278_s5.jpg",
			imageAlt: "KIVIK Sofa, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-sofa-tibbleby-beige-gray-s39440593/",
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
			variants: [
				{
					id: "s19482838",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-light-beige__1124111_pe875024_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-light-beige__1124110_pe875021_s5.jpg",
					imageAlt: "KIVIK Sofa, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-tresund-light-beige-s19482838/",
				},
				{
					id: "s39482837",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-anthracite__1124113_pe875022_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-tresund-anthracite__1124112_pe875023_s5.jpg",
					imageAlt: "KIVIK Sofa, Tresund anthracite",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-tresund-anthracite-s39482837/",
				},
				{
					id: "s59443053",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/kivik-sofa-kelinge-gray-turquoise__1055806_pe848110_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sofa-kelinge-gray-turquoise__1055805_pe848111_s5.jpg",
					imageAlt: "KIVIK Sofa, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sofa-kelinge-gray-turquoise-s59443053/",
				},
			],
		},
		{
			id: "20483295",
			name: "VIHALS",
			price: {
				currency: "USD",
				currentPrice: 129.99,
				discounted: true,
			},
			measurement: '57 1/2x14 5/8x19 5/8 "',
			typeName: "TV unit",
			image: "https://www.ikea.com/us/en/images/products/vihals-tv-unit-white__1035579_pe838111_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vihals-tv-unit-white__1048003_pe843550_s5.jpg",
			imageAlt: 'VIHALS TV unit, white, 57 1/2x14 5/8x19 5/8 "',
			url: "https://www.ikea.com/us/en/p/vihals-tv-unit-white-20483295/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "TV & media furniture",
					key: "10475",
				},
				{
					name: "TV stands & benches",
					key: "10810",
				},
			],
			variants: [],
		},
		{
			id: "s89390581",
			name: "HAUGA",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "Twin",
			typeName: "Upholstered bed, 2 storage boxes ",
			image: "https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-2-storage-boxes-lofallet-beige__1151034_pe884737_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-2-storage-boxes-lofallet-beige__1101369_pe866631_s5.jpg",
			imageAlt:
				"HAUGA Upholstered bed, 2 storage boxes, Lofallet beige, Twin",
			url: "https://www.ikea.com/us/en/p/hauga-upholstered-bed-2-storage-boxes-lofallet-beige-s89390581/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Twin & single beds",
					key: "16285",
				},
			],
			variants: [],
		},
		{
			id: "s99418042",
			name: "ÄPPLARYD",
			price: {
				currency: "USD",
				currentPrice: 1619,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-lejde-light-gray__0992926_pe820340_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-lejde-light-gray__1023720_pe833234_s5.jpg",
			imageAlt: "ÄPPLARYD Sofa with chaise, Lejde light gray",
			url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-with-chaise-lejde-light-gray-s99418042/",
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
			variants: [
				{
					id: "s19418041",
					name: "ÄPPLARYD",
					price: {
						currency: "USD",
						currentPrice: 1869,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-djuparp-dark-blue__0992911_pe820329_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-djuparp-dark-blue__1023717_pe833233_s5.jpg",
					imageAlt: "ÄPPLARYD Sofa with chaise, Djuparp dark blue",
					url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-with-chaise-djuparp-dark-blue-s19418041/",
				},
				{
					id: "s29418069",
					name: "ÄPPLARYD",
					price: {
						currency: "USD",
						currentPrice: 1869,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-djuparp-red-brown__0992917_pe820334_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-djuparp-red-brown__1023718_pe833236_s5.jpg",
					imageAlt: "ÄPPLARYD Sofa with chaise, Djuparp red/brown",
					url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-with-chaise-djuparp-red-brown-s29418069/",
				},
				{
					id: "s79418062",
					name: "ÄPPLARYD",
					price: {
						currency: "USD",
						currentPrice: 1619,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-lejde-gray-black__0992922_pe820337_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-with-chaise-lejde-gray-black__1023719_pe833235_s5.jpg",
					imageAlt: "ÄPPLARYD Sofa with chaise, Lejde gray/black",
					url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-with-chaise-lejde-gray-black-s79418062/",
				},
			],
		},
		{
			id: "60387937",
			name: "HOLMSUND",
			price: {
				currency: "USD",
				currentPrice: 119,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sleeper sectional, 3 seat",
			image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-orrsta-light-blue__0829179_pe658725_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-orrsta-light-blue__0532354_pe648004_s5.jpg",
			imageAlt:
				"HOLMSUND Cover for sleeper sectional, 3 seat, Orrsta light blue",
			url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sectional-3-seat-orrsta-light-blue-60387937/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "HOLMSUND covers",
					key: "39519",
				},
			],
			variants: [
				{
					id: "40321358",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 169,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sectional, 3 seat",
					image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-nordvalla-beige__0515761_pe640020_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-nordvalla-beige__0405950_pe577763_s5.jpg",
					imageAlt:
						"HOLMSUND Cover for sleeper sectional, 3 seat, Nordvalla beige",
					url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sectional-3-seat-nordvalla-beige-40321358/",
				},
				{
					id: "40321363",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 169,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sectional, 3 seat",
					image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-nordvalla-medium-gray__0519543_pe641599_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-nordvalla-medium-gray__0405951_pe577764_s5.jpg",
					imageAlt:
						"HOLMSUND Cover for sleeper sectional, 3 seat, Nordvalla medium gray",
					url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sectional-3-seat-nordvalla-medium-gray-40321363/",
				},
				{
					id: "60387942",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sectional, 3 seat",
					image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-orrsta-light-white-gray__0833803_pe658726_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sectional-3-seat-orrsta-light-white-gray__0532361_pe648010_s5.jpg",
					imageAlt:
						"HOLMSUND Cover for sleeper sectional, 3 seat, Orrsta light white-gray",
					url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sectional-3-seat-orrsta-light-white-gray-60387942/",
				},
			],
		},
		{
			id: "00493993",
			name: "PÄRUP",
			price: {
				currency: "USD",
				currentPrice: 199,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa",
			image: "https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-gunnared-beige__0950139_pe800159_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-gunnared-beige__0515739_pe639996_s5.jpg",
			imageAlt: "PÄRUP Cover for sofa, with chaise/Gunnared beige",
			url: "https://www.ikea.com/us/en/p/paerup-cover-for-sofa-with-chaise-gunnared-beige-00493993/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "PÄRUP covers",
					key: "54994",
				},
			],
			variants: [
				{
					id: "10493997",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 199,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-gunnared-dark-gray__0950142_pe800162_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-gunnared-dark-gray__0709885_pe727145_s5.jpg",
					imageAlt:
						"PÄRUP Cover for sofa, with chaise/Gunnared dark gray",
					url: "https://www.ikea.com/us/en/p/paerup-cover-for-sofa-with-chaise-gunnared-dark-gray-10493997/",
				},
				{
					id: "40493972",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-vissle-gray__0950148_pe800168_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-vissle-gray__0515709_pe639965_s5.jpg",
					imageAlt: "PÄRUP Cover for sofa, with chaise/Vissle gray",
					url: "https://www.ikea.com/us/en/p/paerup-cover-for-sofa-with-chaise-vissle-gray-40493972/",
				},
				{
					id: "80493989",
					name: "PÄRUP",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-vissle-dark-green__0950145_pe800165_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/paerup-cover-for-sofa-with-chaise-vissle-dark-green__0950191_pe800204_s5.jpg",
					imageAlt:
						"PÄRUP Cover for sofa, with chaise/Vissle dark green",
					url: "https://www.ikea.com/us/en/p/paerup-cover-for-sofa-with-chaise-vissle-dark-green-80493989/",
				},
			],
		},
		{
			id: "20454844",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 99,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa section",
			image: "https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-gunnared-medium-gray__0515750_pe640008_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-gunnared-medium-gray__0531887_pe647626_s5.jpg",
			imageAlt: "FINNALA Cover for sofa section, Gunnared medium gray",
			url: "https://www.ikea.com/us/en/p/finnala-cover-for-sofa-section-gunnared-medium-gray-20454844/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "FINNALA covers",
					key: "47445",
				},
			],
			variants: [
				{
					id: "40454843",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-gunnared-beige__0515739_pe639996_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-gunnared-beige__0531865_pe647607_s5.jpg",
					imageAlt: "FINNALA Cover for sofa section, Gunnared beige",
					url: "https://www.ikea.com/us/en/p/finnala-cover-for-sofa-section-gunnared-beige-40454843/",
				},
				{
					id: "70454846",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 129,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-tallmyra-beige__0779562_pe759624_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-tallmyra-beige__0570240_pe666199_s5.jpg",
					imageAlt: "FINNALA Cover for sofa section, Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-cover-for-sofa-section-tallmyra-beige-70454846/",
				},
				{
					id: "90454845",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-orrsta-black-blue__0515703_pe639963_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-orrsta-black-blue__0531894_pe647636_s5.jpg",
					imageAlt:
						"FINNALA Cover for sofa section, Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-cover-for-sofa-section-orrsta-black-blue-90454845/",
				},
				{
					id: "50454847",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 129,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-tallmyra-black-gray__0820813_pe664133_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-tallmyra-black-gray__0570221_pe666189_s5.jpg",
					imageAlt:
						"FINNALA Cover for sofa section, Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-cover-for-sofa-section-tallmyra-black-gray-50454847/",
				},
				{
					id: "90454968",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 69,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-dalstorp-multicolor__0724689_pe734564_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-cover-for-sofa-section-dalstorp-multicolor__0724724_pe734566_s5.jpg",
					imageAlt:
						"FINNALA Cover for sofa section, Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-cover-for-sofa-section-dalstorp-multicolor-90454968/",
				},
			],
		},
		{
			id: "s09325518",
			name: "VRETSTORP",
			price: {
				currency: "USD",
				currentPrice: 999,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-totebo-dark-turquoise__0818772_pe774604_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-totebo-dark-turquoise__0818770_pe774602_s5.jpg",
			imageAlt: "VRETSTORP Sleeper sofa, Totebo dark turquoise",
			url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-totebo-dark-turquoise-s09325518/",
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
			variants: [
				{
					id: "s39325512",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-hallarp-beige__0818764_pe774597_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-hallarp-beige__0818761_pe774594_s5.jpg",
					imageAlt: "VRETSTORP Sleeper sofa, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-hallarp-beige-s39325512/",
				},
				{
					id: "s89412644",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-totebo-light-beige__0818776_pe774608_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-totebo-light-beige__0925104_pe788715_s5.jpg",
					imageAlt: "VRETSTORP Sleeper sofa, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-totebo-light-beige-s89412644/",
				},
				{
					id: "s79325510",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-hallarp-gray__0818760_pe774593_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-hallarp-gray__0818758_pe774592_s5.jpg",
					imageAlt: "VRETSTORP Sleeper sofa, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-hallarp-gray-s79325510/",
				},
				{
					id: "s99325514",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-remmarn-light-gray__0818768_pe774600_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-remmarn-light-gray__0818766_pe774586_s5.jpg",
					imageAlt: "VRETSTORP Sleeper sofa, Remmarn light gray",
					url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-remmarn-light-gray-s99325514/",
				},
				{
					id: "s59384119",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-blekinge-white__0818756_pe774590_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-blekinge-white__0818754_pe774613_s5.jpg",
					imageAlt: "VRETSTORP Sleeper sofa, Blekinge white",
					url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-blekinge-white-s59384119/",
				},
				{
					id: "s49325521",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-virestad-red-white__0818780_pe774612_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-sleeper-sofa-virestad-red-white__0818778_pe774610_s5.jpg",
					imageAlt: "VRETSTORP Sleeper sofa, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/vretstorp-sleeper-sofa-virestad-red-white-s49325521/",
				},
			],
		},
		{
			id: "60214159",
			name: "MALM",
			price: {
				currency: "USD",
				currentPrice: 269.99,
				discounted: false,
			},
			measurement: '55 1/8x25 5/8 "',
			typeName: "Desk",
			image: "https://www.ikea.com/us/en/images/products/malm-desk-white__0735975_pe740309_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/malm-desk-white__0850916_pe602578_s5.jpg",
			imageAlt: 'MALM Desk, white, 55 1/8x25 5/8 "',
			url: "https://www.ikea.com/us/en/p/malm-desk-white-60214159/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "50219044",
			name: "FREDDE",
			price: {
				currency: "USD",
				currentPrice: 369.99,
				discounted: false,
			},
			measurement: '55 1/8/72 7/8x29 1/8x57 1/2 "',
			typeName: "Gaming desk",
			image: "https://www.ikea.com/us/en/images/products/fredde-gaming-desk-black__0736008_pe740351_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/fredde-gaming-desk-black__0403524_pe565583_s5.jpg",
			imageAlt:
				'FREDDE Gaming desk, black, 55 1/8/72 7/8x29 1/8x57 1/2 "',
			url: "https://www.ikea.com/us/en/p/fredde-gaming-desk-black-50219044/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "80512247",
			name: "LINANÄS",
			price: {
				currency: "USD",
				currentPrice: 399,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/linanaes-sofa-vissle-dark-gray__1013898_pe829450_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/linanaes-sofa-vissle-dark-gray__1013900_pe829454_s5.jpg",
			imageAlt: "LINANÄS Sofa, Vissle dark gray",
			url: "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-dark-gray-80512247/",
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
			variants: [
				{
					id: "80512233",
					name: "LINANÄS",
					price: {
						currency: "USD",
						currentPrice: 399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/linanaes-sofa-vissle-beige__1013894_pe829446_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/linanaes-sofa-vissle-beige__1013895_pe829449_s5.jpg",
					imageAlt: "LINANÄS Sofa, Vissle beige",
					url: "https://www.ikea.com/us/en/p/linanaes-sofa-vissle-beige-80512233/",
				},
			],
		},
		{
			id: "s49011766",
			name: "MELLTORP / ADDE",
			price: {
				currency: "USD",
				currentPrice: 89.99,
				discounted: false,
			},
			measurement: '29 1/2 "',
			typeName: "Table and 2 chairs",
			image: "https://www.ikea.com/us/en/images/products/melltorp-adde-table-and-2-chairs-white__0737985_pe741286_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/melltorp-adde-table-and-2-chairs-white__0872092_pe716742_s5.jpg",
			imageAlt: 'MELLTORP / ADDE Table and 2 chairs, white, 29 1/2 "',
			url: "https://www.ikea.com/us/en/p/melltorp-adde-table-and-2-chairs-white-s49011766/",
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
					name: "Dining sets up to 2 seats",
					key: "36209",
				},
			],
			variants: [
				{
					id: "s69428839",
					name: "MELLTORP / KÄTTIL",
					price: {
						currency: "USD",
						currentPrice: 179.99,
						discounted: false,
					},
					measurement: '29 1/2 "',
					typeName: "Table and 2 chairs",
					image: "https://www.ikea.com/us/en/images/products/melltorp-kaettil-table-and-2-chairs-white-knisa-light-gray__1016370_pe830348_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/melltorp-kaettil-table-and-2-chairs-white-knisa-light-gray__1028689_pe835493_s5.jpg",
					imageAlt:
						'MELLTORP / KÄTTIL Table and 2 chairs, white/Knisa light gray, 29 1/2 "',
					url: "https://www.ikea.com/us/en/p/melltorp-kaettil-table-and-2-chairs-white-knisa-light-gray-s69428839/",
				},
			],
		},
		{
			id: "s59471786",
			name: "BERGMUND",
			price: {
				currency: "USD",
				currentPrice: 145,
				discounted: false,
			},
			measurement: '24 3/8 "',
			typeName: "Bar stool with backrest",
			image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-gunnared-medium-gray__0926400_pe789189_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-gunnared-medium-gray__0926401_pe789192_s5.jpg",
			imageAlt:
				'BERGMUND Bar stool with backrest, black/Gunnared medium gray, 24 3/8 "',
			url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-black-gunnared-medium-gray-s59471786/",
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
					name: "Bar stools & chairs",
					key: "20864",
				},
			],
			variants: [
				{
					id: "s39471768",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 145,
						discounted: false,
					},
					measurement: '24 3/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-kolboda-beige-dark-gray__0948033_pe798810_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-kolboda-beige-dark-gray__0948034_pe798813_s5.jpg",
					imageAlt:
						'BERGMUND Bar stool with backrest, black/Kolboda beige/dark gray, 24 3/8 "',
					url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-black-kolboda-beige-dark-gray-s39471768/",
				},
				{
					id: "s29471764",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 145,
						discounted: false,
					},
					measurement: '24 3/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-white-rommele-dark-blue-white__0940976_pe795238_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-white-rommele-dark-blue-white__0940977_pe795241_s5.jpg",
					imageAlt:
						'BERGMUND Bar stool with backrest, white/Rommele dark blue/white, 24 3/8 "',
					url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-white-rommele-dark-blue-white-s29471764/",
				},
				{
					id: "s59471767",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 155,
						discounted: false,
					},
					measurement: '29 1/2 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-rommele-dark-blue-white__1002174_pe824627_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-rommele-dark-blue-white__1052762_pe846406_s5.jpg",
					imageAlt:
						'BERGMUND Bar stool with backrest, black/Rommele dark blue/white, 29 1/2 "',
					url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-black-rommele-dark-blue-white-s59471767/",
				},
				{
					id: "s09471779",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 145,
						discounted: false,
					},
					measurement: '24 3/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-white-orrsta-light-gray__0926446_pe789233_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-white-orrsta-light-gray__0926447_pe789236_s5.jpg",
					imageAlt:
						'BERGMUND Bar stool with backrest, white/Orrsta light gray, 24 3/8 "',
					url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-white-orrsta-light-gray-s09471779/",
				},
				{
					id: "s19471774",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 145,
						discounted: false,
					},
					measurement: '24 3/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-inseros-white__0926396_pe789185_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-black-inseros-white__0926397_pe789188_s5.jpg",
					imageAlt:
						'BERGMUND Bar stool with backrest, black/Inseros white, 24 3/8 "',
					url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-black-inseros-white-s19471774/",
				},
				{
					id: "s09471760",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 145,
						discounted: false,
					},
					measurement: '24 3/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-white-fagelfors-multicolor__0940988_pe795251_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-bar-stool-with-backrest-white-fagelfors-multicolor__0940989_pe795257_s5.jpg",
					imageAlt:
						'BERGMUND Bar stool with backrest, white/Fågelfors multicolor, 24 3/8 "',
					url: "https://www.ikea.com/us/en/p/bergmund-bar-stool-with-backrest-white-fagelfors-multicolor-s09471760/",
				},
			],
		},
		{
			id: "50483289",
			name: "VIHALS",
			price: {
				currency: "USD",
				currentPrice: 129,
				discounted: false,
			},
			measurement: '37 3/8x14 5/8x35 3/8 "',
			typeName: "Shelving unit with 4 shelves",
			image: "https://www.ikea.com/us/en/images/products/vihals-shelving-unit-with-4-shelves-white__1035576_pe838114_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vihals-shelving-unit-with-4-shelves-white__1048726_pe843883_s5.jpg",
			imageAlt:
				'VIHALS Shelving unit with 4 shelves, white, 37 3/8x14 5/8x35 3/8 "',
			url: "https://www.ikea.com/us/en/p/vihals-shelving-unit-with-4-shelves-white-50483289/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Shelving units, bookcases & storage options",
					key: "st002",
				},
				{
					name: "Shelf units & cube storage",
					key: "11465",
				},
			],
			variants: [],
		},
		{
			id: "s09471699",
			name: "BERGMUND",
			price: {
				currency: "USD",
				currentPrice: 125,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/bergmund-chair-black-gunnared-medium-gray__0859533_pe780957_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bergmund-chair-black-gunnared-medium-gray__0932848_pe791640_s5.jpg",
			imageAlt: "BERGMUND Chair, black/Gunnared medium gray",
			url: "https://www.ikea.com/us/en/p/bergmund-chair-black-gunnared-medium-gray-s09471699/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [
				{
					id: "s09471703",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 125,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/bergmund-chair-oak-effect-kvillsfors-dark-blue-blue__1027287_pe834832_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-chair-oak-effect-kvillsfors-dark-blue-blue__1027288_pe834833_s5.jpg",
					imageAlt:
						"BERGMUND Chair, oak effect/Kvillsfors dark blue/blue",
					url: "https://www.ikea.com/us/en/p/bergmund-chair-oak-effect-kvillsfors-dark-blue-blue-s09471703/",
				},
				{
					id: "s29471702",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 125,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/bergmund-chair-black-kvillsfors-dark-blue-blue__0978907_pe814353_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-chair-black-kvillsfors-dark-blue-blue__1027292_pe834837_s5.jpg",
					imageAlt: "BERGMUND Chair, black/Kvillsfors dark blue/blue",
					url: "https://www.ikea.com/us/en/p/bergmund-chair-black-kvillsfors-dark-blue-blue-s29471702/",
				},
				{
					id: "s59471710",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 125,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/bergmund-chair-white-orrsta-light-gray__0926648_pe789431_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-chair-white-orrsta-light-gray__0926649_pe789434_s5.jpg",
					imageAlt: "BERGMUND Chair, white/Orrsta light gray",
					url: "https://www.ikea.com/us/en/p/bergmund-chair-white-orrsta-light-gray-s59471710/",
				},
				{
					id: "s19471707",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 125,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/bergmund-chair-white-ljungen-light-green__0926640_pe789423_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-chair-white-ljungen-light-green__0926641_pe789426_s5.jpg",
					imageAlt: "BERGMUND Chair, white/Ljungen light green",
					url: "https://www.ikea.com/us/en/p/bergmund-chair-white-ljungen-light-green-s19471707/",
				},
				{
					id: "s69471696",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 125,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/bergmund-chair-black-fagelfors-multicolor__0926561_pe789344_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-chair-black-fagelfors-multicolor__0926562_pe789347_s5.jpg",
					imageAlt: "BERGMUND Chair, black/Fågelfors multicolor",
					url: "https://www.ikea.com/us/en/p/bergmund-chair-black-fagelfors-multicolor-s69471696/",
				},
				{
					id: "s29471698",
					name: "BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 125,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/bergmund-chair-white-fagelfors-multicolor__0926628_pe789411_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bergmund-chair-white-fagelfors-multicolor__1007977_pe826609_s5.jpg",
					imageAlt: "BERGMUND Chair, white/Fågelfors multicolor",
					url: "https://www.ikea.com/us/en/p/bergmund-chair-white-fagelfors-multicolor-s29471698/",
				},
			],
		},
		{
			id: "s69494382",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 1349,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat with chaise",
			image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-anthracite__1125143_pe875382_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-anthracite__1125142_pe875383_s5.jpg",
			imageAlt: "KIVIK Sectional, 4-seat with chaise, Tresund anthracite",
			url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tresund-anthracite-s69494382/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s79494391",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1349,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-light-beige__1125141_pe875384_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tresund-light-beige__1125140_pe875381_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 4-seat with chaise, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tresund-light-beige-s79494391/",
				},
				{
					id: "s89440581",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tibbleby-beige-gray__1056150_pe848283_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-tibbleby-beige-gray__1056149_pe848284_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 4-seat with chaise, Tibbleby beige/gray",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-tibbleby-beige-gray-s89440581/",
				},
				{
					id: "s49443063",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1249,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-kelinge-gray-turquoise__1055849_pe848127_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-4-seat-with-chaise-kelinge-gray-turquoise__1055848_pe848128_s5.jpg",
					imageAlt:
						"KIVIK Sectional, 4-seat with chaise, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-4-seat-with-chaise-kelinge-gray-turquoise-s49443063/",
				},
			],
		},
		{
			id: "s59482884",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 2099,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional 6-seat crn/chaise",
			image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-tresund-anthracite__1124086_pe874999_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-tresund-anthracite__1124085_pe875003_s5.jpg",
			imageAlt: "KIVIK Sectional 6-seat crn/chaise, Tresund anthracite",
			url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-crn-chaise-tresund-anthracite-s59482884/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s09440486",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional 6-seat crn/chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-tibbleby-beige-gray__1056110_pe848245_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-tibbleby-beige-gray__1056109_pe848246_s5.jpg",
					imageAlt:
						"KIVIK Sectional 6-seat crn/chaise, Tibbleby beige/gray",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-crn-chaise-tibbleby-beige-gray-s09440486/",
				},
				{
					id: "s79482883",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 2099,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional 6-seat crn/chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-tresund-light-beige__1124084_pe874998_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-tresund-light-beige__1124083_pe875002_s5.jpg",
					imageAlt:
						"KIVIK Sectional 6-seat crn/chaise, Tresund light beige",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-crn-chaise-tresund-light-beige-s79482883/",
				},
				{
					id: "s79443028",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 1949,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional 6-seat crn/chaise",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-kelinge-gray-turquoise__1055839_pe848122_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-crn-chaise-kelinge-gray-turquoise__1055838_pe848123_s5.jpg",
					imageAlt:
						"KIVIK Sectional 6-seat crn/chaise, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-crn-chaise-kelinge-gray-turquoise-s79443028/",
				},
			],
		},
		{
			id: "s09320846",
			name: "BONDHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 260,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair, outdoor",
			image: "https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-froesoen-duvholmen-beige__0806137_pe769806_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-froesoen-duvholmen-beige__0776108_pe757717_s5.jpg",
			imageAlt:
				"BONDHOLMEN Armchair, outdoor, gray stained/Frösön/Duvholmen beige",
			url: "https://www.ikea.com/us/en/p/bondholmen-armchair-outdoor-gray-stained-froesoen-duvholmen-beige-s09320846/",
			categoryPath: [
				{
					name: "Outdoor",
					key: "od001",
				},
				{
					name: "Outdoor furniture",
					key: "od003",
				},
				{
					name: "Outdoor seating",
					key: "700350",
				},
				{
					name: "Outdoor chairs",
					key: "21964",
				},
				{
					name: "Outdoor lounge chairs",
					key: "21962",
				},
			],
			variants: [
				{
					id: "s49323796",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 215,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-kuddarna-beige__0806144_pe769814_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-kuddarna-beige__0776107_pe757716_s5.jpg",
					imageAlt:
						"BONDHOLMEN Armchair, outdoor, gray stained/Kuddarna beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-armchair-outdoor-gray-stained-kuddarna-beige-s49323796/",
				},
				{
					id: "s39320755",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 280,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-jaerpoen-duvholmen-white__0806143_pe769809_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-jaerpoen-duvholmen-white__0898252_pe782483_s5.jpg",
					imageAlt:
						"BONDHOLMEN Armchair, outdoor, gray stained/Järpön/Duvholmen white",
					url: "https://www.ikea.com/us/en/p/bondholmen-armchair-outdoor-gray-stained-jaerpoen-duvholmen-white-s39320755/",
				},
				{
					id: "s59320764",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 280,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-jaerpoen-duvholmen-anthracite__0806141_pe769812_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-jaerpoen-duvholmen-anthracite__0898250_pe782482_s5.jpg",
					imageAlt:
						"BONDHOLMEN Armchair, outdoor, gray stained/Järpön/Duvholmen anthracite",
					url: "https://www.ikea.com/us/en/p/bondholmen-armchair-outdoor-gray-stained-jaerpoen-duvholmen-anthracite-s59320764/",
				},
				{
					id: "s69323804",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 215,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-kuddarna-gray__0806145_pe769811_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-kuddarna-gray__0776107_pe757716_s5.jpg",
					imageAlt:
						"BONDHOLMEN Armchair, outdoor, gray stained/Kuddarna gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-armchair-outdoor-gray-stained-kuddarna-gray-s69323804/",
				},
				{
					id: "s89320852",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 260,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-froesoen-duvholmen-dark-gray__0806139_pe769810_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-armchair-outdoor-gray-stained-froesoen-duvholmen-dark-gray__0776108_pe757717_s5.jpg",
					imageAlt:
						"BONDHOLMEN Armchair, outdoor, gray stained/Frösön/Duvholmen dark gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-armchair-outdoor-gray-stained-froesoen-duvholmen-dark-gray-s89320852/",
				},
			],
		},
		{
			id: "s99481712",
			name: "SAKARIAS",
			price: {
				currency: "USD",
				currentPrice: 235,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/sakarias-armchair-black-kvillsfors__0972629_pe815237_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sakarias-armchair-black-kvillsfors__1027114_pe834738_s5.jpg",
			imageAlt: "SAKARIAS Armchair, black/Kvillsfors",
			url: "https://www.ikea.com/us/en/p/sakarias-armchair-black-kvillsfors-s99481712/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [
				{
					id: "s89280790",
					name: "SAKARIAS",
					price: {
						currency: "USD",
						currentPrice: 235,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/sakarias-armchair-black-sporda-dark-gray__0729767_pe737131_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sakarias-armchair-black-sporda-dark-gray__0871522_pe690027_s5.jpg",
					imageAlt: "SAKARIAS Armchair, black/Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/sakarias-armchair-black-sporda-dark-gray-s89280790/",
				},
			],
		},
		{
			id: "s69304607",
			name: "VINLIDEN",
			price: {
				currency: "USD",
				currentPrice: 699,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/vinliden-loveseat-hakebo-beige__0852697_pe780205_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vinliden-loveseat-hakebo-beige__0852699_pe780207_s5.jpg",
			imageAlt: "VINLIDEN Loveseat, Hakebo beige",
			url: "https://www.ikea.com/us/en/p/vinliden-loveseat-hakebo-beige-s69304607/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s19304638",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/vinliden-loveseat-hillared-anthracite__0852734_pe780229_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-loveseat-hillared-anthracite__0852735_pe780232_s5.jpg",
					imageAlt: "VINLIDEN Loveseat, Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/vinliden-loveseat-hillared-anthracite-s19304638/",
				},
				{
					id: "s69304612",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/vinliden-loveseat-hakebo-dark-gray__0852701_pe780209_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-loveseat-hakebo-dark-gray__0852702_pe780210_s5.jpg",
					imageAlt: "VINLIDEN Loveseat, Hakebo dark gray",
					url: "https://www.ikea.com/us/en/p/vinliden-loveseat-hakebo-dark-gray-s69304612/",
				},
				{
					id: "s79304616",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/vinliden-loveseat-hakebo-light-turquoise__0938985_pe794363_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-loveseat-hakebo-light-turquoise__0938987_pe794365_s5.jpg",
					imageAlt: "VINLIDEN Loveseat, Hakebo light turquoise",
					url: "https://www.ikea.com/us/en/p/vinliden-loveseat-hakebo-light-turquoise-s79304616/",
				},
			],
		},
		{
			id: "30455292",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 119,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa section",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-inseros-white__0820745_pe666600_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-inseros-white__0577136_pe668610_s5.jpg",
			imageAlt: "HÄRLANDA Cover for sofa section, Inseros white",
			url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-section-inseros-white-30455292/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "HÄRLANDA covers",
					key: "47444",
				},
			],
			variants: [
				{
					id: "20455297",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 179,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-sporda-natural__0820765_pe666593_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-sporda-natural__0577175_pe668645_s5.jpg",
					imageAlt: "HÄRLANDA Cover for sofa section, Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-section-sporda-natural-20455297/",
				},
				{
					id: "40455296",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 179,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-sporda-dark-gray__0820767_pe666596_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-sporda-dark-gray__0577168_pe668638_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa section, Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-section-sporda-dark-gray-40455296/",
				},
				{
					id: "60455295",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-ljungen-medium-gray__0852641_pe666606_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-ljungen-medium-gray__0577157_pe668635_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa section, Ljungen medium gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-section-ljungen-medium-gray-60455295/",
				},
				{
					id: "90455294",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-ljungen-light-green__0820763_pe666612_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-ljungen-light-green__0577150_pe668624_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa section, Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-section-ljungen-light-green-90455294/",
				},
				{
					id: "10455293",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-ljungen-light-red__0852592_pe780196_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-section-ljungen-light-red__0852398_pe780042_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa section, Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-section-ljungen-light-red-10455293/",
				},
			],
		},
		{
			id: "s59449620",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 839,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 3 seat",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-fridtuna-dark-gray__1057692_pe848907_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-fridtuna-dark-gray__1057691_pe848905_s5.jpg",
			imageAlt: "SÖDERHAMN Sectional, 3 seat, Fridtuna dark gray",
			url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-fridtuna-dark-gray-s59449620/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s29449688",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 839,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 3 seat",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-fridtuna-light-beige__1057698_pe848912_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-fridtuna-light-beige__1057697_pe848913_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 3 seat, Fridtuna light beige",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-fridtuna-light-beige-s29449688/",
				},
				{
					id: "s39442144",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 839,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 3 seat",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-gransel-natural__1057490_pe848852_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-gransel-natural__1057489_pe848850_s5.jpg",
					imageAlt: "SÖDERHAMN Sectional, 3 seat, Gransel natural",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-gransel-natural-s39442144/",
				},
				{
					id: "s89305757",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 889,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-loveseat-with-chaise-viarp-beige-brown__0802703_pe768551_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-loveseat-with-chaise-viarp-beige-brown__0802702_pe768550_s5.jpg",
					imageAlt:
						"SÖDERHAMN Loveseat, with chaise/Viarp beige/brown",
					url: "https://www.ikea.com/us/en/p/soederhamn-loveseat-with-chaise-viarp-beige-brown-s89305757/",
				},
				{
					id: "s69452099",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 739,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 3 seat",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-tonerud-gray__1057810_pe848992_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-tonerud-gray__1057809_pe848993_s5.jpg",
					imageAlt: "SÖDERHAMN Sectional, 3 seat, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-tonerud-gray-s69452099/",
				},
			],
		},
		{
			id: "90504906",
			name: "KEDJEBO",
			price: {
				currency: "USD",
				currentPrice: 119.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Ottoman",
			image: "https://www.ikea.com/us/en/images/products/kedjebo-ottoman-brown-beige__0998160_pe822950_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kedjebo-ottoman-brown-beige__0998161_pe822952_s5.jpg",
			imageAlt: "KEDJEBO Ottoman, brown/beige",
			url: "https://www.ikea.com/us/en/p/kedjebo-ottoman-brown-beige-90504906/",
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
					name: "Ottomans",
					key: "20926",
				},
				{
					name: "Fabric ottomans",
					key: "20927",
				},
			],
			variants: [],
		},
		{
			id: "s49484614",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 849,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/kivik-sofa-hillared-anthracite__0479959_pe619105_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sofa-hillared-anthracite__0788746_pe763718_s5.jpg",
			imageAlt: "KIVIK Sofa, Hillared anthracite",
			url: "https://www.ikea.com/us/en/p/kivik-sofa-hillared-anthracite-s49484614/",
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
		{
			id: "s79262334",
			name: "ASKHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 179,
				discounted: false,
			},
			measurement: "",
			typeName: "Table and 2 folding chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/askholmen-table-and-2-folding-chairs-outdoor-light-brown-stained-froesoen-duvholmen-beige__0735578_pe740069_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/askholmen-table-and-2-folding-chairs-outdoor-light-brown-stained-froesoen-duvholmen-beige__0907282_pe618999_s5.jpg",
			imageAlt:
				"ASKHOLMEN Table and 2 folding chairs, outdoor, light brown stained/Frösön/Duvholmen beige",
			url: "https://www.ikea.com/us/en/p/askholmen-table-and-2-folding-chairs-outdoor-light-brown-stained-froesoen-duvholmen-beige-s79262334/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "30542497",
			name: "HAVSTEN",
			price: {
				currency: "USD",
				currentPrice: 280,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair, outdoor",
			image: "https://www.ikea.com/us/en/images/products/havsten-armchair-outdoor-beige__1138954_pe880159_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/havsten-armchair-outdoor-beige__0773285_pe756249_s5.jpg",
			imageAlt: "HAVSTEN Armchair, outdoor, beige",
			url: "https://www.ikea.com/us/en/p/havsten-armchair-outdoor-beige-30542497/",
			categoryPath: [
				{
					name: "Outdoor",
					key: "od001",
				},
				{
					name: "Outdoor furniture",
					key: "od003",
				},
				{
					name: "Outdoor seating",
					key: "700350",
				},
				{
					name: "Outdoor sofa sections",
					key: "21961",
				},
			],
			variants: [],
		},
		{
			id: "s19442423",
			name: "SMEDSTORP",
			price: {
				currency: "USD",
				currentPrice: 999,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/smedstorp-loveseat-djuparp-dark-gray-black__0989819_pe818621_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/smedstorp-loveseat-djuparp-dark-gray-black__0989964_pe818690_s5.jpg",
			imageAlt: "SMEDSTORP Loveseat, Djuparp dark gray/black",
			url: "https://www.ikea.com/us/en/p/smedstorp-loveseat-djuparp-dark-gray-black-s19442423/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [],
		},
		{
			id: "s09542866",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1649,
				discounted: false,
			},
			measurement: "",
			typeName: "Sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-gunnared-beige__0686075_pe721576_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-gunnared-beige__0787232_pe763195_s5.jpg",
			imageAlt: "FINNALA Sleeper sofa, Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sleeper-sofa-gunnared-beige-s09542866/",
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
			variants: [
				{
					id: "s89542872",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1749,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-tallmyra-beige__0686091_pe721586_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-tallmyra-beige__0828966_pe721585_s5.jpg",
					imageAlt: "FINNALA Sleeper sofa, Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sleeper-sofa-tallmyra-beige-s89542872/",
				},
				{
					id: "s29542870",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1649,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-orrsta-black-blue__0686086_pe721582_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-orrsta-black-blue__0686087_pe721583_s5.jpg",
					imageAlt: "FINNALA Sleeper sofa, Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sleeper-sofa-orrsta-black-blue-s29542870/",
				},
				{
					id: "s49542874",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1749,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-tallmyra-black-gray__0686097_pe721592_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-tallmyra-black-gray__0787236_pe763192_s5.jpg",
					imageAlt: "FINNALA Sleeper sofa, Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sleeper-sofa-tallmyra-black-gray-s49542874/",
				},
				{
					id: "s69542868",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1649,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-gunnared-medium-gray__0686085_pe721581_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-gunnared-medium-gray__0787233_pe763196_s5.jpg",
					imageAlt: "FINNALA Sleeper sofa, Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sleeper-sofa-gunnared-medium-gray-s69542868/",
				},
				{
					id: "s59542859",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-dalstorp-multicolor__0725564_pe734951_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-dalstorp-multicolor__0787230_pe763193_s5.jpg",
					imageAlt: "FINNALA Sleeper sofa, Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sleeper-sofa-dalstorp-multicolor-s59542859/",
				},
			],
		},
		{
			id: "30449908",
			name: "LACK",
			price: {
				currency: "USD",
				currentPrice: 14.99,
				discounted: false,
			},
			measurement: '21 5/8x21 5/8 "',
			typeName: "Side table",
			image: "https://www.ikea.com/us/en/images/products/lack-side-table-white__0702210_pe724345_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lack-side-table-white__1057263_pe848812_s5.jpg",
			imageAlt: 'LACK Side table, white, 21 5/8x21 5/8 "',
			url: "https://www.ikea.com/us/en/p/lack-side-table-white-30449908/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "s19011777",
			name: "MELLTORP",
			price: {
				currency: "USD",
				currentPrice: 99.99,
				discounted: false,
			},
			measurement: '49 1/4x29 1/2 "',
			typeName: "Table",
			image: "https://www.ikea.com/us/en/images/products/melltorp-table-white__0737266_pe740964_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/melltorp-table-white__1028690_pe835489_s5.jpg",
			imageAlt: 'MELLTORP Table, white, 49 1/4x29 1/2 "',
			url: "https://www.ikea.com/us/en/p/melltorp-table-white-s19011777/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Dining tables",
					key: "21825",
				},
				{
					name: "Up to 4 seats",
					key: "21826",
				},
			],
			variants: [
				{
					id: "s39011781",
					name: "MELLTORP",
					price: {
						currency: "USD",
						currentPrice: 59.99,
						discounted: false,
					},
					measurement: '29 1/2x29 1/2 "',
					typeName: "Table",
					image: "https://www.ikea.com/us/en/images/products/melltorp-table-white__0737267_pe740965_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/melltorp-table-white__1028689_pe835493_s5.jpg",
					imageAlt: 'MELLTORP Table, white, 29 1/2x29 1/2 "',
					url: "https://www.ikea.com/us/en/p/melltorp-table-white-s39011781/",
				},
			],
		},
		{
			id: "20200456",
			name: "HEMNES",
			price: {
				currency: "USD",
				currentPrice: 99.99,
				discounted: true,
			},
			measurement: '18 1/8x13 3/4 "',
			typeName: "Nightstand",
			image: "https://www.ikea.com/us/en/images/products/hemnes-nightstand-white-stain__0624424_pe691831_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/hemnes-nightstand-white-stain__0380136_pe555081_s5.jpg",
			imageAlt: 'HEMNES Nightstand, white stain, 18 1/8x13 3/4 "',
			url: "https://www.ikea.com/us/en/p/hemnes-nightstand-white-stain-20200456/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "14630009",
			name: "INGO",
			price: {
				currency: "USD",
				currentPrice: 99.99,
				discounted: false,
			},
			measurement: '47 1/4x29 1/2 "',
			typeName: "Table",
			image: "https://www.ikea.com/us/en/images/products/ingo-table-pine__0737092_pe740877_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ingo-table-pine__0437150_pe590696_s5.jpg",
			imageAlt: 'INGO Table, pine, 47 1/4x29 1/2 "',
			url: "https://www.ikea.com/us/en/p/ingo-table-pine-14630009/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Dining tables",
					key: "21825",
				},
				{
					name: "Up to 4 seats",
					key: "21826",
				},
			],
			variants: [],
		},
		{
			id: "80430746",
			name: "SYVDE",
			price: {
				currency: "USD",
				currentPrice: 249.99,
				discounted: false,
			},
			measurement: '39 1/2x19 "',
			typeName: "Dressing table",
			image: "https://www.ikea.com/us/en/images/products/syvde-dressing-table-white__0747849_pe753575_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/syvde-dressing-table-white__1119463_pe873518_s5.jpg",
			imageAlt: 'SYVDE Dressing table, white, 39 1/2x19 "',
			url: "https://www.ikea.com/us/en/p/syvde-dressing-table-white-80430746/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Makeup vanities & dressing tables",
					key: "20657",
				},
			],
			variants: [],
		},
		{
			id: "s79319019",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1049,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/finnala-loveseat-gunnared-beige__0514354_pe639442_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-loveseat-gunnared-beige__0787225_pe763188_s5.jpg",
			imageAlt: "FINNALA Loveseat, Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-loveseat-gunnared-beige-s79319019/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s19318923",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/finnala-loveseat-tallmyra-beige__0570250_pe666202_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-loveseat-tallmyra-beige__0787228_pe763191_s5.jpg",
					imageAlt: "FINNALA Loveseat, Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-loveseat-tallmyra-beige-s19318923/",
				},
				{
					id: "s99319023",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/finnala-loveseat-orrsta-black-blue__0514242_pe639386_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-loveseat-orrsta-black-blue__0787227_pe763190_s5.jpg",
					imageAlt: "FINNALA Loveseat, Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-loveseat-orrsta-black-blue-s99319023/",
				},
				{
					id: "s39319021",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1049,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/finnala-loveseat-gunnared-medium-gray__0514356_pe639445_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-loveseat-gunnared-medium-gray__0787226_pe763189_s5.jpg",
					imageAlt: "FINNALA Loveseat, Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-loveseat-gunnared-medium-gray-s39319021/",
				},
				{
					id: "s69318925",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/finnala-loveseat-tallmyra-black-gray__0570231_pe666194_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-loveseat-tallmyra-black-gray__0787229_pe763199_s5.jpg",
					imageAlt: "FINNALA Loveseat, Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-loveseat-tallmyra-black-gray-s69318925/",
				},
				{
					id: "s49319394",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/finnala-loveseat-dalstorp-multicolor__0725529_pe734918_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-loveseat-dalstorp-multicolor__0787223_pe763186_s5.jpg",
					imageAlt: "FINNALA Loveseat, Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-loveseat-dalstorp-multicolor-s49319394/",
				},
			],
		},
		{
			id: "20295930",
			name: "TINGBY",
			price: {
				currency: "USD",
				currentPrice: 64.99,
				discounted: false,
			},
			measurement: '19 5/8x19 5/8 "',
			typeName: "Side table on casters",
			image: "https://www.ikea.com/us/en/images/products/tingby-side-table-on-casters-white__0441842_pe593578_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/tingby-side-table-on-casters-white__0726714_ph143344_s5.jpg",
			imageAlt: 'TINGBY Side table on casters, white, 19 5/8x19 5/8 "',
			url: "https://www.ikea.com/us/en/p/tingby-side-table-on-casters-white-20295930/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "End tables & side tables",
					key: "10717",
				},
			],
			variants: [],
		},
		{
			id: "s59305706",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 949,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-sofa-viarp-beige-brown__0802692_pe768543_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-sofa-viarp-beige-brown__0802691_pe768544_s5.jpg",
			imageAlt: "SÖDERHAMN Sofa, Viarp beige/brown",
			url: "https://www.ikea.com/us/en/p/soederhamn-sofa-viarp-beige-brown-s59305706/",
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
			variants: [
				{
					id: "s09449694",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-light-beige__1057770_pe848964_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-light-beige__1110997_pe870630_s5.jpg",
					imageAlt: "SÖDERHAMN Sofa, Fridtuna light beige",
					url: "https://www.ikea.com/us/en/p/soederhamn-sofa-fridtuna-light-beige-s09449694/",
				},
				{
					id: "s79442161",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sofa-gransel-natural__1057651_pe848865_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sofa-gransel-natural__1057650_pe848866_s5.jpg",
					imageAlt: "SÖDERHAMN Sofa, Gransel natural",
					url: "https://www.ikea.com/us/en/p/soederhamn-sofa-gransel-natural-s79442161/",
				},
				{
					id: "s19452105",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sofa-tonerud-gray__1057838_pe849017_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sofa-tonerud-gray__1057837_pe849018_s5.jpg",
					imageAlt: "SÖDERHAMN Sofa, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sofa-tonerud-gray-s19452105/",
				},
				{
					id: "s49449625",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-dark-gray__1057767_pe848961_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sofa-fridtuna-dark-gray__1057766_pe848962_s5.jpg",
					imageAlt: "SÖDERHAMN Sofa, Fridtuna dark gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sofa-fridtuna-dark-gray-s49449625/",
				},
			],
		},
		{
			id: "s59393185",
			name: "BACKSÄLEN",
			price: {
				currency: "USD",
				currentPrice: 849,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-blekinge-white__0950583_pe800522_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-blekinge-white__0950584_pe800523_s5.jpg",
			imageAlt: "BACKSÄLEN Sofa with chaise, Blekinge white",
			url: "https://www.ikea.com/us/en/p/backsaelen-sofa-with-chaise-blekinge-white-s59393185/",
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
					name: "Sofas with chaise",
					key: "47388",
				},
			],
			variants: [
				{
					id: "s29393196",
					name: "BACKSÄLEN",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-katorp-natural__0950586_pe800516_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-katorp-natural__0950587_pe800517_s5.jpg",
					imageAlt: "BACKSÄLEN Sofa with chaise, Katorp natural",
					url: "https://www.ikea.com/us/en/p/backsaelen-sofa-with-chaise-katorp-natural-s29393196/",
				},
				{
					id: "s39393191",
					name: "BACKSÄLEN",
					price: {
						currency: "USD",
						currentPrice: 899,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa with chaise",
					image: "https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-hallarp-gray__0950589_pe800519_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-hallarp-gray__0950590_pe800524_s5.jpg",
					imageAlt: "BACKSÄLEN Sofa with chaise, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/backsaelen-sofa-with-chaise-hallarp-gray-s39393191/",
				},
			],
		},
		{
			id: "s69304645",
			name: "VINLIDEN",
			price: {
				currency: "USD",
				currentPrice: 749,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-beige__0852744_pe780233_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-beige__0852745_pe780234_s5.jpg",
			imageAlt: "VINLIDEN Sofa, Hakebo beige",
			url: "https://www.ikea.com/us/en/p/vinliden-sofa-hakebo-beige-s69304645/",
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
			variants: [
				{
					id: "s69555549",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 769,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-light-turquoise-birch__0992133_pe819823_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-light-turquoise-birch__0975401_pe812762_s5.jpg",
					imageAlt: "VINLIDEN Sofa, Hakebo/light turquoise birch",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-hakebo-light-turquoise-birch-s69555549/",
				},
				{
					id: "s69555554",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 819,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hillared-anthracite-birch__0992133_pe819823_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-hillared-anthracite-birch__0929113_pe790144_s5.jpg",
					imageAlt: "VINLIDEN Sofa, Hillared/anthracite birch",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-hillared-anthracite-birch-s69555554/",
				},
				{
					id: "s79555539",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 769,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-beige-birch__0992133_pe819823_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-beige-birch__0929111_pe790143_s5.jpg",
					imageAlt: "VINLIDEN Sofa, Hakebo/beige birch",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-hakebo-beige-birch-s79555539/",
				},
				{
					id: "s39304656",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-dark-gray__0852747_pe780236_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-dark-gray__0852748_pe780241_s5.jpg",
					imageAlt: "VINLIDEN Sofa, Hakebo dark gray",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-hakebo-dark-gray-s39304656/",
				},
				{
					id: "s89304668",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hillared-anthracite__0852750_pe780239_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-hillared-anthracite__0852751_pe780240_s5.jpg",
					imageAlt: "VINLIDEN Sofa, Hillared anthracite",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-hillared-anthracite-s89304668/",
				},
				{
					id: "s19304662",
					name: "VINLIDEN",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-light-turquoise__0938990_pe794368_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vinliden-sofa-hakebo-light-turquoise__0938991_pe794367_s5.jpg",
					imageAlt: "VINLIDEN Sofa, Hakebo light turquoise",
					url: "https://www.ikea.com/us/en/p/vinliden-sofa-hakebo-light-turquoise-s19304662/",
				},
			],
		},
		{
			id: "s09319254",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 2399,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 5-seat corner",
			image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-gunnared-beige__0514333_pe639415_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-gunnared-beige__0778350_pe758920_s5.jpg",
			imageAlt: "FINNALA Sectional, 5-seat corner, Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-gunnared-beige-s09319254/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s79319260",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-tallmyra-beige__0570245_pe666210_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-tallmyra-beige__0778353_pe758914_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-tallmyra-beige-s79319260/",
				},
				{
					id: "s19319258",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-orrsta-black-blue__0514232_pe639373_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-orrsta-black-blue__0778352_pe758915_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-orrsta-black-blue-s19319258/",
				},
				{
					id: "s39319262",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2499,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-tallmyra-black-gray__0570226_pe666179_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-tallmyra-black-gray__0778354_pe758917_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-tallmyra-black-gray-s39319262/",
				},
				{
					id: "s59319256",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-gunnared-medium-gray__0514335_pe639424_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-gunnared-medium-gray__0778351_pe758921_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-gunnared-medium-gray-s59319256/",
				},
				{
					id: "s99319443",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-dalstorp-multicolor__0725533_pe734917_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-5-seat-corner-dalstorp-multicolor__0782158_pe761114_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 5-seat corner, Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-5-seat-corner-dalstorp-multicolor-s99319443/",
				},
			],
		},
		{
			id: "s29319229",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 2299,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat corner",
			image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-gunnared-beige__0514330_pe639412_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-gunnared-beige__0778342_pe758913_s5.jpg",
			imageAlt: "FINNALA Sectional, 4-seat corner, Gunnared beige",
			url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-gunnared-beige-s29319229/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s99319235",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-tallmyra-beige__0570243_pe666206_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-tallmyra-beige__0778345_pe758911_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-tallmyra-beige-s99319235/",
				},
				{
					id: "s49319233",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-orrsta-black-blue__0514230_pe639392_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-orrsta-black-blue__0778344_pe758909_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-orrsta-black-blue-s49319233/",
				},
				{
					id: "s59319237",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-tallmyra-black-gray__0570224_pe666183_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-tallmyra-black-gray__0778346_pe758912_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-tallmyra-black-gray-s59319237/",
				},
				{
					id: "s89319231",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-gunnared-medium-gray__0514332_pe639414_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-gunnared-medium-gray__0778343_pe758910_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-gunnared-medium-gray-s89319231/",
				},
				{
					id: "s89319434",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-dalstorp-multicolor__0725523_pe734913_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-dalstorp-multicolor__0782155_pe761107_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-dalstorp-multicolor-s89319434/",
				},
			],
		},
		{
			id: "s69336123",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 1634,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-gunnared-medium-gray__0579295_pe675187_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-gunnared-medium-gray__0778438_pe758978_s5.jpg",
			imageAlt:
				"FINNALA Sofa, with chaise with headrest/Gunnared medium gray",
			url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-with-headrest-gunnared-medium-gray-s69336123/",
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
			variants: [
				{
					id: "s09336121",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1634,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-gunnared-beige__0579304_pe675191_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-gunnared-beige__0778437_pe758977_s5.jpg",
					imageAlt:
						"FINNALA Sofa, with chaise with headrest/Gunnared beige",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-with-headrest-gunnared-beige-s09336121/",
				},
				{
					id: "s79336127",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1734,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-tallmyra-beige__0579296_pe675181_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-tallmyra-beige__0778440_pe758980_s5.jpg",
					imageAlt:
						"FINNALA Sofa, with chaise with headrest/Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-with-headrest-tallmyra-beige-s79336127/",
				},
				{
					id: "s19336125",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1634,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-orrsta-black-blue__0579303_pe675185_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-orrsta-black-blue__0778439_pe758983_s5.jpg",
					imageAlt:
						"FINNALA Sofa, with chaise with headrest/Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-with-headrest-orrsta-black-blue-s19336125/",
				},
				{
					id: "s39336129",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1734,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-tallmyra-black-gray__0579299_pe675183_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-tallmyra-black-gray__0778441_pe758981_s5.jpg",
					imageAlt:
						"FINNALA Sofa, with chaise with headrest/Tallmyra black/gray",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-with-headrest-tallmyra-black-gray-s39336129/",
				},
				{
					id: "s49336119",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 1584,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-dalstorp-multicolor__0725522_pe734912_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sofa-with-chaise-with-headrest-dalstorp-multicolor__0782159_pe761111_s5.jpg",
					imageAlt:
						"FINNALA Sofa, with chaise with headrest/Dalstorp multicolor",
					url: "https://www.ikea.com/us/en/p/finnala-sofa-with-chaise-with-headrest-dalstorp-multicolor-s49336119/",
				},
			],
		},
		{
			id: "s89320282",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 1599,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-ljungen-medium-gray__0577279_pe668740_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-ljungen-medium-gray__0778701_pe759087_s5.jpg",
			imageAlt: "HÄRLANDA Sofa, with chaise/Ljungen medium gray",
			url: "https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-ljungen-medium-gray-s89320282/",
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
			variants: [
				{
					id: "s99320286",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-sporda-natural__0577301_pe668756_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-sporda-natural__0778703_pe759084_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, with chaise/Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-sporda-natural-s99320286/",
				},
				{
					id: "s49320284",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-sporda-dark-gray__0577290_pe668751_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-sporda-dark-gray__0778702_pe759083_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, with chaise/Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-sporda-dark-gray-s49320284/",
				},
				{
					id: "s29320280",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-ljungen-light-green__0577265_pe668719_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-ljungen-light-green__0778700_pe759081_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, with chaise/Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-ljungen-light-green-s29320280/",
				},
				{
					id: "s69320278",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1599,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-ljungen-light-red__0852564_pe780170_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-ljungen-light-red__0852566_pe780171_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, with chaise/Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-ljungen-light-red-s69320278/",
				},
				{
					id: "s09320276",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1549,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-inseros-white__0577221_pe668689_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sofa-with-chaise-inseros-white__0778697_pe759078_s5.jpg",
					imageAlt: "HÄRLANDA Sofa, with chaise/Inseros white",
					url: "https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-inseros-white-s09320276/",
				},
			],
		},
		{
			id: "20497202",
			name: "BACKSÄLEN",
			price: {
				currency: "USD",
				currentPrice: 79,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa",
			image: "https://www.ikea.com/us/en/images/products/backsaelen-cover-for-sofa-blekinge-white__0950634_pe800555_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/backsaelen-cover-for-sofa-blekinge-white__0826799_pe776410_s5.jpg",
			imageAlt: "BACKSÄLEN Cover for sofa, Blekinge white",
			url: "https://www.ikea.com/us/en/p/backsaelen-cover-for-sofa-blekinge-white-20497202/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "BACKSÄLEN covers",
					key: "54993",
				},
			],
			variants: [
				{
					id: "80497242",
					name: "BACKSÄLEN",
					price: {
						currency: "USD",
						currentPrice: 129,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/backsaelen-cover-for-sofa-katorp-natural__0950636_pe800560_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/backsaelen-cover-for-sofa-katorp-natural__0950195_pe800207_s5.jpg",
					imageAlt: "BACKSÄLEN Cover for sofa, Katorp natural",
					url: "https://www.ikea.com/us/en/p/backsaelen-cover-for-sofa-katorp-natural-80497242/",
				},
				{
					id: "70497252",
					name: "BACKSÄLEN",
					price: {
						currency: "USD",
						currentPrice: 129,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/backsaelen-cover-for-sofa-hallarp-gray__0950638_pe800559_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/backsaelen-cover-for-sofa-hallarp-gray__0826814_pe776412_s5.jpg",
					imageAlt: "BACKSÄLEN Cover for sofa, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/backsaelen-cover-for-sofa-hallarp-gray-70497252/",
				},
			],
		},
		{
			id: "s09320295",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 2199,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat corner",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-inseros-white__0577214_pe668686_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-inseros-white__0778932_pe759166_s5.jpg",
			imageAlt: "HÄRLANDA Sectional, 4-seat corner, Inseros white",
			url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-corner-inseros-white-s09320295/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s59320306",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-sporda-natural__0577294_pe668760_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-sporda-natural__0778938_pe759173_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat corner, Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-corner-sporda-natural-s59320306/",
				},
				{
					id: "s09320304",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2399,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-sporda-dark-gray__0577283_pe668741_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-sporda-dark-gray__0778937_pe759167_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat corner, Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-corner-sporda-dark-gray-s09320304/",
				},
				{
					id: "s49320302",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-ljungen-medium-gray__0577272_pe668731_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-ljungen-medium-gray__0778936_pe759172_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat corner, Ljungen medium gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-corner-ljungen-medium-gray-s49320302/",
				},
				{
					id: "s29320299",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-ljungen-light-green__0577258_pe668729_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-ljungen-light-green__0778935_pe759175_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat corner, Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-corner-ljungen-light-green-s29320299/",
				},
				{
					id: "s69320297",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-ljungen-light-red__0916356_pe785127_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-corner-ljungen-light-red__0852474_pe780097_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat corner, Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-corner-ljungen-light-red-s69320297/",
				},
			],
		},
		{
			id: "s69320339",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 2849,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 5-seat corner",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-medium-gray__0577275_pe668732_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-medium-gray__0787563_pe763289_s5.jpg",
			imageAlt:
				"HÄRLANDA Sectional, 5-seat corner, with chaise/Ljungen medium gray",
			url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-medium-gray-s69320339/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s89320343",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-sporda-natural__0577297_pe668761_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-sporda-natural__0787565_pe763288_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, with chaise/Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-with-chaise-sporda-natural-s89320343/",
				},
				{
					id: "s29320341",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2999,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-sporda-dark-gray__0577286_pe668742_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-sporda-dark-gray__0787564_pe763284_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, with chaise/Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-with-chaise-sporda-dark-gray-s29320341/",
				},
				{
					id: "s09320337",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-light-green__0577261_pe668726_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-light-green__0787562_pe763292_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, with chaise/Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-light-green-s09320337/",
				},
				{
					id: "s49320335",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2849,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-light-red__0852487_pe780106_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-light-red__0852488_pe780109_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, with chaise/Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-with-chaise-ljungen-light-red-s49320335/",
				},
				{
					id: "s99320333",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2749,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 5-seat corner",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-inseros-white__0577217_pe668693_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-5-seat-corner-with-chaise-inseros-white__0787559_pe763290_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 5-seat corner, with chaise/Inseros white",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-5-seat-corner-with-chaise-inseros-white-s99320333/",
				},
			],
		},
		{
			id: "s59305891",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 1198,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 3-seat corner",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-viarp-beige-brown__0802711_pe768555_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-viarp-beige-brown__0802710_pe768557_s5.jpg",
			imageAlt: "SÖDERHAMN Sectional, 3-seat corner, Viarp beige/brown",
			url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-corner-viarp-beige-brown-s59305891/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s99449661",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1108,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 3-seat corner",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-fridtuna-light-beige__1057725_pe848937_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-fridtuna-light-beige__1057724_pe848938_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 3-seat corner, Fridtuna light beige",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-corner-fridtuna-light-beige-s99449661/",
				},
				{
					id: "s39452072",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1068,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 3-seat corner",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-tonerud-gray__1057821_pe849003_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-tonerud-gray__1057820_pe849004_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 3-seat corner, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-corner-tonerud-gray-s39452072/",
				},
				{
					id: "s69449587",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1108,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 3-seat corner",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-fridtuna-dark-gray__1057720_pe848933_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-3-seat-corner-fridtuna-dark-gray__1057719_pe848934_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 3-seat corner, Fridtuna dark gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-3-seat-corner-fridtuna-dark-gray-s69449587/",
				},
			],
		},
		{
			id: "s69329764",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 519,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-armchair-viarp-beige__0802651_pe768532_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-armchair-viarp-beige__1097384_ph178493_s5.jpg",
			imageAlt: "SÖDERHAMN Armchair, Viarp beige",
			url: "https://www.ikea.com/us/en/p/soederhamn-armchair-viarp-beige-s69329764/",
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
			variants: [
				{
					id: "s39442101",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-armchair-gransel-natural__1057499_pe848857_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-armchair-gransel-natural__1057498_pe848858_s5.jpg",
					imageAlt: "SÖDERHAMN Armchair, Gransel natural",
					url: "https://www.ikea.com/us/en/p/soederhamn-armchair-gransel-natural-s39442101/",
				},
				{
					id: "s49452062",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 479,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-armchair-tonerud-gray__1057816_pe848998_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-armchair-tonerud-gray__1057815_pe848999_s5.jpg",
					imageAlt: "SÖDERHAMN Armchair, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-armchair-tonerud-gray-s49452062/",
				},
				{
					id: "s79449577",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 499,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-armchair-fridtuna-dark-gray__1057710_pe848923_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-armchair-fridtuna-dark-gray__1057709_pe848924_s5.jpg",
					imageAlt: "SÖDERHAMN Armchair, Fridtuna dark gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-armchair-fridtuna-dark-gray-s79449577/",
				},
			],
		},
		{
			id: "s69440577",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 2099,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 6 seat",
			image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-tibbleby-beige-gray__1056152_pe848285_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-tibbleby-beige-gray__1056154_pe848287_s5.jpg",
			imageAlt: "KIVIK Sectional, 6 seat, Tibbleby beige/gray",
			url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-tibbleby-beige-gray-s69440577/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s59443067",
					name: "KIVIK",
					price: {
						currency: "USD",
						currentPrice: 2149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 6 seat",
					image: "https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-kelinge-gray-turquoise__1055851_pe848129_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/kivik-sectional-6-seat-kelinge-gray-turquoise__1055850_pe848130_s5.jpg",
					imageAlt: "KIVIK Sectional, 6 seat, Kelinge gray-turquoise",
					url: "https://www.ikea.com/us/en/p/kivik-sectional-6-seat-kelinge-gray-turquoise-s59443067/",
				},
			],
		},
		{
			id: "s19320308",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 2099,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-inseros-white__0577222_pe668690_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-inseros-white__0778725_pe759106_s5.jpg",
			imageAlt: "HÄRLANDA Sectional, 4-seat, with chaise/Inseros white",
			url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-inseros-white-s19320308/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s09320318",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-natural__0577302_pe668762_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-natural__0778731_pe759111_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-sporda-natural-s09320318/",
				},
				{
					id: "s49320316",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-dark-gray__0577291_pe668747_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-dark-gray__0778730_pe759110_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-sporda-dark-gray-s49320316/",
				},
				{
					id: "s99320314",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-medium-gray__0577280_pe668736_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-medium-gray__0778729_pe759109_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Ljungen medium gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-ljungen-medium-gray-s99320314/",
				},
				{
					id: "s39320312",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-green__0577266_pe668722_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-green__0810557_pe771320_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-ljungen-light-green-s39320312/",
				},
				{
					id: "s79320310",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 2149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-red__0852576_pe780181_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-red__0852565_pe780172_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-ljungen-light-red-s79320310/",
				},
			],
		},
		{
			id: "s59320641",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 199,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-inseros-white__0820745_pe666600_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-inseros-white__0577221_pe668689_s5.jpg",
			imageAlt: "HÄRLANDA Cover for sofa, with chaise/Inseros white",
			url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-with-chaise-inseros-white-s59320641/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "HÄRLANDA covers",
					key: "47444",
				},
			],
			variants: [
				{
					id: "s49320651",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 349,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-sporda-natural__0820765_pe666593_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-sporda-natural__0577301_pe668756_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa, with chaise/Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-with-chaise-sporda-natural-s49320651/",
				},
				{
					id: "s29320647",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 249,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-ljungen-medium-gray__0852641_pe666606_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-ljungen-medium-gray__0577279_pe668740_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa, with chaise/Ljungen medium gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-with-chaise-ljungen-medium-gray-s29320647/",
				},
				{
					id: "s89320649",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 349,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-sporda-dark-gray__0820767_pe666596_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-sporda-dark-gray__0577290_pe668751_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa, with chaise/Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-with-chaise-sporda-dark-gray-s89320649/",
				},
				{
					id: "s69320645",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 249,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-ljungen-light-green__0820763_pe666612_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-ljungen-light-green__0577265_pe668719_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa, with chaise/Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-with-chaise-ljungen-light-green-s69320645/",
				},
				{
					id: "s19320643",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 249,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-ljungen-light-red__0852592_pe780196_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-cover-for-sofa-with-chaise-ljungen-light-red__0852564_pe780170_s5.jpg",
					imageAlt:
						"HÄRLANDA Cover for sofa, with chaise/Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-cover-for-sofa-with-chaise-ljungen-light-red-s19320643/",
				},
			],
		},
		{
			id: "s59393717",
			name: "TÄRNÖ",
			price: {
				currency: "USD",
				currentPrice: 219,
				discounted: false,
			},
			measurement: "",
			typeName: "Table and 4 chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/taernoe-table-and-4-chairs-outdoor-black-light-brown-stained-kuddarna-gray__0947436_pe798563_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/taernoe-table-and-4-chairs-outdoor-black-light-brown-stained-kuddarna-gray__0947437_pe798564_s5.jpg",
			imageAlt:
				"TÄRNÖ Table and 4 chairs, outdoor, black/light brown stained/Kuddarna gray",
			url: "https://www.ikea.com/us/en/p/taernoe-table-and-4-chairs-outdoor-black-light-brown-stained-kuddarna-gray-s59393717/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "s49422796",
			name: "JUTHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 125,
				discounted: false,
			},
			measurement: '25 5/8x28 3/4x28 "',
			typeName: "Chair, outdoor",
			image: "https://www.ikea.com/us/en/images/products/jutholmen-chair-outdoor-dark-gray-kuddarna-beige__0835237_pe778356_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jutholmen-chair-outdoor-dark-gray-kuddarna-beige__0984337_ph176189_s5.jpg",
			imageAlt:
				'JUTHOLMEN Chair, outdoor, dark gray/Kuddarna beige, 25 5/8x28 3/4x28 "',
			url: "https://www.ikea.com/us/en/p/jutholmen-chair-outdoor-dark-gray-kuddarna-beige-s49422796/",
			categoryPath: [
				{
					name: "Outdoor",
					key: "od001",
				},
				{
					name: "Outdoor furniture",
					key: "od003",
				},
				{
					name: "Outdoor seating",
					key: "700350",
				},
				{
					name: "Outdoor chairs",
					key: "21964",
				},
				{
					name: "Outdoor lounge chairs",
					key: "21962",
				},
			],
			variants: [],
		},
		{
			id: "s09336135",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 2004,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat corner",
			image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-dalstorp-multicolor__0766712_pe753877_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-dalstorp-multicolor__0782156_pe761108_s5.jpg",
			imageAlt:
				"FINNALA Sectional, 4-seat corner, with open end with headrests/Dalstorp multicolor",
			url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-with-open-end-with-headrests-dalstorp-multicolor-s09336135/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s49336143",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2184,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-tallmyra-beige__0579260_pe675215_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-tallmyra-beige__0778431_pe758966_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, with open end with headrests/Tallmyra beige",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-with-open-end-with-headrests-tallmyra-beige-s49336143/",
				},
				{
					id: "s69336137",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2044,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-gunnared-beige__0579259_pe675214_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-gunnared-beige__0778428_pe758971_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, with open end with headrests/Gunnared beige",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-with-open-end-with-headrests-gunnared-beige-s69336137/",
				},
				{
					id: "s89336141",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2034,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-orrsta-black-blue__0579263_pe675218_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-orrsta-black-blue__0778430_pe758965_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, with open end with headrests/Orrsta black-blue",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-with-open-end-with-headrests-orrsta-black-blue-s89336141/",
				},
				{
					id: "s29336139",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 2044,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-gunnared-medium-gray__0579267_pe675221_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-with-open-end-with-headrests-gunnared-medium-gray__0778429_pe758968_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, with open end with headrests/Gunnared medium gray",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-with-open-end-with-headrests-gunnared-medium-gray-s29336139/",
				},
			],
		},
		{
			id: "s29409178",
			name: "FINNALA",
			price: {
				currency: "USD",
				currentPrice: 3199,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat corner",
			image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-grann-bomstad-golden-brown__0817650_pe774074_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-grann-bomstad-golden-brown__0817649_pe774075_s5.jpg",
			imageAlt:
				"FINNALA Sectional, 4-seat corner, Grann/Bomstad golden brown",
			url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-grann-bomstad-golden-brown-s29409178/",
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
					name: "Leather & faux leather sofas",
					key: "10662",
				},
				{
					name: "Leather/faux leather sectionals",
					key: "10693",
				},
			],
			variants: [
				{
					id: "s49409177",
					name: "FINNALA",
					price: {
						currency: "USD",
						currentPrice: 3199,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat corner",
					image: "https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-grann-bomstad-black__0817648_pe774076_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/finnala-sectional-4-seat-corner-grann-bomstad-black__0817647_pe774073_s5.jpg",
					imageAlt:
						"FINNALA Sectional, 4-seat corner, Grann/Bomstad black",
					url: "https://www.ikea.com/us/en/p/finnala-sectional-4-seat-corner-grann-bomstad-black-s49409177/",
				},
			],
		},
		{
			id: "s49429547",
			name: "TROTTEN",
			price: {
				currency: "USD",
				currentPrice: 149.99,
				discounted: false,
			},
			measurement: '47 1/4x23 5/8 "',
			typeName: "Desk",
			image: "https://www.ikea.com/us/en/images/products/trotten-desk-beige-anthracite__1020747_pe831975_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trotten-desk-beige-anthracite__1192505_pe901123_s5.jpg",
			imageAlt: 'TROTTEN Desk, beige/anthracite, 47 1/4x23 5/8 "',
			url: "https://www.ikea.com/us/en/p/trotten-desk-beige-anthracite-s49429547/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Table & desk systems",
					key: "47423",
				},
				{
					name: "TROTTEN system",
					key: "55989",
				},
				{
					name: "TROTTEN office desks & tables",
					key: "55993",
				},
			],
			variants: [],
		},
		{
			id: "20547075",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 169,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa",
			image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-karlshov-beige-multicolor__1194859_pe902109_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-karlshov-beige-multicolor__1194799_pe902060_s5.jpg",
			imageAlt: "UPPLAND Cover for sofa, Karlshov beige/multicolor",
			url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-karlshov-beige-multicolor-20547075/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "UPPLAND covers",
					key: "50959",
				},
			],
			variants: [
				{
					id: "00485399",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 69,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-totebo-light-beige__0818573_pe774495_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-totebo-light-beige__0826817_pe776415_s5.jpg",
					imageAlt: "UPPLAND Cover for sofa, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-totebo-light-beige-00485399/",
				},
				{
					id: "60472775",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 169,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-hallarp-beige__0818569_pe774497_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-hallarp-beige__0826813_pe776411_s5.jpg",
					imageAlt: "UPPLAND Cover for sofa, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-hallarp-beige-60472775/",
				},
				{
					id: "40472776",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-remmarn-light-gray__0924992_pe788686_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-remmarn-light-gray__0826815_pe776416_s5.jpg",
					imageAlt: "UPPLAND Cover for sofa, Remmarn light gray",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-remmarn-light-gray-40472776/",
				},
				{
					id: "80472779",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-virestad-red-white__0818575_pe774491_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-virestad-red-white__0826818_pe776413_s5.jpg",
					imageAlt: "UPPLAND Cover for sofa, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-virestad-red-white-80472779/",
				},
				{
					id: "00472778",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 69,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-totebo-dark-turquoise__0818571_pe774493_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-totebo-dark-turquoise__0826816_pe776414_s5.jpg",
					imageAlt: "UPPLAND Cover for sofa, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-totebo-dark-turquoise-00472778/",
				},
				{
					id: "50487635",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 119,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa",
					image: "https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-blekinge-white__0818565_pe774487_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-cover-for-sofa-blekinge-white__0261000_pe404970_s5.jpg",
					imageAlt: "UPPLAND Cover for sofa, Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-cover-for-sofa-blekinge-white-50487635/",
				},
			],
		},
		{
			id: "s49502123",
			name: "POÄNG",
			price: {
				currency: "USD",
				currentPrice: 269,
				discounted: false,
			},
			measurement: "",
			typeName: "Rocking chair",
			image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-dark-gray__1192280_pe900986_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-dark-gray__1192279_pe901001_s5.jpg",
			imageAlt: "POÄNG Rocking chair, black-brown/Gunnared dark gray",
			url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-black-brown-gunnared-dark-gray-s49502123/",
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
			variants: [
				{
					id: "s99502045",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 269,
						discounted: false,
					},
					measurement: "",
					typeName: "Rocking chair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-beige__1192301_pe901011_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-beige__1192300_pe901010_s5.jpg",
					imageAlt: "POÄNG Rocking chair, black-brown/Gunnared beige",
					url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-black-brown-gunnared-beige-s99502045/",
				},
				{
					id: "s79502206",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 269,
						discounted: false,
					},
					measurement: "",
					typeName: "Rocking chair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-blue__1192304_pe901014_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-blue__1192303_pe901013_s5.jpg",
					imageAlt: "POÄNG Rocking chair, black-brown/Gunnared blue",
					url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-black-brown-gunnared-blue-s79502206/",
				},
				{
					id: "s99501965",
					name: "POÄNG",
					price: {
						currency: "USD",
						currentPrice: 269,
						discounted: false,
					},
					measurement: "",
					typeName: "Rocking chair",
					image: "https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-light-green__1192307_pe900971_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/poaeng-rocking-chair-black-brown-gunnared-light-green__1192306_pe901016_s5.jpg",
					imageAlt:
						"POÄNG Rocking chair, black-brown/Gunnared light green",
					url: "https://www.ikea.com/us/en/p/poaeng-rocking-chair-black-brown-gunnared-light-green-s99501965/",
				},
			],
		},
		{
			id: "s79488615",
			name: "UPPLAND",
			price: {
				currency: "USD",
				currentPrice: 799,
				discounted: false,
			},
			measurement: "",
			typeName: "Loveseat",
			image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-karlshov-gray-beige__1194837_pe902083_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/uppland-loveseat-karlshov-gray-beige__1194836_pe902082_s5.jpg",
			imageAlt: "UPPLAND Loveseat, Karlshov gray-beige",
			url: "https://www.ikea.com/us/en/p/uppland-loveseat-karlshov-gray-beige-s79488615/",
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
					name: "Two-seat sofas",
					key: "10668",
				},
			],
			variants: [
				{
					id: "s69337679",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-totebo-light-beige__0818550_pe774481_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-loveseat-totebo-light-beige__0818548_pe774479_s5.jpg",
					imageAlt: "UPPLAND Loveseat, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/uppland-loveseat-totebo-light-beige-s69337679/",
				},
				{
					id: "s79322366",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-hallarp-beige__0818539_pe774470_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-loveseat-hallarp-beige__0818540_pe774471_s5.jpg",
					imageAlt: "UPPLAND Loveseat, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/uppland-loveseat-hallarp-beige-s79322366/",
				},
				{
					id: "s29322364",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 799,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-hallarp-gray__0818538_pe774469_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-loveseat-hallarp-gray__0818536_pe774467_s5.jpg",
					imageAlt: "UPPLAND Loveseat, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/uppland-loveseat-hallarp-gray-s29322364/",
				},
				{
					id: "s59322372",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 699,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-totebo-dark-turquoise__0818547_pe774478_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-loveseat-totebo-dark-turquoise__0818545_pe774476_s5.jpg",
					imageAlt: "UPPLAND Loveseat, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/uppland-loveseat-totebo-dark-turquoise-s59322372/",
				},
				{
					id: "s69384114",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-blekinge-white__0818535_pe774466_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-loveseat-blekinge-white__0818533_pe774484_s5.jpg",
					imageAlt: "UPPLAND Loveseat, Blekinge white",
					url: "https://www.ikea.com/us/en/p/uppland-loveseat-blekinge-white-s69384114/",
				},
				{
					id: "s49324913",
					name: "UPPLAND",
					price: {
						currency: "USD",
						currentPrice: 749,
						discounted: false,
					},
					measurement: "",
					typeName: "Loveseat",
					image: "https://www.ikea.com/us/en/images/products/uppland-loveseat-virestad-red-white__0818553_pe774465_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/uppland-loveseat-virestad-red-white__0818551_pe774482_s5.jpg",
					imageAlt: "UPPLAND Loveseat, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/uppland-loveseat-virestad-red-white-s49324913/",
				},
			],
		},
		{
			id: "20503284",
			name: "RENBERGET",
			price: {
				currency: "USD",
				currentPrice: 89.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Swivel chair",
			image: "https://www.ikea.com/us/en/images/products/renberget-swivel-chair-bomstad-black__1020135_pe831794_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/renberget-swivel-chair-bomstad-black__1025981_pe834276_s5.jpg",
			imageAlt: "RENBERGET Swivel chair, Bomstad black",
			url: "https://www.ikea.com/us/en/p/renberget-swivel-chair-bomstad-black-20503284/",
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
					name: "Desk chairs",
					key: "20652",
				},
				{
					name: "Desk chairs for home",
					key: "20653",
				},
			],
			variants: [],
		},
		{
			id: "80507627",
			name: "UTESPELARE",
			price: {
				currency: "USD",
				currentPrice: 269.99,
				discounted: false,
			},
			measurement: '63x31 1/2 "',
			typeName: "Gaming desk",
			image: "https://www.ikea.com/us/en/images/products/utespelare-gaming-desk-black__0985179_pe816538_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/utespelare-gaming-desk-black__0997777_pe822755_s5.jpg",
			imageAlt: 'UTESPELARE Gaming desk, black, 63x31 1/2 "',
			url: "https://www.ikea.com/us/en/p/utespelare-gaming-desk-black-80507627/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Gaming furniture",
					key: "55002",
				},
				{
					name: "Gaming Desks",
					key: "47070",
				},
			],
			variants: [],
		},
		{
			id: "90467838",
			name: "BJÖRKÅSEN",
			price: {
				currency: "USD",
				currentPrice: 49.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Laptop stand",
			image: "https://www.ikea.com/us/en/images/products/bjoerkasen-laptop-stand-beige__0955982_pe804391_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bjoerkasen-laptop-stand-beige__0964125_pe808907_s5.jpg",
			imageAlt: "BJÖRKÅSEN Laptop stand, beige",
			url: "https://www.ikea.com/us/en/p/bjoerkasen-laptop-stand-beige-90467838/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Laptop tables",
					key: "24830",
				},
			],
			variants: [],
		},
		{
			id: "90489029",
			name: "FLINTAN",
			price: {
				currency: "USD",
				currentPrice: 99.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Office chair",
			image: "https://www.ikea.com/us/en/images/products/flintan-office-chair-black__1007236_pe825956_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/flintan-office-chair-black__1182932_pe897353_s5.jpg",
			imageAlt: "FLINTAN Office chair, black",
			url: "https://www.ikea.com/us/en/p/flintan-office-chair-black-90489029/",
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
					name: "Desk chairs",
					key: "20652",
				},
				{
					name: "Desk chairs for home",
					key: "20653",
				},
			],
			variants: [
				{
					id: "00492205",
					name: "FLINTAN",
					price: {
						currency: "USD",
						currentPrice: 99.99,
						discounted: false,
					},
					measurement: "",
					typeName: "Office chair",
					image: "https://www.ikea.com/us/en/images/products/flintan-office-chair-beige__1007198_pe825954_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/flintan-office-chair-beige__1023912_pe833342_s5.jpg",
					imageAlt: "FLINTAN Office chair, beige",
					url: "https://www.ikea.com/us/en/p/flintan-office-chair-beige-00492205/",
				},
			],
		},
		{
			id: "20472701",
			name: "HEMNES",
			price: {
				currency: "USD",
				currentPrice: 449,
				discounted: false,
			},
			measurement: "Twin",
			typeName: "Daybed frame with 3 drawers",
			image: "https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-gray__1163073_pe890114_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/hemnes-daybed-frame-with-3-drawers-gray__1101306_pe866575_s5.jpg",
			imageAlt: "HEMNES Daybed frame with 3 drawers, gray, Twin",
			url: "https://www.ikea.com/us/en/p/hemnes-daybed-frame-with-3-drawers-gray-20472701/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Twin & single beds",
					key: "16285",
				},
			],
			variants: [],
		},
		{
			id: "s39396321",
			name: "RODULF",
			price: {
				currency: "USD",
				currentPrice: 459.99,
				discounted: false,
			},
			measurement: '55 1/8x31 1/2 "',
			typeName: "Desk sit/stand",
			image: "https://www.ikea.com/us/en/images/products/rodulf-desk-sit-stand-gray-white__0799317_pe767519_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/rodulf-desk-sit-stand-gray-white__0805072_pe769442_s5.jpg",
			imageAlt: 'RODULF Desk sit/stand, gray/white, 55 1/8x31 1/2 "',
			url: "https://www.ikea.com/us/en/p/rodulf-desk-sit-stand-gray-white-s39396321/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Desks for home",
					key: "20651",
				},
			],
			variants: [],
		},
		{
			id: "s09444333",
			name: "FRIHETEN / KLAGSHAMN",
			price: {
				currency: "USD",
				currentPrice: 999,
				discounted: true,
			},
			measurement: "",
			typeName: "Sleeper sectional,3 seat w/storage",
			image: "https://www.ikea.com/us/en/images/products/friheten-klagshamn-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray__1057056_pe848725_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/friheten-klagshamn-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray__0833845_pe603738_s5.jpg",
			imageAlt:
				"FRIHETEN / KLAGSHAMN Sleeper sectional,3 seat w/storage, Skiftebo dark gray",
			url: "https://www.ikea.com/us/en/p/friheten-klagshamn-sleeper-sectional-3-seat-w-storage-skiftebo-dark-gray-s09444333/",
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
					name: "Sleeper sofas & sofa beds",
					key: "10663",
				},
				{
					name: "Convertible sofa beds & futons",
					key: "20874",
				},
			],
			variants: [
				{
					id: "s89444329",
					name: "FRIHETEN / KLAGSHAMN",
					price: {
						currency: "USD",
						currentPrice: 999,
						discounted: true,
					},
					measurement: "",
					typeName: "Sleeper sectional,3 seat w/storage",
					image: "https://www.ikea.com/us/en/images/products/friheten-klagshamn-sleeper-sectional-3-seat-w-storage-skiftebo-blue__1057054_pe848723_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/friheten-klagshamn-sleeper-sectional-3-seat-w-storage-skiftebo-blue__1057055_pe848724_s5.jpg",
					imageAlt:
						"FRIHETEN / KLAGSHAMN Sleeper sectional,3 seat w/storage, Skiftebo blue",
					url: "https://www.ikea.com/us/en/p/friheten-klagshamn-sleeper-sectional-3-seat-w-storage-skiftebo-blue-s89444329/",
				},
			],
		},
		{
			id: "s49434389",
			name: "TROTTEN",
			price: {
				currency: "USD",
				currentPrice: 149.99,
				discounted: false,
			},
			measurement: '47 1/4x27 1/2 "',
			typeName: "Desk",
			image: "https://www.ikea.com/us/en/images/products/trotten-desk-beige-white__1020750_pe831977_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trotten-desk-beige-white__1187424_pe899210_s5.jpg",
			imageAlt: 'TROTTEN Desk, beige/white, 47 1/4x27 1/2 "',
			url: "https://www.ikea.com/us/en/p/trotten-desk-beige-white-s49434389/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Table & desk systems",
					key: "47423",
				},
				{
					name: "TROTTEN system",
					key: "55989",
				},
				{
					name: "TROTTEN office desks & tables",
					key: "55993",
				},
			],
			variants: [],
		},
		{
			id: "10417526",
			name: "KARLJAN",
			price: {
				currency: "USD",
				currentPrice: 55,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/karljan-chair-dark-gray-kabusa-dark-gray__0714669_pe730181_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/karljan-chair-dark-gray-kabusa-dark-gray__0745241_pe743639_s5.jpg",
			imageAlt: "KARLJAN Chair, dark gray/Kabusa dark gray",
			url: "https://www.ikea.com/us/en/p/karljan-chair-dark-gray-kabusa-dark-gray-10417526/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Upholstered chairs",
					key: "25221",
				},
			],
			variants: [],
		},
		{
			id: "80513001",
			name: "BURVIK",
			price: {
				currency: "USD",
				currentPrice: 39.99,
				discounted: false,
			},
			measurement: '15 "',
			typeName: "Side table",
			image: "https://www.ikea.com/us/en/images/products/burvik-side-table-light-gray-green__1022514_pe832781_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/burvik-side-table-light-gray-green__1022516_pe832785_s5.jpg",
			imageAlt: 'BURVIK Side table, light gray-green, 15 "',
			url: "https://www.ikea.com/us/en/p/burvik-side-table-light-gray-green-80513001/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "Coffee tables",
					key: "10716",
				},
			],
			variants: [],
		},
		{
			id: "50488734",
			name: "VIHALS",
			price: {
				currency: "USD",
				currentPrice: 74.99,
				discounted: false,
			},
			measurement: '35 7/8x14 5/8 "',
			typeName: "Coffee table",
			image: "https://www.ikea.com/us/en/images/products/vihals-coffee-table-white__1035625_pe838133_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vihals-coffee-table-white__1048005_pe843552_s5.jpg",
			imageAlt: 'VIHALS Coffee table, white, 35 7/8x14 5/8 "',
			url: "https://www.ikea.com/us/en/p/vihals-coffee-table-white-50488734/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Accent tables",
					key: "10705",
				},
				{
					name: "Coffee tables",
					key: "10716",
				},
			],
			variants: [],
		},
		{
			id: "s49406763",
			name: "GLADSTAD",
			price: {
				currency: "USD",
				currentPrice: 349,
				discounted: false,
			},
			measurement: "Twin",
			typeName: "Upholstered bed, 2 storage boxes ",
			image: "https://www.ikea.com/us/en/images/products/gladstad-upholstered-bed-2-storage-boxes-kabusa-light-gray__1151023_pe884728_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/gladstad-upholstered-bed-2-storage-boxes-kabusa-light-gray__1101340_pe866603_s5.jpg",
			imageAlt:
				"GLADSTAD Upholstered bed, 2 storage boxes, Kabusa light gray, Twin",
			url: "https://www.ikea.com/us/en/p/gladstad-upholstered-bed-2-storage-boxes-kabusa-light-gray-s49406763/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Twin & single beds",
					key: "16285",
				},
			],
			variants: [],
		},
		{
			id: "90506236",
			name: "ÄPPLARYD",
			price: {
				currency: "USD",
				currentPrice: 1149,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa",
			image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-lejde-light-gray__0992909_pe820327_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-lejde-light-gray__1023710_pe833226_s5.jpg",
			imageAlt: "ÄPPLARYD Sofa, Lejde light gray",
			url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-lejde-light-gray-90506236/",
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
			variants: [
				{
					id: "90504303",
					name: "ÄPPLARYD",
					price: {
						currency: "USD",
						currentPrice: 1349,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-djuparp-dark-blue__0992903_pe820321_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-djuparp-dark-blue__1023707_pe833225_s5.jpg",
					imageAlt: "ÄPPLARYD Sofa, Djuparp dark blue",
					url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-djuparp-dark-blue-90504303/",
				},
				{
					id: "10504302",
					name: "ÄPPLARYD",
					price: {
						currency: "USD",
						currentPrice: 1349,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-djuparp-red-brown__0992905_pe820323_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-djuparp-red-brown__1034107_pe837534_s5.jpg",
					imageAlt: "ÄPPLARYD Sofa, Djuparp red-brown",
					url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-djuparp-red-brown-10504302/",
				},
				{
					id: "90506241",
					name: "ÄPPLARYD",
					price: {
						currency: "USD",
						currentPrice: 1149,
						discounted: false,
					},
					measurement: "",
					typeName: "Sofa",
					image: "https://www.ikea.com/us/en/images/products/aepplaryd-sofa-lejde-gray-black__0992907_pe820325_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/aepplaryd-sofa-lejde-gray-black__1023709_pe833227_s5.jpg",
					imageAlt: "ÄPPLARYD Sofa, Lejde gray/black",
					url: "https://www.ikea.com/us/en/p/aepplaryd-sofa-lejde-gray-black-90506241/",
				},
			],
		},
		{
			id: "s99011764",
			name: "MELLTORP / MARIUS",
			price: {
				currency: "USD",
				currentPrice: 69.97,
				discounted: false,
			},
			measurement: '29 1/2 "',
			typeName: "Table and 2 stools",
			image: "https://www.ikea.com/us/en/images/products/melltorp-marius-table-and-2-stools-white-black__0737990_pe741291_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/melltorp-marius-table-and-2-stools-white-black__0719974_pe732348_s5.jpg",
			imageAlt:
				'MELLTORP / MARIUS Table and 2 stools, white/black, 29 1/2 "',
			url: "https://www.ikea.com/us/en/p/melltorp-marius-table-and-2-stools-white-black-s99011764/",
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
					name: "Dining sets up to 2 seats",
					key: "36209",
				},
			],
			variants: [],
		},
		{
			id: "50454480",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 249,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sofa section",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-viarp-beige-brown__0832849_pe777854_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-viarp-beige-brown__0802813_pe768605_s5.jpg",
			imageAlt: "SÖDERHAMN Cover for sofa section, Viarp beige/brown",
			url: "https://www.ikea.com/us/en/p/soederhamn-cover-for-sofa-section-viarp-beige-brown-50454480/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "SÖDERHAMN covers",
					key: "22275",
				},
			],
			variants: [
				{
					id: "00519016",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 199,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-fridtuna-light-beige__1105023_pe868002_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-fridtuna-light-beige__1057705_pe848919_s5.jpg",
					imageAlt:
						"SÖDERHAMN Cover for sofa section, Fridtuna light beige",
					url: "https://www.ikea.com/us/en/p/soederhamn-cover-for-sofa-section-fridtuna-light-beige-00519016/",
				},
				{
					id: "30519072",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 199,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-gransel-natural__1105009_pe867998_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-gransel-natural__1057493_pe848854_s5.jpg",
					imageAlt:
						"SÖDERHAMN Cover for sofa section, Gransel natural",
					url: "https://www.ikea.com/us/en/p/soederhamn-cover-for-sofa-section-gransel-natural-30519072/",
				},
				{
					id: "10518988",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 199,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-fridtuna-dark-gray__1105022_pe868003_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-fridtuna-dark-gray__1057701_pe848915_s5.jpg",
					imageAlt:
						"SÖDERHAMN Cover for sofa section, Fridtuna dark gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-cover-for-sofa-section-fridtuna-dark-gray-10518988/",
				},
				{
					id: "80519022",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sofa section",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-tonerud-gray__1105034_pe868006_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-cover-for-sofa-section-tonerud-gray__1057813_pe848995_s5.jpg",
					imageAlt: "SÖDERHAMN Cover for sofa section, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-cover-for-sofa-section-tonerud-gray-80519022/",
				},
			],
		},
		{
			id: "50478768",
			name: "INGOLF",
			price: {
				currency: "USD",
				currentPrice: 115,
				discounted: false,
			},
			measurement: '29 1/2 "',
			typeName: "Bar stool with backrest",
			image: "https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige__1019558_pe831428_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige__0926857_pe789548_s5.jpg",
			imageAlt:
				'INGOLF Bar stool with backrest, brown-black/Nolhaga gray-beige, 29 1/2 "',
			url: "https://www.ikea.com/us/en/p/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige-50478768/",
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
					name: "Bar stools & chairs",
					key: "20864",
				},
			],
			variants: [
				{
					id: "80478762",
					name: "INGOLF",
					price: {
						currency: "USD",
						currentPrice: 105,
						discounted: false,
					},
					measurement: '25 5/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige__1019556_pe831430_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige__0926822_pe789532_s5.jpg",
					imageAlt:
						'INGOLF Bar stool with backrest, brown-black/Nolhaga gray-beige, 25 5/8 "',
					url: "https://www.ikea.com/us/en/p/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige-80478762/",
				},
			],
		},
		{
			id: "60510640",
			name: "JÄRVFJÄLLET",
			price: {
				currency: "USD",
				currentPrice: 369.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Office chair with armrests",
			image: "https://www.ikea.com/us/en/images/products/jaervfjaellet-office-chair-with-armrests-glose-black__1009906_pe827773_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jaervfjaellet-office-chair-with-armrests-glose-black__1182829_pe897305_s5.jpg",
			imageAlt: "JÄRVFJÄLLET Office chair with armrests, Glose black",
			url: "https://www.ikea.com/us/en/p/jaervfjaellet-office-chair-with-armrests-glose-black-60510640/",
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
					name: "Desk chairs",
					key: "20652",
				},
				{
					name: "Desk chairs for home",
					key: "20653",
				},
			],
			variants: [],
		},
		{
			id: "s09325250",
			name: "HÄRLANDA",
			price: {
				currency: "USD",
				currentPrice: 1699,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat",
			image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-medium-gray__0747899_pe744767_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-medium-gray__0747898_pe744750_s5.jpg",
			imageAlt:
				"HÄRLANDA Sectional, 4-seat, with chaise/Ljungen medium gray",
			url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-ljungen-medium-gray-s09325250/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s29325254",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-natural__0747905_pe744754_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-natural__0747904_pe744753_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Sporda natural",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-sporda-natural-s29325254/",
				},
				{
					id: "s69325252",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1799,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-dark-gray__0747902_pe744752_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-sporda-dark-gray__0747901_pe744751_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Sporda dark gray",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-sporda-dark-gray-s69325252/",
				},
				{
					id: "s49325248",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-green__0747896_pe744765_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-green__0747895_pe744749_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Ljungen light green",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-ljungen-light-green-s49325248/",
				},
				{
					id: "s89325246",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-red__0852570_pe780176_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-ljungen-light-red__0852571_pe780177_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Ljungen light red",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-ljungen-light-red-s89325246/",
				},
				{
					id: "s59325243",
					name: "HÄRLANDA",
					price: {
						currency: "USD",
						currentPrice: 1649,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat",
					image: "https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-inseros-white__0747887_pe744745_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/haerlanda-sectional-4-seat-with-chaise-inseros-white__0747886_pe744744_s5.jpg",
					imageAlt:
						"HÄRLANDA Sectional, 4-seat, with chaise/Inseros white",
					url: "https://www.ikea.com/us/en/p/haerlanda-sectional-4-seat-with-chaise-inseros-white-s59325243/",
				},
			],
		},
		{
			id: "s79390770",
			name: "AGEN",
			price: {
				currency: "USD",
				currentPrice: 109.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair with cushion",
			image: "https://www.ikea.com/us/en/images/products/agen-chair-with-cushion-rattan-norna-natural__0920440_pe787034_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/agen-chair-with-cushion-rattan-norna-natural__0920441_pe787033_s5.jpg",
			imageAlt: "AGEN Chair with cushion, rattan/Norna natural",
			url: "https://www.ikea.com/us/en/p/agen-chair-with-cushion-rattan-norna-natural-s79390770/",
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
					name: "Rattan armchairs",
					key: "20907",
				},
			],
			variants: [],
		},
		{
			id: "50321372",
			name: "HOLMSUND",
			price: {
				currency: "USD",
				currentPrice: 149,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-nordvalla-medium-gray__0519543_pe641599_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-nordvalla-medium-gray__0405557_pe577547_s5.jpg",
			imageAlt: "HOLMSUND Cover for sleeper sofa, Nordvalla medium gray",
			url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sofa-nordvalla-medium-gray-50321372/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "HOLMSUND covers",
					key: "39519",
				},
			],
			variants: [
				{
					id: "30321368",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-nordvalla-beige__0515761_pe640020_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-nordvalla-beige__0405558_pe577546_s5.jpg",
					imageAlt:
						"HOLMSUND Cover for sleeper sofa, Nordvalla beige",
					url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sofa-nordvalla-beige-30321368/",
				},
				{
					id: "10387954",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-orrsta-light-blue__0829179_pe658725_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-orrsta-light-blue__0531611_pe647438_s5.jpg",
					imageAlt:
						"HOLMSUND Cover for sleeper sofa, Orrsta light blue",
					url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sofa-orrsta-light-blue-10387954/",
				},
				{
					id: "80387960",
					name: "HOLMSUND",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-orrsta-light-white-gray__0833803_pe658726_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/holmsund-cover-for-sleeper-sofa-orrsta-light-white-gray__0531936_pe647656_s5.jpg",
					imageAlt:
						"HOLMSUND Cover for sleeper sofa, Orrsta light white-gray",
					url: "https://www.ikea.com/us/en/p/holmsund-cover-for-sleeper-sofa-orrsta-light-white-gray-80387960/",
				},
			],
		},
		{
			id: "50492199",
			name: "FLINTAN",
			price: {
				currency: "USD",
				currentPrice: 30,
				discounted: false,
			},
			measurement: "",
			typeName: "Pair of armrests",
			image: "https://www.ikea.com/us/en/images/products/flintan-pair-of-armrests-beige__1007057_pe825950_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/flintan-pair-of-armrests-beige__1121377_pe874224_s5.jpg",
			imageAlt: "FLINTAN Pair of armrests, beige",
			url: "https://www.ikea.com/us/en/p/flintan-pair-of-armrests-beige-50492199/",
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
					name: "Desk chairs",
					key: "20652",
				},
				{
					name: "Desk chairs for home",
					key: "20653",
				},
			],
			variants: [],
		},
		{
			id: "s39305825",
			name: "SÖDERHAMN",
			price: {
				currency: "USD",
				currentPrice: 1379,
				discounted: false,
			},
			measurement: "",
			typeName: "Sectional, 4-seat",
			image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-viarp-beige-brown__0802723_pe768561_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-viarp-beige-brown__0802722_pe768563_s5.jpg",
			imageAlt:
				"SÖDERHAMN Sectional, 4-seat, with chaise and open end/Viarp beige/brown",
			url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-and-open-end-viarp-beige-brown-s39305825/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s29442154",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-with-open-end-gransel-natural__1057665_pe848874_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-with-open-end-gransel-natural__1057664_pe848875_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, with open end Gransel/natural",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-with-open-end-gransel-natural-s29442154/",
				},
				{
					id: "s29449706",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-fridtuna-light-beige__1057797_pe848981_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-fridtuna-light-beige__1057793_pe848979_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, and open end/Fridtuna light beige",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-and-open-end-fridtuna-light-beige-s29449706/",
				},
				{
					id: "s19449636",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1299,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-fridtuna-dark-gray__1057790_pe848976_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-fridtuna-dark-gray__1057789_pe848977_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, and open end Fridtuna/dark gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-and-open-end-fridtuna-dark-gray-s19449636/",
				},
				{
					id: "s49452118",
					name: "SÖDERHAMN",
					price: {
						currency: "USD",
						currentPrice: 1119,
						discounted: false,
					},
					measurement: "",
					typeName: "Sectional, 4-seat with chaise",
					image: "https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-tonerud-gray__1057844_pe849021_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/soederhamn-sectional-4-seat-with-chaise-and-open-end-tonerud-gray__1057843_pe849022_s5.jpg",
					imageAlt:
						"SÖDERHAMN Sectional, 4-seat with chaise, and open end Tonerud/gray",
					url: "https://www.ikea.com/us/en/p/soederhamn-sectional-4-seat-with-chaise-and-open-end-tonerud-gray-s49452118/",
				},
			],
		},
		{
			id: "s09221318",
			name: "EKEDALEN / EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 584.99,
				discounted: false,
			},
			measurement: '47 1/4/70 7/8 "',
			typeName: "Table with 2 chairs and bench",
			image: "https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-table-with-2-chairs-and-bench-dark-brown-orrsta-light-gray__0737694_pe741214_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-table-with-2-chairs-and-bench-dark-brown-orrsta-light-gray__0719978_pe732352_s5.jpg",
			imageAlt:
				'EKEDALEN / EKEDALEN Table with 2 chairs and bench, dark brown/Orrsta light gray, 47 1/4/70 7/8 "',
			url: "https://www.ikea.com/us/en/p/ekedalen-ekedalen-table-with-2-chairs-and-bench-dark-brown-orrsta-light-gray-s09221318/",
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
			variants: [],
		},
		{
			id: "s09428842",
			name: "MELLTORP / KÄTTIL",
			price: {
				currency: "USD",
				currentPrice: 339.99,
				discounted: false,
			},
			measurement: '49 1/4 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/melltorp-kaettil-table-and-4-chairs-white-knisa-light-gray__1016371_pe830349_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/melltorp-kaettil-table-and-4-chairs-white-knisa-light-gray__1028690_pe835489_s5.jpg",
			imageAlt:
				'MELLTORP / KÄTTIL Table and 4 chairs, white/Knisa light gray, 49 1/4 "',
			url: "https://www.ikea.com/us/en/p/melltorp-kaettil-table-and-4-chairs-white-knisa-light-gray-s09428842/",
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
			variants: [],
		},
		{
			id: "s19207897",
			name: "ESPEVÄR",
			price: {
				currency: "USD",
				currentPrice: 320,
				discounted: false,
			},
			measurement: "Queen",
			typeName: "Slatted mattress base with legs",
			image: "https://www.ikea.com/us/en/images/products/espevaer-slatted-mattress-base-with-legs-dark-gray__0490834_pe624703_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/espevaer-slatted-mattress-base-with-legs-dark-gray__0859708_pe624721_s5.jpg",
			imageAlt:
				"ESPEVÄR Slatted mattress base with legs, dark gray, Queen",
			url: "https://www.ikea.com/us/en/p/espevaer-slatted-mattress-base-with-legs-dark-gray-s19207897/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Beds",
					key: "bm003",
				},
				{
					name: "Full, Queen and King beds",
					key: "16284",
				},
			],
			variants: [
				{
					id: "s59207862",
					name: "ESPEVÄR",
					price: {
						currency: "USD",
						currentPrice: 300,
						discounted: false,
					},
					measurement: "Full",
					typeName: "Slatted mattress base with legs",
					image: "https://www.ikea.com/us/en/images/products/espevaer-slatted-mattress-base-with-legs-dark-gray__0490834_pe624703_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/espevaer-slatted-mattress-base-with-legs-dark-gray__0859708_pe624721_s5.jpg",
					imageAlt:
						"ESPEVÄR Slatted mattress base with legs, dark gray, Full",
					url: "https://www.ikea.com/us/en/p/espevaer-slatted-mattress-base-with-legs-dark-gray-s59207862/",
				},
				{
					id: "s79207880",
					name: "ESPEVÄR",
					price: {
						currency: "USD",
						currentPrice: 420,
						discounted: false,
					},
					measurement: "King",
					typeName: "Slatted mattress base with legs",
					image: "https://www.ikea.com/us/en/images/products/espevaer-slatted-mattress-base-with-legs-dark-gray__0490838_pe624707_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/espevaer-slatted-mattress-base-with-legs-dark-gray__0859708_pe624721_s5.jpg",
					imageAlt:
						"ESPEVÄR Slatted mattress base with legs, dark gray, King",
					url: "https://www.ikea.com/us/en/p/espevaer-slatted-mattress-base-with-legs-dark-gray-s79207880/",
				},
			],
		},
		{
			id: "s59484562",
			name: "KIVIK",
			price: {
				currency: "USD",
				currentPrice: 1299,
				discounted: false,
			},
			measurement: "",
			typeName: "Sofa with chaise",
			image: "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-hillared-anthracite__0479956_pe619108_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-hillared-anthracite__0777309_pe758514_s5.jpg",
			imageAlt: "KIVIK Sofa with chaise, Hillared anthracite",
			url: "https://www.ikea.com/us/en/p/kivik-sofa-with-chaise-hillared-anthracite-s59484562/",
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
		{
			id: "s29485252",
			name: "JÄTTEBO",
			price: {
				currency: "USD",
				currentPrice: 3510,
				discounted: false,
			},
			measurement: "",
			typeName: "Mod corner sofa, 6 seat",
			image: "https://www.ikea.com/us/en/images/products/jaettebo-mod-corner-sofa-6-seat-samsala-dark-yellow-green__1109619_pe870109_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jaettebo-mod-corner-sofa-6-seat-samsala-dark-yellow-green__1139958_pe880599_s5.jpg",
			imageAlt:
				"JÄTTEBO Mod corner sofa, 6 seat, Samsala dark yellow-green",
			url: "https://www.ikea.com/us/en/p/jaettebo-mod-corner-sofa-6-seat-samsala-dark-yellow-green-s29485252/",
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
					name: "Sectionals",
					key: "10671",
				},
			],
			variants: [
				{
					id: "s99485258",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 3510,
						discounted: false,
					},
					measurement: "",
					typeName: "Mod corner sofa, 6 seat",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-mod-corner-sofa-6-seat-samsala-gray-beige__1109622_pe870110_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-mod-corner-sofa-6-seat-samsala-gray-beige__1139960_pe880597_s5.jpg",
					imageAlt:
						"JÄTTEBO Mod corner sofa, 6 seat, Samsala gray-beige",
					url: "https://www.ikea.com/us/en/p/jaettebo-mod-corner-sofa-6-seat-samsala-gray-beige-s99485258/",
				},
				{
					id: "s79485264",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 3405,
						discounted: false,
					},
					measurement: "",
					typeName: "Mod corner sofa, 6 seat",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-mod-corner-sofa-6-seat-tonerud-gray__1109621_pe870111_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-mod-corner-sofa-6-seat-tonerud-gray__1139959_pe880598_s5.jpg",
					imageAlt: "JÄTTEBO Mod corner sofa, 6 seat, Tonerud gray",
					url: "https://www.ikea.com/us/en/p/jaettebo-mod-corner-sofa-6-seat-tonerud-gray-s79485264/",
				},
			],
		},
		{
			id: "10542498",
			name: "HAVSTEN",
			price: {
				currency: "USD",
				currentPrice: 350,
				discounted: false,
			},
			measurement: '70 1/2x36 1/4x29 7/8 "',
			typeName: "Loveseat, outdoor",
			image: "https://www.ikea.com/us/en/images/products/havsten-loveseat-outdoor-beige__1138950_pe880155_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/havsten-loveseat-outdoor-beige__0773285_pe756249_s5.jpg",
			imageAlt:
				'HAVSTEN Loveseat, outdoor, beige, 70 1/2x36 1/4x29 7/8 "',
			url: "https://www.ikea.com/us/en/p/havsten-loveseat-outdoor-beige-10542498/",
			categoryPath: [
				{
					name: "Outdoor",
					key: "od001",
				},
				{
					name: "Outdoor furniture",
					key: "od003",
				},
				{
					name: "Outdoor seating",
					key: "700350",
				},
				{
					name: "Outdoor sofa sections",
					key: "21961",
				},
			],
			variants: [],
		},
		{
			id: "40475157",
			name: "VRETSTORP",
			price: {
				currency: "USD",
				currentPrice: 149,
				discounted: false,
			},
			measurement: "",
			typeName: "Cover for sleeper sofa",
			image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-remmarn-light-gray__0818768_pe774600_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-remmarn-light-gray__0826815_pe776416_s5.jpg",
			imageAlt: "VRETSTORP Cover for sleeper sofa, Remmarn light gray",
			url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-remmarn-light-gray-40475157/",
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
					name: "Sofa & armchairs covers",
					key: "10664",
				},
				{
					name: "VRETSTORP covers",
					key: "49972",
				},
			],
			variants: [
				{
					id: "50485368",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-totebo-light-beige__0818776_pe774608_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-totebo-light-beige__0826817_pe776415_s5.jpg",
					imageAlt:
						"VRETSTORP Cover for sleeper sofa, Totebo light beige",
					url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-totebo-light-beige-50485368/",
				},
				{
					id: "80475155",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 199,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-hallarp-beige__0818764_pe774597_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-hallarp-beige__0826813_pe776411_s5.jpg",
					imageAlt: "VRETSTORP Cover for sleeper sofa, Hallarp beige",
					url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-hallarp-beige-80475155/",
				},
				{
					id: "10475154",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 199,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-hallarp-gray__0818760_pe774593_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-hallarp-gray__0826814_pe776412_s5.jpg",
					imageAlt: "VRETSTORP Cover for sleeper sofa, Hallarp gray",
					url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-hallarp-gray-10475154/",
				},
				{
					id: "60475161",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-virestad-red-white__0818780_pe774612_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-virestad-red-white__0826818_pe776413_s5.jpg",
					imageAlt:
						"VRETSTORP Cover for sleeper sofa, Virestad red/white",
					url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-virestad-red-white-60475161/",
				},
				{
					id: "00475159",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-totebo-dark-turquoise__0818772_pe774604_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-totebo-dark-turquoise__0826816_pe776414_s5.jpg",
					imageAlt:
						"VRETSTORP Cover for sleeper sofa, Totebo dark turquoise",
					url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-totebo-dark-turquoise-00475159/",
				},
				{
					id: "10487680",
					name: "VRETSTORP",
					price: {
						currency: "USD",
						currentPrice: 149,
						discounted: false,
					},
					measurement: "",
					typeName: "Cover for sleeper sofa",
					image: "https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-blekinge-white__0818756_pe774590_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/vretstorp-cover-for-sleeper-sofa-blekinge-white__0826799_pe776410_s5.jpg",
					imageAlt:
						"VRETSTORP Cover for sleeper sofa, Blekinge white",
					url: "https://www.ikea.com/us/en/p/vretstorp-cover-for-sleeper-sofa-blekinge-white-10487680/",
				},
			],
		},
		{
			id: "s39269021",
			name: "LÄCKÖ",
			price: {
				currency: "USD",
				currentPrice: 199,
				discounted: false,
			},
			measurement: "",
			typeName: "Table+2 chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/laeckoe-table-2-chairs-outdoor-gray-froesoen-duvholmen-beige__0735586_pe740067_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/laeckoe-table-2-chairs-outdoor-gray-froesoen-duvholmen-beige__0958674_pe805410_s5.jpg",
			imageAlt:
				"LÄCKÖ Table+2 chairs, outdoor, gray/Frösön/Duvholmen beige",
			url: "https://www.ikea.com/us/en/p/laeckoe-table-2-chairs-outdoor-gray-froesoen-duvholmen-beige-s39269021/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "s39469497",
			name: "JÄTTEBO",
			price: {
				currency: "USD",
				currentPrice: 2720,
				discounted: false,
			},
			measurement: "",
			typeName: "3.5-seat mod sofa w chaise",
			image: "https://www.ikea.com/us/en/images/products/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-samsala-dark-yellow-green__1109589_pe870079_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-samsala-dark-yellow-green__1159782_ph184810_s5.jpg",
			imageAlt:
				"JÄTTEBO 3.5-seat mod sofa w chaise, armrests Samsala/dark yellow-green",
			url: "https://www.ikea.com/us/en/p/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-samsala-dark-yellow-green-s39469497/",
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
					name: "Modular fabric sofas",
					key: "15358",
				},
			],
			variants: [
				{
					id: "s19471383",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 2720,
						discounted: false,
					},
					measurement: "",
					typeName: "3.5-seat mod sofa w chaise",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-samsala-gray-beige__1109590_pe870082_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-samsala-gray-beige__1139926_pe880577_s5.jpg",
					imageAlt:
						"JÄTTEBO 3.5-seat mod sofa w chaise, armrests Samsala/gray-beige",
					url: "https://www.ikea.com/us/en/p/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-samsala-gray-beige-s19471383/",
				},
				{
					id: "s39471382",
					name: "JÄTTEBO",
					price: {
						currency: "USD",
						currentPrice: 2585,
						discounted: false,
					},
					measurement: "",
					typeName: "3.5-seat mod sofa w chaise",
					image: "https://www.ikea.com/us/en/images/products/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-tonerud-gray__1109592_pe870083_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-tonerud-gray__1139927_pe880576_s5.jpg",
					imageAlt:
						"JÄTTEBO 3.5-seat mod sofa w chaise, armrests/Tonerud gray",
					url: "https://www.ikea.com/us/en/p/jaettebo-3-5-seat-mod-sofa-w-chaise-armrests-tonerud-gray-s39471382/",
				},
			],
		},
		{
			id: "s09412902",
			name: "BONDHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 1299,
				discounted: false,
			},
			measurement: "",
			typeName: "Table + 6 reclining chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-kuddarna-gray__0961406_pe807553_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-kuddarna-gray__1092059_pe862700_s5.jpg",
			imageAlt:
				"BONDHOLMEN Table + 6 reclining chairs, outdoor, gray stained/Kuddarna gray",
			url: "https://www.ikea.com/us/en/p/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-kuddarna-gray-s09412902/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s59412886",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1299,
						discounted: false,
					},
					measurement: "",
					typeName: "Table + 6 reclining chairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-kuddarna-beige__0961405_pe807563_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-kuddarna-beige__1092059_pe862700_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table + 6 reclining chairs, outdoor, gray stained/Kuddarna beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-kuddarna-beige-s59412886/",
				},
				{
					id: "s79412908",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1509,
						discounted: false,
					},
					measurement: "",
					typeName: "Table + 6 reclining chairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-froesoen-duvholmen-beige__0961399_pe807566_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-froesoen-duvholmen-beige__0961400_pe807543_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table + 6 reclining chairs, outdoor, gray stained/Frösön/Duvholmen beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-froesoen-duvholmen-beige-s79412908/",
				},
				{
					id: "s29413076",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1569,
						discounted: false,
					},
					measurement: "",
					typeName: "Table + 6 reclining chairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-jaerpoen-duvholmen-white__0961404_pe807546_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-jaerpoen-duvholmen-white__1092059_pe862700_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table + 6 reclining chairs, outdoor, gray stained/Järpön/Duvholmen white",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-jaerpoen-duvholmen-white-s29413076/",
				},
				{
					id: "s59412914",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1509,
						discounted: false,
					},
					measurement: "",
					typeName: "Table + 6 reclining chairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-froesoen-duvholmen-dark-gray__0961398_pe807542_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-froesoen-duvholmen-dark-gray__1092059_pe862700_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table + 6 reclining chairs, outdoor, gray stained/Frösön/Duvholmen dark gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-reclining-chairs-outdoor-gray-stained-froesoen-duvholmen-dark-gray-s59412914/",
				},
			],
		},
		{
			id: "s89495106",
			name: "MÖRBYLÅNGA / LILLÅNÄS",
			price: {
				currency: "USD",
				currentPrice: 1259,
				discounted: false,
			},
			measurement: '55 1/8x33 1/2 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/moerbylanga-lillanaes-table-and-4-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-beige__1150414_pe884531_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/moerbylanga-lillanaes-table-and-4-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-beige__1150413_pe884532_s5.jpg",
			imageAlt:
				'MÖRBYLÅNGA / LILLÅNÄS Table and 4 chairs, oak veneer brown stained/chrome plated Gunnared beige, 55 1/8x33 1/2 "',
			url: "https://www.ikea.com/us/en/p/moerbylanga-lillanaes-table-and-4-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-beige-s89495106/",
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
			variants: [],
		},
		{
			id: "s99422770",
			name: "JUTHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 609.99,
				discounted: false,
			},
			measurement: "",
			typeName: "4-seat conversation set, outdoor",
			image: "https://www.ikea.com/us/en/images/products/jutholmen-4-seat-conversation-set-outdoor-dark-gray-kuddarna-beige__0835233_pe778351_s5.jpg",
			imageAlt:
				"JUTHOLMEN 4-seat conversation set, outdoor, dark gray/Kuddarna beige",
			url: "https://www.ikea.com/us/en/p/jutholmen-4-seat-conversation-set-outdoor-dark-gray-kuddarna-beige-s99422770/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor sectionals & sofas",
					key: "21960",
				},
			],
			variants: [],
		},
		{
			id: "s39442380",
			name: "MORABO",
			price: {
				currency: "USD",
				currentPrice: 1699,
				discounted: true,
			},
			measurement: "",
			typeName: "5-seat sofa with chaises",
			image: "https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-dark-gray-metal__0602494_pe680402_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-dark-gray-metal__0834574_pe680403_s5.jpg",
			imageAlt:
				"MORABO 5-seat sofa with chaises, Gunnared dark gray/metal",
			url: "https://www.ikea.com/us/en/p/morabo-5-seat-sofa-with-chaises-gunnared-dark-gray-metal-s39442380/",
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
					name: "Sofas with chaise",
					key: "47388",
				},
			],
			variants: [
				{
					id: "s09442386",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1999,
						discounted: true,
					},
					measurement: "",
					typeName: "5-seat sofa with chaises",
					image: "https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-djuparp-dark-blue-metal__0990583_pe819068_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-djuparp-dark-blue-metal__0990584_pe819069_s5.jpg",
					imageAlt:
						"MORABO 5-seat sofa with chaises, Djuparp dark blue/metal",
					url: "https://www.ikea.com/us/en/p/morabo-5-seat-sofa-with-chaises-djuparp-dark-blue-metal-s09442386/",
				},
				{
					id: "s49442394",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1999,
						discounted: true,
					},
					measurement: "",
					typeName: "5-seat sofa with chaises",
					image: "https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-djuparp-dark-blue-wood__0990585_pe819070_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-djuparp-dark-blue-wood__0990586_pe819075_s5.jpg",
					imageAlt:
						"MORABO 5-seat sofa with chaises, Djuparp dark blue/wood",
					url: "https://www.ikea.com/us/en/p/morabo-5-seat-sofa-with-chaises-djuparp-dark-blue-wood-s49442394/",
				},
				{
					id: "s79442383",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: true,
					},
					measurement: "",
					typeName: "5-seat sofa with chaises",
					image: "https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-dark-gray-wood__0602496_pe680404_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-dark-gray-wood__0825377_pe680405_s5.jpg",
					imageAlt:
						"MORABO 5-seat sofa with chaises, Gunnared dark gray/wood",
					url: "https://www.ikea.com/us/en/p/morabo-5-seat-sofa-with-chaises-gunnared-dark-gray-wood-s79442383/",
				},
				{
					id: "s49442389",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: true,
					},
					measurement: "",
					typeName: "5-seat sofa with chaises",
					image: "https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-light-green-metal__0602498_pe680406_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-light-green-metal__0828935_pe680407_s5.jpg",
					imageAlt:
						"MORABO 5-seat sofa with chaises, Gunnared light green/metal",
					url: "https://www.ikea.com/us/en/p/morabo-5-seat-sofa-with-chaises-gunnared-light-green-metal-s49442389/",
				},
				{
					id: "s79442397",
					name: "MORABO",
					price: {
						currency: "USD",
						currentPrice: 1699,
						discounted: true,
					},
					measurement: "",
					typeName: "5-seat sofa with chaises",
					image: "https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-light-green-wood__0602500_pe680408_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/morabo-5-seat-sofa-with-chaises-gunnared-light-green-wood__0828937_pe680409_s5.jpg",
					imageAlt:
						"MORABO 5-seat sofa with chaises, Gunnared light green/wood",
					url: "https://www.ikea.com/us/en/p/morabo-5-seat-sofa-with-chaises-gunnared-light-green-wood-s79442397/",
				},
			],
		},
		{
			id: "80268641",
			name: "LERHAMN",
			price: {
				currency: "USD",
				currentPrice: 55,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__1093052_pe863170_s5.jpg",
			imageAlt: "LERHAMN Chair, black-brown/Vittaryd beige",
			url: "https://www.ikea.com/us/en/p/lerhamn-chair-black-brown-vittaryd-beige-80268641/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [],
		},
		{
			id: "s09266482",
			name: "SJÄLLAND",
			price: {
				currency: "USD",
				currentPrice: 1039,
				discounted: false,
			},
			measurement: '61 1/4x35 1/4 "',
			typeName: "Table+6 armchairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray__0735669_pe740125_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray__0906917_pe671597_s5.jpg",
			imageAlt:
				'SJÄLLAND Table+6 armchairs, outdoor, light brown/Frösön/Duvholmen dark gray, 61 1/4x35 1/4 "',
			url: "https://www.ikea.com/us/en/p/sjaelland-table-6-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray-s09266482/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s39266230",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 1039,
						discounted: false,
					},
					measurement: '61 1/4x35 1/4 "',
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-froesoen-duvholmen-beige__0735670_pe740126_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-froesoen-duvholmen-beige__0908102_pe674428_s5.jpg",
					imageAlt:
						'SJÄLLAND Table+6 armchairs, outdoor, light brown/Frösön/Duvholmen beige, 61 1/4x35 1/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-6-armchairs-outdoor-light-brown-froesoen-duvholmen-beige-s39266230/",
				},
				{
					id: "s99291566",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 949,
						discounted: false,
					},
					measurement: '61 1/4x35 1/4 "',
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-kuddarna-beige__0667478_pe713885_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-kuddarna-beige__0906852_pe671011_s5.jpg",
					imageAlt:
						'SJÄLLAND Table+6 armchairs, outdoor, light brown/Kuddarna beige, 61 1/4x35 1/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-6-armchairs-outdoor-light-brown-kuddarna-beige-s99291566/",
				},
				{
					id: "s79291609",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 949,
						discounted: false,
					},
					measurement: '61 1/4x35 1/4 "',
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-kuddarna-gray__0667500_pe713903_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-6-armchairs-outdoor-light-brown-kuddarna-gray__0906852_pe671011_s5.jpg",
					imageAlt:
						'SJÄLLAND Table+6 armchairs, outdoor, light brown/Kuddarna gray, 61 1/4x35 1/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-6-armchairs-outdoor-light-brown-kuddarna-gray-s79291609/",
				},
			],
		},
		{
			id: "s09326216",
			name: "SOLLERÖN",
			price: {
				currency: "USD",
				currentPrice: 430,
				discounted: false,
			},
			measurement: "",
			typeName: "Armchair, outdoor",
			image: "https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-jaerpoen-duvholmen-white__0788716_pe763698_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-jaerpoen-duvholmen-white__0905413_pe656802_s5.jpg",
			imageAlt:
				"SOLLERÖN Armchair, outdoor, brown/Järpön/Duvholmen white",
			url: "https://www.ikea.com/us/en/p/solleroen-armchair-outdoor-brown-jaerpoen-duvholmen-white-s09326216/",
			categoryPath: [
				{
					name: "Outdoor",
					key: "od001",
				},
				{
					name: "Outdoor furniture",
					key: "od003",
				},
				{
					name: "Outdoor seating",
					key: "700350",
				},
				{
					name: "Outdoor chairs",
					key: "21964",
				},
				{
					name: "Outdoor lounge chairs",
					key: "21962",
				},
			],
			variants: [
				{
					id: "s39252501",
					name: "SOLLERÖN",
					price: {
						currency: "USD",
						currentPrice: 410,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-beige__0589813_pe673481_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-beige__0905413_pe656802_s5.jpg",
					imageAlt:
						"SOLLERÖN Armchair, outdoor, brown/Frösön/Duvholmen beige",
					url: "https://www.ikea.com/us/en/p/solleroen-armchair-outdoor-brown-froesoen-duvholmen-beige-s39252501/",
				},
				{
					id: "s69326275",
					name: "SOLLERÖN",
					price: {
						currency: "USD",
						currentPrice: 430,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-jaerpoen-duvholmen-anthracite__0788714_pe763693_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-jaerpoen-duvholmen-anthracite__0905413_pe656802_s5.jpg",
					imageAlt:
						"SOLLERÖN Armchair, outdoor, brown/Järpön/Duvholmen anthracite",
					url: "https://www.ikea.com/us/en/p/solleroen-armchair-outdoor-brown-jaerpoen-duvholmen-anthracite-s69326275/",
				},
				{
					id: "s89252527",
					name: "SOLLERÖN",
					price: {
						currency: "USD",
						currentPrice: 410,
						discounted: false,
					},
					measurement: "",
					typeName: "Armchair, outdoor",
					image: "https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-dark-gray__0589814_pe673479_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/solleroen-armchair-outdoor-brown-froesoen-duvholmen-dark-gray__0905413_pe656802_s5.jpg",
					imageAlt:
						"SOLLERÖN Armchair, outdoor, brown/Frösön/Duvholmen dark gray",
					url: "https://www.ikea.com/us/en/p/solleroen-armchair-outdoor-brown-froesoen-duvholmen-dark-gray-s89252527/",
				},
			],
		},
		{
			id: "s19477078",
			name: "NORDVIKEN / BERGMUND",
			price: {
				currency: "USD",
				currentPrice: 1139,
				discounted: false,
			},
			measurement: '59 7/8/87 3/4 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/nordviken-bergmund-table-and-4-chairs-white-inseros-white__0950905_pe800808_s5.jpg",
			imageAlt:
				'NORDVIKEN / BERGMUND Table and 4 chairs, white/Inseros white, 59 7/8/87 3/4 "',
			url: "https://www.ikea.com/us/en/p/nordviken-bergmund-table-and-4-chairs-white-inseros-white-s19477078/",
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
					id: "s99477079",
					name: "NORDVIKEN / BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 1139,
						discounted: false,
					},
					measurement: '59 7/8/87 3/4 "',
					typeName: "Table and 4 chairs",
					image: "https://www.ikea.com/us/en/images/products/nordviken-bergmund-table-and-4-chairs-white-kolboda-beige-dark-gray__0950809_pe800718_s5.jpg",
					imageAlt:
						'NORDVIKEN / BERGMUND Table and 4 chairs, white/Kolboda beige/dark gray, 59 7/8/87 3/4 "',
					url: "https://www.ikea.com/us/en/p/nordviken-bergmund-table-and-4-chairs-white-kolboda-beige-dark-gray-s99477079/",
				},
				{
					id: "s39477077",
					name: "NORDVIKEN / BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 1139,
						discounted: false,
					},
					measurement: '59 7/8/87 3/4 "',
					typeName: "Table and 4 chairs",
					image: "https://www.ikea.com/us/en/images/products/nordviken-bergmund-table-and-4-chairs-black-ryrane-dark-blue__0954355_pe803226_s5.jpg",
					imageAlt:
						'NORDVIKEN / BERGMUND Table and 4 chairs, black/Ryrane dark blue, 59 7/8/87 3/4 "',
					url: "https://www.ikea.com/us/en/p/nordviken-bergmund-table-and-4-chairs-black-ryrane-dark-blue-s39477077/",
				},
				{
					id: "s79477080",
					name: "NORDVIKEN / BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 1099,
						discounted: false,
					},
					measurement: '59 7/8/87 3/4 "',
					typeName: "Table and 4 chairs",
					image: "https://www.ikea.com/us/en/images/products/nordviken-bergmund-table-and-4-chairs-white-rommele-dark-blue-white__0950904_pe800735_s5.jpg",
					imageAlt:
						'NORDVIKEN / BERGMUND Table and 4 chairs, white/Rommele dark blue/white, 59 7/8/87 3/4 "',
					url: "https://www.ikea.com/us/en/p/nordviken-bergmund-table-and-4-chairs-white-rommele-dark-blue-white-s79477080/",
				},
				{
					id: "s59477076",
					name: "NORDVIKEN / BERGMUND",
					price: {
						currency: "USD",
						currentPrice: 1139,
						discounted: false,
					},
					measurement: '59 7/8/87 3/4 "',
					typeName: "Table and 4 chairs",
					image: "https://www.ikea.com/us/en/images/products/nordviken-bergmund-table-and-4-chairs-black-inseros-white-black__0954356_pe803227_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/nordviken-bergmund-table-and-4-chairs-black-inseros-white-black__1061497_pe850482_s5.jpg",
					imageAlt:
						'NORDVIKEN / BERGMUND Table and 4 chairs, black/Inseros white/black, 59 7/8/87 3/4 "',
					url: "https://www.ikea.com/us/en/p/nordviken-bergmund-table-and-4-chairs-black-inseros-white-black-s59477076/",
				},
			],
		},
		{
			id: "s59436608",
			name: "VINGSÖN",
			price: {
				currency: "USD",
				currentPrice: 509.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Wing chair, in/outdoor",
			image: "https://www.ikea.com/us/en/images/products/vingsoen-wing-chair-in-outdoor-gray-jaerpoen-duvholmen-anthracite__1078906_pe857321_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vingsoen-wing-chair-in-outdoor-gray-jaerpoen-duvholmen-anthracite__1077685_pe856967_s5.jpg",
			imageAlt:
				"VINGSÖN Wing chair, in/outdoor, gray/Järpön/Duvholmen anthracite",
			url: "https://www.ikea.com/us/en/p/vingsoen-wing-chair-in-outdoor-gray-jaerpoen-duvholmen-anthracite-s59436608/",
			categoryPath: [
				{
					name: "Outdoor",
					key: "od001",
				},
				{
					name: "Outdoor furniture",
					key: "od003",
				},
				{
					name: "Outdoor seating",
					key: "700350",
				},
				{
					name: "Outdoor chairs",
					key: "21964",
				},
				{
					name: "Outdoor lounge chairs",
					key: "21962",
				},
			],
			variants: [],
		},
		{
			id: "30115066",
			name: "NISSE",
			price: {
				currency: "USD",
				currentPrice: 20,
				discounted: false,
			},
			measurement: "",
			typeName: "Folding chair",
			image: "https://www.ikea.com/us/en/images/products/nisse-folding-chair-black__0728163_pe736118_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/nisse-folding-chair-black__0873625_pe596005_s5.jpg",
			imageAlt: "NISSE Folding chair, black",
			url: "https://www.ikea.com/us/en/p/nisse-folding-chair-black-30115066/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Folding chairs",
					key: "25222",
				},
			],
			variants: [],
		},
		{
			id: "60217799",
			name: "GUNDE",
			price: {
				currency: "USD",
				currentPrice: 12.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Folding chair",
			image: "https://www.ikea.com/us/en/images/products/gunde-folding-chair-white__0728314_pe736185_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/gunde-folding-chair-white__0872569_pe595993_s5.jpg",
			imageAlt: "GUNDE Folding chair, white",
			url: "https://www.ikea.com/us/en/p/gunde-folding-chair-white-60217799/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Folding chairs",
					key: "25222",
				},
			],
			variants: [],
		},
		{
			id: "40507605",
			name: "MATCHSPEL",
			price: {
				currency: "USD",
				currentPrice: 289.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Gaming chair",
			image: "https://www.ikea.com/us/en/images/products/matchspel-gaming-chair-bomstad-black__0985645_pe816716_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/matchspel-gaming-chair-bomstad-black__1034551_pe837772_s5.jpg",
			imageAlt: "MATCHSPEL Gaming chair, Bomstad black",
			url: "https://www.ikea.com/us/en/p/matchspel-gaming-chair-bomstad-black-40507605/",
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
					name: "Gaming chairs",
					key: "47067",
				},
			],
			variants: [],
		},
		{
			id: "70412960",
			name: "SANDSBERG",
			price: {
				currency: "USD",
				currentPrice: 30,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/sandsberg-chair-black-brown-stained__1068130_pe852977_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sandsberg-chair-black-brown-stained__1027685_pe834982_s5.jpg",
			imageAlt: "SANDSBERG Chair, black/brown stained",
			url: "https://www.ikea.com/us/en/p/sandsberg-chair-black-brown-stained-70412960/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [],
		},
		{
			id: "70507618",
			name: "UTESPELARE",
			price: {
				currency: "USD",
				currentPrice: 199.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Gaming chair",
			image: "https://www.ikea.com/us/en/images/products/utespelare-gaming-chair-bomstad-black__0984819_pe816424_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/utespelare-gaming-chair-bomstad-black__1034564_pe837780_s5.jpg",
			imageAlt: "UTESPELARE Gaming chair, Bomstad black",
			url: "https://www.ikea.com/us/en/p/utespelare-gaming-chair-bomstad-black-70507618/",
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
					name: "Gaming chairs",
					key: "47067",
				},
			],
			variants: [],
		},
		{
			id: "50504908",
			name: "GRUNDSJÖ",
			price: {
				currency: "USD",
				currentPrice: 189.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Ottoman",
			image: "https://www.ikea.com/us/en/images/products/grundsjoe-ottoman-gray__1005823_pe825556_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/grundsjoe-ottoman-gray__1005824_pe825558_s5.jpg",
			imageAlt: "GRUNDSJÖ Ottoman, gray",
			url: "https://www.ikea.com/us/en/p/grundsjoe-ottoman-gray-50504908/",
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
					name: "Ottomans",
					key: "20926",
				},
				{
					name: "Fabric ottomans",
					key: "20927",
				},
			],
			variants: [],
		},
		{
			id: "90289172",
			name: "MARKUS",
			price: {
				currency: "USD",
				currentPrice: 289.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Office chair",
			image: "https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-dark-gray__0724714_pe734597_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-dark-gray__0399810_pe563882_s5.jpg",
			imageAlt: "MARKUS Office chair, Vissle dark gray",
			url: "https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/",
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
					name: "Desk chairs",
					key: "20652",
				},
				{
					name: "Desk chairs for home",
					key: "20653",
				},
			],
			variants: [],
		},
		{
			id: "s99429559",
			name: "TROTTEN",
			price: {
				currency: "USD",
				currentPrice: 189.99,
				discounted: false,
			},
			measurement: '63x31 1/2 "',
			typeName: "Desk",
			image: "https://www.ikea.com/us/en/images/products/trotten-desk-white__1012718_pe828989_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/trotten-desk-white__1187432_pe899215_s5.jpg",
			imageAlt: 'TROTTEN Desk, white, 63x31 1/2 "',
			url: "https://www.ikea.com/us/en/p/trotten-desk-white-s99429559/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Desks & tables",
					key: "fu004",
				},
				{
					name: "Desks & computer desks",
					key: "20649",
				},
				{
					name: "Table & desk systems",
					key: "47423",
				},
				{
					name: "TROTTEN system",
					key: "55989",
				},
				{
					name: "TROTTEN office desks & tables",
					key: "55993",
				},
			],
			variants: [],
		},
		{
			id: "40534798",
			name: "LILLÅNÄS",
			price: {
				currency: "USD",
				currentPrice: 115,
				discounted: false,
			},
			measurement: '24 3/4 "',
			typeName: "Bar stool",
			image: "https://www.ikea.com/us/en/images/products/lillanaes-bar-stool-chrome-plated-gunnared-dark-gray__1150252_pe884439_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lillanaes-bar-stool-chrome-plated-gunnared-dark-gray__1150251_pe884440_s5.jpg",
			imageAlt:
				'LILLÅNÄS Bar stool, chrome plated/Gunnared dark gray, 24 3/4 "',
			url: "https://www.ikea.com/us/en/p/lillanaes-bar-stool-chrome-plated-gunnared-dark-gray-40534798/",
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
					name: "Bar stools & chairs",
					key: "20864",
				},
			],
			variants: [],
		},
		{
			id: "s09269046",
			name: "FALHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 589,
				discounted: false,
			},
			measurement: "",
			typeName: "Table and 4 armchairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-dark-gray__0735582_pe740063_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-dark-gray__0947328_pe798491_s5.jpg",
			imageAlt:
				"FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Frösön/Duvholmen dark gray",
			url: "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-dark-gray-s09269046/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s59269015",
					name: "FALHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 589,
						discounted: false,
					},
					measurement: "",
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-beige__0735583_pe740064_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-beige__0947330_pe798493_s5.jpg",
					imageAlt:
						"FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Frösön/Duvholmen beige",
					url: "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-beige-s59269015/",
				},
				{
					id: "s89286773",
					name: "FALHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 529,
						discounted: false,
					},
					measurement: "",
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-beige__0666806_pe713690_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-beige__0947331_pe798492_s5.jpg",
					imageAlt:
						"FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Kuddarna beige",
					url: "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-beige-s89286773/",
				},
				{
					id: "s29286785",
					name: "FALHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 529,
						discounted: false,
					},
					measurement: "",
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-gray__0666804_pe713688_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-gray__0947332_pe798490_s5.jpg",
					imageAlt:
						"FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Kuddarna gray",
					url: "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-gray-s29286785/",
				},
				{
					id: "s69413847",
					name: "FALHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 629,
						discounted: false,
					},
					measurement: "",
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-white__0961522_pe807648_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-white__0907451_pe659091_s5.jpg",
					imageAlt:
						"FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Järpön/Duvholmen white",
					url: "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-white-s69413847/",
				},
				{
					id: "s99413841",
					name: "FALHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 629,
						discounted: false,
					},
					measurement: "",
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-anthracite__0961520_pe807650_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-anthracite__0907451_pe659091_s5.jpg",
					imageAlt:
						"FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Järpön/Duvholmen anthracite",
					url: "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-anthracite-s99413841/",
				},
			],
		},
		{
			id: "s19265613",
			name: "SJÄLLAND",
			price: {
				currency: "USD",
				currentPrice: 789,
				discounted: false,
			},
			measurement: '61 1/4x35 1/4 "',
			typeName: "Table and 4 armchairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray__0735944_pe740286_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray__0906852_pe671011_s5.jpg",
			imageAlt:
				'SJÄLLAND Table and 4 armchairs, outdoor, light brown/Frösön/Duvholmen dark gray, 61 1/4x35 1/4 "',
			url: "https://www.ikea.com/us/en/p/sjaelland-table-and-4-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray-s19265613/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s79265498",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 789,
						discounted: false,
					},
					measurement: '61 1/4x35 1/4 "',
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-froesoen-duvholmen-beige__0735945_pe740287_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-froesoen-duvholmen-beige__0908081_pe674426_s5.jpg",
					imageAlt:
						'SJÄLLAND Table and 4 armchairs, outdoor, light brown/Frösön/Duvholmen beige, 61 1/4x35 1/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-and-4-armchairs-outdoor-light-brown-froesoen-duvholmen-beige-s79265498/",
				},
				{
					id: "s89291492",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 729,
						discounted: false,
					},
					measurement: '61 1/4x35 1/4 "',
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-kuddarna-beige__0667429_pe713854_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-kuddarna-beige__0906852_pe671011_s5.jpg",
					imageAlt:
						'SJÄLLAND Table and 4 armchairs, outdoor, light brown/Kuddarna beige, 61 1/4x35 1/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-and-4-armchairs-outdoor-light-brown-kuddarna-beige-s89291492/",
				},
				{
					id: "s59291511",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 729,
						discounted: false,
					},
					measurement: '61 1/4x35 1/4 "',
					typeName: "Table and 4 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-kuddarna-gray__0667426_pe713855_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-and-4-armchairs-outdoor-light-brown-kuddarna-gray__0906852_pe671011_s5.jpg",
					imageAlt:
						'SJÄLLAND Table and 4 armchairs, outdoor, light brown/Kuddarna gray, 61 1/4x35 1/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-and-4-armchairs-outdoor-light-brown-kuddarna-gray-s59291511/",
				},
			],
		},
		{
			id: "s19393724",
			name: "TÄRNÖ",
			price: {
				currency: "USD",
				currentPrice: 239,
				discounted: false,
			},
			measurement: "",
			typeName: "Table and 4 chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/taernoe-table-and-4-chairs-outdoor-black-light-brown-stained-froesoen-duvholmen-beige__0947433_pe798560_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/taernoe-table-and-4-chairs-outdoor-black-light-brown-stained-froesoen-duvholmen-beige__0906825_pe618454_s5.jpg",
			imageAlt:
				"TÄRNÖ Table and 4 chairs, outdoor, black/light brown stained/Frösön/Duvholmen beige",
			url: "https://www.ikea.com/us/en/p/taernoe-table-and-4-chairs-outdoor-black-light-brown-stained-froesoen-duvholmen-beige-s19393724/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "s19501016",
			name: "HAVSTEN / LÅGASKÄR",
			price: {
				currency: "USD",
				currentPrice: 819.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Conversation set, outdoor",
			image: "https://www.ikea.com/us/en/images/products/havsten-lagaskaer-conversation-set-outdoor-beige-beige__1146793_pe883115_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/havsten-lagaskaer-conversation-set-outdoor-beige-beige__1185547_pe898439_s5.jpg",
			imageAlt:
				"HAVSTEN / LÅGASKÄR Conversation set, outdoor, beige/beige",
			url: "https://www.ikea.com/us/en/p/havsten-lagaskaer-conversation-set-outdoor-beige-beige-s19501016/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor sectionals & sofas",
					key: "21960",
				},
			],
			variants: [],
		},
		{
			id: "s29501011",
			name: "HAVSTEN / LÅGASKÄR",
			price: {
				currency: "USD",
				currentPrice: 1029.99,
				discounted: false,
			},
			measurement: "",
			typeName: "Conversation set, outdoor",
			image: "https://www.ikea.com/us/en/images/products/havsten-lagaskaer-conversation-set-outdoor-beige-beige__1146792_pe883113_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/havsten-lagaskaer-conversation-set-outdoor-beige-beige__1185539_pe898458_s5.jpg",
			imageAlt:
				"HAVSTEN / LÅGASKÄR Conversation set, outdoor, beige/beige",
			url: "https://www.ikea.com/us/en/p/havsten-lagaskaer-conversation-set-outdoor-beige-beige-s29501011/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor sectionals & sofas",
					key: "21960",
				},
			],
			variants: [],
		},
		{
			id: "s89267637",
			name: "SJÄLLAND",
			price: {
				currency: "USD",
				currentPrice: 729,
				discounted: false,
			},
			measurement: '61 1/4x35 1/4 "',
			typeName: "Table, 2 chairs and bench, outdoor",
			image: "https://www.ikea.com/us/en/images/products/sjaelland-table-2-chairs-and-bench-outdoor-light-brown-froesoen-duvholmen-beige__0735906_pe740262_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sjaelland-table-2-chairs-and-bench-outdoor-light-brown-froesoen-duvholmen-beige__0907408_pe674371_s5.jpg",
			imageAlt:
				'SJÄLLAND Table, 2 chairs and bench, outdoor, light brown/Frösön/Duvholmen beige, 61 1/4x35 1/4 "',
			url: "https://www.ikea.com/us/en/p/sjaelland-table-2-chairs-and-bench-outdoor-light-brown-froesoen-duvholmen-beige-s89267637/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "20268639",
			name: "LERHAMN",
			price: {
				currency: "USD",
				currentPrice: 55,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/lerhamn-chair-light-antique-stain-vittaryd-beige__0728161_pe736119_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/lerhamn-chair-light-antique-stain-vittaryd-beige__0732510_pe738650_s5.jpg",
			imageAlt: "LERHAMN Chair, light antique stain/Vittaryd beige",
			url: "https://www.ikea.com/us/en/p/lerhamn-chair-light-antique-stain-vittaryd-beige-20268639/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [],
		},
		{
			id: "80422765",
			name: "UDMUND",
			price: {
				currency: "USD",
				currentPrice: 115,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/udmund-chair-brown-viarp-beige-brown__0928426_pe789857_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/udmund-chair-brown-viarp-beige-brown__0980943_pe815226_s5.jpg",
			imageAlt: "UDMUND Chair, brown/Viarp beige/brown",
			url: "https://www.ikea.com/us/en/p/udmund-chair-brown-viarp-beige-brown-80422765/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [],
		},
		{
			id: "s19304228",
			name: "EKEDALEN / EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 759.99,
				discounted: false,
			},
			measurement: '47 1/4 "',
			typeName: "Bar table and 4 bar stools",
			image: "https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-bar-table-and-4-bar-stools-dark-brown-orrsta-light-gray__0747808_pe744732_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-bar-table-and-4-bar-stools-dark-brown-orrsta-light-gray__0872149_pe720430_s5.jpg",
			imageAlt:
				'EKEDALEN / EKEDALEN Bar table and 4 bar stools, dark brown/Orrsta light gray, 47 1/4 "',
			url: "https://www.ikea.com/us/en/p/ekedalen-ekedalen-bar-table-and-4-bar-stools-dark-brown-orrsta-light-gray-s19304228/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Bar furniture",
					key: "16244",
				},
				{
					name: "Bar tables sets",
					key: "47360",
				},
			],
			variants: [],
		},
		{
			id: "50400538",
			name: "EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 115,
				discounted: false,
			},
			measurement: '29 1/2 "',
			typeName: "Bar stool with backrest",
			image: "https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray__0657901_pe710031_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray__0872149_pe720430_s5.jpg",
			imageAlt:
				'EKEDALEN Bar stool with backrest, dark brown/Orrsta light gray, 29 1/2 "',
			url: "https://www.ikea.com/us/en/p/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray-50400538/",
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
					name: "Bar stools & chairs",
					key: "20864",
				},
			],
			variants: [],
		},
		{
			id: "60400509",
			name: "EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 105,
				discounted: false,
			},
			measurement: '24 3/8 "',
			typeName: "Bar stool with backrest",
			image: "https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-white-orrsta-light-gray__0657867_pe710002_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-white-orrsta-light-gray__0707284_pe726162_s5.jpg",
			imageAlt:
				'EKEDALEN Bar stool with backrest, white/Orrsta light gray, 24 3/8 "',
			url: "https://www.ikea.com/us/en/p/ekedalen-bar-stool-with-backrest-white-orrsta-light-gray-60400509/",
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
					name: "Bar stools & chairs",
					key: "20864",
				},
			],
			variants: [
				{
					id: "70400504",
					name: "EKEDALEN",
					price: {
						currency: "USD",
						currentPrice: 105,
						discounted: false,
					},
					measurement: '24 3/8 "',
					typeName: "Bar stool with backrest",
					image: "https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray__0657893_pe710024_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray__0873904_pe720397_s5.jpg",
					imageAlt:
						'EKEDALEN Bar stool with backrest, dark brown/Orrsta light gray, 24 3/8 "',
					url: "https://www.ikea.com/us/en/p/ekedalen-bar-stool-with-backrest-dark-brown-orrsta-light-gray-70400504/",
				},
			],
		},
		{
			id: "s09329682",
			name: "BONDHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 1239,
				discounted: false,
			},
			measurement: "",
			typeName: "Table+6 armchairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-kuddarna-beige__0806169_pe769842_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-kuddarna-beige__0776115_pe757724_s5.jpg",
			imageAlt:
				"BONDHOLMEN Table+6 armchairs, outdoor, gray stained/Kuddarna beige",
			url: "https://www.ikea.com/us/en/p/bondholmen-table-6-armchairs-outdoor-gray-stained-kuddarna-beige-s09329682/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s59328642",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1359,
						discounted: false,
					},
					measurement: "",
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-froesoen-duvholmen-beige__0806170_pe769834_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-froesoen-duvholmen-beige__0776115_pe757724_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table+6 armchairs, outdoor, gray stained/Frösön/Duvholmen beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-armchairs-outdoor-gray-stained-froesoen-duvholmen-beige-s59328642/",
				},
				{
					id: "s19328564",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1419,
						discounted: false,
					},
					measurement: "",
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-jaerpoen-duvholmen-white__0806176_pe769837_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-jaerpoen-duvholmen-white__0898223_pe782478_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table+6 armchairs, outdoor, gray stained/Järpön/Duvholmen white",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-armchairs-outdoor-gray-stained-jaerpoen-duvholmen-white-s19328564/",
				},
				{
					id: "s69328608",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1359,
						discounted: false,
					},
					measurement: "",
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-froesoen-duvholmen-dark-gray__0806172_pe769839_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-froesoen-duvholmen-dark-gray__0776115_pe757724_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table+6 armchairs, outdoor, gray stained/Frösön/Duvholmen dark gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-armchairs-outdoor-gray-stained-froesoen-duvholmen-dark-gray-s69328608/",
				},
				{
					id: "s79329612",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1239,
						discounted: false,
					},
					measurement: "",
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-kuddarna-gray__0806177_pe769835_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-kuddarna-gray__0776115_pe757724_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table+6 armchairs, outdoor, gray stained/Kuddarna gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-armchairs-outdoor-gray-stained-kuddarna-gray-s79329612/",
				},
				{
					id: "s89328532",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1419,
						discounted: false,
					},
					measurement: "",
					typeName: "Table+6 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-jaerpoen-duvholmen-anthracite__0806174_pe769841_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-6-armchairs-outdoor-gray-stained-jaerpoen-duvholmen-anthracite__0898219_pe782477_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table+6 armchairs, outdoor, gray stained/Järpön/Duvholmen anthracite",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-6-armchairs-outdoor-gray-stained-jaerpoen-duvholmen-anthracite-s89328532/",
				},
			],
		},
		{
			id: "s09412983",
			name: "BONDHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 809,
				discounted: false,
			},
			measurement: "",
			typeName: "Bar table and 4 bar stools",
			image: "https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-kuddarna-gray__0961375_pe807527_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-kuddarna-gray__0958518_pe805334_s5.jpg",
			imageAlt:
				"BONDHOLMEN Bar table and 4 bar stools, gray stained/Kuddarna gray",
			url: "https://www.ikea.com/us/en/p/bondholmen-bar-table-and-4-bar-stools-gray-stained-kuddarna-gray-s09412983/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s69412975",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 809,
						discounted: false,
					},
					measurement: "",
					typeName: "Bar table and 4 bar stools",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-kuddarna-beige__0961376_pe807528_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-kuddarna-beige__0958518_pe805334_s5.jpg",
					imageAlt:
						"BONDHOLMEN Bar table and 4 bar stools, gray stained/Kuddarna beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-bar-table-and-4-bar-stools-gray-stained-kuddarna-beige-s69412975/",
				},
				{
					id: "s79412989",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 869,
						discounted: false,
					},
					measurement: "",
					typeName: "Bar table and 4 bar stools",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-froesoen-duvholmen-beige__0961371_pe807525_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-froesoen-duvholmen-beige__0961372_pe807568_s5.jpg",
					imageAlt:
						"BONDHOLMEN Bar table and 4 bar stools, gray stained/Frösön/Duvholmen beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-bar-table-and-4-bar-stools-gray-stained-froesoen-duvholmen-beige-s79412989/",
				},
				{
					id: "s09413015",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 909,
						discounted: false,
					},
					measurement: "",
					typeName: "Bar table and 4 bar stools",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-jaerpoen-duvholmen-white__0961374_pe807526_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-jaerpoen-duvholmen-white__0958518_pe805334_s5.jpg",
					imageAlt:
						"BONDHOLMEN Bar table and 4 bar stools, gray stained/Järpön/Duvholmen white",
					url: "https://www.ikea.com/us/en/p/bondholmen-bar-table-and-4-bar-stools-gray-stained-jaerpoen-duvholmen-white-s09413015/",
				},
				{
					id: "s19413010",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 909,
						discounted: false,
					},
					measurement: "",
					typeName: "Bar table and 4 bar stools",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-jaerpoen-duvholmen-anthracite__0961367_pe807552_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-jaerpoen-duvholmen-anthracite__0961368_pe807571_s5.jpg",
					imageAlt:
						"BONDHOLMEN Bar table and 4 bar stools, gray stained/Järpön/Duvholmen anthracite",
					url: "https://www.ikea.com/us/en/p/bondholmen-bar-table-and-4-bar-stools-gray-stained-jaerpoen-duvholmen-anthracite-s19413010/",
				},
				{
					id: "s49412995",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 869,
						discounted: false,
					},
					measurement: "",
					typeName: "Bar table and 4 bar stools",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-froesoen-duvholmen-dark-gray__0961370_pe807561_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-bar-table-and-4-bar-stools-gray-stained-froesoen-duvholmen-dark-gray__0958519_pe805335_s5.jpg",
					imageAlt:
						"BONDHOLMEN Bar table and 4 bar stools, gray stained/Frösön/Duvholmen dark gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-bar-table-and-4-bar-stools-gray-stained-froesoen-duvholmen-dark-gray-s49412995/",
				},
			],
		},
		{
			id: "s19328762",
			name: "BONDHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 1268,
				discounted: false,
			},
			measurement: "",
			typeName: "Table, 3 armchairs + bench, outdoor",
			image: "https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-froesoen-duvholmen-dark-gray__0806215_pe769853_s5.jpg",
			imageAlt:
				"BONDHOLMEN Table, 3 armchairs + bench, outdoor, gray stained/Frösön/Duvholmen dark gray",
			url: "https://www.ikea.com/us/en/p/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-froesoen-duvholmen-dark-gray-s19328762/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s39328803",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1148,
						discounted: false,
					},
					measurement: "",
					typeName: "Table, 3 armchairs + bench, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-kuddarna-beige__0806221_pe769858_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table, 3 armchairs + bench, outdoor, gray stained/Kuddarna beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-kuddarna-beige-s39328803/",
				},
				{
					id: "s49328666",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1268,
						discounted: false,
					},
					measurement: "",
					typeName: "Table, 3 armchairs + bench, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-froesoen-duvholmen-beige__0806216_pe769854_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table, 3 armchairs + bench, outdoor, gray stained/Frösön/Duvholmen beige",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-froesoen-duvholmen-beige-s49328666/",
				},
				{
					id: "s19328781",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1328,
						discounted: false,
					},
					measurement: "",
					typeName: "Table, 3 armchairs + bench, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-jaerpoen-duvholmen-anthracite__0806218_pe769856_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-jaerpoen-duvholmen-anthracite__0776115_pe757724_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table, 3 armchairs + bench, outdoor, gray stained/Järpön/Duvholmen anthracite",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-jaerpoen-duvholmen-anthracite-s19328781/",
				},
				{
					id: "s29328790",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1328,
						discounted: false,
					},
					measurement: "",
					typeName: "Table, 3 armchairs + bench, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-jaerpoen-duvholmen-white__0806220_pe769862_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table, 3 armchairs + bench, outdoor, gray stained/Järpön/Duvholmen white",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-jaerpoen-duvholmen-white-s29328790/",
				},
				{
					id: "s69328830",
					name: "BONDHOLMEN",
					price: {
						currency: "USD",
						currentPrice: 1148,
						discounted: false,
					},
					measurement: "",
					typeName: "Table, 3 armchairs + bench, outdoor",
					image: "https://www.ikea.com/us/en/images/products/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-kuddarna-gray__0806222_pe769859_s5.jpg",
					imageAlt:
						"BONDHOLMEN Table, 3 armchairs + bench, outdoor, gray stained/Kuddarna gray",
					url: "https://www.ikea.com/us/en/p/bondholmen-table-3-armchairs-bench-outdoor-gray-stained-kuddarna-gray-s69328830/",
				},
			],
		},
		{
			id: "s19501002",
			name: "HAVSTEN / LÅGASKÄR",
			price: {
				currency: "USD",
				currentPrice: 1759.99,
				discounted: false,
			},
			measurement: "",
			typeName: "4-seat conversation set, outdoor",
			image: "https://www.ikea.com/us/en/images/products/havsten-lagaskaer-4-seat-conversation-set-outdoor-beige-beige__1146794_pe883114_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/havsten-lagaskaer-4-seat-conversation-set-outdoor-beige-beige__1185561_pe898446_s5.jpg",
			imageAlt:
				"HAVSTEN / LÅGASKÄR 4-seat conversation set, outdoor, beige/beige",
			url: "https://www.ikea.com/us/en/p/havsten-lagaskaer-4-seat-conversation-set-outdoor-beige-beige-s19501002/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor sectionals & sofas",
					key: "21960",
				},
			],
			variants: [],
		},
		{
			id: "s39265235",
			name: "SJÄLLAND",
			price: {
				currency: "USD",
				currentPrice: 419,
				discounted: false,
			},
			measurement: '28x28x28 3/4 "',
			typeName: "Table+2 armchairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray__0787495_pe763250_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray__0906852_pe671011_s5.jpg",
			imageAlt:
				'SJÄLLAND Table+2 armchairs, outdoor, light brown/Frösön/Duvholmen dark gray, 28x28x28 3/4 "',
			url: "https://www.ikea.com/us/en/p/sjaelland-table-2-armchairs-outdoor-light-brown-froesoen-duvholmen-dark-gray-s39265235/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s59265215",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 419,
						discounted: false,
					},
					measurement: '28x28x28 3/4 "',
					typeName: "Table+2 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-froesoen-duvholmen-beige__0735874_pe740228_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-froesoen-duvholmen-beige__0907303_pe674367_s5.jpg",
					imageAlt:
						'SJÄLLAND Table+2 armchairs, outdoor, light brown/Frösön/Duvholmen beige, 28x28x28 3/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-2-armchairs-outdoor-light-brown-froesoen-duvholmen-beige-s59265215/",
				},
				{
					id: "s79286919",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 389,
						discounted: false,
					},
					measurement: '28x28x28 3/4 "',
					typeName: "Table+2 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-kuddarna-beige__0667373_pe713841_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-kuddarna-beige__0906852_pe671011_s5.jpg",
					imageAlt:
						'SJÄLLAND Table+2 armchairs, outdoor, light brown/Kuddarna beige, 28x28x28 3/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-2-armchairs-outdoor-light-brown-kuddarna-beige-s79286919/",
				},
				{
					id: "s49287171",
					name: "SJÄLLAND",
					price: {
						currency: "USD",
						currentPrice: 389,
						discounted: false,
					},
					measurement: '28x28x28 3/4 "',
					typeName: "Table+2 armchairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-kuddarna-dark-gray__0667510_pe713924_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/sjaelland-table-2-armchairs-outdoor-light-brown-kuddarna-dark-gray__0906852_pe671011_s5.jpg",
					imageAlt:
						'SJÄLLAND Table+2 armchairs, outdoor, light brown/Kuddarna dark gray, 28x28x28 3/4 "',
					url: "https://www.ikea.com/us/en/p/sjaelland-table-2-armchairs-outdoor-light-brown-kuddarna-dark-gray-s49287171/",
				},
			],
		},
		{
			id: "s39286723",
			name: "TÄRNÖ",
			price: {
				currency: "USD",
				currentPrice: 99,
				discounted: false,
			},
			measurement: "",
			typeName: "Table+2 chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-beige__0666808_pe713691_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-beige__0667583_pe713986_s5.jpg",
			imageAlt:
				"TÄRNÖ Table+2 chairs, outdoor, black/light brown stained/Kuddarna beige",
			url: "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-beige-s39286723/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [
				{
					id: "s99286763",
					name: "TÄRNÖ",
					price: {
						currency: "USD",
						currentPrice: 99,
						discounted: false,
					},
					measurement: "",
					typeName: "Table+2 chairs, outdoor",
					image: "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-gray__0666810_pe713692_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-gray__0667585_pe713987_s5.jpg",
					imageAlt:
						"TÄRNÖ Table+2 chairs, outdoor, black/light brown stained/Kuddarna gray",
					url: "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-gray-s99286763/",
				},
			],
		},
		{
			id: "s69270867",
			name: "TÄRNÖ",
			price: {
				currency: "USD",
				currentPrice: 109,
				discounted: false,
			},
			measurement: "",
			typeName: "Table+2 chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-froesoen-duvholmen-beige__0736027_pe740354_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-froesoen-duvholmen-beige__0907107_pe619009_s5.jpg",
			imageAlt:
				"TÄRNÖ Table+2 chairs, outdoor, black/light brown stained/Frösön/Duvholmen beige",
			url: "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-black-light-brown-stained-froesoen-duvholmen-beige-s69270867/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "s69434864",
			name: "SUNDSÖ",
			price: {
				currency: "USD",
				currentPrice: 189,
				discounted: false,
			},
			measurement: "",
			typeName: "Table+2 chairs, outdoor",
			image: "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-gray-kuddarna-gray__1035565_pe838186_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-gray-kuddarna-gray__1035566_pe838187_s5.jpg",
			imageAlt: "SUNDSÖ Table+2 chairs, outdoor, gray/Kuddarna gray",
			url: "https://www.ikea.com/us/en/p/sundsoe-table-2-chairs-outdoor-gray-kuddarna-gray-s69434864/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor dining sets",
					key: "21967",
				},
			],
			variants: [],
		},
		{
			id: "s99422765",
			name: "JUTHOLMEN",
			price: {
				currency: "USD",
				currentPrice: 669.99,
				discounted: false,
			},
			measurement: "",
			typeName: "4-seat conversation set, outdoor",
			image: "https://www.ikea.com/us/en/images/products/jutholmen-4-seat-conversation-set-outdoor-dark-gray-kuddarna-beige__0835232_pe778353_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/jutholmen-4-seat-conversation-set-outdoor-dark-gray-kuddarna-beige__0984336_ph176190_s5.jpg",
			imageAlt:
				"JUTHOLMEN 4-seat conversation set, outdoor, dark gray/Kuddarna beige",
			url: "https://www.ikea.com/us/en/p/jutholmen-4-seat-conversation-set-outdoor-dark-gray-kuddarna-beige-s99422765/",
			categoryPath: [
				{
					name: "Furniture",
					key: "fu001",
				},
				{
					name: "Furniture sets",
					key: "55036",
				},
				{
					name: "Outdoor sectionals & sofas",
					key: "21960",
				},
			],
			variants: [],
		},
		{
			id: "70500344",
			name: "KÄTTIL",
			price: {
				currency: "USD",
				currentPrice: 60,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/kaettil-chair-white-knisa-light-gray__1016338_pe830329_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/kaettil-chair-white-knisa-light-gray__1028687_pe835486_s5.jpg",
			imageAlt: "KÄTTIL Chair, white/Knisa light gray",
			url: "https://www.ikea.com/us/en/p/kaettil-chair-white-knisa-light-gray-70500344/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Dining chairs",
					key: "25220",
				},
			],
			variants: [],
		},
		{
			id: "40341115",
			name: "EKEDALEN",
			price: {
				currency: "USD",
				currentPrice: 80,
				discounted: false,
			},
			measurement: "",
			typeName: "Chair",
			image: "https://www.ikea.com/us/en/images/products/ekedalen-chair-dark-brown-orrsta-light-gray__0728288_pe736165_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/ekedalen-chair-dark-brown-orrsta-light-gray__1052575_pe846230_s5.jpg",
			imageAlt: "EKEDALEN Chair, dark brown/Orrsta light gray",
			url: "https://www.ikea.com/us/en/p/ekedalen-chair-dark-brown-orrsta-light-gray-40341115/",
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
					name: "Dining chairs",
					key: "25219",
				},
				{
					name: "Upholstered chairs",
					key: "25221",
				},
			],
			variants: [
				{
					id: "20434399",
					name: "EKEDALEN",
					price: {
						currency: "USD",
						currentPrice: 80,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/ekedalen-chair-black-orrsta-light-gray__0657599_pe709869_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/ekedalen-chair-black-orrsta-light-gray__0870190_pe709870_s5.jpg",
					imageAlt: "EKEDALEN Chair, black/Orrsta light gray",
					url: "https://www.ikea.com/us/en/p/ekedalen-chair-black-orrsta-light-gray-20434399/",
				},
				{
					id: "10341107",
					name: "EKEDALEN",
					price: {
						currency: "USD",
						currentPrice: 80,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/ekedalen-chair-brown-orrsta-light-gray__0728287_pe736164_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/ekedalen-chair-brown-orrsta-light-gray__0870391_pe640510_s5.jpg",
					imageAlt: "EKEDALEN Chair, brown/Orrsta light gray",
					url: "https://www.ikea.com/us/en/p/ekedalen-chair-brown-orrsta-light-gray-10341107/",
				},
				{
					id: "10341112",
					name: "EKEDALEN",
					price: {
						currency: "USD",
						currentPrice: 80,
						discounted: false,
					},
					measurement: "",
					typeName: "Chair",
					image: "https://www.ikea.com/us/en/images/products/ekedalen-chair-white-orrsta-light-gray__0728310_pe736178_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/ekedalen-chair-white-orrsta-light-gray__1052562_pe846217_s5.jpg",
					imageAlt: "EKEDALEN Chair, white/Orrsta light gray",
					url: "https://www.ikea.com/us/en/p/ekedalen-chair-white-orrsta-light-gray-10341112/",
				},
			],
		},
		{
			id: "s19495204",
			name: "MÖRBYLÅNGA / LILLÅNÄS",
			price: {
				currency: "USD",
				currentPrice: 1689,
				discounted: false,
			},
			measurement: '86 5/8x39 3/8 "',
			typeName: "Table and 6 chairs",
			image: "https://www.ikea.com/us/en/images/products/moerbylanga-lillanaes-table-and-6-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-beige__1150421_pe884533_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/moerbylanga-lillanaes-table-and-6-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-beige__1150420_pe884538_s5.jpg",
			imageAlt:
				'MÖRBYLÅNGA / LILLÅNÄS Table and 6 chairs, oak veneer brown stained/chrome plated Gunnared beige, 86 5/8x39 3/8 "',
			url: "https://www.ikea.com/us/en/p/moerbylanga-lillanaes-table-and-6-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-beige-s19495204/",
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
					name: "Dining sets up to 6 seats",
					key: "36213",
				},
			],
			variants: [
				{
					id: "s49495189",
					name: "MÖRBYLÅNGA / LILLÅNÄS",
					price: {
						currency: "USD",
						currentPrice: 1689,
						discounted: false,
					},
					measurement: '86 5/8x39 3/8 "',
					typeName: "Table and 6 chairs",
					image: "https://www.ikea.com/us/en/images/products/moerbylanga-lillanaes-table-and-6-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-dark-grey__1150411_pe884528_s5.jpg",
					contextualImageUrl:
						"https://www.ikea.com/us/en/images/products/moerbylanga-lillanaes-table-and-6-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-dark-grey__1150410_pe884529_s5.jpg",
					imageAlt:
						'MÖRBYLÅNGA / LILLÅNÄS Table and 6 chairs, oak veneer brown stained/chrome plated Gunnared dark grey, 86 5/8x39 3/8 "',
					url: "https://www.ikea.com/us/en/p/moerbylanga-lillanaes-table-and-6-chairs-oak-veneer-brown-stained-chrome-plated-gunnared-dark-grey-s49495189/",
				},
			],
		},
		{
			id: "s39428850",
			name: "VANGSTA / KÄTTIL",
			price: {
				currency: "USD",
				currentPrice: 409.99,
				discounted: false,
			},
			measurement: '47 1/4/70 7/8 "',
			typeName: "Table and 4 chairs",
			image: "https://www.ikea.com/us/en/images/products/vangsta-kaettil-table-and-4-chairs-white-knisa-light-gray__1016377_pe830355_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/vangsta-kaettil-table-and-4-chairs-white-knisa-light-gray__1028696_pe835495_s5.jpg",
			imageAlt:
				'VANGSTA / KÄTTIL Table and 4 chairs, white/Knisa light gray, 47 1/4/70 7/8 "',
			url: "https://www.ikea.com/us/en/p/vangsta-kaettil-table-and-4-chairs-white-knisa-light-gray-s39428850/",
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
			variants: [],
		},
		{
			id: "s39477039",
			name: "SKOGSTA / BERGMUND",
			price: {
				currency: "USD",
				currentPrice: 1359,
				discounted: false,
			},
			measurement: '92 1/2x39 3/8 "',
			typeName: "Table and 6 chairs",
			image: "https://www.ikea.com/us/en/images/products/skogsta-bergmund-table-and-6-chairs-acacia-kolboda-beige-dark-gray__0951052_pe800884_s5.jpg",
			contextualImageUrl:
				"https://www.ikea.com/us/en/images/products/skogsta-bergmund-table-and-6-chairs-acacia-kolboda-beige-dark-gray__1015064_ph176248_s5.jpg",
			imageAlt:
				'SKOGSTA / BERGMUND Table and 6 chairs, acacia/Kolboda beige/dark gray, 92 1/2x39 3/8 "',
			url: "https://www.ikea.com/us/en/p/skogsta-bergmund-table-and-6-chairs-acacia-kolboda-beige-dark-gray-s39477039/",
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
					name: "Dining sets up to 6 seats",
					key: "36213",
				},
			],
			variants: [],
		},
	],
	notFound: false,
	showRoom: false,
};

export const shopGridSlice = createSlice({
	name: "shopGrid",
	initialState: shopGridInitialState,
	reducers: {
		updateShopGrid: (state, action) => {
			if (action.payload === "not found") {
				state.notFound = true;
			} else {
				state.bestSelling = action.payload.slice(0, 10);
				state.grid = action.payload.slice(10);
				state.notFound = false;
			}
		},
	},
});

export const { updateShopGrid } = shopGridSlice.actions;
