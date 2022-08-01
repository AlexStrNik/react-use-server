const path = require("path");

module.exports = {
  mode: "development" === process.env.NODE_ENV ? "development" : "production",
  entry: ["./server.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                },
              ],
            ],
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
