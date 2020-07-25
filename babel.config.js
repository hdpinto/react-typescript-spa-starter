/* eslint-disable no-var */
module.exports = function (api) {
  var isTest = api.env("test");
  var config = {
    presets: [
      ["@babel/preset-env", { targets: "cover 99.5% in CA" }],
      "@babel/preset-react",
      ["@babel/preset-typescript"],
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: false,
        },
      ],
    ],
    sourceType: "unambiguous",
  };

  // We only wants these options outside of a test scenario
  if (!isTest) {
    config = Object.assign(config, {
      ignore: ["node_modules"],
      sourceMaps: "inline",
    });
  }

  return config;
};
