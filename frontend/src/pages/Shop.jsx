import React, { useState } from "react";

//componennts
import RoomSubcatergory from "../components/RoomSubcatergory";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";

//imgs 

import newProduct1Image from "../img/landing/new_product_1.png"
import newProduct2Image from "../img/landing/new_product_2.png"
import newProduct3Image from "../img/landing/new_product_3.png"
import newProduct4Image from "../img/landing/new_product_4.png"
import ShopGrid from "../components/ShopGrid";

const Shop = () => {
    const [isSearch, setIsSearch] = useState(false)

	return (
		<div className="shop">
            {!isSearch &&  (
                <div>
                    <RoomSubcatergory room="Living Room" />
                    <ProductCarousel h2="Current Best Selling Products">
                        <ProductCard imageSrc={newProduct1Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
                        <ProductCard imageSrc={newProduct2Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
                        <ProductCard imageSrc={newProduct3Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
                        <ProductCard imageSrc={newProduct4Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
                        <ProductCard imageSrc={newProduct3Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
                        <ProductCard imageSrc={newProduct4Image} name="Studio Chair" alt="testimg" rating={4.8} reviews={102} price="18.90" />
                    </ProductCarousel> 
                </div>)
            }
            <ShopGrid />
		</div>
	);
};

export default Shop;
