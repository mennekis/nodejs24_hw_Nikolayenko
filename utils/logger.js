const colorMode = process.env.COLORS_ENABLED === "1";
const logLevel = process.env.NODE_ENV === "prod" ? "error" : "info";
colors = require("colors/safe");

function logger(initialName) {
   // ? make the checking console.log(colorMode, logLevel);
   if (colorMode) {
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
