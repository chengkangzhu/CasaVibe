const express = require("express");
const User = require("../models/User");

const router = express.Router();

// get the user's general information
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);

		if (!user) {
			throw new Error("User not found");
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

//add or remove a item from the user's cart
router.patch("/:id/cart", async (req, res) => {
	try {
		const { id } = req.params;
		const { action, productObj } = req.body;
		const user = await User.findById(id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const existingItemIndex = user.cart.findIndex(
			(item) => item.id === productObj.id
		);

		switch (action) {
			case "add":
				if (existingItemIndex === -1) {
					user.cart.push(productObj);
				} else {
					user.cart[existingItemIndex].quantity = productObj.quantity;
				}
				break;
			case "remove":
				user.cart = user.cart.filter(
					(item) => item.id !== productObj.id
				);
				break;
			case "incrementQuantity":
				user.cart[existingItemIndex].quantity += 1;
				break;
			case "decrementQuantity":
				user.cart[existingItemIndex].quantity--;
				break;
			case "toggleLike":
				user.cart[existingItemIndex].liked = !user.cart[existingItemIndex].liked
				break;
			default:
				return res.status(400).json({ message: "Invalid action" });
		}

		if (action !== "remove") {
			user.markModified("cart");
		}

		await user.save();
		res.status(200).json(user.cart);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
