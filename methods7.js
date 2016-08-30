// Different ways to export the module.

/*What Node internally does*/
module.exports = exports = {};


/*Way 1*/
var methods = module.exports = {};
methods.node = function (){	
	console.log('Way 1 - NodeJS is awsome !!');
};

/*Way 2*/
module.exports.name = function () {
	console.log('Way 2 - NodeJS is awsome !!');
};

/*Way 3*/
module.exports = {
	greet: function () {
		console.log('Way 3 - NodeJS is awsome !!');
	}
};

/*Way 4*/
this.defaultVal = 101; // Variable with this keyword will be exported by default.


