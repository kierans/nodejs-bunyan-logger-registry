nodejs-bunyan-logger-registry
=============================

A registry for the creating and consumption of Bunyan loggers

## Usage

```bash
$ npm install @kierans777/nodejs-bunyan-logger-registry --save
```

```js
var logger = require("@kierans777/nodejs-bunyan-logger-registry");
var bunyan = require("bunyan");

var level = "debug";

logger.configure(function(name) {
  return bunyan.createLogger({ name: name, level: level });
});
```

```js
var logger = require("@kierans777/nodejs-bunyan-logger-registry").logger(name);

logger.info("Hi");
```
