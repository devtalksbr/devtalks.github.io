const path = require("path");

module.exports = {
  mode: "production",
  watch: true,
  entry: {
    main: path.join(__dirname, "src/js", "main"),
    home: path.join(__dirname, "src/js", "home"),
    single: path.join(__dirname, "src/js", "single")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "assets/js"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components"),
        ],
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
};