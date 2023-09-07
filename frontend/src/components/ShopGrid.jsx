import React from "react";

//components
import Sort from "./Sort";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

//imgs
import shopgrid_img1 from "../img/shop/shopgrid_img (1).png";
import shopgrid_img2 from "../img/shop/shopgrid_img (2).png";
import shopgrid_img3 from "../img/shop/shopgrid_img (3).png";
import shopgrid_img4 from "../img/shop/shopgrid_img (4).png";
import shopgrid_img5 from "../img/shop/shopgrid_img (5).png";
import shopgrid_img6 from "../img/shop/shopgrid_img (6).png";
import shopgrid_img7 from "../img/shop/shopgrid_img (7).png";
import shopgrid_img8 from "../img/shop/shopgrid_img (8).png";
import shopgrid_img9 from "../img/shop/shopgrid_img (9).png";
import shopgrid_img10 from "../img/shop/shopgrid_img (10).png";
import shopgrid_img11 from "../img/shop/shopgrid_img (11).png";
import shopgrid_img12 from "../img/shop/shopgrid_img (12).png";
import shopgrid_img13 from "../img/shop/shopgrid_img (13).png";
import shopgrid_img14 from "../img/shop/shopgrid_img (14).png";
import shopgrid_img15 from "../img/shop/shopgrid_img (15).png";
import shopgrid_img16 from "../img/shop/shopgrid_img (16).png";
import shopgrid_img17 from "../img/shop/shopgrid_img (17).png";
import shopgrid_img18 from "../img/shop/shopgrid_img (18).png";
import shopgrid_img19 from "../img/shop/shopgrid_img (19).png";
import shopgrid_img20 from "../img/shop/shopgrid_img (20).png";

const imageSources = [
	shopgrid_img1,
	shopgrid_img2,
	shopgrid_img3,
	shopgrid_img4,
	shopgrid_img5,
	shopgrid_img6,
	shopgrid_img7,
	shopgrid_img8,
	shopgrid_img9,
	shopgrid_img10,
	shopgrid_img11,
	shopgrid_img12,
	shopgrid_img13,
	shopgrid_img14,
	shopgrid_img15,
	shopgrid_img16,
	shopgrid_img17,
	shopgrid_img18,
	shopgrid_img19,
	shopgrid_img20,
];

const ShopGrid = () => {
	return (
		<div className="shop_grid">
			<div className="head_row">
				<Sort />
				<Filter />
				<span className="h7 rg">Shows 1-40 of 183 product</span>
			</div>
			<div className="shop_grid_container">
				{imageSources.map((imgSrc, index) => (
					<ProductCard
						imageSrc={imgSrc}
            key={index}
						name="Studio Chair"
            alt={`Product ${index}`}
						rating={4.8}
						reviews={102}
						price="18.90"
					/>
				))}
			</div>
      <Pagination totalPages={12} />
		</div>
	);
};

export default ShopGrid;
