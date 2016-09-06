var express = require('express');
var app = express();
var router = express.Router();

app.use('/', router);

router.get('/', function (req, resp) {
	resp.redirect('/users');

});

router.get('/users', function (req, resp) {
	resp.end('<a href="users/anand" > Anand Dev </a> <br/> <a href="users/sahil" > Sahil Singh </a>');

});

/* Using regex (\\w+) to filter the valid characters allowed in url as username */
router.get('/users/:username(\\w+)', function (req, resp) {
	resp.end('<a href="/users"  > Back </a>' + JSON.stringify(req.params));
});

app.listen(1337, function () {
	console.log('Basic routing started...');
});
