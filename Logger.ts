interface Logger {
  fatal(...message: any[]): any
  error(...message: any[]): any
  warn(...message: any[]): any
  info(...message: any[]): any
  debug(...message: any[]): any
  trace(...message: any[]): any
  child(...options: any[]): Logger
}

export = Logger;