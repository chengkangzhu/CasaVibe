const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", async (req, res) => {
	const productId = req.params.id;
	const options = {
		method: "GET",
		url: "https://ikea-api.p.rapidapi.com/product",
		params: {
			productID: productId,
			countryCode: "us",
			languageCode: "en",
		},
		headers: {
			"X-RapidAPI-Key":process.env.IKEA_API,
			"X-RapidAPI-Host": "ikea-api.p.rapidapi.com",
		},
	};

	

	try {
		const response = await axios.request(options);
		if (!response.data[0]) {
			res.status(404).json({ error: "Product not found" });
		} else {
			res.json(response.data[0]);
		}
	} catch (error) {
		console.error(error);   

		if (error.response) {
			// Handle specific error response from the API (non-sensitive errors)
			const { status, data } = error.response;
			res.status(status).json({ error: 'An error occurred with the external API' });
		} else {
			// Handle other errors (e.g., network issues) without exposing details
			res.status(500).json({ error: 'An error occurred' });
		}
	}
});

router.get("/search/:keyword", async (req, res) => {
	const keyword = req.params.keyword;

	const options = {
		method: "GET",
		url: "https://ikea-api.p.rapidapi.com/keywordSearch",
		params: {
			keyword: keyword,
			countryCode: "us",
			languageCode: "en",
		},
		headers: {
			"X-RapidAPI-Key":process.env.IKEA_API,
			"X-RapidAPI-Host": "ikea-api.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		if (!response.data) {
			res.status(404).json({ error: "Products not found" });
		} else {
			res.json(response.data);
		}
	} catch (error) {
		console.error(error); 

		if (error.response) {
			// Handle specific error response from the API (non-sensitive errors)
			const { status, data } = error.response;
			res.status(status).json({ error: 'An error occurred with the external API' });
		} else {
			// Handle other errors (e.g., network issues) without exposing details
			res.status(500).json({ error: 'An error occurred' });
		}
	}
});

router.get("/category/:categoryId", async (req, res) => {
	const categoryId = req.params.categoryId;
	const options = {
		method: "GET",
		url: "https://ikea-api.p.rapidapi.com/categorySearch",
		params: {
			categoryID: categoryId,
			countryCode: "us",
			languageCode: "en",
		},
		headers: {
			"X-RapidAPI-Key":process.env.IKEA_API,
			"X-RapidAPI-Host": "ikea-api.p.rapidapi.com",
		},
	};

	try {
		//sending the request to ikea api for data
		const response = await axios.request(options);
		if (!response.data) {
			res.status(404).json({ error: "Product not found" });
		} else {
			res.json(response.data);
		}
	} catch (error) {
		console.error(error);

		if (error.response) {
			// Handle specific error response from the API (non-sensitive errors)
			const { status, data } = error.response;
			res.status(status).json({ error: 'An error occurred with the external API' });
		} else {
			// Handle other errors (e.g., network issues) without exposing details
			res.status(500).json({ error: 'An error occurred' });
		}
	}
});

module.exports = router;
