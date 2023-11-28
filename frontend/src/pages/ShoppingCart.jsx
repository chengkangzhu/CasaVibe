import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import axios from "axios";

//icon
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai"; 
import { FaPen } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

//redux
import { useDispatch } from "react-redux";
import { updatePdp } from "../slices/ProductSlice";
import {
	initCart,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	toggleLike,
} from "../slices/cartSlice";
import { updateWishlist } from "../slices/wishlistSlice";

const CartItem = ({ item }) => {
	const {
		image,
		imageAlt,
		name,
		quantity,
		price: { currentPrice },
		id,
		liked,
	} = item;
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.auth.user._id);


	const updateDatabase = async (action) => {
		await axios.patch(
			`${process.env.REACT_APP_API_URL}/user/${userId}/cart`,
			{
				action: action,
				productObj: { id },
			},
			{
				headers: {
					"Content-Type": "application/json",
					// 'Authorization': `Bearer ${token}`,
				},
			}
		);
	};

	const handleLike = (id) => {
		dispatch(updateWishlist({ ...item, liked: !liked }));
		dispatch(toggleLike({ id }));
		updateDatabase("toggleLike")
	};

	const handleDecrement = () => {
		if (quantity !== 1) {
			dispatch(decrementQuantity({ id }));
			updateDatabase("decrementQuantity");
		}
	};

	const handleIncrement = () => {
		dispatch(incrementQuantity({ id }));
		updateDatabase("incrementQuantity");
	};

	const handleRemove = () => {
		dispatch(removeFromCart({ id }));
		updateDatabase("remove");
	};

	return (
		<div className="cart_item">
			{/* PRODUCT INFO  */}
			<Link
				className="left"
				to={`/pdp/${id}`}
				onClick={() => {
					dispatch(updatePdp(item));
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: "instant",
					});
				}}
			>
				<img src={image} alt={imageAlt} />
				<div>
					<p className="h5 md name">{name}</p>
					<p className="h5 sb price">${currentPrice}</p>
					<p className="h7 rg">Total package weight: {6.8} kg</p>
				</div>
			</Link>

			{/* QUANTITY SELECTOR */}
			<div
				className={`quantity_selector shape_outline md h6`}
				style={{ width: "150px", height: "56px" }}
			>
				<div
					className="decrement icon"
					onClick={handleDecrement}
				>
					<MdRemove size={24} />
				</div>
				<div className="amount">{quantity}</div>
				<div
					className="increment icon"
					onClick={handleIncrement}
				>
					<MdAdd size={24} />
				</div>
			</div>

			{/* ACTION BUTTOMS  */}
			<div className="right">
				<p className="h4 sb">${(currentPrice * quantity).toFixed(2)}</p>
				<div className="action_icons">
					{liked ? (
						<AiFillHeart
							size={24}
							className="icon like"
							onClick={() => handleLike(id)}
						/>
					) : (
						<AiOutlineHeart
							size={24}
							className="icon"
							onClick={() => handleLike(id)}
						/>
					)}
					<div className="vertical_divider"></div>
					<MdDelete
						size={24}
						className="icon"
						onClick={handleRemove}
					/>
				</div>
			</div>
		</div>
	);
};

const ShoppingCart = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [note, setNote] = useState("");
	const cartItems = useSelector((state) => state.cart.items);
	const orderSummary = useSelector((state) => state.cart.orderSummary);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initCart());
	}, [dispatch]);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		if (note === "") {
			setIsFocused(false);
		}
	};

	const handleNoteChange = (e) => {
		setNote(e.target.value);
	};

	return (
		<div className="shopping_cart">
			<h2 className="h2 sb">Shopping Cart</h2>
			<div className="cart_items_scrollbar">
				<div className="cart_items_container">
					<div className="cart_header">
						<span className="h7 rg product">Product</span>
						<span className="h7 rg amount">Amount</span>
						<span className="h7 rg subtotal">Subtotal</span>
					</div>
					{cartItems.length > 0 ? (
						cartItems.map((item, index) => {
							return <CartItem item={item} key={index} />;
						})
					) : (
						<img
							src="https://www.seensil.com/assets/images/cart-empty.jpg"
							alt="empty cart"
							className="empty_cart"
						/>
					)}
				</div>
			</div>

			<div className="cart_footer ">
				<div className="textarea_container">
					{!isFocused && (
						<FaPen size={24} className="icon pen_icon" />
					)}
					<textarea
						className={`h7 rg ${isFocused ? "focused" : ""}`}
						placeholder={
							isFocused ? "" : "Add a note for the seller…"
						}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={note}
						onChange={handleNoteChange}
					></textarea>
				</div>
				<div className="checkout_container">
					<h5 className="h5 md">Use a promo code</h5>
					<div className="promo_code_container inactive_cursor">
						<input
							type="text"
							className="h7 rg inactive_cursor"
							placeholder="Enter gift card or discount code"
						/>
						<button className="h7 md inactive_cursor">Apply</button>
					</div>
					<p className="h7 rg quantity">
						{" "}
						Product quantity: <span>{orderSummary.quantity}</span>
					</p>
					<p className="h7 rg weight">
						Total package weight: <span>232.23kg</span>
					</p>
					<p className="h7 rg shipping">
						Service and Shipping Fees{" "}
						<span>${orderSummary.shipping}</span>
					</p>
					<p className="h5 sb total">
						Subtotal{" "}
						<span className="h4">${orderSummary.subtotal}</span>
					</p>
					<Link
						to="/payment"
						className="pay_button h5 sb"
						onClick={() => {
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "instant",
							});
						}}
					>
						<HiOutlineShoppingBag size={24} /> Continue to payment
					</Link>
					<p className="p4">
						CasaVibe always attaches importance to the security
						ofyour transactions. All transactions via CasaVibe.com
						areguaranteed to be 100% safe.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
