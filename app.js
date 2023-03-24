const fs = require("fs");
const zlib = require("zlib"); //? for compressing and decompressing files

// const gzip = zlib.createGzip(); //? create a gzip object, gzip for compressing

// const readStream = fs.createReadStream("./bigfile.txt", "utf8");
// const writeStream = fs.createWriteStream("bigfile2.txt.gz");

// readStream.pipe(gzip).pipe(writeStream); //? pipe the readStream to the gzip object compress the file

const gunzip = zlib.createGunzip(); //? create a gunzip object, gunzip for decompressing

const readStream = fs.createReadStream("./bigfile2.txt.gz");
const writeStream = fs.createWriteStream("extract.txt");

readStream.pipe(gunzip).pipe(writeStream); //? pipe the readStream to the gunzip object extract the file