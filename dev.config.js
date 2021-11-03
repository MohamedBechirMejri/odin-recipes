const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "recipes/lasagna.html",
      template: "src/recipes/lasagna.html",
    }),
    new HtmlWebpackPlugin({
      filename: "recipes/pizza.html",
      template: "src/recipes/pizza.html",
    }),
    new HtmlWebpackPlugin({
      filename: "recipes/burger.html",
      template: "src/recipes/burger.html",
    }),
    new DashboardPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
