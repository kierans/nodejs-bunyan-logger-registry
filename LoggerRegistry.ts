import Logger = require("./Logger");

export interface LoggerFactory {
  (name: string): Logger
}

export class LoggerRegistry {
  private static loggers: {
    [name: string]: Logger
  } = {};

  private static factory: LoggerFactory;

  static logger(name: string): Logger {
    if (!LoggerRegistry.loggers[name]) {
      LoggerRegistry.loggers[name] = new DelegateLogger(name);

      if (LoggerRegistry.factory) {
        (<DelegateLogger> LoggerRegistry.loggers[name]).delegate = LoggerRegistry.factory(name);
      }
    }

    return LoggerRegistry.loggers[name];
  }

  static configure(factory: LoggerFactory) {
    LoggerRegistry.factory = factory;

    for (var name in LoggerRegistry.loggers) {
      //noinspection JSUnfilteredForInLoop
      (<DelegateLogger> LoggerRegistry.loggers[name]).delegate = factory(name);
    }
  }
}

class DelegateLogger implements Logger {
  private name: string;

  public delegate: Logger;

  constructor(name: string) {
    this.name = name;
  }

  fatal(...message: any[]): any {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");
    }
    else {
      return this.delegate.fatal.apply(this.delegate, message);
    }
  }

  error(...message: any[]): any {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");
    }
    else {
      return this.delegate.error.apply(this.delegate, message);
    }
  }

  warn(...message: any[]): any {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");
    }
    else {
      return this.delegate.warn.apply(this.delegate, message);
    }
  }

  info(...message: any[]): any {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");
    }
    else {
      return this.delegate.info.apply(this.delegate, message);
    }
  }

  debug(...message: any[]): any {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");
    }
    else {
      return this.delegate.debug.apply(this.delegate, message);
    }
  }

  trace(...message: any[]): any {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");
    }
    else {
      return this.delegate.trace.apply(this.delegate, message);
    }
  }

  child(...options: any[]): Logger {
    if (!this.delegate) {
      console.warn("Logger delegate '" + this.name + "' not configured");

      return null;
    }
    else {
      return this.delegate.child.apply(this.delegate);
    }
  }
}