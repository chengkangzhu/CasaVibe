import React from "react";

//images
import main_product from "../img/pdp/main_product.png"
import thumbnail1 from "../img/pdp/thumbnail (1).png"
import thumbnail2 from "../img/pdp/thumbnail (2).png"
import thumbnail3 from "../img/pdp/thumbnail (3).png"
import thumbnail4 from "../img/pdp/thumbnail (4).png"
import thumbnail5 from "../img/pdp/thumbnail (5).png"

import variation1 from "../img/pdp/variation (1).png"
import variation2 from "../img/pdp/variation (2).png"
import variation3 from "../img/pdp/variation (3).png"

//components
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import QuantitySelector from "../components/QuantitySelector"
import ProductCarousel from "../components/ProductCarousel";
import ProductCard from "../components/ProductCard";

//icons
import { FiHeart } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import { RiTruckFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight} from "react-icons/md";

//images
import newProduct1Image from "../img/landing/new_product_1.png"
import newProduct2Image from "../img/landing/new_product_2.png"
import newProduct3Image from "../img/landing/new_product_3.png"
import newProduct4Image from "../img/landing/new_product_4.png"

const AccordionItem = ({title, content, id}) => {
	return  <div className="accordion-item">
				<h2 class="accordion-header h5 md">
					<button className="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
						{title}
					</button>
				</h2>
				<div id={id} className="accordion-collapse collapse" data-bs-parent="#productDetailAccordion">
					<div className="accordion-body p3">
						{content}
					</div>
				</div>
			</div>

}


const ProductDetail = () => {
	return <div className="pdp">
				<div className="main_product_info">
					<div className="img_container">
						<div className="product_display"><img src={main_product} alt="main product image display" /></div>
						<div className="thumbnails_container">
							<div className="thumbail"><img src={thumbnail1} alt="thumbnail 1" /></div>
							<div className="thumbail"><img src={thumbnail2} alt="thumbnail 2" /></div>
							<div className="thumbail"><img src={thumbnail3} alt="thumbnail 3" /></div>
							<div className="thumbail"><img src={thumbnail4} alt="thumbnail 4" /></div>
							<div className="thumbail"><img src={thumbnail5} alt="thumbnail 5" /></div>
						</div>
					</div>
					<div className="product_info">
						<Breadcrumb />
						<h2 className="h2 sb product_name">MALSKÄR/ LOBERGET Chair - White</h2>
						<div className="price_rating_container">
							<div className="price_container">
								<span className="discount_percent h8 md">20%</span>
								<span className="original_price tiny_text">$45.55</span>
								<h2 className="h2 sb current_price">$28.88</h2>
							</div>
							<div className="review_container">
								<Rating rating={4.2} reviews="2235"/>
								<p className="h8 rg people_purchased">806 people have purchased this product</p>
							</div>
						</div>
						<div className="variation_container">
							<h5 className="h5 md">Variation <span className="h7 rg">(Black)</span></h5>
							<div className="variation_images">
								<img src={variation1} alt="variation one"  className="shape_outline_active"/>
								<img src={variation2} alt="variation two" />
								<img src={variation3} alt="variation three" />
							</div>
						</div>
						<div className="action_container">
							<div className="stocks_container">
								<h5 className="h5 rg">Stock: <span className="md">12 left</span></h5>
								<QuantitySelector amount={2} weight="150px" height="56px" className="h6" iconSize={24}/>
							</div>
							<div className="add_item_container">
								<button className="add_wishlist shape_outline"><FiHeart size={24} className="icon"/></button>
								<button className="add_cart h5 sb"><BiCartAdd size={24} />Add to Cart</button>
							</div>
						</div>
						<div className="shipping_or_store">
							<div className="shipping">
								<RiTruckFill size={24} className="icon"/>
								<p className="h7 md">Shipping costs start from $24 <p className="p4">See details here</p></p>
								<MdOutlineKeyboardArrowRight size={24} className="icon" />
							</div>
							<div className="store">
								<FaStoreAlt size={24} className="icon"/>
								<p className="h7 md">Find in store <p className="p4">Please select a pick-up store in your area</p></p>
								<MdOutlineKeyboardArrowRight size={24} className="icon" />
							</div>
						</div>
					</div>
				</div>
				<div className="product_details">
					
					<div className="accordion accordion-flush" id="productDetailAccordion">
						<AccordionItem id="flush-collapseOne" title="Product Details" content="A lightweight moisturizer designed to minimize irritations and provide much needed moisture for healthy looking skin. Delicate Daily Moisturizer contains an important blend of botanicals and extracts making your skin healthy and looking its best. " />
						<AccordionItem id="flush-collapseTwo" title="Size & dimentions" content="A lightweight moisturizer designed to minimize irritations and provide much needed moisture for healthy looking skin. Delicate Daily Moisturizer contains an important blend of botanicals and extracts making your skin healthy and looking its best. " />
						<AccordionItem id="flush-collapseThree" title="Reviews" content="A lightweight moisturizer designed to minimize irritations and provide much needed moisture for healthy looking skin. Delicate Daily Moisturizer contains an important blend of botanicals and extracts making your skin healthy and looking its best. " />
					</div>

				</div>
				
				<ProductCarousel h2="Good-matching products">
					<ProductCard imageSrc={newProduct1Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct2Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct3Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct4Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct3Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct4Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
				</ProductCarousel>
				<div className="divider"></div>
				<ProductCarousel h2="Good-matching products">
					<ProductCard imageSrc={newProduct1Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct2Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct3Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct4Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct3Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
					<ProductCard imageSrc={newProduct1Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
				</ProductCarousel>
			</div>;
};

export default ProductDetail;
