import React from 'react'

const ProductCarousel = ({h2, children}) => {
  return (
    <div className='product_carousel'>
        <h2 className="h2 sb">{h2}</h2>
        <div className="products_container">
            {children}
        </div>
    </div>
  )
}

export default ProductCarousel