const fs = require('fs');
const readStream =  fs.createReadStream("./example.txt", "utf8");
//? readStream is a readable stream of data from the file

const writeStream = fs.createWriteStream("example2.txt");

readStream.on("data", (chunk) => { //? chunk is a buffer of data that is read from the file
    writeStream.write(chunk);
});