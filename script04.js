var server = require('http'); // http is a module provided by Node.

server.createServer(engine).listen(1337);

function engine(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain', 'Author': 'Anand Dev Singh' });
	response.end('Hey there, NodeJS welcomes you !');
}