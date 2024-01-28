function logger(initialName) {
   const colors = require("colors");
   return {
      info: (...args) => console.info("#_ " + initialName.blue, ...args),
      warn: (...args) => console.warn("*_ " + initialName.yellow, ...args),
      error: (...args) => console.error("!_ " + initialName.red, ...args),
   };
}

module.exports = logger;
