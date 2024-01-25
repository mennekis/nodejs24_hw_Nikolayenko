const logger = require("./utils/logger")('main');

const { dbId } = require('./db');

logger.info('working OK', 'test arg', dbId);
logger.warn({ contextId: 42, title: 'something wrong might happen' });
