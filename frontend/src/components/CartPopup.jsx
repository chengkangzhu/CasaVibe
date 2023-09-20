import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//icon
import { HiShoppingCart } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

//component
import QuantitySelector from './QuantitySelector';

import whiteChairImage from "../img/cart/white_chair.png"
import woodenChairImage from "../img/cart/wooden_chair.png"

const CartItem = ({imageSrc, alt, name, weight, amount, price}) =>{
  return (
    <div className="cart_item">
      <div className="left"><img src={imageSrc} alt="" /></div>
      <div className="center">
        <p className="name product-m item_name">{name}</p>
        <p className="h8 rg item_weight">Total package weight: {weight} kg</p>
        <QuantitySelector amount={amount} weight="96px" height="32px" className="h7" iconSize={16}/>
      </div>
      <div className="right">
          <MdDelete size="16" className='icon' />
          <p className="h7 sb">${(price * amount).toFixed(2)}</p>
      </div>
    </div>
  )
}

const CartPopup = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const handleCartClick = () => { 
    setIsDropDownVisible(false);  
  };


  return (
    <div className='cart_popup' >
        <Link to="/cart"   onClick={handleCartClick} onMouseEnter={() => setIsDropDownVisible(true)} onMouseLeave={() => setIsDropDownVisible(false)}><HiShoppingCart size={24} className="icon" /></Link>
        
         <div className={`menu shadow_300 ${isDropDownVisible && "show"}`} >
          <div className="header">
            <h5 className="h5 md">Cart (2)</h5>
          </div>
          <div className="cart_items">
            <CartItem imageSrc={whiteChairImage} name="MALSKÄR/ LOBERGET Chair - White" weight={4.23} price={"28.88"} amount={3}/>
            <CartItem imageSrc={woodenChairImage} name="Wooden Chair" weight={4.23} price={"8.00"} amount={1}/>
          </div>
          <div className="checkout">
            <p className="h7 rg subtotal">Subtotal <span className="sb">$36.88</span></p>
            <button className="checkout_button shape_outline_active h7 sb">Checkout</button>
            <button className="view_cart_button shape_outline h7 sb">View Cart</button>
          </div>
        </div>  
    </div>
  )
}

export default CartPopup
