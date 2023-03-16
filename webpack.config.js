const path = require("path");
const minifyPlugin = require("@rspack/plugin-minify");

module.exports = {
  target: ["web", "es5"],
  externals: {},
  mode: "production",
  entry: {
    vendor: path.join(process.cwd(), "./index.js"),
  },
  output: {
    path: path.join(process.cwd(), "./dist"),
    filename: "[name].js",
    libraryTarget: "umd",
  },
  devtool: false,
  optimization: {
    minimizer: [new minifyPlugin({ minifier: "terser" })],
  },
};
