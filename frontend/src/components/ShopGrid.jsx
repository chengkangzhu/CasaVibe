import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";

//components
import Sort from "./Sort";
import Filter from "./Filter";
import ProductCard from "./ProductCard";

//icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

//img and gif
import notFoundImage from "../img/no-product-found.png";
import loadingGif from "../img/giphy.gif"

const ShopGrid = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const gridProducts = useSelector((state) => state.grid.grid);
	const totalPages = Math.ceil(gridProducts.length / 40);
	const isNotFound = useSelector((state) => state.grid.notFound);
	const isFiltering = useSelector((state)=> state.grid.filtering) 

	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);

			window.scrollTo({
				top: 820,
				left: 0,
				behavior: "smooth",
			});
		}
	};

	const renderPaginationButtons = () => {
		const buttons = [];
		const pageRange = 2; // Number of pages to show before and after the current page
		const ellipsis = <span>...</span>;

		for (let i = 1; i <= totalPages; i++) {
			if (
				i === 1 ||
				i === totalPages ||
				(i >= currentPage - pageRange && i <= currentPage + pageRange)
			) {
				buttons.push(
					<button
						key={i}
						onClick={() => handlePageChange(i)}
						className={
							i === currentPage
								? "pagination_num shape_outline_active"
								: "pagination_num"
						}
					>
						{i}
					</button>
				);
			} else if (buttons[buttons.length - 1] !== ellipsis) {
				buttons.push(ellipsis);
			}
		}

		return buttons;
	};

	useEffect(() => {
		setCurrentPage(1); 
	}, [gridProducts]);

	return gridProducts.length > 1 ? (
		<div className="shop_grid">
			<div className="head_row">
				<div className="head_row_buttons">
					<Filter />
					<Sort />
				</div>
				<p className="h7 rg total_products">
					<span className="h7 rg total_products">
						Shows {40 * (currentPage - 1)}-
						{Math.min(40 * currentPage, gridProducts.length)} of{" "}
						{gridProducts.length} products
					</span>
				</p>
			</div>
			{!isFiltering ? (
				<div className="shop_grid_container">
					{gridProducts
						.slice(40 * (currentPage - 1), 40 * currentPage)
						.map((item, index) => (
							<ProductCard key={item.id} productObj={item} />
						))}
				</div>
			) : (
				<img
					src={loadingGif}
					alt="loading gif"
					className="loading_screen wider"
				/>
			)}

			{totalPages > 1 && (
				<div className="pagination h7 md">
					<MdOutlineKeyboardArrowLeft
						onClick={() => handlePageChange(currentPage - 1)}
						className={currentPage === 1 ? "hidden icon" : "icon"}
						size={24}
					/>
					{renderPaginationButtons()}
					<MdOutlineKeyboardArrowRight
						onClick={() => handlePageChange(currentPage + 1)}
						className={
							currentPage === totalPages ? "hidden icon" : "icon"
						}
						size={24}
					/>
				</div>
			)}
		</div>
	) : !isNotFound ? (
		
		<img
			src={loadingGif}
			alt="loading gif"
			className="loading_screen wider"
		/>
	) : (
		<img src={notFoundImage} alt="not found" className="not_found_image" />
	);
};

export default ShopGrid;
