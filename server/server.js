const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5500;
const Router = require('./routes')
const app = express();
require("dotenv").config();


const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const cluster = process.env.MONGO_CLUSTER;


app.use(cors({ origin: '*' }))
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(
	session({
		secret: "secretcode",
		resave: true,
		saveUninitialized: true,
	})
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// ----------------------------------------- END OF MIDDLEWARE

mongoose.connect(
	`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
	}
);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected to MongoDB");
});

app.use(Router);

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});