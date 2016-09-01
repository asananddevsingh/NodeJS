/*
	#### Express JS ####
	Install Express: npm install express --save
	Run the server, by executing this file.
	look for: http://localhost:1337/helloThere at browser.
*/

var express = require('express');
var app = express();


app.get('/helloThere', function (request, response) {
	response.send('Hello there, form Express');
});

app.listen(1337, function () {
	console.log('Listening the port....');
})
