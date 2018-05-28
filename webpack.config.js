const path = require("path");

module.exports = {
  // The main file for our js
  entry: "./src/index.js",
  // The output files
  output: {
    // Where we want to put our output files
    path: path.resolve(__dirname, "dist"),
    // The name for our main file
    filename: "bundle.js"
  }
};

// yarn run build