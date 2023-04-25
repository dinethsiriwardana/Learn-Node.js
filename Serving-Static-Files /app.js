const http = require("http"); //? Importing the http module

const fs = require("fs"); //? Importing the fs module

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./index.html");
    res.writeHead(200, { "Content-type": "text/html" }); //? 200 is the status code for OK
    //    const readStream = fs.createReadStream("./example.json");
    //     res.writeHead(200, { "Content-type": "application/json" }); //? 200 is the status code for OK
    //    const readStream = fs.createReadStream("./image.jpg");
    //     res.writeHead(200, { "Content-type": "image/png" }); //? 200 is the status code for OK
    readStream.pipe(res);
  })
  .listen(3001);
