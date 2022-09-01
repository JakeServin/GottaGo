const mongoose = require("mongoose");

const BathroomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	lat: {
		type: Number,
		required: true,
	},
	long: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	}
});

const BathroomModel = mongoose.model("bathroom", BathroomSchema);

module.exports = BathroomModel;
