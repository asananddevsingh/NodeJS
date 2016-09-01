/* File system - How to read file */

/*
	fileSystem.readFile('<path>', '<Text to write>' ,'<encoding>', 'callback');
*/
var fs = require('fs');

console.log('Attempting to write file....\n************************');

/* It will allow us to write file async */
/*fs.writeFile('./files/data2', '<h1>Hello from Node program !</h1>', 'utf8'
		,function (error) {
			if(error) throw error;
		});
*/
fs.writeFileSync('./files/data3', '<h3>Hello from Node program !</h3>', 'utf8');
console.log('Writing the file is done !');
