const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	bathroomId: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	}
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
