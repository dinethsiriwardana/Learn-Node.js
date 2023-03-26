const express = require('express');
const path = require('path');  
const body = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'Static'))); //? static files
app.use(body.urlencoded({extended: false})); //? body parser
app.use(body.json()); //? body parser json data


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Static', 'index.html')); //? sending a file to the browser
});

app.post('/', (req, res) => {
    console.log(req.body);
    //? database work here
    // res.send('successfully posted data');
    res.json({success: true}); //? sending json data to the browser
    });

app.listen(3001);
 