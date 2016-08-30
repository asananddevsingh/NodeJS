var http = require('http'); // http is a module provided by Node.
var server = http.createServer(engine);

server.listen(1337, function(){ // This function gets called at every request.
	// It will log the console at server (command prompt) not at the browser's console.
	console.log('Server got a request'); 
});

//server.createServer(engine).listen(1337);

function engine(request, response) {	
	response.writeHead(200, {
				'Content-Type': 'text/plain', 
				'Author': 'Anand Dev Singh' 
			}
	);
	response.end('Hey there, NodeJS welcomes you !');
}