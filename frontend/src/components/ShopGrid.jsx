import React from "react";

//components
import Sort from "./Sort";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
 
const ShopGrid = ({gridProducts}) => {
	return (
		<div className="shop_grid">
			<div className="head_row">
				<div className="head_row_buttons">
					<Filter />
					<Sort />
				</div>
				<p className="h7 rg total_products">
					Shows 1-40 of {gridProducts.length} product
				</p>
			</div>
			<div className="shop_grid_container">
				{gridProducts.map((item, index) => (
					<ProductCard key={index} productObj={item} />
				))}
			</div>
			<Pagination totalPages={Math.ceil(gridProducts.length / 40)} currentPage={1} />
		</div>
	);
};

export default ShopGrid;
