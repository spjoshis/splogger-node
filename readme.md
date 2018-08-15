# splogger-node

A node.js logger library. It will log the errors and access related inforation in console as well as file.

## Supported versions

This library works with node versions 3, 6 and above.

## Usage

Include package using `require()` function
```
var splogger = require('splogger-node');
var pgLog = new splogger({
	logFile: true, // true or false
	logConsole: true // true or false
});
```

## Functions
- error()
 
Used to log error in console as well as files

Eg. `pgLog.error(err);`

- log()

Used to log debug in console as well as files

Eg. `pgLog.log('test', './debug.txt'');`