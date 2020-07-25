/* eslint-disable @typescript-eslint/no-var-requires */
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (outputPath) => () => ({
  mode: "production",
  output: {
    path: outputPath,
    filename: "js/[name].bundle.js",
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
});
