const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passwordValidator = require("password-validator");

const router = express.Router();
const schema = new passwordValidator();

schema.is().min(8).has().uppercase().has().digits();

router.post("/signup", async (req, res) => {
	try {
		const { fullName, email, password } = req.body;

		//error
		const errors = [];

		//check if user already signed in
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			errors.push({
				type: "email",
				message:
					"Email address already registered. Please sign in or use a different one.",
			});
		}

		//check if password is strong enough
		if (!schema.validate(password)) {
			errors.push({
				type: "password",
				message:
					"Your password is too weak. Please ensure it's at least 8 characters long and contains at least one capital letter and one number.",
			});
		}

		if (errors.length > 0) {
			return res.status(400).json({ errors });
		}
		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		const savedUser = await User.create({
			fullName,
			email,
			password: hashedPassword,
		});

		const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
			expiresIn: "14d",
		});
		savedUser.password = undefined;
		res.status(201).json({ user: savedUser, token });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ yourError: err.message });
	}
});

router.post("/signin", async (req, res) => {
	try {
		const { email, password } = req.body;

		//Find the user
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		// Compare the passwords
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: "Wrong password" });
		}

		// Create a token
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "14d",
		});

		user.password = undefined;
		res.json({ user, token });
	} catch (err) {
		res.status(500).json({ yourError: err.message });
	}
});

module.exports = router;
