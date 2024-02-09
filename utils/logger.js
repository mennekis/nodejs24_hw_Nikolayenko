const fs = require("fs");
const path = require("path");
const colors = require("colors/safe");
const { logLevel, colorMode } = require("config");

function getCurrentDateTime() {
   return new Date().toISOString();
}

function logger(initialName) {
   console.log(colorMode, logLevel);

   const logsDir = path.join(__dirname, "logs");
   try {
      if (!fs.existsSync(logsDir)) {
         fs.mkdirSync(logsDir);
      }
   } catch (error) {
      console.error(`Error creating logs directory: ${error.message}`);
      throw error;
   }
   const infoStream = fs.createWriteStream(path.join(logsDir, "info.log"), {
      flags: "a",
   });
   const errorStream = fs.createWriteStream(path.join(logsDir, "errors.log"), {
      flags: "a",
   });

   process.on("beforeExit", () => {
      infoStream.end();
      errorStream.end();
   });

   if (colorMode == "0") {
      colors.disable();
   }

   return {
      info: (...args) => {
         if (logLevel === "info") {
            const logMessage = `${getCurrentDateTime()} [INFO] ${initialName}: ${args.join(
               " "
            )}\n`;
            console.info(colors.bgGreen(`${initialName}:`), ...args);
            infoStream.write(logMessage);
         }
      },
      warn: (...args) => {
         if (logLevel !== "error") {
            const logMessage = `${getCurrentDateTime()} [WARN] ${initialName}: ${args
               .map(JSON.stringify)
               .join(" ")}\n`;
            console.warn(colors.bgYellow(`${initialName}:`), ...args);
            errorStream.write(logMessage);
         }
      },
      error: (...args) => {
         const logMessage = `${getCurrentDateTime()} [ERROR] ${initialName}: ${args.join(
            " "
         )}\n`;
         console.error(colors.bgRed(`${initialName}:`), ...args);
         errorStream.write(logMessage);
      },
   };
}

module.exports = logger;
