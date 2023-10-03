const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		const savedUser = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});

		const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: "14d", });
		savedUser.password = undefined;
		res.status(201).json({ user: savedUser, token });
	} catch (err) {
		res.status(500).json({ yourError: err.message });
	}
});

router.post("/login", async (req, res) => {
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
