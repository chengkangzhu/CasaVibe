import React, { useState } from "react";

//icon
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

//component
import QuantitySelector from "../components/QuantitySelector";
 
//product datas 
import {cartProductsTemplate} from "../data"
 

const CartItem = ({
	imageSrc,
	alt,
	name,
	weight,
	amount,
	price,
	isLiked = false,
}) => {
	return (
		<div className="cart_item">
			<div className="left">
				<img src={imageSrc} alt={alt} />
				<div>
					<p className="h5 md name">{name}</p>
					<p className="h5 sb price">${price}</p>
					<p className="h7 rg">Total package weight: {weight} kg</p>
				</div>
			</div>
			<QuantitySelector
				amount={amount}
				weight="150px"
				height="56px"
				className="h6"
				iconSize={24}
			/>
			<div className="right">
				<p className="h4 sb">${(price * amount).toFixed(2)}</p>
				<div className="action_icons">
					<AiOutlineHeart size={24} className="icon" />
					<div className="vertical_divider"></div>
					<MdDelete size={24} className="icon" />
				</div>
			</div>
		</div>
	);
};

const ShoppingCart = () => {
	const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState("")

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
    if(note === ""){
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
				{cartProductsTemplate.map((item,index)=>{
					return <CartItem key={index} imageSrc={item.image} name={item.name} weight={4.23} price={item.price.currentPrice} amount={3} />
				})} 
				</div>        
			</div>

			<div className="cart_footer ">
				<div className="textarea_container">
          {!isFocused && <FaPen size={24} className="icon pen_icon" />}
					<textarea
						className={`h7 rg ${isFocused ? "focused" : ""}`}
						placeholder={ isFocused ? "" : "Add a note for the seller…" }
						onFocus={handleFocus}
						onBlur={handleBlur}
            value={note}
            onChange={handleNoteChange}
					></textarea>
				</div>
        <div className="checkout_container">
          <h5 className="h5 md">Use a promo code</h5>
          <div className="promo_code_container">
            <input type="text" className="h7 rg" placeholder="Enter gift card or discount code"/>
            <button className="h7 md" >Apply</button>
          </div>
          <p className="h7 rg quantity">Product quantity: <span>3</span></p>
          <p className="h7 rg weight">Total package weight:  <span>232.23kg</span></p>
          <p className="h7 rg shipping">Service and Shipping Fees  <span>$14.00</span></p>
          <p className="h5 sb total">Service and Shipping Fees  <span className="h4">$46.77</span></p>
          <button className="pay_button h5 sb"><HiOutlineShoppingBag size={24} /> Continue to payment</button>
          <p className="p4">CasaVibe always attaches importance to the security of your transactions. All transactions via CasaVibe.com are guaranteed to be 100% safe.</p>
        </div>
			</div>
		</div>
	);
};

export default ShoppingCart;
