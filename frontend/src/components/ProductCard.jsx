import React ,{useState} from 'react'

//component
import Rating from './Rating';
import { Link } from 'react-router-dom';

const ProductCard = ({
  productObj: {
    id,
    name,
    price: { currentPrice, discounted },
    image,
    contextualImageUrl,
    imageAlt,
  },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={"/pdp/" + id} >
      <div className='product_card'> 
        <div className="image_container" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
          <img className={`main ${isHovered && "hidden"}`} src={image} alt={imageAlt} />
          <img className={`contextImg ${isHovered && "show"}`} src={contextualImageUrl} alt={imageAlt} />
        </div>
        <p className='product-l name'>{name}</p> 
        <Rating rating={4.7} reviews={315} />
        <div className="price_container">
          <span className="h7 sb">${currentPrice}</span>
          {discounted && (
            <span className="h8 rg discounted_price">${parseFloat((currentPrice * 1.25).toFixed(2))}</span>
          )}
        </div>
      </div>
    </Link>
  );
};




 
 

export default ProductCard