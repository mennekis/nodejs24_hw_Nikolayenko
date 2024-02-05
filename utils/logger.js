const colors = require("colors/safe");
const { logLevel, colorMode } = require("config");

function logger(initialName) {
   // console.log(colorMode, logLevel);

   if (colorMode !== "0") {
      return {
         info: (...args) => {
            if (logLevel !== "error" && logLevel !== "warn") {
               console.info(colors.bgGreen(`${initialName}:`), ...args);
            }
         },
         warn: (...args) => {
            if (logLevel !== "error") {
               console.warn(colors.bgYellow(`${initialName}:`), ...args);
            }
         },
         error: (...args) =>
            console.error(colors.bgRed(`${initialName}:`), ...args),
      };
   } else {
      return {
         info: (...args) => {
            if (logLevel !== "error" && logLevel !== "warn") {
               console.info(`${initialName}:`, ...args);
            }
         },
         warn: (...args) => {
            if (logLevel !== "error") {
               console.warn(`${initialName}:`, ...args);
            }
         },
         error: (...args) => console.error(`${initialName}:`, ...args),
      };
   }
}

module.exports = logger;
