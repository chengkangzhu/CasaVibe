import React, { useState } from "react";
import { Link } from "react-router-dom";

//icon
import { HiShoppingCart } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { updatePdp } from "../slices/ProductSlice";
import {
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} from "../slices/cartSlice";

//component
import AuthPopup from "./AuthPopup";

const CartItem = ({item}) => {
	const {
		image,
		imageAlt,
		name,
		quantity,
		price: { currentPrice },
		id,
	} = item
	const dispatch = useDispatch();

	return (
		<div className="cart_item">
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
			</Link>
			<div className="center">
				<p className="name product-m item_name">{name}</p>
				<p className="h8 rg item_weight">
					Total package weight: {6.8} kg
				</p>
				<div
					className={`quantity_selector shape_outline md h7`}
					style={{ width: "96px", height: "32px" }}
				>
					<div
						className="decrement icon"
						onClick={() => {
							if (quantity !== 1) {
								dispatch(decrementQuantity({ id }));
							}
						}}
					>
						<MdRemove size={16} />
					</div>
					<div className="amount">{quantity}</div>
					<div
						className="dincrement icon"
						onClick={() => dispatch(incrementQuantity({ id }))}
					>
						<MdAdd size={16} />
					</div>
				</div>
			</div>
			<div className="right">
				<MdDelete
					size="16"
					className="icon"
					onClick={() => dispatch(removeFromCart({ id }))}
				/>
				<p className="h7 sb">${(currentPrice * quantity).toFixed(2)}</p>
			</div>
		</div>
	);
};

const CartPopup = () => {
	const [showMenu, setShowMenu] = useState(false);
	const cartItems = useSelector((state) => state.cart.items);
	const orderSummary = useSelector((state) => state.cart.orderSummary);
	const isAuth = useSelector(state => state.auth.token)


	return (
		<div className="cart_popup">
			<Link
				to="/cart"
				onClick={() => setShowMenu(false)}
				onMouseEnter={() => setShowMenu(true)}
			>
				<HiShoppingCart size={24} className="icon" />
			</Link>
			{isAuth ? 
			<div className={`menu shadow_300 ${showMenu && "show"}`}>
				<div className="header">
					<h5 className="h5 md">Cart (2)</h5>
				</div>
				<div className="cart_items">
					{cartItems &&
						cartItems.map((item, index) => {
							return <CartItem item={item} key={index} />;
						})}
				</div>

				<div className="checkout">
					<p className="h7 rg subtotal">
						Subtotal{" "}
						<span className="sb">${orderSummary.subtotal}</span>
					</p>
					<Link to="/payment">
						<button
							className="checkout_button shape_outline_active h7 sb"
							onClick={() => setShowMenu(false)}
						>
							Checkout
						</button>
					</Link>
					<Link to="/cart">
						<button
							className="view_cart_button shape_outline h7 sb"
							onClick={() => setShowMenu(false)}
						>
							View Cart
						</button>
					</Link>
				</div>
			</div>  :
			<AuthPopup showMenu={showMenu} setShowMenu={setShowMenu} />
			}
		</div>
	);
};

export default CartPopup;
