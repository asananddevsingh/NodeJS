var express = require('express');
var app = express();

console.log(__dirname);

/* On the server path will be like: localhost://portNum/cssFiles */
app.use('/cssFiles', express.static(__dirname + '/assets'));

/* Browse, http://localhost:1337/cssFiles/style.css to see the result */
