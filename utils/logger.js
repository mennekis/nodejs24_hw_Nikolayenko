const colors = require("colors/safe");
const { logLevel, colorMode } = require("config");

function logger(initialName) {
   console.log(colorMode, logLevel);

   /* 1. на етапі ініціалізації логгера, один раз перевіряємо чи включені у нас кольори в конфігу.
      Якщо виключені - виключаємо цей фунцкіонал в коді. Достатньо це зробити саме тут
      і більше не чипати методи пакета `colors`
   */
  if (colorMode == "0") {
   colors.disable(); // по дефолту в режимі `/safe` кольори активні
  }

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
