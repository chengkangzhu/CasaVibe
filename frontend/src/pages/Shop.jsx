import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//componennts
import RoomSubcatergory from "../components/RoomSubcatergory";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateShopGrid } from "../slices/shopGridSlice";

//imgs
import ShopGrid from "../components/ShopGrid";


const Shop = () => {
	const [showRoom, setShowRoom] = useState(false);
	const { type } = useParams();

	const bestSellingProducts = useSelector((state) => state.grid.bestSelling);
	const dispatch = useDispatch();

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
			setShowRoom(type) // when i make it through search bar then it turns this off
		}
		
		if (type !== undefined) {
			//send a category result to the backend and update the shopGridProducts state

			async function fetchData(keyword) {
				try {
					dispatch(updateShopGrid([]));
					const response = await axios.get(
						`${process.env.REACT_APP_API_URL}/product/search/${keyword}`
					);
					if (response.data.length === 0) {
						console.log("No products found.");
					} else {
						dispatch(updateShopGrid(response.data));
					}
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			}

			fetchData(type);
		}
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [type, dispatch]);

	return (
		<div className="shop">
			{showRoom && <RoomSubcatergory room={showRoom} />}
			{bestSellingProducts.length > 1 && (
				<ProductCarousel h2="Best Selling Products">
					{bestSellingProducts.map((item, index) => {
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
			<ShopGrid />
		</div>
	);
};

export default Shop;
