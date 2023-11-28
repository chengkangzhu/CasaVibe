import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

//component
import PopupMenu from "./PopupMenu";

//redux
import { useDispatch } from "react-redux";
import { toggleShowRoom } from "../slices/shopGridSlice";


const ProductPopup = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [currentCategory, setCurrentCategory] = useState("Furniture")
    const dispatch = useDispatch()
    const navigate = useNavigate()

     

    const productMap = {
        "Furniture": [
            { name: "Sofas & Sectionals", key: "fu003" },
            { name: "Armchairs & Accent Chairs", key: "fu006" },
            { name: "Dressers & Storage Drawers", key: "st004" },
            { name: "Beds", key: "bm003" },
            { name: "Tables & Desks", key: "fu004" },
            { name: "Chairs", key: "fu002" },
            { name: "Shelving Units, Bookcases & Storage Options", key: "st002" },
            { name: "Outdoor Furniture", key: "od003" },
            { name: "Display & Storage Cabinets", key: "st003" },
            { name: "Utility & Storage Carts", key: "fu005" }
        ],
        "Kitchen & Dining": [
            { name: "Kitchen Cabinets", key: "700292" },
            { name: "Kitchen Doors & Drawer Fronts", key: "700293" },
            { name: "Kitchen Systems", key: "ka003" },
            { name: "Appliances", key: "ka002" },
            { name: "Kitchen & Cooking Accessories", key: "kt002" },
            { name: "Cookware", key: "kt003" },
            { name: "Kitchen Islands & Carts", key: "10471" },
            { name: "Kitchen Pantry Storage", key: "16200" },
            { name: "Serveware", key: "16043" },
            { name: "Coffee & Tea Accessories", key: "16044" }
        ],
        "Home Organization": [
            { name: "Filing Cabinets & Storage Cabinets", key: "10385" },
            { name: "Wall Shelves", key: "10398" },
            { name: "Drawer Units", key: "10711" },
            { name: "Storage Boxes & Baskets", key: "10550" },
            { name: "Bins & Bags", key: "16213" },
            { name: "Laundry Baskets", key: "20601" },
            { name: "Underbed Storage Bags & Bins", key: "19059" },
            { name: "Clothes & Shoe Organizers", key: "st005" },
            { name: "Storage Containers, Organizers & Baskets", key: "st007" },
            { name: "Wall Shelves & Hooks", key: "st006" }
        ],
        "Home Decor": [
            { name: "Rugs", key: "10653" },
            { name: "Decorative Pillows & Cushion Covers", key: "10659" },
            { name: "Noticeboards, Memo Boards, & Bulletin Boards", key: "10574" },
            { name: "Mirrors", key: "20489" },
            { name: "Wall Décor", key: "10757" },
            { name: "Clocks", key: "10759" },
            { name: "Candle Holders & Candles", key: "10760" },
            { name: "Vases & Bowls", key: "10769" },
            { name: "Decorative Lighting", key: "14971" }
        ],
        "Bedding & Mattresses": [
            { name: "Bed Legs", key: "24822" },
            { name: "Mattress Foundations & Bases", key: "24825" },
            { name: "Bed Slats", key: "24827" },
            { name: "Mattresses", key: "bm002" },
            { name: "Bedding", key: "tl004" }
        ],
        "Lighting & Electronics": [
            { name: "Desk Lamps", key: "20502" },
            { name: "LED Lightbulbs", key: "20514" },
            { name: "Bathroom Lighting", key: "10736" },
            { name: "Decorative Lighting", key: "14971" },
            { name: "Integrated Lighting", key: "16280" },
            { name: "Kitchen Lighting", key: "16282" },
            { name: "Smart Lighting", key: "36812" },
            { name: "Smart Remote & Light Switches", key: "36814" },
            { name: "Wireless & Home Speakers", key: "40842" },
            { name: "Wi-Fi Speakers", key: "46194" }
        ],
        "Bathroom & Laundry": [
            { name: "Bathroom Accessories", key: "10555" },
            { name: "Bathroom Mirrors", key: "20490" },
            { name: "Watering Cans & Plant Misters", key: "20493" },
            { name: "Plant Stands", key: "20494" },
            { name: "Bath Mats", key: "20519" },
            { name: "Laundry Cabinets & Shelving", key: "20609" },
            { name: "Bathroom Storage", key: "ba002" },
            { name: "Showers", key: "40690" },
            { name: "Laundry", key: "ba003" }
        ],
        "Kids & Baby": [
            { name: "Baby Textiles", key: "18690" },
            { name: "Kids Storage & Organization", key: "18706" },
            { name: "Kids Tableware & Dinnerware", key: "18714" },
            { name: "Textiles for Kids", key: "18730" },
            { name: "Kids Furniture", key: "18767" },
            { name: "Nursery Furniture", key: "45780" },
            { name: "Baby", key: "bc002" },
            { name: "Kids", key: "bc003" }
        ],
        "Outdoor & Garden": [
            { name: "Outdoor Umbrellas, Canopies, Gazebos & More", key: "17887" },
            { name: "Outdoor Cushions and Pillows", key: "17893" },
            { name: "Outdoor Lighting", key: "17897" },
            { name: "Outdoor Tiles & Flooring", key: "21957" },
            { name: "Outdoor Storage: Shelves, Cabinets & Boxes", key: "21958" },
            { name: "Outdoor Plant Accessories", key: "31787" },
            { name: "Outdoor Accessories", key: "34203" },
            { name: "Outdoor Rugs", key: "34204" },
            { name: "Motorized Shades", key: "44531" },
            { name: "Plant Supplies & Accessories", key: "24887" }
        ],
        "Home Essentials": [
            { name: "Cable Management & Accessories", key: "16195" },
            { name: "Tools and Accessories", key: "16292" },
            { name: "Cabinet Handles, Pulls, & Knobs", key: "16298" },
            { name: "Cleaning Accessories", key: "20609" },
            { name: "Ironing Boards", key: "20608" },
            { name: "Bakeware", key: "20636" },
            { name: "Food Storage & Organizing", key: "15937" },
            { name: "Dishwashing Accessories", key: "15938" },
            { name: "Serveware", key: "16043" },
            { name: "Coffee & Tea Accessories", key: "16044" }
        ],
        "Holiday & Seasonal": [
            { name: "Winter Décor", key: "49149" },
            { name: "Holiday Lighting", key: "49150" },
            { name: "Holiday Plants", key: "49151" },
            { name: "Holiday Textiles", key: "49152" },
            { name: "Holiday Tableware", key: "49153" },
            { name: "Holiday Cooking & Baking", key: "49154" },
            { name: "Holiday Foods", key: "49227" }
        ],
        "Pets & Home Safety": [
            { name: "Cats", key: "39569" },
            { name: "Dogs", key: "39570" },
            { name: "Home Safety Locks, Latches & More", key: "sp001" }
        ]
      };

    const handleClick = (categoryKey) =>{ 
        setShowMenu(false)

        //change the path which automatically make request 
        navigate("/shop/" + categoryKey.toLowerCase());
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
        
		dispatch(toggleShowRoom(false)); 

    }


	return (
		<div className="product_popup" onMouseEnter={()=>setShowMenu(true)} onMouseLeave={()=>setShowMenu(false)}>
            <div>
                Product <MdOutlineKeyboardArrowDown size={16} className="icon" />
            </div>
            <PopupMenu showMenu={showMenu} className="product_menu">
                <div className="left">
                    {Object.keys(productMap).map((key, index)=>(
                        <span key={index} onMouseEnter={()=>setCurrentCategory(key)}>{key}  <MdOutlineKeyboardArrowRight size={16} /></span>
                        ))}
                </div>
                <div className="right">
                    {productMap[currentCategory].map((arrayItem,index) =>(
                        <span key={index} onClick={() =>handleClick(arrayItem.key)}>{arrayItem.name}</span>
                    ))}
                </div>
            </PopupMenu>
			
		</div>
	);
};

export default ProductPopup;
