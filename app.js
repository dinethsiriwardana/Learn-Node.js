const express = require('express');
const path = require('path');  
const body = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'Static'))); //? static files
app.use(body.urlencoded({extended: false})); //? body parser

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Static', 'index.html')); //? sending a file to the browser
});

app.get('/example', (req, res) => {
    res.send('hitting example route');
  });


app.get('/example/:name/:age', (req, res) => {
   console.log(req.params);
   console.log(req.query);
   res.send(req.params.name + ' : ' + req.params.age);
  });

app.listen(3001);
