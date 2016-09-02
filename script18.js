var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (request, response) {
	var respValue = request.query.fName
					? "Hello, " + request.query.fName
					: "Please pass value of query  param '?fName=<xxxx>' in query string";
	response.end(respValue)	;
});

app.listen(1337, function () {
	console.log('Listening to port 1337');
});
