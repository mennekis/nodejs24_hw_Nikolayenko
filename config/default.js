const colorMode = process.env.COLORS_ENABLED === 1 ? 1 : 0;
module.exports = {
   logLevel: "warn",
   colorMode,
};
