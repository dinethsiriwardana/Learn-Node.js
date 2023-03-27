const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "Static"))); //? static files
app.set("view engine", "ejs"); //? setting the view engine

app.get("/:userQuery", (req, res) => {
  res.render("index", {data : {userQuery: req.params.userQuery,
    searchResults: ["book1", "book2", "book3"], loggedIn: true, username: "John Doe"}}
   );
});

app.listen(3001);
