var express = require('express');

var app = express();

app.get('/', function (request, response){
	response.end('Welcome to chapter 22 of node js, use <nodemon filename.js> command to execute the file. You won\'t need to restart server again and again');
});

app.listen(1337, function (request, response) {
	console.log('Running server using nodemon...');
});
