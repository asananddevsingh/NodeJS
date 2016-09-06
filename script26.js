/* POST request method in Express */

var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(sessions({
	secret: '&%&^#^&jhgJGJHG*#&*#&^84637',
	resave: false,
	saveUninitialized: true
}));


app.get('/login', function (request, response) {
	response.sendFile('./files/login.html', {root: __dirname});
});


app.post('/login', function (req, resp) {
	session = req.session;
	if(session.uniqueId){
		resp.redirect('/redirects');
	}

	session.uniqueId = req.body.username;

	resp.redirect('/redirects');

});

app.get('/redirects', function (req, resp) {
	session = req.session;
	if(session.uniqueId == 'admin'){
		resp.redirect('/admin');
	}
	else{
		resp.send(req.session.uniqueId + ' not found ! <a href="/logout"> Logout </a> ');
	}
});

app.get('/admin', function (req, resp) {
	session = req.session;
	if(session.uniqueId != 'admin'){
		resp.send('Unauthorized <a href="/login"> Login again </a>' );
	}else{
		resp.send('Welcome admin <a href="/logout"> Logout </a>');
	}

});

app.get('/logout', function (req, resp) {
	req.session.destroy();
	resp.redirect('/login');
});

app.listen(1337, function (){
	console.log('Listening at port 1337');
});
