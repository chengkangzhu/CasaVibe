import React, { useEffect, useState } from "react";  
import axios from "axios" 
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

//components
import Rating from "../components/Rating";
import QuantitySelector from "../components/QuantitySelector"
import ProductCarousel from "../components/ProductCarousel";
import ProductCard from "../components/ProductCard";

//icons
import { FiHeart } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import { RiTruckFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import { useParams } from "react-router-dom";
 
 
   

const templateproductObj = 	{
	"id": "s89286773",
	"name": "FALHOLMEN",
	"price": {
	  "currency": "USD",
	  "currentPrice": 529,
	  "discounted": false
	},
	"measurement": "",
	"typeName": "Table and 4 armchairs, outdoor",
	"image": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-beige__0666806_pe713690_s5.jpg",
	"contextualImageUrl": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-beige__0947331_pe798492_s5.jpg",
	"imageAlt": "FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Kuddarna beige",
	"url": "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-beige-s89286773/",
	"categoryPath": [
	  {
		"name": "Furniture",
		"key": "fu001"
	  },
	  {
		"name": "Furniture sets",
		"key": "55036"
	  },
	  {
		"name": "Outdoor dining sets",
		"key": "21967"
	  }
	],
	"variants": [
	  {
		"id": "s59269015",
		"name": "FALHOLMEN",
		"price": {
		  "currency": "USD",
		  "currentPrice": 589,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table and 4 armchairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-beige__0735583_pe740064_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-beige__0947330_pe798493_s5.jpg",
		"imageAlt": "FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Frösön/Duvholmen beige",
		"url": "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-beige-s59269015/"
	  },
	  {
		"id": "s09269046",
		"name": "FALHOLMEN",
		"price": {
		  "currency": "USD",
		  "currentPrice": 589,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table and 4 armchairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-dark-gray__0735582_pe740063_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-dark-gray__0947328_pe798491_s5.jpg",
		"imageAlt": "FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Frösön/Duvholmen dark gray",
		"url": "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-froesoen-duvholmen-dark-gray-s09269046/"
	  },
	  {
		"id": "s29286785",
		"name": "FALHOLMEN",
		"price": {
		  "currency": "USD",
		  "currentPrice": 529,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table and 4 armchairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-gray__0666804_pe713688_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-gray__0947332_pe798490_s5.jpg",
		"imageAlt": "FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Kuddarna gray",
		"url": "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-kuddarna-gray-s29286785/"
	  },
	  {
		"id": "s69413847",
		"name": "FALHOLMEN",
		"price": {
		  "currency": "USD",
		  "currentPrice": 629,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table and 4 armchairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-white__0961522_pe807648_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-white__0907451_pe659091_s5.jpg",
		"imageAlt": "FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Järpön/Duvholmen white",
		"url": "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-white-s69413847/"
	  },
	  {
		"id": "s99413841",
		"name": "FALHOLMEN",
		"price": {
		  "currency": "USD",
		  "currentPrice": 629,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table and 4 armchairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-anthracite__0961520_pe807650_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-anthracite__0907451_pe659091_s5.jpg",
		"imageAlt": "FALHOLMEN Table and 4 armchairs, outdoor, light brown stained/Järpön/Duvholmen anthracite",
		"url": "https://www.ikea.com/us/en/p/falholmen-table-and-4-armchairs-outdoor-light-brown-stained-jaerpoen-duvholmen-anthracite-s99413841/"
	  }
	]
  }

const relatedItem = [
	  {
		"id": "70234185",
		"name": "SKARPÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 99.99,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Armchair, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/skarpoe-armchair-outdoor-white__0729491_pe737010_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/skarpoe-armchair-outdoor-white__0906333_pe614902_s5.jpg",
		"imageAlt": "SKARPÖ Armchair, outdoor, white",
		"url": "https://www.ikea.com/us/en/p/skarpoe-armchair-outdoor-white-70234185/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor chairs",
			"key": "21964"
		  },
		  {
			"name": "Outdoor lounge chairs",
			"key": "21962"
		  }
		],
		"variants": [
		  {
			"id": "90522745",
			"name": "SKARPÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 99.99,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Armchair, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/skarpoe-armchair-outdoor-dark-blue__1138958_pe880163_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/skarpoe-armchair-outdoor-dark-blue__1149860_pe884233_s5.jpg",
			"imageAlt": "SKARPÖ Armchair, outdoor, dark blue",
			"url": "https://www.ikea.com/us/en/p/skarpoe-armchair-outdoor-dark-blue-90522745/"
		  },
		  {
			"id": "20522744",
			"name": "SKARPÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 99.99,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Armchair, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/skarpoe-armchair-outdoor-orange__1138951_pe880156_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/skarpoe-armchair-outdoor-orange__1149858_pe884235_s5.jpg",
			"imageAlt": "SKARPÖ Armchair, outdoor, orange",
			"url": "https://www.ikea.com/us/en/p/skarpoe-armchair-outdoor-orange-20522744/"
		  }
		]
	  },
	  {
		"id": "s69898415",
		"name": "TÄRNÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 79,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table+2 chairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained__0736028_pe740355_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained__0667583_pe713986_s5.jpg",
		"imageAlt": "TÄRNÖ Table+2 chairs, outdoor, black/light brown stained",
		"url": "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-black-light-brown-stained-s69898415/",
		"categoryPath": [
		  {
			"name": "Furniture",
			"key": "fu001"
		  },
		  {
			"name": "Furniture sets",
			"key": "55036"
		  },
		  {
			"name": "Outdoor dining sets",
			"key": "21967"
		  }
		],
		"variants": [
		  {
			"id": "s39286723",
			"name": "TÄRNÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 99,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Table+2 chairs, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-beige__0666808_pe713691_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-beige__0667583_pe713986_s5.jpg",
			"imageAlt": "TÄRNÖ Table+2 chairs, outdoor, black/light brown stained/Kuddarna beige",
			"url": "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-beige-s39286723/"
		  },
		  {
			"id": "s99286763",
			"name": "TÄRNÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 99,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Table+2 chairs, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-gray__0666810_pe713692_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-gray__0667585_pe713987_s5.jpg",
			"imageAlt": "TÄRNÖ Table+2 chairs, outdoor, black/light brown stained/Kuddarna gray",
			"url": "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-black-light-brown-stained-kuddarna-gray-s99286763/"
		  }
		]
	  },
	  {
		"id": "10510299",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 75,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Seat sec for modular sofa, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained__1138748_pe880048_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained__1175360_ph190463_s5.jpg",
		"imageAlt": "NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained-10510299/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor sofa sections",
			"key": "21961"
		  }
		],
		"variants": []
	  },
	  {
		"id": "60510310",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 90,
		  "discounted": false
		},
		"measurement": "47 1/4 \"",
		"typeName": "Bench, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-bench-outdoor-light-brown-stained__1138759_pe880059_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-bench-outdoor-light-brown-stained__1170514_ph189347_s5.jpg",
		"imageAlt": "NÄMMARÖ Bench, outdoor, light brown stained, 47 1/4 \"",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-bench-outdoor-light-brown-stained-60510310/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor benches",
			"key": "47386"
		  }
		],
		"variants": []
	  },
	  {
		"id": "40532742",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 109.99,
		  "discounted": false
		},
		"measurement": "31 1/2x15 3/4x17 3/4 \"",
		"typeName": "Storage box",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-storage-box-light-brown-stained-indoor-outdoor__1175345_pe894657_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-storage-box-light-brown-stained-indoor-outdoor__1155868_pe886750_s5.jpg",
		"imageAlt": "NÄMMARÖ Storage box, light brown stained indoor/outdoor, 31 1/2x15 3/4x17 3/4 \"",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-storage-box-light-brown-stained-indoor-outdoor-40532742/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor storage: shelves, cabinets & boxes",
			"key": "21958"
		  }
		],
		"variants": []
	  },
	  {
		"id": "80336466",
		"name": "KROKHOLMEN",
		"price": {
		  "currency": "USD",
		  "currentPrice": 69.99,
		  "discounted": false
		},
		"measurement": "28 3/4 \"",
		"typeName": "Coffee table, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/krokholmen-coffee-table-outdoor-beige__0736456_pe740544_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/krokholmen-coffee-table-outdoor-beige__0673257_pe717137_s5.jpg",
		"imageAlt": "KROKHOLMEN Coffee table, outdoor, beige, 28 3/4 \"",
		"url": "https://www.ikea.com/us/en/p/krokholmen-coffee-table-outdoor-beige-80336466/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor dining",
			"key": "700351"
		  },
		  {
			"name": "Outdoor tables",
			"key": "700191"
		  },
		  {
			"name": "Outdoor side tables & coffee tables",
			"key": "700192"
		  }
		],
		"variants": []
	  },
	  {
		"id": "s49529165",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 190,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Chair, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-chair-outdoor-light-brown-stained-froesoen-duvholmen-beige__1207768_pe908166_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-chair-outdoor-light-brown-stained-froesoen-duvholmen-beige__1207767_pe908167_s5.jpg",
		"imageAlt": "NÄMMARÖ Chair, outdoor, light brown stained/Frösön/Duvholmen beige",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-chair-outdoor-light-brown-stained-froesoen-duvholmen-beige-s49529165/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor chairs",
			"key": "21964"
		  },
		  {
			"name": "Outdoor lounge chairs",
			"key": "21962"
		  }
		],
		"variants": [
		  {
			"id": "s79491444",
			"name": "NÄMMARÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 145,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Chair, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/naemmaroe-chair-outdoor-light-brown-stained-kuddarna-beige__1147801_pe883476_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-chair-outdoor-light-brown-stained-kuddarna-beige__1185557_pe898444_s5.jpg",
			"imageAlt": "NÄMMARÖ Chair, outdoor, light brown stained/Kuddarna beige",
			"url": "https://www.ikea.com/us/en/p/naemmaroe-chair-outdoor-light-brown-stained-kuddarna-beige-s79491444/"
		  },
		  {
			"id": "s39529156",
			"name": "NÄMMARÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 100,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Chair, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/naemmaroe-chair-outdoor-light-brown-stained__1207766_pe908168_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-chair-outdoor-light-brown-stained__1207765_pe908165_s5.jpg",
			"imageAlt": "NÄMMARÖ Chair, outdoor, light brown stained",
			"url": "https://www.ikea.com/us/en/p/naemmaroe-chair-outdoor-light-brown-stained-s39529156/"
		  }
		]
	  },
	  {
		"id": "50510301",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 85,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Reclining chair, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-reclining-chair-outdoor-foldable-light-brown-stained__1138757_pe880057_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-reclining-chair-outdoor-foldable-light-brown-stained__1170513_ph189345_s5.jpg",
		"imageAlt": "NÄMMARÖ Reclining chair, outdoor, foldable light brown stained",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-reclining-chair-outdoor-foldable-light-brown-stained-50510301/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor chairs",
			"key": "21964"
		  },
		  {
			"name": "Outdoor dining chairs",
			"key": "21966"
		  }
		],
		"variants": []
	  },
	  {
		"id": "30510302",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 125,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Bench with backrest, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1138754_pe880054_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",
		"imageAlt": "NÄMMARÖ Bench with backrest, outdoor, light brown stained",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-bench-with-backrest-outdoor-light-brown-stained-30510302/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor benches",
			"key": "47386"
		  }
		],
		"variants": []
	  },
	  {
		"id": "s79487786",
		"name": "SUNDSÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 169,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table+2 chairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-yellow-yellow__1122222_pe874553_s5.jpg",
		"imageAlt": "SUNDSÖ Table+2 chairs, outdoor, yellow/yellow",
		"url": "https://www.ikea.com/us/en/p/sundsoe-table-2-chairs-outdoor-yellow-yellow-s79487786/",
		"categoryPath": [
		  {
			"name": "Furniture",
			"key": "fu001"
		  },
		  {
			"name": "Furniture sets",
			"key": "55036"
		  },
		  {
			"name": "Outdoor dining sets",
			"key": "21967"
		  }
		],
		"variants": [
		  {
			"id": "s29434922",
			"name": "SUNDSÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 169,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Table+2 chairs, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-gray-gray__1035563_pe838184_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-gray-gray__1035564_pe838185_s5.jpg",
			"imageAlt": "SUNDSÖ Table+2 chairs, outdoor, gray/gray",
			"url": "https://www.ikea.com/us/en/p/sundsoe-table-2-chairs-outdoor-gray-gray-s29434922/"
		  },
		  {
			"id": "s69434864",
			"name": "SUNDSÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 189,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Table+2 chairs, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-gray-kuddarna-gray__1035565_pe838186_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-gray-kuddarna-gray__1035566_pe838187_s5.jpg",
			"imageAlt": "SUNDSÖ Table+2 chairs, outdoor, gray/Kuddarna gray",
			"url": "https://www.ikea.com/us/en/p/sundsoe-table-2-chairs-outdoor-gray-kuddarna-gray-s69434864/"
		  },
		  {
			"id": "s19487789",
			"name": "SUNDSÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 169,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Table+2 chairs, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/sundsoe-table-2-chairs-outdoor-orange-orange__1122221_pe874554_s5.jpg",
			"imageAlt": "SUNDSÖ Table+2 chairs, outdoor, orange/orange",
			"url": "https://www.ikea.com/us/en/p/sundsoe-table-2-chairs-outdoor-orange-orange-s19487789/"
		  }
		]
	  },
	  {
		"id": "s79534858",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 880,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Modular corner sofa, 3-seat",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-modular-corner-sofa-3-seat-outdoor-light-brown-stained-froesoen-duvholmen-beige__1213447_pe911141_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-modular-corner-sofa-3-seat-outdoor-light-brown-stained-froesoen-duvholmen-beige__1213446_pe911140_s5.jpg",
		"imageAlt": "NÄMMARÖ Modular corner sofa, 3-seat, outdoor light brown stained/Frösön/Duvholmen beige",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-modular-corner-sofa-3-seat-outdoor-light-brown-stained-froesoen-duvholmen-beige-s79534858/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor lounge seating",
			"key": "21959"
		  }
		],
		"variants": [
		  {
			"id": "s49526162",
			"name": "NÄMMARÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 660,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Modular corner sofa, 3-seat",
			"image": "https://www.ikea.com/us/en/images/products/naemmaroe-modular-corner-sofa-3-seat-outdoor-light-brown-stained-kuddarna-beige__1202316_pe905879_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-modular-corner-sofa-3-seat-outdoor-light-brown-stained-kuddarna-beige__1212183_pe910499_s5.jpg",
			"imageAlt": "NÄMMARÖ Modular corner sofa, 3-seat, outdoor light brown stained/Kuddarna beige",
			"url": "https://www.ikea.com/us/en/p/naemmaroe-modular-corner-sofa-3-seat-outdoor-light-brown-stained-kuddarna-beige-s49526162/"
		  }
		]
	  },
	  {
		"id": "s19490777",
		"name": "TÄRNÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 79,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Table+2 chairs, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-white-green__1154043_pe885924_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-white-green__1154045_pe885925_s5.jpg",
		"imageAlt": "TÄRNÖ Table+2 chairs, outdoor, white/green",
		"url": "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-white-green-s19490777/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor dining",
			"key": "700351"
		  },
		  {
			"name": "Outdoor bistro sets",
			"key": "59249"
		  }
		],
		"variants": [
		  {
			"id": "s89490774",
			"name": "TÄRNÖ",
			"price": {
			  "currency": "USD",
			  "currentPrice": 99,
			  "discounted": false
			},
			"measurement": "",
			"typeName": "Table+2 chairs, outdoor",
			"image": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-white-green-kuddarna-gray__1154050_pe885928_s5.jpg",
			"contextualImageUrl": "https://www.ikea.com/us/en/images/products/taernoe-table-2-chairs-outdoor-white-green-kuddarna-gray__1154045_pe885925_s5.jpg",
			"imageAlt": "TÄRNÖ Table+2 chairs, outdoor, white/green/Kuddarna gray",
			"url": "https://www.ikea.com/us/en/p/taernoe-table-2-chairs-outdoor-white-green-kuddarna-gray-s89490774/"
		  }
		]
	  },
	  {
		"id": "90511105",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 75,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Armchair, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-armchair-outdoor-light-brown-stained__1138763_pe880063_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-armchair-outdoor-light-brown-stained__1175375_ph190459_s5.jpg",
		"imageAlt": "NÄMMARÖ Armchair, outdoor, light brown stained",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-armchair-outdoor-light-brown-stained-90511105/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor chairs",
			"key": "21964"
		  },
		  {
			"name": "Outdoor dining chairs",
			"key": "21966"
		  }
		],
		"variants": []
	  },
	  {
		"id": "40510306",
		"name": "NÄMMARÖ",
		"price": {
		  "currency": "USD",
		  "currentPrice": 95,
		  "discounted": false
		},
		"measurement": "",
		"typeName": "Lounge chair, outdoor",
		"image": "https://www.ikea.com/us/en/images/products/naemmaroe-lounge-chair-outdoor-light-brown-stained__1138755_pe880055_s5.jpg",
		"contextualImageUrl": "https://www.ikea.com/us/en/images/products/naemmaroe-lounge-chair-outdoor-light-brown-stained__1185528_pe898427_s5.jpg",
		"imageAlt": "NÄMMARÖ Lounge chair, outdoor, light brown stained",
		"url": "https://www.ikea.com/us/en/p/naemmaroe-lounge-chair-outdoor-light-brown-stained-40510306/",
		"categoryPath": [
		  {
			"name": "Outdoor",
			"key": "od001"
		  },
		  {
			"name": "Outdoor furniture",
			"key": "od003"
		  },
		  {
			"name": "Outdoor seating",
			"key": "700350"
		  },
		  {
			"name": "Outdoor chairs",
			"key": "21964"
		  },
		  {
			"name": "Outdoor lounge chairs",
			"key": "21962"
		  }
		],
		"variants": []
	  }, 
	  
]
 

