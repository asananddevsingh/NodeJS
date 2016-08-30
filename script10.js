/* File system - How to read file */

/*
	fileSystem.readFile('<path>', '<encoding>', 'callback');
*/
var fs = require('fs');

console.log('Attempting to read file....\n************************');

/* It will allow us to read file async */
/*fs.readFile('./files/data.txt', 'utf8', function (error, data) {
	console.log(data);
});*/

var data = fs.readFileSync('./files/data.txt', 'utf8');
console.log(data);

console.log('************************\nReading the file is done !');
