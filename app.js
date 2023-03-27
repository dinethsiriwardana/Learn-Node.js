const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
  req.banana = 'banana';
  next();
});

app.use('/',(req, res, next) => {
  // console.log(req.url, req.method); // ? / GET
  console.log(req.banana); // ? banana
  next();
});

// ? /example is the route
// app.use('/example',(req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Middleware");
});

app.listen(3001);
