const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    assetModuleFilename: "assets/[name].[hash:8][ext]",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20000,
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "defer",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  cache: { type: "filesystem" },
};
