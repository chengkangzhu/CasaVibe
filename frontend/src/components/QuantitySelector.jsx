import React, { useState } from "react";

//icon
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

const QuantitySelector = ({
	weight,
	height,
	amount,
	id,
	className,
	iconSize,
}) => {
	const [itemAmount, setItemAmount] = useState(parseInt(amount));

	return (
		<div
			className={`quantity_selector shape_outline md ${className}`}
			style={{ width: weight, height: height }}
		>
			<div className="decrement icon" onClick={()=>{
				if (itemAmount !== 0) {
					setItemAmount((prev) => prev - 1);
				}
			}}>
				<MdRemove size={iconSize} />
			</div>
			<div className="amount">{itemAmount}</div>
			<div className="dincrement icon" onClick={()=>setItemAmount((prev) => prev + 1)}>
				<MdAdd size={iconSize} />
			</div>
		</div>
	);
};

export default QuantitySelector;
