module.exports = (outputPath) => () => ({
  output: {
    path: outputPath,
    filename: "js/[name].bundle.js",
  },
  mode: "development",
  devtool: "source-map",
});
