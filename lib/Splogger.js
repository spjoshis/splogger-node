'use strict';

var fs = require('fs');
var util = require('util');

var Splogger = function(options) {
	this.options = options;
};

/**
 * Function is used to log error
 */
Splogger.prototype.error = function (errorText, errorFile) {

	errorFile = (typeof errorFile  !== 'undefined' && typeof errorFile  != '') ? errorFile : './logs/error-log.txt';
  	var logFile = fs.createWriteStream(errorFile, { flags: 'a' });
	var logStdout = process.stdout;
	if (this.options.logFile === true) {
		const currentTime = new Date().toISOString();
		logFile.write(util.format.apply(util, ['%s | Error: ', currentTime]) + '\n');
		logFile.write(util.format.apply(null, arguments) + '\n');
	}

	if (this.options.logConsole === true) {
		logStdout.write(util.format.apply(null, arguments) + '\n');
	}
};

/**
 * logs the data for debugging purpose
 */
Splogger.prototype.log = function (logText, logFile) {
	logFile = (typeof logFile  !== 'undefined' && typeof logFile  != '') ? logFile : './logs/log.txt';
  	var logFile = fs.createWriteStream(logFile, { flags: 'a' });
	var logStdout = process.stdout;
	if (this.options.logFile === true) {
		const currentTime = new Date().toISOString();
		logFile.write(util.format.apply(util, ['\n %s | : ', currentTime]) + '\n');
		logFile.write(util.format.apply("Log: %s", [logText]) + '\n');
	}

	if (this.options.logConsole === true) {
		logStdout.write(util.format.apply(null, arguments) + '\n');
	}
};

module.exports = Splogger;
