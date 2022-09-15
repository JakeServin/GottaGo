const { application } = require('express');
const express = require('express')
const BathroomModel = require('./models/bathroom');
const userModel = require("./models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");

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

// User routes ---------------------------------------------------

// Logs in user
app.post("/login_user", (req, res, next) => {
	passport.authenticate(
		"local",
		(err, user, info) => {
			if (err) throw err;
			if (!user) res.send("Invalid username or password")
			else {
				req.login(user, (err) => {
					if (err) throw err;
					res.send(req.user)
				});
			}
		}
	)(req, res, next);
});

//Registers user
app.post('/register_user', (req, res) => {
	userModel.findOne({ userName: req.body.username }, async (err, doc) => {
		if (err) throw err
		if (doc) res.send("User Already Exists");
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10)
			const newUser = new userModel({
				userName: req.body.username,
				password: hashedPassword
			});
			await newUser.save();
			res.send("User created")
		}
	})
})

// Get user by ID
app.get("/get_user", async (req, res) => {
	const user = await userModel.findOne({_id: ObjectId(req.query.id)});
	try {
		res.send(user.userName);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Get currently logged in user
app.get("/current_user", (req, res) => {
	res.send(req.user);
});

// Logout currently logged in user
app.get("/logout", (req, res) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
})

module.exports = app;