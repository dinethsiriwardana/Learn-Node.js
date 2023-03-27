const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "Static"))); //? static files
app.set("view engine", "ejs"); //? setting the view engine

const people = require('./routes/people'); //? importing the people.js file

app.use("/people", people); //? using the people.js file

app.listen(3001);
