const http = require("http"); //? Importing the http module

const server = http.createServer((req, res) => {
 
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    } else {
        res.write("Using some other domain");
        res.end();
    }
});

server.listen(3001);