const AccordionItem = ({title, content, id}) => { 
 
	return  <div className="accordion-item">
				<h2 className="accordion-header h5 md">
					<button className="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
						{title}
					</button>
				</h2>
				<div id={id} className="accordion-collapse collapse" data-bs-parent="#productDetailAccordion">
					<div className="accordion-body p3">
						{content}
					</div>
				</div>
			</div>

}


const ProductDetail = () => {  
	//show contextimage on hover
	const [isDisplayHovered, setIsDisplayHovered] = useState(false);

	//set selected variation to have outline 
	const [variation, setVariation] = useState(0)

	//list of products display on shopgrid 
	const {id} = useParams()	  

	//get the product data from redux store 
	const productObj = useSelector((state)=>state.products.pdp)
 
	useEffect(()=>{    
		console.log('ehy')
	},[id])


	return <div className="pdp">

				{/* MAIN CONTENT */}
				<div className="main_product_info">

					{/* LEFT */}
					<div className="img_container" onMouseOver={() => setIsDisplayHovered(true)} onMouseOut={() => setIsDisplayHovered(false)}>  
						<img className={`main ${isDisplayHovered && "hidden"}`} src={productObj.image} alt={productObj.imageAlt} />
        				<img className={`contextImg ${isDisplayHovered && "show"}`} src={productObj.contextualImageUrl} alt={productObj.imageAlt} />		
					</div>

					{/* RIGHT */}
					<div className="product_info"> 
						<h2 className="h2 sb product_name">{productObj.name}</h2>
						<p className="h7 rg">{productObj.imageAlt}</p>
						<div className="price_rating_container">
							<div className="price_container">
								{productObj.price.discounted && 
								(<div><span className="discount_percent h8 md">20%</span>
								<span className="original_price tiny_text">${parseFloat((productObj.price.currentPrice * 1.25).toFixed(2))} </span></div>)
								}
								<h2 className="h2 sb current_price">${productObj.price.currentPrice}</h2>
							</div>
							<div className="review_container">
								<Rating rating={4.5} reviews="535"/>
								<p className="h8 rg people_purchased">806 people have purchased this product</p>
							</div>
						</div>
						<div className="variation_container">
							<h5 className="h5 md">Variations  </h5>
								<div className="variation_images">

								{/* outline on first default variation */}
								<img src={productObj.image} alt={productObj.imageAlt}  className={variation === 0 && "shape_outline_active"}  onClick={()=> setVariation(0)}/>

								{/* when clicked will change the variant state nubmer to index+1, show outline*/}
								{productObj.variants  && productObj.variants.map((variant, index)=>{ 
									return <img key={index} src={variant.image} alt={variant.imageAlt} className={variation === index+1 && "shape_outline_active"} onClick={()=> setVariation(index + 1)}/> 
								}) }
							</div>
						</div>
						<div className="action_container">
							<div className="stocks_container">
								<h5 className="h5 rg">Stock: <span className="md">{parseInt(productObj.id.slice(-3)) } left</span></h5>
								<QuantitySelector amount={2} weight="150px" height="56px" className="h6" iconSize={24}/>
							</div>
							<div className="add_item_container">
								<button className="add_wishlist shape_outline"><FiHeart size={24} className="icon"/></button>
								<button className="add_cart h5 sb"><BiCartAdd size={24} />Add to Cart</button>
							</div>
						</div>
						<div className="shipping_or_store">
							<div className="shipping pointer_cursor">
								<RiTruckFill size={24} className="icon "/>
								<h6 className="h7 md">Shipping costs start from $24 <p className="p4">See details here</p></h6>
								<MdOutlineKeyboardArrowRight size={24} className="icon" />
							</div>
							<div className="store pointer_cursor">
								<FaStoreAlt size={24} className="icon"/>
								<h6 className="h7 md">Find in store <p className="p4">Please select a pick-up store in your area</p></h6>
								<MdOutlineKeyboardArrowRight size={24} className="icon" />
							</div>
						</div>
					</div>
				</div>

				{/* PRODUCT DETAIL */}
				<div className="product_details">
					
					<div className="accordion accordion-flush" id="productDetailAccordion">
						<AccordionItem id="flush-collapseOne" title="Product Description" content={productObj.imageAlt} />
						<AccordionItem id="flush-collapseTwo" title="Size & dimentions" content={productObj.measurement !== "" ? productObj.measurement : "Measurements not available"}/>
						<AccordionItem id="flush-collapseThree" title="Reviews" content="Review system not implemented yet" />
					</div>

				</div> 

				{/* RELATED ITEMS */}
				<div className="divider"></div>
				<ProductCarousel h2="Related products">
					{relatedItem.map((item, index)=>{
						return <ProductCard key={index} productObj={item} />
					})} 
				</ProductCarousel>
			</div>;
};

export default ProductDetail; 


