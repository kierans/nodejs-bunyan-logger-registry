import LoggerRegistry = require("./LoggerRegistry");
import LoggerFactory = LoggerRegistry.LoggerFactory;
import Logger = require("./Logger");
import DoNothingLogger = require("./DoNothingLogger");

module NodejsBunyanLoggerRegistry {
  export function logger(name: string): Logger { return LoggerRegistry.LoggerRegistry.logger(name); }
  export function configure(factory: LoggerFactory): void { LoggerRegistry.LoggerRegistry.configure(factory); }
  export function doNothingLogger(): DoNothingLogger { return new DoNothingLogger(); }
}

export = NodejsBunyanLoggerRegistry;