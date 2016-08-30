function constFunction () {

	var nameHolder;

	return {

		name: function (fName, lName) {
			nameHolder = fName + " " + lName;
		},

		consoleLog: function () {
			console.log(nameHolder);
		}
		
	};
};

module.exports = constFunction;