const { application } = require('express');
const express = require('express')
const BathroomModel = require('./models/bathroom');

const app = express();

app.get('/', (req, res) => {
    res.send("It's working!")
})

app.get('/bathrooms', async (req, res) => {
    const bathrooms = await BathroomModel.find({});

	try {
		res.send(bathrooms);
	} catch (error) {
		res.status(500).send(error);
	}
})

app.post('/newbathroom', async (req, res) => {
    const bathroom = new BathroomModel(req.body);

	try {
		await bathroom.save();
		res.send(bathroom);
	} catch (error) {
		res.status(500).send(error);
	}
})

module.exports = app;