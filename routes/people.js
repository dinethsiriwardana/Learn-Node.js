const express  = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("middelware being used");
    next();
});

router.get("/", (req, res) => {
  res.send("/ being hit");
});

router.get("/ex", (req, res) => {
  res.send("ex being hit");
});


module.exports = router;