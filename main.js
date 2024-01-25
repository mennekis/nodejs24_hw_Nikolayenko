const logger = require("./utils/logger")("main");

const { dbId } = require("./db");
const { auth } = require("./auth");

logger.info("working OK", "test arg", dbId, `auth status:${auth}`);
logger.warn({ contextId: 42, title: "something wrong might happen" });
