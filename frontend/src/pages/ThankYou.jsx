import React from "react";

//icons
import { BsCheckLg } from "react-icons/bs";
import { useParams } from "react-router-dom";

const ThankYou = () => {
	const { id } = useParams(); 
	return (
		<div className="thankyou">
			<div className="checked shape_outline_active">
				<BsCheckLg size={32} />
			</div>
			<h2 className="h2 sb">Thanks for your order!</h2>
			<h6 className="h6 md order_id">Your order ID is: {id}</h6>
			<p className="p2">
				{" "}
				You will receive an order confirmation email with details of
				your order.{" "}
			</p>
			<button className="status_button h7 sb">Check Status</button>
		</div>
	);
};

export default ThankYou;
