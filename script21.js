var express = require('express');
var cookiParser = require('cookie-parser');

var app = express();

app.use(cookiParser());

app.get('/', function (request, response) {
	response.cookie('myFirstCookie', 'Looks good', {});
	response.end('This is first cookie program.');
});

app.get('/clearCookie', function (request, response) {
	response.clearCookie('myFirstCookie');
	response.end('cookie is deleted.')
});

app.listen(1337, function () {
	console.log('Session started...');
})
