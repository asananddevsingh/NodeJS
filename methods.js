var methods = {};

var output; // It will be not exported unless you export it explicitly.
this.defaultVal = 101; // Variable with this keyword will be exported by default.

methods.updateServer = function (){
	output = 'Update server function';
	console.log('Important function');
};

methods.eatCookies = function (){
	output = 'Eat cookies function';
	console.log('Chocolate cookies');
};

methods.node = function (){
	output = 'Node function';
	console.log('NodeJS is awsome');
};

exports.data = methods;
exports.output = output;