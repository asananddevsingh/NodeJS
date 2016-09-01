/* Events and EventEmitter*/

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function (fName, lName) {
	console.log('Hello from event: ', fName, lName);
});

setTimeout(function () {
	eventEmitter.emit('myCustomEvent', 'Anand Dev', 'Singh');
}, 1000);
