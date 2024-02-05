const fs = require("fs").promises;
const path = require("path");
const logger = require("../utils/logger")("fileSync");

async function copyFiles(srcDir, destDir) {
   try {
      const files = await fs.readdir(srcDir);

      for (const file of files) {
         const srcPath = path.join(srcDir, file);
         const destPath = path.join(destDir, file);

         const stat = await fs.stat(srcPath);

         if (stat.isFile()) {
            await copyFile(srcPath, destPath);
         } else if (stat.isDirectory()) {
            await fs.mkdir(destPath, { recursive: true });
            await copyFiles(srcPath, destPath);
         }
      }
   } catch (error) {
      logger.error(`Error copying files: ${error.message}`);
   }
}

async function copyFile(src, dest) {
   try {
      await fs.copyFile(src, dest);
      logger.info(`Copied file from ${src} to ${dest}`);
   } catch (error) {
      if (error.code === "EEXIST") {
         logger.warn(
            `File ${dest} already exists in the target directory. Skipped.`
         );
      } else {
         logger.error(
            `Error copying file from ${src} to ${dest}: ${error.message}`
         );
      }
   }
}

async function start() {
   const sourceDir = path.join(__dirname, "source"); // Підставте свої шляхи
   const targetDir = path.join(__dirname, "target");

   try {
      await fs.mkdir(targetDir, { recursive: true });
      await copyFiles(sourceDir, targetDir);
      logger.info("File synchronization completed successfully.");
   } catch (error) {
      logger.error(`Error during file synchronization: ${error.message}`);
   }
}

module.exports = { start };
