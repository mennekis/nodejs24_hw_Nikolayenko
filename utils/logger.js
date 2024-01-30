function logger(initialName) {
   colors = require("colors/safe");
   return {
      info: (...args) =>
         console.info(colors.bgGreen(initialName + ":"), ...args),
      warn: (...args) =>
         console.warn(colors.bgYellow(initialName + ":"), ...args),
      error: (...args) =>
         console.error(colors.bgRed(initialName + ":"), ...args),
   };
}

module.exports = logger;
