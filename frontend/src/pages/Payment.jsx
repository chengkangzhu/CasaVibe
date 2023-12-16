import React, { useState } from "react";
import { Link } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//countries select
import Select from "react-select";
import countries from "i18n-iso-countries";

//images
import americanExpress from "../img/payment/American Express.png";
import masterCard from "../img/payment/Mastercard.png";
import paymentPartners from "../img/payment/Payment Partners.png";
import visa from "../img/payment/Visa.png";

//icons
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { BsRecordCircleFill, BsCircle } from "react-icons/bs";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const CartItem = ({ image, imageAlt, name, quantity, price:{currentPrice}}) => {
	return (
		<div className="cart_item">
			<img src={image} alt={imageAlt} className="image" />
			<div>
				<p className="h5 md name">{name}</p>
				<p className="h7 rg weight">
					Total package weight: {6.8} kg
				</p>
				<p className="h7 rg quantity">Qty: {quantity}</p>
			</div>
			<p className="h5 sb price">${(currentPrice * quantity).toFixed(2)}</p>
		</div>
	);
};

const Payment = () => {
	const [orderId, setOrderId] = useState("s2327459");

	

	//check style for input form
	const [isChecked, setIsChecked] = useState(false);

	//payment method
	const [selectedMethod, setSelectedMethod] = useState("creditCardMethod");
	const countryOptions = Object.entries(countries.getNames("en")).map(
		([code, name]) => ({ value: code, label: name })
	);

	//cart state
	const cart = useSelector((state) => state.cart.items);
	const orderSummary = useSelector( state => state.cart.orderSummary)

	const handleMethodChange = (methodId) => {
		if (selectedMethod === methodId) {
			setSelectedMethod("");
		} else {
			setSelectedMethod(methodId);
		}
	};

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			padding: "0 8px",
			height: "48px",
			marginBottom: "24px",
			borderRadius: "8px",
			boxShadow: "none",
			border: state.isFocused ? "1px solid black" : "1px solid #d8d8d8",
			"&:hover": {
				border: state.isFocused
					? "1px solid black"
					: "1px solid #808080",
				transition: "border .2ss ease",
			},
		}),
	};

	return (
		<div className="payment">
			<div className="payment__form">
				<div className="address">
					<h2 className="h2 sb heading">
						<span className="heading_num h5 md">1</span>Shipping
						Address
					</h2>
					<div className="email_container">
						<h5 className="h5 md sub_heading">
							Contact information{" "}
							<span className="h7 rg">
								Already have an account?{" "}
								<Link to="/login" className="md login">
									Log in
								</Link>
							</span>
						</h5>
						<input
							type="email"
							className="input email_input h7 rg"
							placeholder="Your email"
						/>
						<label
							className="h7 rg"
							onClick={() => setIsChecked(!isChecked)}
						>
							<div>
								{" "}
								{isChecked ? (
									<FaCheckSquare
										size={19}
										className="checked_icon"
									/>
								) : (
									<FaRegSquare size={19} className="icon" />
								)}{" "}
							</div>
							Email me with news and offers
						</label>
					</div>
					<div className="address_container h7 rg">
						<h5 className="h5 md sub_heading">Shipping address </h5>
						<Select
							options={countryOptions}
							styles={customStyles}
							className="h7 rg"
						/>
						<div className="input_container">
							<input
								type="text"
								placeholder="First Name"
								className="input half_input"
							/>
							<input
								type="text"
								placeholder="Last Name"
								className="input half_input"
							/>
							<input
								type="text"
								placeholder="Address"
								className="input"
							/>
							<input
								type="text"
								placeholder="City"
								className="input"
							/>
							<input
								type="text"
								placeholder="Province"
								className="input half_input"
							/>
							<input
								type="text"
								placeholder="Postal Code"
								className="input half_input"
							/>
							<input
								type="text"
								placeholder="Phone Number"
								className="input"
							/>
						</div>
					</div>
				</div>
				<div className="payment_method">
					<h2 className="h2 sb heading">
						<span className="heading_num h5 md">2</span>Payment{" "}
					</h2>
					<h5 className="h5 md sub_heading">
						Choose Payment method{" "}
					</h5>
					<div
						className="accordion accordion-flush"
						id="paymentMethodAccordion"
					>
						<div className="accordion-item">
							<h6 className="accordion-header h6 md">
								<button
									className="accordion-button collapsed  "
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={"#creditCardMethod"}
									aria-expanded="false"
									aria-controls={"#creditCardMethod"}
									onClick={() =>
										handleMethodChange("creditCardMethod")
									}
								>
									{selectedMethod === "creditCardMethod" ? (
										<BsRecordCircleFill
											size={20}
											className="icon purple"
										/>
									) : (
										<BsCircle size={20} className="icon" />
									)}
									Credit Card
									<div className="logo_containers">
										<img
											src={americanExpress}
											alt="american express logo"
										/>
										<img
											src={masterCard}
											alt="mastercard logo"
										/>
										<img
											src={visa}
											alt="visa logo"
										/>
									</div>
								</button>
							</h6>
							<div
								id={"creditCardMethod"}
								className="accordion-collapse collapse show"
								data-bs-parent="#paymentMethodAccordion"
							>
								<div className="accordion-body p3 h7 rg ">
									<input
										type="number"
										className="input "
										placeholder="Card number"
									/>
									<input
										type="text"
										className="input "
										placeholder="Name on card"
									/>
									<input
										type="number"
										className="input small_input"
										placeholder="Month"
										maxlength="2"
									/>
									<input
										type="number"
										className="input small_input"
										placeholder="Year"
										maxlength="2"
									/>
									<input
										type="number"
										className="input small_input"
										placeholder="CVV"
										maxlength="3"
									/>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h6 className="accordion-header h6 md">
								<button
									className="accordion-button collapsed  "
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={"#paypalMethod"}
									aria-expanded="false"
									aria-controls={"#paypalMethod"}
									onClick={() =>
										handleMethodChange("paypalMethod")
									}
								>
									{selectedMethod === "paypalMethod" ? (
										<BsRecordCircleFill
											size={20}
											className="icon purple"
										/>
									) : (
										<BsCircle size={20} className="icon" />
									)}
									Paypal
									<div className="logo_containers">
										<img src={paymentPartners} alt="paypal logo" />
									</div>
								</button>
							</h6>
							<div
								id={"paypalMethod"}
								className="accordion-collapse collapse"
								data-bs-parent="#paymentMethodAccordion"
							>
								<div className="accordion-body p3">
									to be completed
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="review_order">
					<h2 className="h2 sb heading">
						<span className="heading_num h5 md">3</span>Review Order{" "}
					</h2>
					<div className="cart_info_container">
						{cart &&
							cart.map((item,index) => {
								return (
									<CartItem
										{...item}
										key={index}
									/>
								);
							})}
					</div>
					<div className="other_info_container">
						<div className="payment_review">
							<h5 className="h5 md">Payment</h5>
							<div className="payment_details p3">
								Visa **45 <img src={visa} alt="visa logo" />
							</div>
						</div>
						<div className="address_review">
							<h5 className="h5 md">Shipping Address </h5>
							<div className="p3">
								123 Anywhere Street
								<br />
								London, UK
								<br />
								123-456-7890
							</div>
						</div>
						<div className="deliery_method_review">
							<h5 className="h5 md">Delivery method</h5>
							<div className=" p3">Cargo</div>
						</div>
					</div>
				</div>
			</div>
			<div className="payment__order">
				<h5 className="h5 sb headline">Order Summary</h5>
				<div className="order_info">
					<h6 className="h6 rg">
						Subtotal <span className="md">${orderSummary.subtotal}</span>
					</h6>
					<h6 className="h6 rg">
						Tax (9%)<span className="md">${orderSummary.tax}</span>
					</h6>
					<h6 className="h6 rg">
						Shipping <span className="md">${orderSummary.shipping}</span>
					</h6>
				</div>
				<h6 className="total h6 md">
					Total <span className="sb h4">${orderSummary.total}</span>
				</h6>
				<Link
					to={`/payment/completed/${orderId}`}
					className="next_button h5 sb"
				>
					Next
				</Link>
			</div>
		</div>
	);
};

export default Payment;
