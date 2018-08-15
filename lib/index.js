'use strict';

var Splogger = require('./Splogger');

// Shorthand to automatically create a RestClient
var initializer = function(options) {
	return new Splogger(options);
};

initializer.Splogger = Splogger;

// Public module interface is a function
module.exports = initializer;