var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "jquery.twentytwenty": "./src/js/jquery.twentytwenty.js",
    "jquery.twentytwenty.min": "./src/js/jquery.twentytwenty.js",
    "angular-twentytwenty": "./src/js/angular-twentytwenty.js",
    "angular-twentytwenty.min": "./src/js/angular-twentytwenty.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
  devtool: "source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        loaders: ["jscs-loader", "jshint-loader"]
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loaders: ["html-loader"]
      },
      {
        test: /\.scss$/, 
        loaders: [
          "style-loader",
          "css-loader?sourceMap",
          "autoprefixer-loader?browsers=last 2 version",
          "sass-loader?sourceMap"
        ]
      }
    ]
  }
};