import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

//componennts
import RoomSubcatergory from "../components/RoomSubcatergory";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData} from "../slices/shopGridSlice";

//imgs
import ShopGrid from "../components/ShopGrid";


const Shop = () => {
	const [showRoom, setShowRoom] = useState(false)
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
			setShowRoom(type)
		} else if (type !== undefined) {   
			//update the shopgrid and turn off the room
			dispatch(fetchData({keyWord: type}));
			setShowRoom(false)
		} 
	}, [type, dispatch]);


	useEffect(()=>{  
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	},[])

	return (
		<div className="shop">
			{showRoom && <RoomSubcatergory room={showRoom} />}
			{bestSellingProducts.length > 1 && (
				<ProductCarousel h2="Best Selling Products">
					{bestSellingProducts.map((item, index) => <ProductCard key={index} productObj={item} />)}
				</ProductCarousel>
			)}
			<ShopGrid />
		</div>
	);
};

export default Shop;
