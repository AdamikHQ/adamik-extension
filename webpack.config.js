const path = require("path");

module.exports = {
  entry: "./src/contentScript.js", // Path to your content script
  output: {
    filename: "contentScript.bundle.js", // Output filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile modern JavaScript/React
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  mode: "production", // Ensures minification and optimization
};
