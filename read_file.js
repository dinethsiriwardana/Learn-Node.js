const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});
