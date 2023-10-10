import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

//icon
import { HiShoppingCart } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

//component
import QuantitySelector from "./QuantitySelector";

//redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

const CartItem = ({ imageSrc, alt, name, weight, amount, price, id }) => {
	const dispatch = useDispatch();

	return (
		<div className="cart_item">
			<div className="left">
				<img src={imageSrc} alt={alt} />
			</div>
			<div className="center">
				<p className="name product-m item_name">{name}</p>
				<p className="h8 rg item_weight">
					Total package weight: {weight} kg
				</p>
				<QuantitySelector
					amount={amount}
					weight="96px"
					height="32px"
					className="h7"
					iconSize={16}
				/>
			</div>
			<div className="right">
				<MdDelete
					size="16"
					className="icon"
					onClick={() => dispatch(removeFromCart({ id }))}
				/>
				<p className="h7 sb">${(price * amount).toFixed(2)}</p>
			</div>
		</div>
	);
};

const CartPopup = () => {
	const [isDropDownVisible, setIsDropDownVisible] = useState(false);
	const cartItems = useSelector((state) => state.cart.items);

	const handleCartClick = () => {
		setIsDropDownVisible(false);
	};

	return (
		<div className="cart_popup">
			<Link
				to="/cart"
				onClick={handleCartClick}
				onMouseEnter={() => setIsDropDownVisible(true)}
			>
				<HiShoppingCart size={24} className="icon" />
			</Link>

			<div className={`menu shadow_300 ${isDropDownVisible && "show"}`}>
				<div className="header">
					<h5 className="h5 md">Cart (2)</h5>
				</div>
				<div className="cart_items">
					{cartItems &&
						cartItems.map((item, index) => {
							return (
								<CartItem
									id={item.id}
									key={index}
									imageSrc={item.image}
									alt={item.imageAlt}
									name={item.name}
									weight={4.23}
									price={item.price.currentPrice}
									amount={3}
								/>
							);
						})}
				</div>

				<div className="checkout">
					<p className="h7 rg subtotal">
						Subtotal <span className="sb">$36.88</span>
					</p>
					<Link to="/payment">
						<button
							className="checkout_button shape_outline_active h7 sb"
							onClick={() => setIsDropDownVisible(false)}
						>
							Checkout
						</button>
					</Link>
					<Link to="/cart">
						<button
							className="view_cart_button shape_outline h7 sb"
							onClick={() => setIsDropDownVisible(false)}
						>
							View Cart
						</button>
					</Link>
				</div>
        
			</div>
		</div>
	);
};

export default CartPopup;
