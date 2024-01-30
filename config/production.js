const logLevel = process.env.NODE_ENV === "production" ? "error" : "info";
const colorMode = process.env.FORCE_COLOR === "1" ? "COLORS_ENABLED" : false;

module.exports = {
   logLevel: "error",
   colorMode: 0,
};
