const logLevel = process.env.NODE_ENV === "prod" ? "error" : "info";
const colorMode = process.env.COLORS_ENABLED;

module.exports = {
   logLevel,
   colorMode,
};
