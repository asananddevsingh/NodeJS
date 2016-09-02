/* POST request method in Express */

var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());
app.use('/cssFiles', express.static(__dirname + '/assets'));


app.get('/', function (request, response) {
	response.sendFile('index19.html', {root: path.join(__dirname, './files')});
});

/*
	To work with POST call, we need to install middleware "body-parser"
	npm install body-parser
*/
app.post('/', function (req, resp) {
	resp.end(JSON.stringify(req.body));
});

app.listen(1337, function (){
	console.log('Listening at port 1337');
});
