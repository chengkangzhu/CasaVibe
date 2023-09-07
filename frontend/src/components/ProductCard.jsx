import React from 'react'

//component
import Rating from './Rating';

const ProductCard = ({imageSrc, name, alt, rating, reviews, price, discount=false}) => {
  return (
    <div className='product_card'>
        <img src={imageSrc} alt={alt} />
        <p className='product-l name'>{name}</p>
        <Rating rating={rating} reviews={reviews}/>
        <div className="price_container">
            <span className="h7 sb">${price}</span>
            <span className="h8 rg discounted_price">${price}</span>
        </div>
    </div>
  )
}

export default ProductCard

