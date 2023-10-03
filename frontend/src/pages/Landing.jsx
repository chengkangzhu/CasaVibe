import React, { useState } from "react";
import { Link } from "react-router-dom";

//icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

//components
import CatergoryBlock from "../components/CatergoryBlock";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";

//images
import mirrorImage from "../img/landing/mirror.png";
import bedImage from "../img/landing/bed.png";
import cushionImage from "../img/landing/cushion.png";
import sofaImage from "../img/landing/sofa.png";
import chairImage from "../img/landing/chair.png";
import lampImage from "../img/landing/lamp.png";

import sofaSetMain from "../img/landing/sofa_set_main.png"; 

import brand1 from "../img/landing/brand1.png";
import brand2 from "../img/landing/brand2.png";
import brand3 from "../img/landing/brand3.png";
import brand4 from "../img/landing/brand4.png";
import brand5 from "../img/landing/brand5.png";
import brand6 from "../img/landing/brand6.png";
import brand7 from "../img/landing/brand7.png";
import brand8 from "../img/landing/brand8.png";
import brand9 from "../img/landing/brand9.png";
import brand10 from "../img/landing/brand10.png";

import news1 from "../img/landing/news (1).png";
import news2 from "../img/landing/news (2).png";
import news3 from "../img/landing/news (3).png";

//product datas
import { collectionProducts ,categoryNewProducts } from "../data"
 




const Landing = () => {
	const [activeCategory, setActiveCategory] = useState("All category");
	const [productArr, setProductArr] = useState(categoryNewProducts["All category"])  

	const handleClick = (category) => {
		setActiveCategory(category);
		setProductArr(categoryNewProducts[category])
	};

	return (
		<div className="landing">
			<div className="hero">
				<h1 className="h1 sb">A furniture that eases your life</h1>
				<h6 className="h6 rg">
					Explore worlds class top furnitures as per your requerments
					and choice
				</h6>
			</div>
			<div className="shop_now">
				<Link to="/shop" className="shop_now__button h5 sb">
					Shop Now{" "}
					<MdOutlineKeyboardArrowRight size={24} className="icon" />
				</Link>
			</div>
			<div className="catergory_section">
				<h2 className="h2 sb">Preferred Category</h2>
				<div className="catergories_container">
					<CatergoryBlock imageSrc={mirrorImage} name="Mirror" />
					<CatergoryBlock imageSrc={bedImage} name="Bed" />
					<CatergoryBlock imageSrc={cushionImage} name="Cushion" />
					<CatergoryBlock imageSrc={sofaImage} name="Sofa" />
					<CatergoryBlock imageSrc={chairImage} name="Chair" />
					<CatergoryBlock imageSrc={lampImage} name="Lamp" />
				</div>
			</div>
			<div className="new_product">
				<div className="new_product__header">
					<h2 className="h2 sb">New Products</h2>
					<nav className="h7 md">
						<span
							className={
								activeCategory === "All category"
									? "shape_outline_active"
									: ""
							}
							onClick={() => handleClick("All category")}
						>
							{" "}
							All category{" "}
						</span>
						<span
							className={
								activeCategory === "Furnitures"
									? "shape_outline_active"
									: ""
							}
							onClick={() => handleClick("Furnitures")}
						>
							{" "}
							Furnitures{" "}
						</span>
						<span
							className={
								activeCategory === "Chairs"
									? "shape_outline_active"
									: ""
							}
							onClick={() => handleClick("Chairs")}
						>
							{" "}
							Chairs{" "}
						</span>
						<span
							className={
								activeCategory === "Decor"
									? "shape_outline_active"
									: ""
							}
							onClick={() => handleClick("Decor")}
						>
							{" "}
							Decor{" "}
						</span>
						<span
							className={
								activeCategory === "Lighting"
									? "shape_outline_active"
									: ""
							}
							onClick={() => handleClick("Lighting")}
						>
							{" "}
							Lighting{" "}
						</span>
					</nav>
				</div>
				<div className="new_product__content">
					<div className="mainDisplayContainer">
						<img
							src={productArr[0].contextualImageUrl}
							alt={productArr[0].imageAlt}
						/>
					</div>
					<div className="other_products_container">
						{productArr.map((item, index) => {
							if (index !== 0) {
								return (
									<ProductCard
										key={index}
										productObj={item}
									/>
								);
							} else {
								return null; // or return undefined;
							}
						})}
					</div>
				</div>
			</div>
			<div className="sofa_set">
				<div className="sofa_set__content">
					<p className="h7 md">sale upto 20%</p>
					<h1 className="h1 sb">Fancy Sofa set</h1>
					<p className="p3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt.
					</p>
					<div className="other_product">
						<img src={collectionProducts[0].image} alt={collectionProducts[0].imageAlt} />
						<div className="product_description">
							<h6 className="h6 md">{collectionProducts[0].name}</h6>
							<p className="h7 sb discounted_price">
								${collectionProducts[0].price.currentPrice} 
								{collectionProducts[0].price.discounted && <span className="h8 rg">${parseFloat((collectionProducts[0].price.currentPrice * 1.25).toFixed(2))}</span>}
							</p>
						</div>
					</div>
					<div className="other_product">
						<img src={collectionProducts[1].image} alt={collectionProducts[1].imageAlt} />
						<div className="product_description">
							<h6 className="h6 md">{collectionProducts[1].name}</h6>
							<p className="h7 sb discounted_price">
								${collectionProducts[1].price.currentPrice} 
								{collectionProducts[1].price.discounted && <span className="h8 rg">${parseFloat((collectionProducts[1].price.currentPrice * 1.25).toFixed(2))}</span>}
							</p>
						</div>
					</div>  
					<Link to="/shop/collections" >
						<button className="explore_collection_button h5 sb">
							Explore Collection{" "}
							<MdOutlineKeyboardArrowRight
								size={24}
								className="icon"
							/>
						</button>
					</Link>
				</div>
				<div className="img_container">
					<img
						src={sofaSetMain}
						alt="sofa set main"
						className="sofa_set__image"
					/>
				</div>
			</div>
			<div className="brands">
				<div className="brand__container">
					<div className="brand">
						<img src={brand1} alt="" />
					</div>
					<div className="brand">
						<img src={brand2} alt="" />
					</div>
					<div className="brand">
						<img src={brand3} alt="" />
					</div>
					<div className="brand">
						<img src={brand4} alt="" />
					</div>
					<div className="brand">
						<img src={brand5} alt="" />
					</div>
					<div className="brand">
						<img src={brand6} alt="" />
					</div>
					<div className="brand">
						<img src={brand7} alt="" />
					</div>
					<div className="brand">
						<img src={brand8} alt="" />
					</div>
					<div className="brand">
						<img src={brand9} alt="" />
					</div>
					<div className="brand">
						<img src={brand10} alt="" />
					</div>
				</div>
				<div className="divider"></div>
			</div>
			<div className="news">
				<h1 className="h1 sb">Our Recent News</h1>
				<div className="news_wrapper">
					<NewsCard
						imageSrc={news1}
						alt="news1 image"
						title="Magic Tricks to Become a Cozy and Instagramable Living Room"
						date="Category / 18 Dec, 2023"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					/>
					<NewsCard
						imageSrc={news2}
						alt="news2 image"
						title="5 Examples of Scandinavian Kitchen Designs"
						date="Category / 18 Dec, 2023"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					/>
					<NewsCard
						imageSrc={news3}
						alt="news3 image"
						title="Office furniture cum wall units of TV Stand & Music Player"
						date="Category / 18 Dec, 2023"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;

