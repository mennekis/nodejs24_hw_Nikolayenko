// ??В ньому має бути реалізований логгер по типу того що я показував на занятті, але з трьома методами -
// todo:  info, warn, error.
//Логгер має працювати таким чином:
// ??main.js (в корні репозиторія):
// todo const logger = require('./utils/logger')('main');

// logger.info('the script is running!');
// Що має вивестись в терміналі:

// *> node ./main.js
// *main: the script is running!
// todo Створити PR із бранчі з домашкою в main, пересвідчитись що я доданий в колаборанти в репозиторій

// !Прошу PR самим не мерджати, залиште це мені -  бо інакше якщо в мене є зауваження або пропозиції по коду, що мені з ними робити? ))
function info() {
   console.log("main: the script is running!");
}
function warn() {
   console.log("Warning!!");
}
function error() {
   console.log("WE HAVE AN ERROR!");
}

module.exports = function logger(initialName) {
   return {
      info: (...args) => console.info(initialName, ...args),
      warn: (...args) => console.warn(initialName, ...args),
      error: (...args) => console.error(initialName, ...args)
   }
};

