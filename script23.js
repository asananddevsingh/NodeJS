var express = require('express');
var app = express();
var router = express.Router();


app.use('/', router);

router.get('/', function (req, resp) {
	resp.end('This is Home page, type /first in url for first page.');
});

router.get('/first', function (req, resp) {
	resp.end('This is first page, type /second in url for second page.');
});

router.get('/second', function (req, resp) {
	resp.end('This is second page. Want to go back home ? change to url "/"');
});


app.listen(1337, function (request, response) {
	console.log('Routing started...');
});
