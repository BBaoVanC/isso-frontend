const webpack = require("webpack");
const path = require("path");

const dev = {
  entry: "./src/embed.tsx",
  name: "dev",
  mode: "development",
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
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
    ],
  },
  output: {
    filename: "embed.dev.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
};

const production = Object.assign({}, dev, {
  name: "prod",
  mode: "production",
  output: Object.assign({}, dev.output, {
    filename: "embed.min.js",
  }),
  devtool: false,
  optimization: {
    usedExports: true,
  },
});

module.exports = [dev, production];
