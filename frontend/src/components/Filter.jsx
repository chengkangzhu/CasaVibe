import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";

//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdClose } from "react-icons/md";

//redux  
import { useDispatch } from "react-redux";
import { fetchData } from "../slices/shopGridSlice";

//accordion section
const FilterItem = ({ title, children, buttonFunc, containerClass }) => {
	return (
		<div className="accordion-item filter_item">
			<h5 className="accordion-header h5 md">
				<button
					className="accordion-button custom-accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${title}`}
					aria-expanded="true"
					aria-controls={title}
					onClick={buttonFunc}
				>
					{title}
				</button>
			</h5>
			<div id={title} className="accordion-collapse collapse show">
				<div className={`accordion-body h7 rg ${containerClass}`}>
					{children}
				</div>
			</div>
		</div>
	);
};

const priceArr = [
	{
		id: "PRICE_0_10000",
		name: "$0.00 - 99.99",
	},
	{
		id: "PRICE_10000_20000",
		name: "$100.00 - 199.99",
	},
	{
		id: "PRICE_20000_30000",
		name: "$200.00 - 299.99",
	},
	{
		id: "PRICE_30000_40000",
		name: "$300.00 - 399.99",
	},
	{
		id: "PRICE_40000_2147483647",
		name: "$400.00+",
	},
];

const materialArr = [
	{
		id: "38828",
		name: "Fabric",
	},
	{
		id: "50788",
		name: "Solid wood",
	},
	{
		id: "47350",
		name: "Metal",
	},
	{
		id: "47349",
		name: "Wood (including board)",
	},
	{
		id: "53958",
		name: "Wood veneer",
	},
	{
		id: "47675",
		name: "Plastic",
	},
	{
		id: "38829",
		name: "Leather",
	},
	{
		id: "38830",
		name: "Coated fabric",
	},
	{
		id: "39393",
		name: "Rattan",
	},
	{
		id: "50350",
		name: "Plastic rattan",
	},
	{
		id: "47653",
		name: "Bamboo",
	},
];

const colorArr = [
	{
		id: "10028",
		name: "gray",
	},
	{
		id: "10003",
		name: "beige",
	},
	{
		id: "10156",
		name: "white",
	},
	{
		id: "10139",
		name: "black",
	},
	{
		id: "10019",
		name: "brown",
	},
	{
		id: "10007",
		name: "blue",
	},
	{
		id: "10033",
		name: "green",
	},
	{
		id: "10124",
		name: "red",
	},
	{
		id: "10042",
		name: "yellow",
	},
	{
		id: "10152",
		name: "turquoise",
	},
	{
		id: "10119",
		name: "pink",
	},
	{
		id: "10112",
		name: "orange",
	},
	{
		id: "10064",
		name: "lilac",
	},
];

const Filter = () => { 
	const [showFilter, setShowFilter] = useState(false);
	const [filterList, setFilterList] = useState([]);

	//add the price as well
	const [price, setPrice] = useState("");
	const [material, setMaterial] = useState("");
	const [color, setColor] = useState("");

	
	//search keyword 
	const { type } = useParams();
	const dispatch = useDispatch()

	
	const handlePriceChange = (id) => {
		setFilterList(filterList.includes("f-price-buckets") ? filterList : [...filterList, "f-price-buckets"]);
		setPrice(id);
	};


	const handleMaterialChange = (id) => { 
		setFilterList( filterList.includes("f-materials") ? filterList : [...filterList, "f-materials"]);
		setMaterial(id);
	};

	const handleColorChange = (id) => { 
		setFilterList( filterList.includes("f-colors") ? filterList : [...filterList, "f-colors"] );
		setColor(id);
	}; 
 
	const handleApplyFilter = () => {
		setShowFilter(false);
		let filterString = "";

		for(let i in filterList){
			if(i != 0) filterString += ',' 

			switch(filterList[i]) {
				case "f-price-buckets":
					filterString += `f-price-buckets=${price}`
					break
				case "f-materials":
					filterString += `f-materials=${material}`
					break
				case "f-colors":
					filterString += `f-colors=${color}`
					break
			}
		}
 
		//update the filter parameter to the filters appled 
		dispatch(fetchData({keyWord: type, filter: filterString}))
	};

	//remove scroll on filter shown
	useEffect(() => {
		if (showFilter) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		// Clean up the class when the component unmounts
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [showFilter]);

	return (
		<div className="filter">

			{/* BUTTON */}
			<button className="filter_button shape_outline h7 rg" onClick={() => setShowFilter(true)}>
				Filter <MdOutlineKeyboardArrowDown size={24} className="icon" />
			</button>

			{/* SIDEBAR */}
			<div className={`overlay ${showFilter && "active"}`}>
				
				{/* grey overlay */}
				<div
					className="close_overlay"
					onClick={() => {
						setShowFilter(false);
					}}
				></div>

				{/* SIDEBAR BODY */}
				<div className="filter_sidebar">

					{/* header */}
					<h4 className="h4 sb">
						Filter{" "}
						<MdClose
							size={24}
							className="icon"
							onClick={() => setShowFilter(false)}
						/>
					</h4>

					{/* contents */}
					<div
						className="filter_content accordion accordion-flush"
						id="filterPirceAccordion"
					>
						<FilterItem
							title="Price"
							containerClass="price_container"
						>
							{priceArr.map((item, index) => (
								<label className="h7 rg" key={index}>
									{item.name}
									<input
										type="radio"
										name="price"
										value={item.name}
										onChange={() => handlePriceChange(item.id)}
										checked={price === item.id}
									/>
								</label>
							))}
						</FilterItem>
						<FilterItem
							title="Material"
							containerClass="material_container"
						>
							{materialArr.map((item, index) => (
								<label className="h7 rg" key={index}>
									{item.name}
									<input
										type="radio"
										name="material"
										value={item.name}
										onChange={() => handleMaterialChange(item.id)}
										checked={material === item.id}
									/>
								</label>
							))}

						</FilterItem>
						<FilterItem
							title="Color"
							containerClass="colors_container"
						>
							{colorArr.map((item, index) => (
								<label
									key={index}
									className={"h7 rg " + item.name}
								>
									{item.name}
									<input
										type="radio"
										name="color"
										value={item.name}
										onChange={() => handleColorChange(item.id)}
										checked={color === item.id}
									/>
								</label>
							))}
						</FilterItem>
					</div>

					{/* buttons */}
					<div className="button_container h7 md  ">
						<button
							className="white" 
							onClick={() => {
								setPrice("")
								setMaterial("");
								setColor("");
								setFilterList([]);
							}}
						>
							Clear All
						</button>
						<button className="purple" onClick={handleApplyFilter}>
							Apply{" "}
							{filterList.length > 0 && `(${filterList.length})`}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
