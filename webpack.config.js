const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts", ".spec.ts"],
    modules: ["src", "node_modules"],
  },
};
