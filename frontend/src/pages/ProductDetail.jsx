import React, { useEffect, useState } from "react";
import axios from "axios";

//redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import {addToCart} from "../slices/cartSlice"
import { useDispatch } from "react-redux";

//components
import Rating from "../components/Rating";
import QuantitySelector from "../components/QuantitySelector";
import ProductCarousel from "../components/ProductCarousel";
import ProductCard from "../components/ProductCard";

//icons
import { FiHeart } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import { RiTruckFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";

const AccordionItem = ({ title, content, id }) => {
	return (
		<div className="accordion-item">
			<h2 className="accordion-header h5 md">
				<button
					className="accordion-button collapsed custom-accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${id}`}
					aria-expanded="false"
					aria-controls={id}
				>
					{title}
				</button>
			</h2>
			<div
				id={id}
				className="accordion-collapse collapse"
				data-bs-parent="#productDetailAccordion"
			>
				<div className="accordion-body p3">{content}</div>
			</div>
		</div>
	);
};

const ProductDetail = () => {
	//show contextimage on hover
	const [isDisplayHovered, setIsDisplayHovered] = useState(false);

	//set selected variation to have outline
	const [variation, setVariation] = useState(-1);

	//list of products display on shopgrid
	const { id } = useParams();

	//get the product data from redux store
	const productObj = useSelector((state) => state.products.pdp);

	//main product
	const [currrentProduct, setCurrentProduct] = useState(productObj);

	//related products
	const [relatedItem, setRelatedItem] = useState([]);

	const dispatch = useDispatch()

	//double check the id with the product
	useEffect(() => {
		setCurrentProduct(productObj);

		//double confirm the id
		//get the catergory then send the request
		const category = productObj.typeName;

		async function fetchCategoryData() {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URL}/product/search/${category}`
				);
				setRelatedItem(response.data.slice(0, 15));
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchCategoryData();
	}, [productObj]);

	return (
		<div className="pdp">
			{/* MAIN CONTENT */}
			<div className="main_product_info">
				{/* LEFT */}
				<div
					className="img_container"
					onMouseOver={() => setIsDisplayHovered(true)}
					onMouseOut={() => setIsDisplayHovered(false)}
				>
					<img
						className={`main ${isDisplayHovered && "hidden"}`}
						src={currrentProduct.image}
						alt={currrentProduct.imageAlt}
					/>
					<img
						className={`contextImg ${isDisplayHovered && "show"}`}
						src={currrentProduct.contextualImageUrl}
						alt={currrentProduct.imageAlt}
					/>
				</div>

				{/* RIGHT */}
				<div className="product_info">
					<h2 className="h2 sb product_name">
						{currrentProduct.currrentProductname}
					</h2>
					<p className="h7 rg">{currrentProduct.imageAlt}</p>
					<div className="price_rating_container">
						<div className="price_container">
							{currrentProduct.price.discounted && (
								<div>
									<span className="discount_percent h8 md">
										20%
									</span>
									<span className="original_price tiny_text">
										$
										{parseFloat(
											(
												currrentProduct.price
													.currentPrice * 1.25
											).toFixed(2)
										)}{" "}
									</span>
								</div>
							)}
							<h2 className="h2 sb current_price">
								${currrentProduct.price.currentPrice}
							</h2>
						</div>
						<div className="review_container">
							<Rating rating={4.5} reviews="535" />
							<p className="h8 rg people_purchased">
								806 people have purchased this product
							</p>
						</div>
					</div>
					<div className="variation_container">
						<h5 className="h5 md">Variations </h5>
						<div className="variation_images">
							{/* outline on first default variation */}
							<img
								src={productObj.image}
								alt={productObj.imageAlt}
								className={
									variation === -1 && "shape_outline_active"
								}
								onClick={() => {
									setVariation(-1);
									setCurrentProduct(productObj);
								}}
							/>

							{/* when clicked will change the variant state nubmer to index+1, show outline*/}
							{productObj.variants &&
								productObj.variants.map((variant, index) => {
									return (
										<img
											key={index}
											src={variant.image}
											alt={variant.imageAlt}
											className={
												variation === index &&
												"shape_outline_active"
											}
											onClick={() => {
												setVariation(index);
												setCurrentProduct(
													productObj.variants[index]
												);
											}}
										/>
									);
								})}
						</div>
					</div>
					<div className="action_container">
						<div className="stocks_container">
							<h5 className="h5 rg">
								Stock:{" "}
								<span className="md">
									{parseInt(currrentProduct.id.slice(-3))}{" "}
									left
								</span>
							</h5>
							<QuantitySelector
								amount={2}
								weight="150px"
								height="56px"
								className="h6"
								iconSize={24}
							/>
						</div>
						<div className="add_item_container">
							<button className="add_wishlist shape_outline">
								<FiHeart size={24} className="icon" />
							</button>
							<button className="add_cart h5 sb" onClick={()=>dispatch(addToCart(productObj))}>
								<BiCartAdd size={24} />
								Add to Cart
							</button>
						</div>
					</div>
					<div className="shipping_or_store">
						<div className="shipping pointer_cursor">
							<RiTruckFill size={24} className="icon " />
							<h6 className="h7 md">
								Shipping costs start from $24{" "}
								<p className="p4">See details here</p>
							</h6>
							<MdOutlineKeyboardArrowRight
								size={24}
								className="icon"
							/>
						</div>
						<div className="store pointer_cursor">
							<FaStoreAlt size={24} className="icon" />
							<h6 className="h7 md">
								Find in store{" "}
								<p className="p4">
									Please select a pick-up store in your area
								</p>
							</h6>
							<MdOutlineKeyboardArrowRight
								size={24}
								className="icon"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* PRODUCT DETAIL */}
			<div className="product_details">
				<div
					className="accordion accordion-flush"
					id="productDetailAccordion"
				>
					<AccordionItem
						id="flush-collapseOne"
						title="Product Description"
						content={productObj.imageAlt}
					/>
					<AccordionItem
						id="flush-collapseTwo"
						title="Size & dimentions"
						content={
							productObj.measurement !== ""
								? productObj.measurement
								: "Measurements not available"
						}
					/>
					<AccordionItem
						id="flush-collapseThree"
						title="Reviews"
						content="Review system not implemented yet"
					/>
				</div>
			</div>

			{/* RELATED ITEMS */}
			<div className="divider"></div>
			{relatedItem.length ? (
				<ProductCarousel h2="Related products">
					{relatedItem.map((item, index) => {
						return <ProductCard key={index} productObj={item} />;
					})}
				</ProductCarousel>
			) : null}
		</div>
	);
};

export default ProductDetail;
