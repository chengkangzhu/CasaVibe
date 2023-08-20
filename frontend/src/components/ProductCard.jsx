import React from 'react'


import { ImStarFull} from "react-icons/im";
import { ImStarHalf} from "react-icons/im";
import { ImStarEmpty} from "react-icons/im";

const ProductCard = ({imageSrc, name, alt, rating, reviews, price, discount=false}) => {
  return (
    <div className='product_card'>
        <img src={imageSrc} alt={alt} />
        <p className='product-l name'>{name}</p>
        <div className="rating_container">
            <ImStarFull className='star'/>
            <ImStarFull className='star'/>
            <ImStarFull className='star'/>
            <ImStarFull className='star'/>
            <ImStarHalf className='star'/>
            <p className="h7 rg ">{rating} ({reviews} reviews)</p> 
        </div>
        <div className="price_container">
            <span className="h7 sb">${price}</span>
            <span className="h8 rg discounted_price">${price}</span>
        </div>
    </div>
  )
}

export default ProductCard

