import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//redux
import { useDispatch } from "react-redux";
import { setSignin } from "../slices/AuthSlice";

//icon 
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


//img
import logo from "../img/casavibe_logo2.png";

const Auth = ({ isSignIn }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
	});
	const [showPassword , setShowPassword] = useState(false)

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSignIn = async () =>{
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
 
			console.log("signing in now")
			dispatch(setSignin(response.data))
			navigate(-1)
 
		} catch (error) { 
			console.error("Error during signup:", error);
		}
	}


	const handleSignUp = async () =>{
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

			console.log("signing up now") 			
			dispatch(setSignin(response.data))
			navigate(-1)

 
		} catch (error) { 
			console.error("Error during signup:", error);
		}
	}

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		// Add your form submission logic here, e.g., send data to a server
		if(isSignIn){
			handleSignIn()
		} else {
			handleSignUp()
		}
 
	};

	return (
		<div className="auth">
			<div className="form_container">
				<Link to="/" className="header">
					<img src={logo} alt="logo" className="logo" />
					<h3 className="h3 sb">CasaVibe</h3>
				</Link>
				<div className="google_button">
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
						/>
					)}

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleInputChange}
					/>

					<div className="password_container">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleInputChange}
						/>
						{showPassword ? <AiOutlineEyeInvisible size={18} className="eye_icon icon" onClick={() => setShowPassword(false)}/>
										:<AiOutlineEye size={18} className="eye_icon icon"onClick={() => setShowPassword(true)}/>}					
					</div>


					{isSignIn && (
						<h6 className="h7 rg forgot_password">
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
