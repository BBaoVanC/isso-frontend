const path = require("path");

module.exports = {
  entry: "./src/embed.ts",
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
    extensions: [".tsx", ".ts", ".js"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
    ],
  },
  output: {
    filename: "embed.dev.js",
    path: path.resolve(__dirname, "dist"),
  },
};
