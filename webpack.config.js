const path = require('path');
/** @type {import('webpack').Configuration & {devServer?: import('webpack-dev-server').Configuration}} */
const config = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'window',
  },
  devServer: {
    static: "./dist",
    liveReload: true,
  },
};

module.exports = config;
