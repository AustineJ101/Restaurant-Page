// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // Development mode
  devtool: "inline-source-map", // Better for debugging
  devServer: {
    static: "./dist", // Serve files from 'dist'
    watchFiles: ["./src/template.html"], // Watch HTML changes
    open: true, // Automatically open the browser
    port: 3000, // Specify a custom port
  },
});
