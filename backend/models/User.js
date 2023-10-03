const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		lastName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 5,
		},
        cart: {
            type: Array,
            required: true,
            default: []
        },
        order: {
            type: Array,
            required: true,
            default: []
        },
        payment: {
            type: Array,
            required: true,
            default: []
        }
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema)
module.exports = User;