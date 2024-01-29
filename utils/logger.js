function logger(initialName) {
   const colors = require("colors");
   return {
      info: (...args) => console.info((initialName + ":").blue, ...args),
      warn: (...args) => console.warn((initialName + ":").yellow, ...args),
      error: (...args) => console.error((initialName + ":").red, ...args),
   };
}

module.exports = logger;
