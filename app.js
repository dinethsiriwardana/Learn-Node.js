const express = require("express");
const path = require("path");
const Joi = require("joi"); //? joi validation
const body = require("body-parser"); //? body parser
const app = express();

app.use("/public", express.static(path.join(__dirname, "Static"))); //? static files
app.use(body.urlencoded({ extended: false })); //? body parser
app.use(body.json()); //? body parser json data

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Static", "index.html")); //? sending a file to the browser
});

app.post("/", (req, res) => {
//   console.log(req.body);
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(20).required(),
  });
//   schema.validate(req.body, (err, result) => {
    if (schema.validate(req.body)) {
      console.log(err);
      res.send('an error has occured');
    } else {
      console.log(result);
      res.send('successfully posted data');
    }
//   }); 

//   console.log(schema.validate(req.body));


});



app.listen(3001);
