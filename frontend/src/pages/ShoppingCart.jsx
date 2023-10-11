import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

//icon
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

//component
import QuantitySelector from "../components/QuantitySelector";

//redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";
import { incrementQuantity, decrementQuantity } from "../slices/cartSlice";

const CartItem = ({
	image,
	imageAlt,
	name,
	quantity,
	price: { currentPrice },
	id,
}) => {
	const dispatch = useDispatch();

	return (
		<div className="cart_item">

			{/* PRODUCT INFO  */}
			<div className="left">
				<img src={image} alt={imageAlt} />
				<div>
					<p className="h5 md name">{name}</p>
					<p className="h5 sb price">${currentPrice}</p>
					<p className="h7 rg">Total package weight: {6.8} kg</p>
				</div>
			</div>


			{/* QUANTITY SELECTOR */}
			<div
				className={`quantity_selector shape_outline md h6`}
				style={{ width: "150px", height: "56px" }}
			>
				<div
					className="decrement icon"
					onClick={() => {
						if (quantity !== 1) {
							dispatch(decrementQuantity({ id }));
						}
					}}
				>
					<MdRemove size={24} />
				</div>
				<div className="amount">{quantity}</div>
				<div
					className="dincrement icon"
					onClick={() => dispatch(incrementQuantity({ id }))}
				>
					<MdAdd size={24} />
				</div>
			</div>

			{/* ACTION BUTTOMS  */}
			<div className="right">
				<p className="h4 sb">${(currentPrice * quantity).toFixed(2)}</p>
				<div className="action_icons">
					<AiOutlineHeart size={24} className="icon" />
					<div className="vertical_divider"></div>
					<MdDelete
						size={24}
						className="icon"
						onClick={() => dispatch(removeFromCart({ id }))}
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
					{cartItems &&
						cartItems.map((item, index) => {
							return <CartItem {...item} key={index} />;
						})}
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
					<div className="promo_code_container">
						<input
							type="text"
							className="h7 rg"
							placeholder="Enter gift card or discount code"
						/>
						<button className="h7 md">Apply</button>
					</div>
					<p className="h7 rg quantity">
						{" "}
						Product quantity: <span>3</span>{" "}
					</p>
					<p className="h7 rg weight">
						Total package weight: <span>232.23kg</span>
					</p>
					<p className="h7 rg shipping">
						Service and Shipping Fees <span>$14.00</span>
					</p>
					<p className="h5 sb total">
						Service and Shipping Fees{" "}
						<span className="h4">$46.77</span>
					</p>
					<button className="pay_button h5 sb">
						<HiOutlineShoppingBag size={24} /> Continue to payment
					</button>
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
