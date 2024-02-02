const colors = require("colors/safe");
const { logLevel, colorMode } = require("config");

function createLogMethod(level, color, initialName) {
   return (...args) => {
      if (logLevel !== "error" && (logLevel !== "warn" || level !== "info")) {
         console[level](color(`${initialName}:`), ...args);
      }
   };
}

function logger(initialName) {
   const colorFunc = colorMode ? colors.bgRed : (str) => str;

   return {
      info: createLogMethod("info", colorFunc, initialName),
      warn: createLogMethod("warn", colorFunc, initialName),
      error: createLogMethod("error", colors.bgRed, initialName),
   };
}

module.exports = logger;
