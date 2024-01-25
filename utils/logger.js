function logger(initialName) {
   return {
      info: (...args) => console.info(initialName, ...args),
      warn: (...args) => console.warn(initialName, ...args),
      error: (...args) => console.error(initialName, ...args),
   };
}

module.exports = logger;
