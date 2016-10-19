const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "index.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
};
