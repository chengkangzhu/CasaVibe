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

	const handleIncrement = () => {
		setItemAmount((prev) => prev + 1);
	};

	const handleDecrement = () => {
		if (itemAmount !== 0) {
			setItemAmount((prev) => prev - 1);
		}
	};

	return (
		<div
			className={`quantity_selector shape_outline md ${className}`}
			style={{ width: weight, height: height }}
		>
			<div className="decrement icon" onClick={handleDecrement}>
				<MdRemove size={iconSize} />
			</div>
			<div className="amount">{itemAmount}</div>
			<div className="dincrement icon" onClick={handleIncrement}>
				<MdAdd size={iconSize} />
			</div>
		</div>
	);
};

export default QuantitySelector;
