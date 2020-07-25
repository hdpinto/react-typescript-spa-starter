/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = (storybook) => [
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: "babel-loader",
      },
    ],
    /*
    loaders: ["awesome-typescript-loader?transpileOnly=true", "babel-loader"],
    */
    exclude: /(node_modules)/,
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
  {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader",
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img",
        },
      },
    ],
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
        },
      },
    ],
  },
  {
    test: /\.s?css$/,
    use: (storybook
      ? [
          {
            loader: "style-loader",
          },
        ]
      : [
          {
            loader: MiniCssExtractPlugin.loader,
          },
        ]
    ).concat([
      {
        loader: "css-loader",
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [autoprefixer],
        },
      },
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: "node_modules/bulma/sass/",
          },
        },
      },
    ]),
  },
];
