const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


//MIDDLEWARES
app.use(cors());
app.use(express.json());

const dbUrl = process.env.MONGODB_URI;

// CONNECT TO MONGODB AND START SERVER
const port = process.env.PORT || 5000;

mongoose
	.connect(dbUrl)
	.then(() => {
		app.listen(port, () => { console.log(`mongodb is connect successful and server is running on port ${port}`); });
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

//ROUTES 
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const userRoute = require("./routes/user")

app.use('/auth', authRoute); 
app.use('/product', productRoute); 
app.use('/user', userRoute)


// Define a default route for testing purposes
app.get("/", (req, res) => {
	res.send("Hello, World! this is casavibe backennd");
});


