require("dotenv").config();

const config = require("config");

const fileSync = require("./file_sync");
console.log(config);

const logger = require("./utils/logger")("main");

fileSync.start();
// const { dbId } = require("./db");
// const { auth } = require("./auth");

// logger.info("working OK", "test arg", dbId, `auth status:${auth}`);
// logger.warn({ contextId: 42, title: "something wrong might happen" });
// logger.error("testing error");
// logger.info("The script is running");
