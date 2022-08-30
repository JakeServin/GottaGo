const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5500;
const Router = require('./routes')

const app = express();

const username = "admin";
const password = "digitalcrafts1234";
const cluster = "bathroomdata.c16u3uc";
const dbname = "myFirstDatabase";



// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

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