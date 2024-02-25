// const http = require("http");
// const path = require("path");
// const logger = require("./utils/logger")("server");

// const server = http.createServer();
// const port = 3232;

// server.listen(port);
// // server.on("listening", () => console.log(`start server on:${port} port`));

// server.on("request", async (req, resp) => {
//    const logMessage = `${req.method} ${req.url} `;
//    if (req.method === "GET" && req.url === "/healthcheck") {
//       resp.writeHead(200, { "Content-Type": "text/plain" });
//       logger.info(logMessage + `${resp.statusCode}`);
//       resp.end("healthcheck passed");
//    } else {
//       resp.writeHead(404, { "Content-Type": "text/plain" });
//       logger.warn(logMessage + `${resp.statusCode}`);
//       resp.end("Not Found");
//    }
// });
