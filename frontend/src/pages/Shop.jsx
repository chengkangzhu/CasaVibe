import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//componennts
import RoomSubcatergory from "../components/RoomSubcatergory";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";

//imgs
import ShopGrid from "../components/ShopGrid";

//product datas
import {
	defaultShopGridProducts,
	collectonShopGridProducts,
	diningShopGridProducts,
	kitchenShopGridProducts,
	livingShopGridProducts,
	homeOfficeShopGridProducts,
	bathroomShopGridProducts,
} from "../data";

const Shop = () => {
	const [shopGridProducts, setShopGridProducts] = useState(
		defaultShopGridProducts
	);
	const [showRoom, setShowRoom] = useState(false);
	const { type } = useParams();

	//check the route param to determine to showroom or not
	useEffect(() => {
		const rooms = [
			"Bedroom",
			"Dining Room",
			"Kitchen",
			"Living Room",
			"Home Office",
			"Bathroom",
		];

		if (rooms.includes(type)) {
			setShowRoom(type);

			//update the shopgridproduct state to show the bedroom furnitures
			switch (type) {
				case "Bedroom":
					setShopGridProducts(defaultShopGridProducts); // Change this to your desired data for Bedroom
					break;
				case "Dining Room":
					setShopGridProducts(diningShopGridProducts);
					break;
				case "Kitchen":
					setShopGridProducts(kitchenShopGridProducts);
					break;
				case "Living Room":
					setShopGridProducts(livingShopGridProducts);
					break;
				case "Home Office":
					setShopGridProducts(homeOfficeShopGridProducts);
					break;
				case "Bathroom":
					setShopGridProducts(bathroomShopGridProducts);
					break;
				default:
					setShopGridProducts(defaultShopGridProducts);
			}
		} else if (type === "collections") {
			setShopGridProducts(collectonShopGridProducts);
		} else if (type !== undefined) {
			//send a category result to the backend and update the shopGridProducts state
			async function fetchData() {
				try {
					const response = await axios.get(
						`${process.env.REACT_APP_API_URL}/product/search/${type}`
					);
					setShopGridProducts(response.data);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			}

			fetchData();
		}
	}, [type]);

	return (
		<div className="shop">
			{showRoom && <RoomSubcatergory room={showRoom} />}
			{shopGridProducts && (
				<ProductCarousel h2="Best Selling Products">
					{shopGridProducts.map((item, index) => {
						if (index < 10) {
							return (
								<ProductCard key={index} productObj={item} />
							);
						} else {
							return null;
						}
					})}
				</ProductCarousel>
			)}
			<ShopGrid gridProducts={shopGridProducts.slice(10, 50)} />
		</div>
	);
};

export default Shop;
