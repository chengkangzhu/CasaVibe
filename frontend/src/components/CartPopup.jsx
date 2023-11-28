import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
	initCart,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
} from "../slices/cartSlice";

//component
import PopupMenu from "./PopupMenu";

const CartItem = ({ item }) => {
	const {
		image,
		imageAlt,
		name,
		quantity,
		price: { currentPrice },
		id,
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
					<div className="decrement icon" onClick={handleDecrement}>
						<MdRemove size={16} />
					</div>
					<div className="amount">{quantity}</div>
					<div className="dincrement icon" onClick={handleIncrement}>
						<MdAdd size={16} />
					</div>
				</div>
			</div>
			<div className="right">
				<MdDelete size="16" className="icon" onClick={handleRemove} />
				<p className="h7 sb">${(currentPrice * quantity).toFixed(2)}</p>
			</div>
		</div>
	);
};

const CartPopup = () => {
	const [showMenu, setShowMenu] = useState(false);
	const cartItems = useSelector((state) => state.cart.items);
	const orderSummary = useSelector((state) => state.cart.orderSummary);
	const isAuth = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initCart());
	}, [dispatch]);

	return (
		<div className="cart_popup">
			<Link
				to="/cart"
				onClick={() => setShowMenu(false)}
				onMouseEnter={() => setShowMenu(true)}
			>
				<HiShoppingCart size={24} className="icon" />
			</Link>
			{isAuth ? (
				<PopupMenu showMenu={showMenu} className="cart_menu">
					<div>
						<h5 className="h5 md">Cart ({cartItems.length})</h5>
					</div>

					<div className="cart_items">
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
				</PopupMenu>
			) : (
				<PopupMenu showMenu={showMenu} className="auth_menu">
					<Link to="/signin">
						<span onClick={() => setShowMenu(false)}>Sign in</span>
					</Link>
					<Link to="/signup">
						<span onClick={() => setShowMenu(false)}>Sign up</span>{" "}
					</Link>
				</PopupMenu>
			)}
		</div>
	);
};

export default CartPopup;
