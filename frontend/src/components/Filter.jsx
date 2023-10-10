import React, { useState, useEffect } from "react";

//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdClose } from "react-icons/md";

//mui
import { Slider, Tooltip } from "@mui/material";
import styled from "@emotion/styled";

const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} arrow />
))`
	& .MuiTooltip-tooltip {
		background-color: #5a4098;
		color: white;
		padding: 4px 8px;
		font-size: 12px;
		font-weight: 600;
		font-family: "GeneralSans-Semibold";
	}

	& .MuiTooltip-arrow {
		color: #5a4098;
	}
`;

function ValueLabelComponent(props) {
	const { children, open, value } = props;

	return (
		<StyledTooltip
			open={open}
			enterTouchDelay={0}
			placement="top"
			title={value}
		>
			{children}
		</StyledTooltip>
	);
}

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

const Filter = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showLabel, setShowLabel] = useState(false);
	const [priceRange, setPriceRange] = useState([30, 300]);
	const [material, setMaterial] = useState("");
	const [color, setColor] = useState("");
	const [filterList, setFilterList] = useState([]);

	const handleFilterOn = () => {
		setShowFilter((e) => true);
		const isPriceExpanded = document
			.getElementById("Price")
			.classList.contains("show");
		if (isPriceExpanded) {
			setShowLabel(true);
		}
	};

	const handleFilterOff = () => {
		setShowFilter((e) => false);
		setShowLabel(false);
	};

	const handlePriceRange = (event, newValue, activeThumb) => {
		//add it to filter list
		setFilterList(
			filterList.includes("price") ? filterList : [...filterList, "price"]
		);

		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			const max = newValue[1] - 40;
			setPriceRange([Math.min(newValue[0], max), newValue[1]]);
		} else {
			const min = newValue[0] + 40;
			setPriceRange([newValue[0], Math.max(newValue[1], min)]);
		}
	};

	const handleMaterialChange = (event) => {
		//add it to filter list
		setFilterList(
			filterList.includes("material")
				? filterList
				: [...filterList, "material"]
		);
		setMaterial(event.target.value);
	};

	const handleColorChange = (event) => {
		//add it to filter list
		setFilterList(
			filterList.includes("color") ? filterList : [...filterList, "color"]
		);
		setColor(event.target.value);
	};

	const handleClearAll = () => {
		//reset price range
		setShowLabel(false);
		setPriceRange([30, 300]);
		setTimeout(() => {
			if (showLabel) {
				setShowLabel(true);
			}
		}, 1);

		setMaterial("");
		setColor("");
		setFilterList([]);
	};

	const handleApplyFilter = () => {
		handleFilterOff();
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
			<button
				className="filter_button shape_outline h7 rg"
				onClick={handleFilterOn}
			>
				Filter <MdOutlineKeyboardArrowDown size={24} className="icon" />
			</button>

			<div className={`overlay ${showFilter && "active"}`}>
				<div className="close_filter" onClick={handleFilterOff}></div>
				<div className="filter_sidebar">
					<h4 className="h4 sb">
						Filter{" "}
						<MdClose
							size={24}
							className="icon"
							onClick={handleFilterOff}
						/>
					</h4>
					<div
						className="filter_content accordion accordion-flush"
						id="filterPirceAccordion"
					>
						<FilterItem
							title="Price"
							buttonFunc={() => setShowLabel((e) => !e)}
						>
							<div className="price_range_sentence">
								From ${priceRange[0]} to $
								{priceRange[1] === 605
									? "\u221E"
									: "$" + priceRange[1]}
							</div>
							<Slider
								value={priceRange}
								getAriaLabel={() => "Minimum distance shift"}
								disableSwap
								onChange={handlePriceRange}
								valueLabelDisplay={showLabel ? "on" : "off"}
								valueLabelFormat={(value) =>
									value === 605 ? "\u221E" : `$${value}`
								}
								step={5}
								min={0}
								max={605}
								components={{ ValueLabel: ValueLabelComponent }}
								sx={{
									"& .MuiSlider-thumb": {
										backgroundColor: "#5A4098", // This will change the color of the thumb
										width: 24, // This will change the width of the thumb
										height: 24,
										boxShadow: "none !important",
									},
									"& .MuiSlider-rail": {
										backgroundColor: "#D8D8D8", // This will change the color of the track (the part of the bar that's not filled)
									},
									"& .MuiSlider-track": {
										backgroundColor: "#5A4098", // This will change the color of the track (the part of the bar that's filled)
									},
								}}
							/>
						</FilterItem>
						<FilterItem
							title="Material"
							containerClass="material_container"
						>
							<label className="h7 rg" id="material_wood">
								Wood
								<input
									type="radio"
									name="material"
									value="wood"
									onChange={handleMaterialChange}
									checked={material === "wood"}
								/>
							</label>

							<label className="h7 rg" id="material_metal">
								Metal
								<input
									type="radio"
									name="material"
									value="metal"
									onChange={handleMaterialChange}
									checked={material === "metal"}
								/>
							</label>

							<label className="h7 rg" id="material_leather">
								Leather
								<input
									type="radio"
									name="material"
									value="leather"
									onChange={handleMaterialChange}
									checked={material === "leather"}
								/>
							</label>

							<label className="h7 rg" id="material_plastic">
								Plastic
								<input
									type="radio"
									name="material"
									value="plastic"
									onChange={handleMaterialChange}
									checked={material === "plastic"}
								/>
							</label>

							<label
								className="h7 rg"
								id="material_particleboard"
							>
								Particleboard
								<input
									type="radio"
									name="material"
									value="particleboard"
									onChange={handleMaterialChange}
									checked={material === "particleboard"}
								/>
							</label>

							<label className="h7 rg" id="material_glass">
								Glass
								<input
									type="radio"
									name="material"
									value="glass"
									onChange={handleMaterialChange}
									checked={material === "glass"}
								/>
							</label>
						</FilterItem>
						<FilterItem
							title="Color"
							containerClass="colors_container"
						>
							<label className="h7 rg" id="color__blue">
								Blue
								<input
									type="radio"
									name="color"
									value="blue"
									onChange={handleColorChange}
									checked={color === "blue"}
								/>
							</label>

							<label className="h7 rg" id="color__red">
								Red
								<input
									type="radio"
									name="color"
									value="red"
									onChange={handleColorChange}
									checked={color === "red"}
								/>
							</label>

							<label className="h7 rg" id="color__green">
								Green
								<input
									type="radio"
									name="color"
									value="green"
									onChange={handleColorChange}
									checked={color === "green"}
								/>
							</label>

							<label className="h7 rg" id="color__black">
								Black
								<input
									type="radio"
									name="color"
									value="black"
									onChange={handleColorChange}
									checked={color === "black"}
								/>
							</label>

							<label className="h7 rg" id="color__white">
								White
								<input
									type="radio"
									name="color"
									value="white"
									onChange={handleColorChange}
									checked={color === "white"}
								/>
							</label>

							<label className="h7 rg" id="color__gray">
								Gray
								<input
									type="radio"
									name="color"
									value="gray"
									onChange={handleColorChange}
									checked={color === "gray"}
								/>
							</label>

							<label className="h7 rg" id="color__brown">
								Brown
								<input
									type="radio"
									name="color"
									value="brown"
									onChange={handleColorChange}
									checked={color === "brown"}
								/>
							</label>

							<label className="h7 rg" id="color__orange">
								Orange
								<input
									type="radio"
									name="color"
									value="orange"
									onChange={handleColorChange}
									checked={color === "orange"}
								/>
							</label>

							<label className="h7 rg" id="color__pink">
								Pink
								<input
									type="radio"
									name="color"
									value="pink"
									onChange={handleColorChange}
									checked={color === "pink"}
								/>
							</label>

							<label className="h7 rg" id="color__yellow">
								Yellow
								<input
									type="radio"
									name="color"
									value="yellow"
									onChange={handleColorChange}
									checked={color === "yellow"}
								/>
							</label>
						</FilterItem>
					</div>
					<div className="button_container h7 md  ">
						<button className="white" onClick={handleClearAll}>
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
