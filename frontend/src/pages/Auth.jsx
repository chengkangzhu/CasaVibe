import React, { useEffect, useState } from "react";

//others
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

//redux
import { useDispatch } from "react-redux";
import { setSignin } from "../slices/AuthSlice";

//icon
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

//img
import logo from "../img/casavibe_logo2.png";

const Auth = ({ isSignIn }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
	});
	const [isValidName, setIsValidName] = useState(true);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		setFormData({
			fullName: "",
			email: "",
			password: "",
		});
		setShowPassword(false);
		setIsValidName(true);
		setIsValidEmail(true);
		setIsValidPassword(true);
	}, [isSignIn]);

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		if (name === "email") {
			setIsValidEmail(true);
		} else if (name === "password") {
			setIsValidPassword(true);
		} else if (name === "fullName") {
			setIsValidName(true);
		}
	};

	const handleSignIn = async () => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/auth/signin`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			console.log("signing in now");
			dispatch(setSignin(response.data));
			navigate(-1);
			toast.success("Successfully signed in!");
		} catch (error) {
			console.error("Error during signup:", error);
			if (error.response && error.response.status === 400) {
				const errorMessage = error.response.data.message;

				if (errorMessage.includes("User not found")) {
					setIsValidEmail(false);
					toast.error(errorMessage);
				} else if (errorMessage.includes("Wrong password")) {
					setIsValidPassword(false);
					toast.error(errorMessage);
				} else {
					toast.error(
						"An unexpected error occurred. Please try again."
					);
				}
			}
		}
	};

	const handleSignUp = async () => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/auth/signup`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			// console.log("signing up now")
			dispatch(setSignin(response.data));
			navigate(-1);
			toast.success("Successfully signed up!");
		} catch (error) {
			console.error("Error during signup:", error);
			if (error.response && error.response.status === 400) {
				error.response.data.errors.map((error) => {
					if (error.type === "email") {
						setIsValidEmail(false);
					} else if (error.type === "password") {
						setIsValidPassword(false);
					}
					toast.error(error.message);
					return null;
				});
			} else {
				toast.error(
					"An error occurred during signup. Please try again later."
				);
			}
		}
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		const { fullName, email, password } = formData;

		//ensure all fields are filled
		if (
			(!fullName.trim() && !isSignIn) ||
			!email.trim() ||
			!password.trim()
		) {
			setIsValidName(!!fullName.trim() && isSignIn);
			setIsValidEmail(!!email.trim());
			setIsValidPassword(!!password.trim());
			toast.error("Please fill in all fields");
		} else if (validator.isEmail(email)) {
			isSignIn ? handleSignIn() : handleSignUp();
		} else {
			setIsValidEmail(false);
			toast.error("Please enter a valid email address");
		}
	};
	return (
		<div className="auth">
			<div className="form_container">
				<Link to="/" className="header">
					<img src={logo} alt="logo" className="logo" />
					<h3 className="h3 sb">CasaVibe</h3>
				</Link>
				<div className="google_button inactive_cursor">
					<img
						src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
						alt="google icon"
					/>
					<h6 className="h6 rg">Continue with Google</h6>
				</div>
				<div className="divider_container">
					<div className="divider"></div>
					<h5 className="h5 rg">OR</h5>
					<div className="divider"></div>
				</div>
				<form onSubmit={handleSubmit} className="h6 rg">
					{!isSignIn && (
						<input
							type="text"
							name="fullName"
							placeholder="Full name"
							value={formData.name}
							onChange={handleInputChange}
							className={isValidName ? "" : "error"}
						/>
					)}

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleInputChange}
						className={isValidEmail ? "" : "error"}
					/>

					<div className="password_container">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleInputChange}
							className={isValidPassword ? "" : "error"}
						/>
						{showPassword ? (
							<AiOutlineEyeInvisible
								size={18}
								className="eye_icon icon"
								onClick={() => setShowPassword(false)}
							/>
						) : (
							<AiOutlineEye
								size={18}
								className="eye_icon icon"
								onClick={() => setShowPassword(true)}
							/>
						)}
					</div>

					{isSignIn && (
						<h6 className="h7 rg forgot_password inactive_cursor">
							Forget your password?
						</h6>
					)}

					<button type="submit">
						{isSignIn ? "Sign in" : "Sign up"}
					</button>
					{isSignIn ? (
						<h6 className="h7 rg change_form">
							<Link to="/signup" className="underline">
								Sign up
							</Link>{" "}
							if you don't have an account yet
						</h6>
					) : (
						<h6 className="h7 rg change_form">
							<Link to="/signin" className="underline">
								Sign in
							</Link>{" "}
							if you already have an account
						</h6>
					)}
				</form>
			</div>
		</div>
	);
};

export default Auth;
