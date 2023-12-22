import React, { useEffect, useState } from "react";
import axios from "axios";

//toastify
import { toast } from "react-toastify";

//redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { updatePdp } from "../slices/ProductSlice";
import { updateWishlist } from "../slices/wishlistSlice";

//components
import Rating from "../components/Rating";
import ProductCarousel from "../components/ProductCarousel";
import ProductCard from "../components/ProductCard";

//icons
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { RiTruckFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

//img and gif
import notFoundImage from "../img/no-product-found.png";
import loadingGif from "../img/giphy.gif"

 
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
	const [isDisplayHovered, setIsDisplayHovered] = useState(false);
	const [variation, setVariation] = useState(-1);
	const [isLiked, setIsLiked] = useState(false);
	const [notFound, setNotFound] = useState(false);
	const { id } = useParams();
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user);
	const navigate = useNavigate();

	//redux
	const reduxPdp = useSelector((state) => state.products.pdp);
	const [currentProduct, setCurrentProduct] = useState(reduxPdp);
	const [relatedItem, setRelatedItem] = useState([]);
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	function isEmptyObject(obj) {
		return Object.keys(obj).length === 0;
	}

	const fetchRelatedItems = async (category, reupdateRedux = false) => {
		try {
			setRelatedItem([]);
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/product/search/${category}`
			);

			// console.log("fetching related item");
			const filteredData = response.data
				.filter((item) => {
					if (item.id !== id) {
						return true;
					} else {
						//update the same reduxpdp if the reupdateredux is true
						if (reupdateRedux) {
							dispatch(updatePdp(item));
						}
						return false;
					}
				})
				.slice(0, 15);
			setRelatedItem(filteredData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const fetchDataById = async (productId) => {
		try {
			// console.log("fetching product id item");
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/product/${productId}`
			);

			if (isEmptyObject(response.data)) {
				setNotFound(true);
			} else {
				setCurrentProduct(response.data);
				dispatch(updatePdp(response.data));
				await new Promise((resolve) => setTimeout(resolve, 1000));
				fetchRelatedItems(response.data.typeName.split(",")[0], true);
			}
		} catch (error) {
			console.log("Error fetching product:", error);
			setNotFound(true);
		}
	};

	//update the page when id is changed
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setIsLiked(false);
		setQuantity(1);
		setVariation(-1);
		if (id === reduxPdp.id) {
			setCurrentProduct(reduxPdp);

			//when currentproduct is set then search for related products
			if (currentProduct) {
				fetchRelatedItems(currentProduct.typeName.split(",")[0]);
			}
		} else {
			fetchDataById(id);
		}
	}, [id,currentProduct, fetchDataById, fetchRelatedItems, reduxPdp]);

	const handleLike = () => {
		//update the isLiked state

		//update the watchlist slice
		dispatch(
			updateWishlist({
				...currentProduct,
				liked: !isLiked,
			})
		);
		setIsLiked(!isLiked);
	};

	const handleAddToCart = async () => {
		if (token) {
			const itemToBeAdded = {
				...currentProduct,
				quantity,
				liked: isLiked,
			};

			//update redux
			dispatch(addToCart(itemToBeAdded));
			//update database
			await axios.patch(
				`${process.env.REACT_APP_API_URL}/user/${user._id}/cart`,
				{
					action: "add",
					productObj: itemToBeAdded,
				},
				{
					headers: {
						"Content-Type": "application/json",
						// 'Authorization': `Bearer ${token}`,
					},
				}
			);

			toast.success("Successfully added to cart!");
		} else {
			navigate("/signin");
			toast.warning("Please sign in to add items to cart.");
		}
	};

	return !notFound ? (
		<div className="pdp">
			{/* MAIN CONTENT */}

			{!isEmptyObject(currentProduct) ? (
				<div className="main_product_info">
					{/* LEFT */}
					<div
						className="img_container"
						onMouseOver={() => setIsDisplayHovered(true)}
						onMouseOut={() => setIsDisplayHovered(false)}
					>
						<img
							className={`main ${
								isDisplayHovered ? "hidden" : ""
							}`}
							src={currentProduct.image}
							alt={currentProduct.imageAlt}
						/>
						<img
							className={`contextImg ${
								isDisplayHovered ? "show" : ""
							}`}
							src={currentProduct.contextualImageUrl}
							alt={currentProduct.imageAlt}
						/>
					</div>

					{/* RIGHT */}
					<div className="product_info">
						<h2 className="h2 sb product_name">
							{currentProduct.name}
						</h2>
						<p className="h7 rg">{currentProduct.imageAlt}</p>
						<div className="price_rating_container">
							<div className="price_container">
								{currentProduct.price.discounted && (
									<div>
										<span className="discount_percent h8 md">
											20%
										</span>
										<span className="original_price tiny_text">
											$
											{parseFloat(
												(
													currentProduct.price
														.currentPrice * 1.25
												).toFixed(2)
											)}
										</span>
									</div>
								)}
								<h2 className="h2 sb current_price">
									${currentProduct.price.currentPrice}
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
									src={reduxPdp.image}
									alt={reduxPdp.imageAlt}
									className={
										variation === -1
											? "shape_outline_active"
											: ""
									}
									onClick={() => {
										setVariation(-1);
										setCurrentProduct(currentProduct);
									}}
								/>

								{/* when clicked will change the variant state nubmer to index+1, show outline*/}
								{reduxPdp.variants &&
									reduxPdp.variants.map((variant, index) => {
										return (
											<img
												key={index}
												src={variant.image}
												alt={variant.imageAlt}
												className={
													variation === index
														? "shape_outline_active"
														: ""
												}
												onClick={() => {
													setVariation(index);
													setCurrentProduct(
														reduxPdp.variants[index]
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
										{" "}
										{currentProduct.id
											.slice(-3)
											.replace(/^0+/, "")}{" "}
										left{" "}
									</span>
								</h5>
								<div
									className="quantity_selector shape_outline md h6"
									style={{ width: "150px", height: "56px" }}
								>
									<div
										className="decrement icon"
										onClick={() => {
											if (quantity !== 1) {
												setQuantity((prev) => prev - 1);
											}
										}}
									>
										<MdRemove size={24} />
									</div>
									<div className="amount">{quantity}</div>
									<div
										className="dincrement icon"
										onClick={() =>
											setQuantity((prev) => prev + 1)
										}
									>
										<MdAdd size={24} />
									</div>
								</div>
							</div>
							<div className="add_item_container">
								<button
									className={`add_wishlist shape_outline ${
										isLiked ? "liked" : ""
									}`}
									onClick={handleLike}
								>
									{isLiked ? (
										<AiFillHeart
											size={24}
											className="icon"
										/>
									) : (
										<AiOutlineHeart
											size={24}
											className="icon"
										/>
									)}
								</button>

								<button
									className="add_cart h5 sb"
									onClick={handleAddToCart}
								>
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
										Please select a pick-up store in your
										area
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
			) : (
				<img
					src={loadingGif}
					alt="loading gif"
					className="loading_screen"
				/>
			)}
			{/* PRODUCT DETAIL */}

			{!isEmptyObject(currentProduct) && (
				<div className="product_details">
					<div
						className="accordion accordion-flush"
						id="productDetailAccordion"
					>
						<AccordionItem
							id="flush-collapseOne"
							title="Product Description"
							content={currentProduct.imageAlt}
						/>
						<AccordionItem
							id="flush-collapseTwo"
							title="Size & dimentions"
							content={
								currentProduct.measurement !== ""
									? currentProduct.measurement
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
			)}

			{/* RELATED ITEMS */}
			<div className="divider"></div>
			{relatedItem.length > 1 ? (
				<ProductCarousel h2="Related products">
					{relatedItem.map((item, index) => {
						return <ProductCard key={index} productObj={item} />;
					})}
				</ProductCarousel>
			) : (
				<img
					src={loadingGif}
					alt="loading gif"
					className="loading_screen"
				/>
			)}
		</div>
	) : (
		<img src={notFoundImage} alt="not found" className="not_found_image" />
	);
};

export default ProductDetail;
