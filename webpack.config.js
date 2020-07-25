/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require("webpack");
const path = require("path");

const { merge } = require("webpack-merge");
const {
  TsConfigPathsPlugin,
  CheckerPlugin,
} = require("awesome-typescript-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");

const rules = require("./webpack-rules");
const modeConfig = ({ mode, outputPath }) =>
  require(`./webpack.${mode}.config`)(outputPath)(mode);

const defaultOutputPath = path.resolve(__dirname, "./dist");

module.exports = ({ mode, storybook, outputPath = defaultOutputPath }) => {
  return merge(
    {
      entry: {
        app: "./src/index.tsx",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        plugins: [new TsConfigPathsPlugin()],
      },
      module: {
        rules: [...rules(storybook)],
      },
      plugins: [
        new CheckerPlugin(),
        new MiniCssExtractPlugin({
          filename: "css/[name].css",
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new WebpackBar(),
      ],
    },
    modeConfig({ mode, outputPath }),
    mode === "development"
      ? {
          devServer: {
            contentBase: path.join(__dirname, "./webroot"),
            compress: true,
            port: 9001,
          },
        }
      : {},
    { mode }
  );
};
