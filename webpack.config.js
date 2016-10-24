const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
  hash: true,
});

const ExtractTextPluginConfig = new ExtractTextPlugin(
  "index.css",
  { allChunks: true }
);

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: "./dist",
    filename: "index.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass"),
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
  ],
};
